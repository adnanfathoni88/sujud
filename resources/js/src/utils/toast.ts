import { toast, Bounce } from "react-toastify";

export const toastError = (msg: string) =>
    toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

export const toastSuccess = (msg: string) =>
    toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

// format tanggal
export const convertISODateToCustomFormat = (isoDate: string) => {
    // Membuat objek Date dari string ISO 8601
    const date = new Date(isoDate);

    // Mendapatkan tanggal, bulan, dan tahun dari objek Date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Mengonversi ke format yang diinginkan
    const formattedDate = `${day < 10 ? "0" + day : day}-${
        month < 10 ? "0" + month : month
    }-${year}`;

    return formattedDate;
};

// font awesome
export const FONTAWSOME_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
