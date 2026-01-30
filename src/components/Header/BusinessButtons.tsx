import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import OutClick from "../OutClick";
import Button from "./Button";

type BusinessButtonType = {
    title?: string;
    title2?: string;
    title3?: string;
    title4?: string;
}

function BusinessButton({ title, title2, title3, title4 }: BusinessButtonType) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <OutClick action={() => setOpen(false)}>
            <div className="relative ">
                <div className="flex items-center focus:outline-none hover:bg-custom-hover-blue font-semibold" onClick={() => setOpen(!open)}>
                    <Button>
                        {title}
                        <BiChevronDown size={24} className={"font-bold transition-transform " + (open ? "rotate-180" : "")} />
                    </Button>
                </div>


                <div className={"absolute left-0 w-full text-black z-50 bg-white py-1 px-2 rounded flex flex-col shadow transtion-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
                    <button onClick={() => setOpen(false)} className={"flex items-center p-2 rounded hover:bg-gray-200"}>{title2}</button>
                    
                        <button onClick={() => setOpen(false)} className={"flex items-center p-2 rounded hover:bg-gray-200"}>{title3}</button>
                    
                    <button onClick={() => setOpen(false)} className={"flex items-center p-2 rounded hover:bg-gray-200"}>{title4}</button>
                </div>
            </div>
        </OutClick>
    )
}

export default BusinessButton