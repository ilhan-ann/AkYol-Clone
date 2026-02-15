import { useEffect, useState } from 'react'
import { CgChevronUp } from 'react-icons/cg'
import { useLocation } from 'react-router-dom'

function GoToTop() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const toggleOpen = () => {
      setOpen(window.scrollY > 100)
    }

    document.addEventListener("scroll", toggleOpen)
  }, [])

  useEffect(() => {
    goTop("instant")
  }, [pathname])

  const goTop = (behavior: "instant" | "smooth") => {
    window.scroll({
      top: 0,
      behavior: behavior
    })
  }

  return (
    <button onClick={() => goTop("smooth")} className={'bg-white p-3 rounded-full fixed z-2 bottom-5 right-5 transition-all duration-300 ' + (open ? "visible opacity-100" : "invisible opacity-0")}>
      <CgChevronUp size={24} className='text-custom-blue' />
    </button>
  )
}

export default GoToTop