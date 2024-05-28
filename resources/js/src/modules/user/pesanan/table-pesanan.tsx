import { GoHomeFill } from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiSolidDollarCircle } from "react-icons/bi";
import { PiWarningCircleFill } from "react-icons/pi";
import { useNavigate, useSearch } from "@tanstack/react-router";
import Pagination from "../../../components/pagination";
import { pesananRoute } from "../../../routes/user";
import { P, match } from "ts-pattern";
import { IOngkirListWithPesanan } from "../../../interfaces/ongkir";
import { twMerge } from "tailwind-merge";
import ModalMetodeBayar from "./modal-metode-bayar";
import { useState } from "react";
import { convertISODateToCustomFormat } from "../../../utils/toast";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function TablePesanan({
    data,
    nextUrl,
}: {
    nextUrl?: string;
    data: IOngkirListWithPesanan;
}) {
    const navigate = useNavigate({ from: pesananRoute.fullPath });
    const search = useSearch({ strict: false });
    const [show, setShow] = useState(null);

    const handleShow = (index) => {
        setShow(index);
    };

    return (
        <>
            <div className="mt-10 flex flex-col gap-10">
                {/* percobaan */}
                <div className="rounded-md overflow-hidden border border-black/10 shadow-xs">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-zinc-100">
                                <th className="p-4 whitespace-nowrap text-left">
                                    Tanggal
                                </th>
                                <th className="p-4 whitespace-nowrap text-left max-w-46">
                                    Invoice
                                </th>
                                <th className="p-4 whitespace-nowrap text-left">
                                    Produk
                                </th>
                                <th className="p-4 whitespace-nowrap text-left">
                                    Total
                                </th>
                                <th className="p-4 whitespace-nowrap text-left">
                                    Status
                                </th>
                                <th className="p-4 whitespace-nowrap text-left">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(
                                (v, index) => (
                                    console.log(v, index),
                                    (
                                        <tr
                                            key={v.id}
                                            className="align-top border border-black/10"
                                        >
                                            <td className="border-r border-black/10 p-2">
                                                {convertISODateToCustomFormat(
                                                    v.created_at
                                                )}
                                            </td>
                                            <td className="border-r border-black/10 p-2 max-w-46">
                                                <p className="break-words">
                                                    {v.pesanan_grup}
                                                </p>
                                            </td>
                                            <td className="border-r border-black/10 p-2">
                                                {Array.isArray(v?.pesanan) &&
                                                    v.pesanan.map(
                                                        (p, index) => (
                                                            <div>
                                                                {
                                                                    p?.varian
                                                                        ?.produk
                                                                        ?.nama
                                                                }
                                                            </div>
                                                        )
                                                    )}
                                            </td>
                                            <td className="p-2 border-r border-black/10">
                                                <p>
                                                    {Array.isArray(v?.pesanan)
                                                        ? `Rp. ${(
                                                              (v?.ongkir ?? 0) +
                                                              v.pesanan.reduce(
                                                                  (a, c) =>
                                                                      (a +=
                                                                          c.total),
                                                                  0
                                                              )
                                                          ).toLocaleString()}`
                                                        : "-"}
                                                </p>
                                            </td>
                                            <td className="p-2 border-r border-black/10">
                                                <p
                                                    className={twMerge(
                                                        "text-sm font-semibold",
                                                        match(
                                                            v.pesanan[0].status
                                                        )
                                                            .with(
                                                                "belum-bayar",
                                                                () =>
                                                                    "text-orange-500"
                                                            )
                                                            .with(
                                                                "dibayar",
                                                                () =>
                                                                    "text-green-500"
                                                            )
                                                            .otherwise(
                                                                () =>
                                                                    "text-red-500"
                                                            )
                                                    )}
                                                >
                                                    {v.pesanan[0].status}
                                                </p>
                                            </td>
                                            <td className="p-2">
                                                <div className="cursor-pointer">
                                                    <button
                                                        className="hover:text-slate-950 font-black"
                                                        onClick={() =>
                                                            handleShow(index)
                                                        }
                                                    >
                                                        <IoIosInformationCircleOutline
                                                            size={20}
                                                        />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                {/* kodingan asli */}

                <div
                    className="rounded-md overflow-hidden border border-black/10
                shadow-xs"
                >
                    {data.map((v, index) => (
                        <div key={v.id}>
                            {show === index && (
                                <div>
                                    {/* percobaan tampil */}
                                    {match([
                                        v.is_confirmed_by_admin,
                                        v.resi,
                                        v.telah_sampai,
                                        v.pesanan?.[0].status,
                                    ])
                                        .with([0, null, 0, P.string], () => (
                                            <div className="w-full p-5 bg-red-400 text-white flex items-center gap-5">
                                                <PiWarningCircleFill
                                                    size={20}
                                                />
                                                <span>
                                                    Menunggu konfirmasi admin
                                                </span>
                                            </div>
                                        ))
                                        .with(
                                            [1, null, 0, "belum-bayar"],
                                            () => (
                                                <div className="w-full p-5 bg-orange-400 text-white flex items-center gap-5">
                                                    <BiSolidDollarCircle
                                                        size={20}
                                                    />
                                                    <span>
                                                        Menunggu pembayaran
                                                    </span>
                                                </div>
                                            )
                                        )
                                        .with([1, null, 0, "failed"], () => (
                                            <div className="w-full p-5 bg-red-400 text-white flex items-center gap-5">
                                                <BiSolidDollarCircle
                                                    size={20}
                                                />
                                                <span>Pembayaran gagal.</span>
                                            </div>
                                        ))
                                        .with(
                                            [1, P.string, 0, "dibayar"],
                                            () => (
                                                <div className="w-full p-5 bg-green-400 text-white flex items-center gap-5">
                                                    <AiFillInfoCircle
                                                        size={20}
                                                    />
                                                    <span>
                                                        Telah dibayar, pesananmu
                                                        dalam perjalanan
                                                    </span>
                                                </div>
                                            )
                                        )
                                        .with(
                                            [1, P.string, 1, "dibayar"],
                                            () => (
                                                <div className="w-full p-5 bg-blue-400 text-white flex items-center gap-5">
                                                    <GoHomeFill size={20} />
                                                    <span>
                                                        Pesanan telah sampai,
                                                        terimakasih telah
                                                        berbelanja.
                                                    </span>
                                                </div>
                                            )
                                        )
                                        .otherwise(() => null)}
                                    {/* modal detail */}
                                    <div className="p-5">
                                        <div className="flex justify-between items-start flex-col sm:flex-row">
                                            {match([
                                                v?.resi,
                                                v.is_confirmed_by_admin,
                                                v.pesanan?.[0].status,
                                            ])
                                                .with(
                                                    [null, 1, "belum-bayar"],
                                                    () => (
                                                        <ModalMetodeBayar
                                                            pesananGrup={
                                                                v.pesanan_grup
                                                            }
                                                        />
                                                    )
                                                )
                                                .with(
                                                    [null, 1, "dibayar"],
                                                    () => (
                                                        <a
                                                            href={`/payment-status?pesanan_grup=${v.pesanan_grup}`}
                                                            className="bg-sky-500 text-white px-3 py-2 rounded-md shadow-md text-sm hover:shadow-none transition-all"
                                                        >
                                                            Status Pembayaran
                                                        </a>
                                                    )
                                                )
                                                .otherwise(() => null)}
                                        </div>

                                        {/* detail pesanan */}
                                        <div className="overflow-x-auto mt-5">
                                            <div className="align-middle">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td className="pt-3">
                                                                <p className="text-black">
                                                                    Invoice
                                                                </p>
                                                            </td>
                                                            <td className="pt-3 pl-5 flex gap-2">
                                                                <p>:</p>
                                                                <p className="text-black">
                                                                    {
                                                                        v.pesanan_grup
                                                                    }
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pt-3">
                                                                <p className="text-black">
                                                                    Tanggal
                                                                </p>
                                                            </td>
                                                            <td className="pt-3 pl-5 flex gap-2">
                                                                <p>:</p>
                                                                <p className="text-black">
                                                                    {convertISODateToCustomFormat(
                                                                        v.created_at
                                                                    )}
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pt-3">
                                                                <p className="text-black">
                                                                    Ekspedisi
                                                                </p>
                                                            </td>
                                                            <td className="pt-3 pl-5 flex gap-2">
                                                                <p>:</p>
                                                                <p className="text-black">
                                                                    {
                                                                        v.ekspedisi
                                                                    }
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pt-3">
                                                                <p className="text-black">
                                                                    Resi
                                                                </p>
                                                            </td>
                                                            <td className="pt-3 pl-5 flex gap-2">
                                                                <p>:</p>
                                                                <p className="text-black">
                                                                    {v.resi}
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pt-3">
                                                                <p className="text-black">
                                                                    Ongkir
                                                                </p>
                                                            </td>
                                                            <td className="pt-3 pl-5 flex gap-2">
                                                                <p>:</p>
                                                                <p className="text-black">{`Rp. ${v.ongkir.toLocaleString()}`}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="pt-8">
                                                                <p className="text-black font-black">
                                                                    TOTAL
                                                                </p>
                                                            </td>
                                                            <td className="pt-8 pl-5">
                                                                <p className="text-black font-black">
                                                                    {Array.isArray(
                                                                        v?.pesanan
                                                                    )
                                                                        ? `Rp. ${(
                                                                              (v?.ongkir ??
                                                                                  0) +
                                                                              v.pesanan.reduce(
                                                                                  (
                                                                                      a,
                                                                                      c
                                                                                  ) =>
                                                                                      (a +=
                                                                                          c.total),
                                                                                  0
                                                                              )
                                                                          ).toLocaleString()}`
                                                                        : "-"}
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* tabel list */}
                                    <div className="p-5">
                                        <div className="overflow-x-auto">
                                            <div>
                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="bg-zinc-100">
                                                            <th className="p-4 whitespace-nowrap text-left">
                                                                Produk
                                                            </th>
                                                            <th className="p-4 whitespace-nowrap text-left">
                                                                Kuantitas
                                                            </th>
                                                            <th className="p-4 whitespace-nowrap text-left">
                                                                Diskon
                                                            </th>
                                                            <th className="p-4 whitespace-nowrap text-left">
                                                                Total
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Array.isArray(
                                                            v?.pesanan
                                                        ) &&
                                                            v.pesanan.map(
                                                                (p) => (
                                                                    <tr
                                                                        key={
                                                                            p.id
                                                                        }
                                                                        className="align-top"
                                                                    >
                                                                        <td className="p-4 whitespace-nowrap text-left">
                                                                            <div className="flex gap-3 items-start">
                                                                                {p
                                                                                    ?.varian
                                                                                    ?.gambar
                                                                                    ?.nama && (
                                                                                    <img
                                                                                        src={`/api/uploaded/${p?.varian?.gambar?.nama}`}
                                                                                        className="max-w-[100px]"
                                                                                    />
                                                                                )}
                                                                                <div className="flex flex-col gap-1">
                                                                                    <p className="capitalize font-semibold text-sm text-black">
                                                                                        {
                                                                                            p
                                                                                                ?.varian
                                                                                                ?.produk
                                                                                                ?.nama
                                                                                        }
                                                                                    </p>
                                                                                    <p className="text-xs text-zinc-400">
                                                                                        {
                                                                                            p
                                                                                                ?.varian
                                                                                                ?.warna
                                                                                        }

                                                                                        ,{" "}
                                                                                        {
                                                                                            p
                                                                                                ?.varian
                                                                                                ?.ukuran
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="p-4 whitespace-nowrap text-left">
                                                                            <p className="text-black">
                                                                                {
                                                                                    p.qty
                                                                                }
                                                                            </p>
                                                                        </td>
                                                                        <td className="p-4 whitespace-nowrap text-left">
                                                                            <p className="text-black">
                                                                                {!p?.diskon
                                                                                    ? "-"
                                                                                    : `Rp. ${p.diskon.toLocaleString()}`}
                                                                            </p>
                                                                        </td>
                                                                        <td className="p-4 whitespace-nowrap text-left">
                                                                            <p className="text-black">
                                                                                {!p?.total
                                                                                    ? "-"
                                                                                    : `Rp. ${p.total.toLocaleString()}`}
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="mt-10">
                {match(data.length < 1 && search?.page == 1)
                    .with(true, () => (
                        <>
                            <h1 className="text-center">
                                Kamu tidak mempunyai pesanan
                            </h1>
                            <div className="flex justify-center mt-5">
                                <button
                                    className="bg-sky-500 text-white px-4 py-2 rounded-md"
                                    onClick={() => navigate({ to: "/shop" })}
                                >
                                    Belanja Sekarang
                                </button>
                            </div>
                        </>
                    ))
                    .otherwise(() => (
                        <Pagination navigate={navigate} nextUrl={nextUrl} />
                    ))}
            </div> */}
        </>
    );
}
