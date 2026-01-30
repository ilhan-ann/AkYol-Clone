import Banner from "../components/Banner"
import Category from "../components/Category/Category"

function Main() {
  return (
    <div className="container mx-auto px-12 mt-4 flex">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 z-51">
          <Category />
        </div>

        <div className="col-span-9 z-50">
          <Banner />
        </div>
      </div>

    </div>
  )
}

export default Main
