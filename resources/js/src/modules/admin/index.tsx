import { Link } from "@tanstack/react-router";
import SideBar from "../../components/sidebar";

const AdminModul: React.FC = () => {
    return (
        <>
            <SideBar />
            <div className="main p-6  bg-slate-200/75 h-screen">
                <div className=" bg-white p-10  rounded-xl mb-6 mx-4 flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-gray-700">Admin</h2>
                    <Link to={"/admin/add"}>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-sm ">
                            Tambah
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AdminModul;
