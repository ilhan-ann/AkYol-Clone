import { useTranslation } from "react-i18next"
import logo from "../../assets/images/logo.png"
import Number from "./Number"
import { imo, instagram, telegram, whatsapp } from "../../assets/images/apps"
import Search from "./Search"
import Cart from "./Cart"
import { add } from "../../assets/images"
import Add from "./Add"


function Navbar() {
  const { t } = useTranslation()

  return (
    <>
      <div className="container mx-auto px-12 items-center relative py-6">
        <a href="/"><img src={logo} className="ml-1 w-28 h-auto -top-3 absolute bg-white border-5 border-blue-300 rounded-full" /></a>
        <div className="flex items-center justify-between">
          <div className="flex ml-35">
            {t("location")}
            <Number />
          </div>
          <div className="flex">
            <a className="mx-1" href=""><img className="w-6 h-6" src={imo} alt="" /></a>
            <a className="mx-1" href=""><img className="w-6 h-6" src={instagram} alt="" /></a>
            <a className="mx-1" href=""><img className="w-6 h-6" src={telegram} alt="" /></a>
            <a className="mx-1" href=""><img className="w-6 h-6" src={whatsapp} alt="" /></a>
          </div>
          <div>
            <Search />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
      <Add />
      {/* <a href=""><img className="w-full mt-2 h-20" src={add} alt="add" /></a> */}
    </>
  )
}

export default Navbar
