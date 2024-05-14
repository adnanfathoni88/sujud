import { useState } from "react";
import { useParams } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useAddCategory } from "../../adapters/hooks/useCategoy";

export default function CategoryAddModule() {
    const [nama, setNama] = useState("");
    const [success, setSuccess] = useState("");
    const addCategoryMutation = useAddCategory({ nama });

    const handleInputChange = (e) => {
        setNama(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategoryMutation.mutate(e);
    };

    return (
        <>
            <div className="container mx-auto py-10">
                <h2 className="font-bold text-4xl">Tambah Kategori</h2>
                <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
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
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
