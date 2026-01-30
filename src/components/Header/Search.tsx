import { useState } from "react"
import { useTranslation } from "react-i18next"
import { CiSearch } from "react-icons/ci"
import { useNavigate } from "react-router-dom"

function Search() {
    const [keyword, setKeyword] = useState<string>("")
    const navigate = useNavigate()
    const { t } = useTranslation()


    return (
        <div className="flex items-center w-100 bg-gray-200 rounded-3xl  pr-1.5">
            <input
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key == 'Enter' && navigate("search?keyword=" + keyword)}
                className="w-full py-2 px-3 outline-none"
                type="text"
                placeholder={t("search")} />
            <div className="bg-custom-blue p-1 rounded-full text-white">
                <CiSearch className="p-1" size={24} />
            </div>
        </div>
    )
}

export default Search