import { Swiper, SwiperSlide } from "swiper/react"
import { b1, b2, b3, b4, b5, b6, b7, b8 } from "../../../assets/images/index"
import { Pagination, Autoplay, Navigation, Thumbs } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'


function BottomBanner() {
  return (
    <div className="w-full">
      <div className="overflow-hidden relative h-75">
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          modules={[Autoplay]}
          className="h-full"
        >
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={b1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={b2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={b3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={b4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={b5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={b6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={b7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-full object-cover" src={b8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}


export default BottomBanner