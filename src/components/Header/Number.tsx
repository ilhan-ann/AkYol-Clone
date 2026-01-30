import { BiChevronDown, BiPhone } from "react-icons/bi";
import { useState } from "react"
import { useTranslation } from "react-i18next";

function Number() {
  const [open, setOpen] = useState<boolean>(false)
  const { t } = useTranslation()

  return (
    <div className="relative inline-block text-left font-bold">
      <button className="flex mx-13 " onClick={() => setOpen(!open)}>
        +993-61-53-20-99
        <BiChevronDown size={24} className={"font-bold transition-transform " + (open ? "rotate-180" : "")} />
      </button>
      <div className={"bg-white text-black right-0 absolute w-55 z-50 h-05 shadow transition-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
        <div className="flex flex-col py-2">
          <div className="font-normal text-gray-500 text-sm hover:bg-gray-100 p-4">{t("site manager")}
            <div className="flex items-center">
              <BiPhone className="text-custom-blue mr-2" />
              <a href="tel:+993-61-53-20-99" className="font-bold text-black">+993-61-53-20-99</a>
            </div>
          </div>
          <div className="font-normal text-gray-500 text-sm hover:bg-gray-100 p-4">{t("store")}
            <div className="flex items-center">
              <BiPhone className="text-custom-blue mr-2" />
              <a href="tel:+993-12-28-04-01" className="font-bold text-black">+993-12-28-04-01</a>
            </div>
          </div>
          <div className="font-normal text-gray-500 text-sm hover:bg-gray-100 p-4">{t("service center")}
            <div className="flex items-center">
              <BiPhone className="text-custom-blue mr-2" />
              <a href="tel:+993-12-28-10-24" className="font-bold text-black">+993-12-28-10-24</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Number
