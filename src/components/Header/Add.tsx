import { useTranslation } from "react-i18next"

function Add() {
  const {t} = useTranslation()
  return (
    <div className="bg-custom-blue py-3 overflow-hidden">
      <div className="whitespace-nowrap animate-ticker text-white animate-ticker">
        {t("add")}
      </div>
    </div>
  )
}

export default Add
