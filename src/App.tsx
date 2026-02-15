import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Main from "./pages/Main"
import GoToTop from "./components/GoToTop"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <div className="app-bg">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <GoToTop />
      </div>
        <Footer />
    </>
  )
}

export default App
