import Icon from "./icon";
import { MdShoppingCart } from "react-icons/md";

function Navbar() {
    return (
        <nav className=" bg-sky-600 w-full fixed dark:bg-gray-900 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="/img/logo/sujud.png" className="h-8" />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="tex-t font-medium flex flex-col p-4 md:p-0 mt-4 border items-center border-gray-100 rounded-lg md:flex-row rtl:space-x-reverse md:mt-0 md:border-0  md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className="px-4 py-3 font-semibold rounded-md text-white hover:bg-sky-500/25 transition-all "
                            >
                                Shop All
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="px-4 py-3 font-semibold rounded-md text-white hover:bg-sky-500/25 transition-all "
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <div className="px-3 py-2 font-semibold mx-2 rounded-full bg-white text-sky-600 hover:bg-sky-500/25 hover:text-white transition-all ">
                                <Icon nama={"user"} />
                            </div>
                        </li>
                        <li>
                            <div className="px-3 py-3 font-semibold mx-2 rounded-full bg-white text-sky-600 hover:bg-sky-500/25 hover:text-white transition-all ">
                                <MdShoppingCart />
                            </div>
                        </li>
                        <li>
                            <div className="px-6 py-2 font-semibold rounded-full bg-white text-sky-600 hover:bg-sky-500/25 hover:text-white transition-all ">
                                Register{" "}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
