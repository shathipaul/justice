import React from 'react';
import banner from '../assets/images/banner.png';

const Banner = () => {
    return (
        <>
            <div className='relative'>
                <img className='w-full' src={banner} alt="" />
                <div className="absolute flex flex-col items-center justify-center text-white -translate-y-1/2 left-16 right-5 top-1/2">
                    <h1 className='text-xl font-bold text-center custom-font md:text-3xl lg:text-5xl'>We Provide Effective <br />Legal Solutions</h1>
                    <p className='hidden w-2/3 py-3 text-sm text-center md:block lg:py-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                    <div className='flex gap-2'>
                        <input className='text-xs rounded-lg md:py-2 ps-2 md:pe-16' type='text' placeholder='Search your service here' />
                        <button type='button' className='text-xs navBtn'>Search</button>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Banner;