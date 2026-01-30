import { useTranslation } from "react-i18next"
import BusinessButton from "./BusinessButtons"
import Button from "./Button"
import Category from "./Category"
import { useState } from "react"
import { BsFire } from "react-icons/bs"
import { BiSupport } from "react-icons/bi"
function HeaderBottom() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="container relative mx-auto px-12 flex py-2 items-center justify-between">
      <div className="flex items-center font-semibold">
        <Category open={open} setOpen={setOpen} />
        <div className="ml-3">
          <Button title={t("hot deals")}>
            <BsFire size={20} className="text-custom-green mr-1" />
          </Button>
        </div>
      </div>
      <div className="flex items-center font-semibold">
        <BusinessButton title={t("home")} title2={t("about us")} title3={t("contact")} title4={t("blog")} />
        <Button title={t("about")} />
        <BusinessButton title={t("shop")} title2={t("1")} title3={t("2")} title4={t("3")} />
        <BusinessButton title={t("mega menu")} title2={t("1")} title3={t("2")} title4={t("3")} />
        <BusinessButton title={t("vendors")} title2={t("1")} title3={t("2")} title4={t("3")} />
        <BusinessButton title={t("blog")} title2={t("1")} title3={t("2")} title4={t("3")} />
        <BusinessButton title={t("pages")} title2={t("1")} title3={t("2")} title4={t("3")} />
        <Button title={t("contact")} />
      </div>
        <button className="flex items-center text-start px-3 hover:bg-gray-200 rounded transition-all">
          <BiSupport size={24} className="mr-2" />
          <div className="text-custom-green text-xl font-bold">
            1900 - 888
            <div className="text-sm text-custom-gray font-semibold">
              24/7 Support Center
            </div>
          </div>
        </button>
      </div>
  )
}

export default HeaderBottom
