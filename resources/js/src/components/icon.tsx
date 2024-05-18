import { FONTAWSOME_URL } from "../utils/toast";

interface IconProps {
    nama: string;
}

const Icon = ({ nama }: IconProps) => {
    return (
        <div>
            <link rel="stylesheet" href={FONTAWSOME_URL} />
            {nama === "Product" && <i className="mr-3 fa-solid fa-shirt"></i>}
            {nama === "Dashboard" && (
                <i className="mr-3 fa-solid fa-table-cells-large"></i>
            )}
            {nama === "plus" && <i className="mr-3 fa-solid fa-plus"></i>}
            {nama === "category" && <i className="mr-3 fa-solid fa-list"></i>}
            {nama === "minus" && <i className="mr-3 fa-solid fa-minus"></i>}
            {nama === "edit" && <i className="fa-solid fa-pencil"></i>}
            {nama === "admin" && <i className="mr-3 fa-solid fa-user"></i>}
            {nama === "user" && <i className="fa-solid fa-user"></i>}
            {nama === "pray" && <i className="fa-solid fa-person-praying"></i>}
            {nama === "happy" && (
                <i className="fa-solid fa-face-laugh-squint"></i>
            )}
            {nama === "up" && <i className="fa-solid fa-arrow-up"></i>}
            {nama === "professional" && (
                <i className="fa-solid fa-user-tie"></i>
            )}
        </div>
    );
};

export default Icon;
