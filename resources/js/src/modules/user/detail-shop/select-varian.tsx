import { useEffect, useMemo, useState } from "react";
import { IVariantList } from "../../../interfaces/variant";
import { twMerge } from "tailwind-merge";
import { useSelectedProductVarian } from "../../../store/useSelectedProductVarian";

export default function SelectVarian({ varians }: { varians: IVariantList }) {
    const selectedVarian = useSelectedProductVarian((v) => v);
    const [selected, setSelected] = useState({ size: "", color: "" });
    const sizes = useMemo(
        () => Array.from(new Set(varians.map((v) => v.ukuran.toUpperCase()))),
        [varians]
    );
    const colors = useMemo(
        () => Array.from(new Set(varians.map((v) => v.warna.toUpperCase()))),
        [varians]
    );

    const onClickSize = (size: string) => () => {
        if (
            !varians.some(
                (v) =>
                    v.ukuran.toUpperCase() === size &&
                    v.warna.toUpperCase() === selected.color
            )
        )
            return;
        setSelected((s) => ({ ...s, size }));
        if (selected.color) {
            const varian = varians.find(
                (v) =>
                    v.ukuran.toUpperCase() === size &&
                    v.warna.toUpperCase() === selected.color
            );
            if (varian) {
                useSelectedProductVarian.setState({ ...varian });
            }
        }
    };

    const onClickColor = (color: string) => () => {
        if (
            !varians.some(
                (v) =>
                    v.ukuran.toUpperCase() === selected.size &&
                    v.warna.toUpperCase() === color
            )
        )
            return;
        setSelected((s) => ({ ...s, color }));
        if (selected.size) {
            const varian = varians.find(
                (v) =>
                    v.ukuran.toUpperCase() === selected.size &&
                    v.warna.toUpperCase() === color
            );
            if (varian) {
                useSelectedProductVarian.setState({ ...varian });
            }
        }
    };

    useEffect(() => {
        if (selectedVarian) {
            setSelected({
                size: selectedVarian.ukuran.toUpperCase(),
                color: selectedVarian.warna.toUpperCase(),
            });
        }
    }, [selectedVarian]);

    return (
        <>
            <div className="">
                <h6 className="text-slate-700/75">Warna</h6>
                <div className="w-full mt-1 flex flex-wrap justify-left gap-2">
                    {colors.map((v, i) => (
                        <button
                            key={i}
                            onClick={onClickColor(v)}
                            className={twMerge(
                                "text-xs whitespace-nowrap p-2 md:text-sm lg:text-md lg:py-1 rounded-md  px-4  ",
                                selected.color === v
                                    ? "border-sky-400/75 border-2 bg-sky-500 text-white"
                                    : "text-slate-500 border-2 border-slate-400"
                            )}
                        >
                            {v}
                        </button>
                    ))}
                </div>
            </div>
            <div className="py-4">
                <h6 className="text-slate-700/75">Ukuran</h6>
                <div className="w-full mt-1 flex flex-wrap justify-left gap-2">
                    {sizes.map((v, i) => (
                        <button
                            key={i}
                            onClick={onClickSize(v)}
                            className={twMerge(
                                "text-xs whitespace-nowrap p-2 md:text-sm lg:text-md lg:py-1 rounded-md  px-4  ",
                                selected.size === v
                                    ? " border-sky-400/75 bg-sky-500 text-white"
                                    : "text-slate-500 border-2 border-slate-400"
                            )}
                        >
                            {v}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
