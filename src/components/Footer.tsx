import { useTranslation } from "react-i18next"

function Footer() {
    const { t } = useTranslation()

    return (
        <div className="bg-custom-blue">
            <div className="container mx-auto px-12 py-4 text-white">
                <div className="flex items-center justify-between">
                    <a>
                        +993-61-53-20-99
                    </a>
                    <a>
                        +993-12-28-04-01
                    </a>
                    <a>
                        +993-12-28-10-24
                    </a>
                    <div>
                        {t("location")}
                    </div>
                    <a href="">
                        akyol.website@gmail.com
                    </a>
                    <div>
                        {t("days")}
                    </div>
                </div>
                <hr className="my-5 opacity-25" />
                <div className="mb-3">
                    AK YOL COMPUTERS© 2026
                </div>
            </div>
        </div>
    )
}

export default Footer
