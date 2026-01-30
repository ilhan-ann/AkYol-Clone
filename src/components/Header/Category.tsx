import { BiCategory } from "react-icons/bi";
import { useEffect, useState } from "react";
import categories from "../../data/category.json"
import { icons } from "../../assets/images/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OutClick from "../OutClick";

type CategoryPropType = {
    open: boolean
    setOpen: (open: boolean) => void
}

function Category({ open, setOpen }: CategoryPropType) {
    const [active, setActive] = useState(categories[0])
    const { t } = useTranslation()
    useEffect(() => {
        if (open) {
            document.querySelector('body')!.style.overflow = "hidden"
        } else {
            document.querySelector('body')!.style.overflow = "auto"
        }
    }, [open])

    return (
        <OutClick action={() => setOpen(false)}>
            <div>
                <div className="bg-custom-green text-white font-bold rounded ">
                    <button className="flex py-2 px-3 rounded hover:bg-green-400 transition-all" onClick={() => setOpen(!open)}>
                        <BiCategory size={24} className="text-custom-blue font-bold mr-3" />
                        {t("browse all categories")}
                    </button>
                </div>
                <div className={"grid grid-cols-4 gap-3 px-5 z-50 absolute left-0 w-full shadow-lg bg-white h-100 transition-all duration-200 " + (open ? "opacity-100 visible" : "opacity-0 invisible")}>
                    <div className="overflow-auto py-5">
                        {
                            categories.map((category, key) => {
                                const Icon = (icons as any)[category.icon]
                                return (
                                    <button
                                        onMouseEnter={() => setActive(category)}
                                        key={"category-" + key}
                                        className={"flex items-center gap-3 w-full border text-left mb-2 border-green-200 rounded py-1 px-3 " + (active.id == category.id ? "bg-custom-green/10 text-custom-orange" : "")}
                                    >
                                        <Icon className="text-custom-green" />
                                        {category.name}
                                    </button>
                                )
                            })
                        }
                    </div>

                    <div className="col-span-3 border-l py-5 pl-5 border-green-100">
                        <Link to={"category/" + active.id} onClick={() => setOpen(false)} className="font-semibold text-4xl hover:text-custom-green">{active.name}</Link>
                        <div className="grid grid-cols-2 gap-3 mt-8">
                            {
                                active.subcategories.map((sub, index) => (
                                    <div key={'subcategory-' + index}>
                                        <Link onClick={() => setOpen(false)} className="block pl-2 hover:text-custom-green text-lg font-semibold" to={"category/" + sub.id}>{sub.name}</Link>

                                        <div className="my-2">
                                            {
                                                sub.subcategories && sub.subcategories.map((subsub, index2) => (
                                                    <Link onClick={() => setOpen(false)} key={"subsubcategory-" + index2} to={"category/" + subsub.id} className="block pl-4 hover:text-custom-green">{subsub.name}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </OutClick>
    )
}

export default Category