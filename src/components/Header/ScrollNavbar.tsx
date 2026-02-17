import { useEffect, useState } from "react";
import { imo, instagram, telegram, whatsapp } from "../../assets/images/apps";
import Search from "./Search";
import Cart from "./Cart";
import { BiGitCompare, BiHeart, BiLogIn } from "react-icons/bi";
import Login from "./Login";
import Register from "./Register";
import Category from "../Category";
import { useTranslation } from "react-i18next";
import { BsPersonAdd } from "react-icons/bs";
import { CgChevronDown } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";

function ScrollNavbar() {
    const [showCategory, setShowCategory] = useState(false);
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
                setShowCategory(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-200 bg-white shadow-lg ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="container mx-auto px-12 py-3">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-3">
                        <div className="relative">
                            <button
                                onClick={() => setShowCategory(!showCategory)}
                                className="bg-custom-blue flex items-center justify-between w-full py-3 px-5 text-center text-white">
                                <div className="flex items-center">
                                    <CiMenuBurger size={18} className="mr-3" />
                                    {t("catalog")}
                                </div>
                                <CgChevronDown
                                    className={`transition-transform duration-300 ${showCategory ? "rotate-180" : ""}`}/>
                            </button>
                            {showCategory && (
                                <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
                                    <Category />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-9 flex items-center justify-between">
                        <div className="flex">
                            <a className="mx-1" href="">
                                <img className="w-6 h-6" src={imo} alt="" />
                            </a>
                            <a className="mx-1" href="">
                                <img className="w-6 h-6" src={instagram} alt="" />
                            </a>
                            <a className="mx-1" href="">
                                <img className="w-6 h-6" src={telegram} alt="" />
                            </a>
                            <a className="mx-1" href="">
                                <img className="w-6 h-6" src={whatsapp} alt="" />
                            </a>
                        </div>
                        <Search />
                        <button className="flex items-center hover:text-custom-blue">
                            <BiHeart className="text-custom-blue mr-2" />
                            <span>Favourites</span>
                        </button>
                        <button className="flex items-center hover:text-custom-blue">
                            <BiGitCompare className="text-custom-blue mr-2" />
                            <span>In compare</span>
                        </button>
                        <div className="flex items-center hover:text-custom-blue">
                            <BiLogIn className="text-custom-blue mr-2" />
                            <Login />
                        </div>
                        <div className="flex items-center hover:text-custom-blue">
                            <BsPersonAdd className="text-custom-blue mr-2" />
                            <Register />
                        </div>
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScrollNavbar;
