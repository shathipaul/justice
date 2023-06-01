import React from 'react';
import banner from '../assets/images/banner.png'

const Banner = () => {
    return (
        <>
            <div className='relative'>
                <img src={banner} alt="" />
                <div className="absolute flex flex-col justify-center items-center -translate-y-1/2 left-16 right-5 top-1/2 text-white">
                    <h1 className='custom-font text-3xl lg:text-5xl font-bold text-center'>We Provide Effective <br />Legal Solutions</h1>
                    <p className='hidden md:block w-1/2 text-center text-sm py-3 lg:py-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                    <div className='flex gap-2'>
                        <input className='py-2 rounded-lg ps-2 md:pe-16' type='text' placeholder='Search your service here' />
                        <button className='navBtn'>Search</button>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Banner;