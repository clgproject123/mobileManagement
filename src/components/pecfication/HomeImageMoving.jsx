import React from 'react'
import { Pagination, Navigation,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const mobileImg = [
    `https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600`,
    'https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1672905152_234.jpg',
    'https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1673587587_58.jpg',
    'https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1673439729_250.jpg',
    `https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1675936154_266.jpg`

]

const HomeImageMoving = () => {

  return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {mobileImg.map(item => (
            <>
            <SwiperSlide style={{height:'88vh'}}>
                <img src={item} alt="mobile" height={'100%'} width={'100%'} className='img-fluid' />
            </SwiperSlide>
            </>
        ))}
      </Swiper>
    </>
  )
}

export default HomeImageMoving