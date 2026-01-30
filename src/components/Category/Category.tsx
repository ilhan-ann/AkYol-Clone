import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import categories from "../../data/category.json"
import { Link } from "react-router-dom";

function Category() {
  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<any>(null)
  const { t } = useTranslation()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <div
      className="w-full relative"
      onMouseLeave={() => setActive(null)}
    >
      <div className="w-full">
        <div className="pb-3">
          <div className="bg-custom-blue w-full p-3 text-center text-white">
            {t("catalog")}
          </div>

          {categories.map((category, key) => (
            <button
              key={"category-" + key}
              onMouseEnter={() => setActive(category)}
              className={
                "relative group flex items-center gap-5 w-full text-left py-4 px-5 " +
                (active?.id === category.id
                  ? "bg-gray-300"
                  : "bg-gray-100 hover:bg-gray-200")
              }
            >
              {t(category.name)}
              <div className="absolute z-51 top-0 left-full h-100 bg-red-200 w-0 group-hover:w-100">
                
              </div>
            </button>
          ))}


          {/* {active && (
            <div
              className="absolute pb-3 pl-3"
              onMouseEnter={() => setActive(active)}
            >
              <Link
                to={"category/" + active.id}
                onClick={() => setOpen(false)}
                className="font-semibold text-4xl bg-gray-100 hover:text-custom-blue"
              >
                {t(active.name)}
              </Link>

              <div className="pt-4 bg-gray-100">
                {active.subcategories.map((sub: any, index: number) => (
                  <div key={"subcategory-" + index}>
                    <Link
                      onClick={() => setOpen(false)}
                      className="block pl-2 hover:text-custom-blue text-lg font-semibold"
                      to={"category/" + sub.id}
                    >
                      {t(sub.name)}
                    </Link>

                    <div className="my-2">
                      {sub.subcategories &&
                        sub.subcategories.map((subsub: any, index2: number) => (
                          <Link
                            onClick={() => setOpen(false)}
                            key={"subsubcategory-" + index2}
                            to={"category/" + subsub.id}
                            className="block pl-4 hover:text-custom-blue"
                          >
                            {t(subsub.name)}
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>



      </div>
    </div>
  )
}

export default Category
