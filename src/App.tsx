import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import GoToTop from "./components/GoToTop"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Search from "./components/Header/Search"
import Category from "./pages/Category"
import { Toaster } from "react-hot-toast"


function App() {
  return (
    <>
      <div className="app-bg">
        <Toaster position="bottom-right" reverseOrder={false} />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GoToTop />
      </div>
      <Footer />
    </>
  )
}

export default App
