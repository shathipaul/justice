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
      <div className='py-8 text-center'>
        <h2 className='pb-2 text-2xl font-bold custom-font'>What Our Client Say</h2>
        <p className='w-4/5 m-auto text-sm lg:w-3/5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
      </div>

      <Swiper navigation={true} modules={[Navigation]}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true
        }} className="rounded-lg mySwiper">
        {
          reviewData.map(data => <SwiperSlide key={data.id} className="text-white">

            <div className='img-gradient'>
              <img className='w-full' src={banner} alt='' />
            </div>

            <div className="absolute flex flex-col items-center justify-center transform -translate-y-1/2 left-16 right-5 top-1/2">
              <img className='object-cover w-10 h-10 border-2 rounded-full md:w-20 md:h-20 border-slate-50' src={data.img} alt='' />
              <div className=' lg:mt-4 lg:mb-6'>
                <p className='font-bold text-center custom-font md:text-xl'>{data.name}</p>
                <p className='text-sm text-center md:text-base'>{data.position}</p>
              </div>
              <p className='hidden w-4/5 text-sm text-center md:block xl:w-3/5'>{data.des}</p>
              <p className='text-xs text-center md:hidden'>{data.des.slice(0, 70)}...</p>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default Reviews;