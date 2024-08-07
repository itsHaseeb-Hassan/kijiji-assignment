import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import data from "../constant/sliderData.json";

const SliderCar = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.navigation) {
      const navigationPrev = swiperInstance.navigation.prevEl;
      const navigationNext = swiperInstance.navigation.nextEl;

      if (navigationPrev && navigationNext) {
        navigationPrev.style.display = "none"; // Initially hide the left arrow
        navigationNext.style.display = "block"; // Initially show the right arrow

        const handleSlideChange = () => {
          navigationPrev.style.display = swiperInstance.isBeginning
            ? "none"
            : "block";
          navigationNext.style.display = swiperInstance.isEnd
            ? "none"
            : "block";
        };

        swiperInstance.on("slideChange", handleSlideChange);
        swiperInstance.on("reachEnd", handleSlideChange);
        swiperInstance.on("reachBeginning", handleSlideChange);

        return () => {
          swiperInstance.off("slideChange", handleSlideChange);
          swiperInstance.off("reachEnd", handleSlideChange);
          swiperInstance.off("reachBeginning", handleSlideChange);
        };
      }
    }
  }, [swiperInstance]);
  return (
    <div className=" container mx-auto   mb-20  ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-larsseit text-lg">Homepage Gallery</h1>
        <p>
          Your Ad here <span>See All</span>
        </p>
      </div>
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        onSwiper={setSwiperInstance}
      >
        <div className="">
          {data.data.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div
                className={
                  item?.description !== ""
                    ? "bg-white shadow-md h-full rounded  "
                    : "h-full"
                }
              >
                <div
                  className={item?.description === "" ? "w-full  h-[263px] rounded bg-no-repeat" : "w-full  h-[200px] bg-cover bg-center bg-no-repeat rounded "}
                  style={{ backgroundImage: `url(${item.src})` }}
                />
                <div className="mt-4 p-3">
                  <p className="text-gray-800">{item.description}</p>
                  <p className="text-green-500">{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default SliderCar;
