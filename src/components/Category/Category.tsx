import { useState } from "react"
import { useTranslation } from "react-i18next"
import categories from "../../data/category.json"
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

function Category() {
  const [active, setActive] = useState<any>(null)
  const { t } = useTranslation()

  return (
    <div
      className="w-full relative shadow-lg bg-white z-110"
      onMouseLeave={() => setActive(null)}
    >
      <div className="w-full">
        <div>
          {categories.map((category, key) => (
            <div
              key={"category-" + key}
              className="relative group hover:bg-gray-200"
              onMouseEnter={() => setActive(category)}
            >
              <Link
                to={`/category/${category.id}`}
                className={
                  "flex items-center justify-between w-full text-left hover:text-custom-blue py-4 px-5 gap-5 " +
                  (active?.id === category.id
                    ? "bg-gray-300"
                    : "bg-white hover:bg-gray-200")
                }
              >
                {t(category.name)}
                {category.subcategories && category.subcategories.length > 0 && (
                  <span className="text-gray-500 ">
                    <BiChevronRight size={24} />
                  </span>
                )}
              </Link>
              {category.subcategories && category.subcategories.length > 0 && (
                <div
                  className={`absolute top-0 left-full bg-white shadow-lg min-w-62.5 transition-all duration-300 transform ${active?.id === category.id
                      ? "translate-x-0 opacity-100 visible"
                      : "-translate-x-6 opacity-0 invisible"
                    }`}
                >
                  {category.subcategories.map((sub: any, index: number) => (
                    <Link
                      key={"sub-" + index}
                      to={`/category/${sub.slug}`}
                      className="block px-5 py-4 hover:bg-gray-200 hover:text-custom-blue justify-between items-center"
                    >
                      {t(sub.name)}
                    </Link>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
