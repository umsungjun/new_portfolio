import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

/* swiper css */
import "swiper/css";
import "swiper/css/effect-cards";

export default function ProfileSwiper() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      loop={true}
      className="w-2/4 h-72"
    >
      <SwiperSlide>
        <img
          src={`${
            import.meta.env.VITE_GOOGLE_DRIVE_IMG_URL
          }1mqLoHWEo5l-xD8fNnn6BXhM-SpX13sG4`}
          className="w-full"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={`${
            import.meta.env.VITE_GOOGLE_DRIVE_IMG_URL
          }1mqLoHWEo5l-xD8fNnn6BXhM-SpX13sG4`}
          className="w-full"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
