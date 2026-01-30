import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import OutClick from "../OutClick";

function Language() {
    const [open,setOpen] = useState<boolean>(false)

    return (
        <OutClick action={() => setOpen(false)}>
            <div className="relative">
                <button className="flex items-center focus:outline-none hover:bg-custom-hover-blue" onClick={() => setOpen(!open)}>
                    TMT
                    <BiChevronDown size={24} className={"font-bold transition-transform " + (open ? "rotate-180" : "")} />
                </button>

                <div className={"absolute left-0 text-black z-50 bg-white py-1 px-2 rounded flex flex-col shadow transtion-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
                    <button onClick={() => setOpen(false)} className={"flex items-center p-2 rounded hover:bg-gray-200 bg-gray-100"}>TMT</button>
                    <div className="border-y border-gray-200">
                        <button onClick={() => setOpen(false)} className={"flex items-center p-2 rounded hover:bg-gray-200"}>USD</button>
                    </div>
                    <button onClick={() => setOpen(false)} className={"flex items-center p-2 rounded hover:bg-gray-200"}>INR</button>
                </div>
            </div>
        </OutClick>
    )
}

export default Language