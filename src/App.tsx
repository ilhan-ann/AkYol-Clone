import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import GoToTop from "./components/GoToTop"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Search from "./pages/Search"
import Category from "./pages/Category"
import { Toaster } from "react-hot-toast"
import Profile from "./pages/Profile"


function App() {
  return (
    <>
      <div className="app-bg">
        <Toaster position="bottom-right" reverseOrder={false} />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
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
