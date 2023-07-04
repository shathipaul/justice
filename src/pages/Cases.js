import React from 'react';
import video from '../assets/users/coming-soon-8707643-7035801.mp4'

const Cases = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <video autoPlay loop >
                <source type="video/mp4" src={video} />
            </video>
        </div>
    );
};

export default Cases;