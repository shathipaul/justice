import React from 'react';
import banner from '../assets/images/banner.png'
import img1 from '../assets/users/user1.jpeg'
import img2 from '../assets/users/user2.jpeg'
import img3 from '../assets/users/user3.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

const Reviews = () => {

  const reviewData = [
    { id: 1, name: 'Clifton E. Wells', position: 'UI/UX Designer', img: img1, des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.' },
    { id: 2, name: 'Debra McMillian', position: 'Digital Marketer', img: img2, des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.' },
    { id: 3, name: 'Barbara Nichols', position: 'Managing Director', img: img3, des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.' }
  ]

  return (
    <>
      <div className='text-center py-8'>
        <h2 className='custom-font text-2xl font-bold pb-2'>What Our Client Say</h2>
        <p className='w-4/5 lg:w-3/5 m-auto text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
      </div>

      <Swiper navigation={true} modules={[Navigation]}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true
        }} className="mySwiper rounded-lg">
        {
          reviewData.map(data => <SwiperSlide key={data.id} className="text-white">

            <div className='img-gradient'>
              <img src={banner} alt='' />
            </div>

            <div className="absolute flex flex-col justify-center items-center transform -translate-y-1/2 left-16 right-5 top-1/2">
              <img className='w-10 h-10 md:w-20 md:h-20 rounded-full object-cover border-2 border-slate-50' src={data.img} alt='' />
              <div className=' lg:mt-4 lg:mb-6'>
                <p className='custom-font md:text-xl font-bold text-center'>{data.name}</p>
                <p className='text-center text-sm md:text-base'>{data.position}</p>
              </div>
              <p className='hidden md:block w-4/5 xl:w-3/5 text-center text-sm'>{data.des}</p>
              <p className='md:hidden text-center text-xs'>{data.des.slice(0, 70)}...</p>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default Reviews;