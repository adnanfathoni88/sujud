import { Link } from "@tanstack/react-router";
import Icon from "./icon";

function SideBar() {
    return (
        <div>
            <div className="fixed w-1/6 h-screen bg-gray-800 text-white text-center">
                <h1 className="py-8 text-xl font-semibold">SUJUD.CO</h1>
                <div className="sidebar-group text-left">
                    <div className=" mb-2 text-slate-400 p-4 px-6 mx-6 rounded-md hover:bg-gray-600/50 flex">
                        <Icon nama="Dashboard"></Icon>
                        Dashboard
                    </div>
                    <Link to={"/category"}>
                        <div className=" mb-2 text-slate-400 p-4 px-6 mx-6 rounded-md hover:bg-gray-600/50 flex">
                            <Icon nama="category"></Icon>
                            Kategori
                        </div>
                    </Link>
                    <Link to={"/product"}>
                        <div className=" mb-2 text-slate-400 p-4 px-6 mx-6 rounded-md hover:bg-gray-600/50 flex">
                            <Icon nama="Product"></Icon>
                            Product
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
