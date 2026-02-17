import { useTranslation } from "react-i18next";
import fakeBackend from "../../../data/fakeBackend.json"

function SideBarServices() {
    const { t } = useTranslation();

    return (
        <>
            <div className="bg-white p-7 shadow-lg">
                <div className="font-bold text-lg mb-5">
                    {t("brands")}
                </div>
                <hr className="opacity-20 mb-5" />
                <div>
                    {fakeBackend.brands.map((item, key) => (
                        <div key={key}>
                            {item.brands.map((brand) => (
                                <div key={brand.id} className="flex font-semibold items-center gap-2 py-1">
                                    <div>{brand.name}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SideBarServices
