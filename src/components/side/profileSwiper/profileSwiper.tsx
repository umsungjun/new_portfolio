import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

/* swiper css */
import "swiper/css";
import "swiper/css/effect-cards";

export default function ProfileSwiper() {
  return (
    <Swiper
      effect={"cards"}
      modules={[EffectCards]}
      className="w-[215px] h-[286px]"
      /* 반복 여부 */
      loop={true}
      // loopAdditionalSlides={1}
      /* 커서 끌기 여부 */
      grabCursor={true}
      /* 클릭 슬라이드 이동 여부 */
      slideToClickedSlide={true}
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
