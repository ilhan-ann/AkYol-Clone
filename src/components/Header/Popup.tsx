import { BiX } from 'react-icons/bi'
import type { PopupProps } from '../../types/Header'
import { apple, google } from '../../assets/images'

function Popup({ children, open, setOpen, title, active, setActive, sendData }: PopupProps) {

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={
          "fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 " +
          (open ? "opacity-100 visible" : "opacity-0 invisible")
        }>
        </div>
      <div
        className={
          "fixed top-1/2 left-1/2 w-105 max-w-[95%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-8 transition-all duration-300 " +
          (open ? "scale-100 opacity-100" : "scale-90 opacity-0")
        }>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition">
          <BiX size={18} />
        </button>
        <h2 className="text-3xl font-semibold mb-6">{title}</h2>
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setActive("phone")}
            className={
              "px-4 py-1.5 text-sm border rounded-l-full transition " +
              (active === "phone"
                ? "bg-white text-blue-600 border-gray-300"
                : "bg-gray-100 text-gray-500 border-gray-300")
            }>
            Telefon
          </button>
          <button
            onClick={() => setActive("email")}
            className={
              "px-4 py-1.5 text-sm border rounded-r-full transition " +
              (active === "email"
                ? "bg-white text-blue-600 border-gray-300"
                : "bg-gray-100 text-gray-500 border-gray-300")
            }>
            Email
          </button>
        </div>
        <div className="space-y-4">{children}</div>
        <button
          onClick={sendData}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-full transition">
          {title}
        </button>
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute w-full border-t border-gray-200"></div>
          <span className="relative bg-white px-3 text-sm text-gray-400">
            ýa-da
          </span>
        </div>
        <div className="flex justify-center gap-4">
          <a className="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 transition"
            href="" >
            <img src={google} alt="google" className="w-5 h-5" />
          </a>
          <a className="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-50 transition"
            href="">
            <img src={apple} alt="apple" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Popup