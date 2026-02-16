import { BiChevronDown, BiGitCompare, BiHeart, BiLogIn } from "react-icons/bi"
import { useState } from "react"
import { useTranslation } from "react-i18next";
import Register from "./Register";
import OutClick from "../OutClick";
import Login from "./Login";
import Profile from "./Profile";
import { useUserStore } from "../../store/user";
import { BsPersonAdd } from "react-icons/bs";

function UserAcc() {
    const { t } = useTranslation()
    const [open, setOpen] = useState<boolean>(false)
    const { user, token } = useUserStore(state => state)

    return (
        <OutClick action={() => setOpen(false)}>
            <div className="container relative inline-block text-left">
                <button className="flex items-center focus:outline-none hover:bg-custom-hover-blue p-4" onClick={() => setOpen(!open)}>
                    {t("user account")}

                    <BiChevronDown size={24} className={"font-bold transition-transform " + (open ? "rotate-180" : "")} />
                </button>
                <div className={"right-0 text-black absolute z-200 w-full h-full rounded shadow transition-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
                    <div className="flex flex-col py-2 bg-white ">
                        <div className="flex items-center hover:bg-gray-100 p-4">
                            <BiHeart className="text-custom-blue mr-2"/>
                            <span>Favourites</span>
                        </div>
                        <div className="flex items-center hover:bg-gray-100 p-4">
                            <BiGitCompare className="text-custom-blue mr-2"/>
                            <span>In compare</span>
                        </div>

                        <hr className="my-2 border-gray-200" />

                        <label className="flex items-center hover:bg-gray-100 p-4">
                            <input type="checkbox" className="w-4 h-4 mr-2"/>
                            <span>Default theme</span>
                        </label>
                        {!token
                            ? <>
                                <div className="flex items-center hover:bg-gray-100 px-3 p-4">
                                    <BiLogIn className="text-custom-blue mr-2"/>
                                    <Login />
                                </div>
                                <div className="flex items-center hover:bg-gray-100 p-4">
                                    <BsPersonAdd className="text-custom-blue mr-2"/>
                                    <Register />
                                </div> </> : <Profile />}
                    </div>
                </div>
            </div>
        </OutClick>
    )
}

export default UserAcc
