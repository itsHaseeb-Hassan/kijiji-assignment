import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import data from '../constant/homepagegallery.json';

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.navigation) {
      const navigationPrev = swiperInstance.navigation.prevEl;
      const navigationNext = swiperInstance.navigation.nextEl;

      if (navigationPrev && navigationNext) {
        navigationPrev.style.display = 'none'; // Initially hide the left arrow
        navigationNext.style.display = 'block'; // Initially show the right arrow

        const handleSlideChange = () => {
          navigationPrev.style.display = swiperInstance.isBeginning ? 'none' : 'block';
          navigationNext.style.display = swiperInstance.isEnd ? 'none' : 'block';
        };

        swiperInstance.on('slideChange', handleSlideChange);
        swiperInstance.on('reachEnd', handleSlideChange);
        swiperInstance.on('reachBeginning', handleSlideChange);

        return () => {
          swiperInstance.off('slideChange', handleSlideChange);
          swiperInstance.off('reachEnd', handleSlideChange);
          swiperInstance.off('reachBeginning', handleSlideChange);
        };
      }
    }
  }, [swiperInstance]);

  return (
    <div className="w-[68%] ms-[5%]  pl-1 mb-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-larsseit text-[18px]">Homepage Gallery</h1>
        <p>Your Ad here <span>See All</span> </p>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 5,
          },
        }}
        onSwiper={setSwiperInstance}
      >
        {data.data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md shadow-white">
              <div
                className="w-full h-[120px] bg-cover bg-center "
                style={{ backgroundImage: `url(${item.src})` }}
              />
              <div className="mt-4 p-3">
                <p className="text-gray-800">{item.description}</p>
                <p className="text-green-500">{item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;