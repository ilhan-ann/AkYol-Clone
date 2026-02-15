import { Swiper, SwiperSlide } from "swiper/react"
import { banner1, banner2, banner3 } from "../../../assets/images/index"
import { Pagination, Autoplay, Navigation, Thumbs } from "swiper/modules"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'


function Banner() {

  return (
    <div className="container mx-auto">
      <div className="overflow-hidden relative h-150">
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
          [&_.swiper-pagination]:bottom-6!
        [&_.swiper-pagination-bullet]:bg-white!
          [&_.swiper-pagination-bullet]:opacity-100!
          [&_.swiper-pagination-bullet]:w-4!
          [&_.swiper-pagination-bullet]:h-4!
          [&_.swiper-pagination-bullet]:mx-2!
          [&_.swiper-pagination-bullet]:rounded-full!
        [&_.swiper-pagination-bullet-active]:bg-custom-blue!"

        >
          <SwiperSlide>
            <img className="w-full h-full" src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full" src={banner3} alt="" />
          </SwiperSlide>
        </Swiper>

        <button className="btn-prev absolute top-1/2 -translate-y-1/2 left-6 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md">
          <IoIosArrowBack size={28} />
        </button>

        <button className="btn-next absolute top-1/2 -translate-y-1/2 right-6 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md">
          <IoIosArrowForward size={28} />
        </button>

      </div>
    </div>
  )
}

export default Banner