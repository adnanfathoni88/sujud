import { FormEvent } from "react";
import SideBar from "../../components/sidebar";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "../../main";
import { useAddAdmin } from "../../adapters/hooks/useAdmin";

export default function AdminAddModule() {
    const addAdminMutation = useAddAdmin();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nama = e.currentTarget.nama.value;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        addAdminMutation.mutate(
            { nama, email, password },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: ["useGetAdminList"],
                    });
                },
                onError: (axiosError) => {
                    console.log("error");
                    console.log(axiosError);
                },
            }
        );
    };

    return (
        <>
            <SideBar />
            <div className="main p-6 bg-slate-200/75 h-screen">
                <div className=" bg-white p-10  rounded-xl mb-6 mx-4 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-700">
                        Tambah Admin
                    </h2>
                </div>
                <div className="bg-white p-10 rounded-xl mb-6 mx-4">
                    <form className="mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nama
                            </label>
                            <input
                                id="text"
                                name="nama"
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                E-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
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
