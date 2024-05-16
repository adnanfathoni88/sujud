import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useAddCategory } from "../../adapters/hooks/useCategoy";
import SideBar from "../../components/sidebar";

export default function CategoryAddModule() {
    const [nama, setNama] = useState("");
    const [success, setSuccess] = useState("");
    const addCategoryMutation = useAddCategory({ nama });

    const handleInputChange = (e) => {
        setNama(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e);

        // addCategoryMutation.mutate(e);
    };

    return (
        <>
            <SideBar />
            <div className="main p-6 bg-slate-200/75 h-screen">
                <div className=" bg-white p-10  rounded-xl mb-6 mx-4 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-700">
                        Tambah Kategori
                    </h2>
                </div>
                <div className="bg-white p-10 rounded-xl mb-6 mx-4">
                    <form className="mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nama
                            </label>
                            <input
                                name="nama"
                                type="text"
                                id="text"
                                value={nama}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white w-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
