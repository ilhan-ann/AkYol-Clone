import { useTranslation } from "react-i18next";
import { BiShield } from "react-icons/bi";
import {  BsTruck } from "react-icons/bs"
import { CgCreditCard, CgPin } from "react-icons/cg";

function SideBarServices() {
    const { t } = useTranslation();
    return (
        <>
            <div className="bg-white p-7 shadow-lg">
                <div className="flex items-center">
                    <BsTruck size={38} className="text-custom-blue mr-5" />
                    <div className="font-semibold">
                        {t("free delivery throughout turkmenistan")}
                    </div>
                </div>
                <div className="text-sm my-5">
                    We will deliver your order to any point in Turkmenistan by courier completely free, there is also the possibility of self-pickup
                </div>
                <hr className="opacity-20 mb-5"/>
                <div className="flex items-center">
                    <CgCreditCard size={38} className="text-custom-blue mr-5" />
                    <div className="font-semibold">
                        {t("online payment")}
                    </div>
                </div>
                <div className="text-sm my-5">
                    Payment for the order in various ways: in cash, by bank card to the courier or online through payment services
                </div>
                <hr className="opacity-20 mb-5"/>
                <div className="flex items-center">
                    <CgPin size={38} className="text-custom-blue mr-5" />
                    <div className="font-semibold">
                        {t("we're located in ashgabat")}
                    </div>
                </div>
                <div className="text-sm my-4">
                    Intersection of Kotovsky and Hudaiberdyev, building No. 44
                </div>
                <hr className="opacity-20 mb-5" />
                <div className="flex items-center">
                    <BiShield size={38} className="text-custom-blue mr-5" />
                    <div className="font-semibold">
                        {t("warranty on all products")}
                    </div>
                </div>
                <div className="text-sm my-4">
                    All products are sold with a warranty card. In case of defect or breakdown, the client can always return and exchange the equipment (based on the terms of the contract)
                </div>
            </div>
        </>
    )
}

export default SideBarServices
