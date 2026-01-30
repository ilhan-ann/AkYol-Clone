import Button from "./Button"
import Language from "./Language"
import UserAcc from "./UserAcc"
import { useTranslation } from "react-i18next";


function Top() {
  const {t} = useTranslation()

  return (
    <div className="bg-custom-blue">
      <div className="container mx-auto px-12 flex items-center justify-between text-white">
        <div className="flex">
          <Button title={t("about us")} />
          <Button title={t("warranty service")} />
          <Button title={t("leave a review")} />
          <Button title={t("service center support")} />
        </div>
        <div className="flex items-center">
          <UserAcc />
          <Language />    
        </div>
      </div>
    </div>
  )
}

export default Top
