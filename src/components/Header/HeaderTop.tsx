import { useTranslation } from "react-i18next";
import Button from "./Button";
import Language from "./Language";
import Currency from "./Currency";
import Stick from "./Stick";

function HeaderTop() {
    const { t } = useTranslation()

    return (
        <>
            <div className="container mx-auto px-12 flex py-1 items-center justify-between text-custom-gray">
                <div className="flex items-center">
                    <Button title={t("about us")} />
                    <Stick />
                    <Button title={t("my account")} />
                    <Stick />
                    <Button title={t("wishlist")} />
                    <Stick />
                    <Button title={t("order tracking")} />
                </div>
                <div className="text-custom-green font-semibold">
                    100% Secure delivery without contacting the courier
                </div>
                <div className="text-custom-gray flex items-center">
                    Need help? Call Us:<a href="tel:+1800900122" className="text-custom-green">+1800900122</a>
                    <Stick />
                    <Language />
                    <Stick />
                    <Currency />
                </div>
            </div>
        </>
    )
}

export default HeaderTop
