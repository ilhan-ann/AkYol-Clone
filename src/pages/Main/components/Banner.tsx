import { Swiper, SwiperSlide } from "swiper/react"
import { banner1, banner2 } from "../../../assets/images/index"
import { Pagination, Autoplay, Navigation, Thumbs } from "swiper/modules"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'


function Banner() {

  return (
    <div className="container mx-auto px-9">
      <div className=" rounded-2xl overflow-hidden relative h-150">
        <Swiper
          loop={true}
          modules={[Pagination, Autoplay, Navigation, Thumbs]}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="
            h-full
          [&_.swiper-pagination-bullet]:bg-gray-400!
            [&_.swiper-pagination-bullet]:opacity-100!
            [&_.swiper-pagination-bullet]:w-10!
            [&_.swiper-pagination-bullet]:rounded!
            [&_.swiper-pagination-bullet]:h-1!
          [&_.swiper-pagination-bullet-active]:bg-white!"

        >
          <SwiperSlide>
            <img className="w-full h-full" src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={banner2} alt="" />
          </SwiperSlide>
        </Swiper>

        <button className="btn-next absolute top-0 left-0 h-full z-1 px-5 text-white group">
          <span className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <IoIosArrowBack size={50} className="relative z-1" />
        </button>
        <button className="btn-next absolute top-0 right-0 h-full z-1 px-5 text-white group">
          <span className="absolute inset-0 bg-linear-to-l from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <IoIosArrowForward size={50} className="relative z-1" />
        </button>
      </div>
    </div>
  )
}

export default Banner