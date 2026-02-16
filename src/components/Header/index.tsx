import Navbar from "./Navbar"
import HeaderTop from "./HeaderTop"
import ScrollNavbar from "./ScrollNavbar"

function index() {
  return (
    <div className="bg-white">
      <HeaderTop />
      <Navbar />
      <ScrollNavbar />
    </div>
  )
}

export default index
