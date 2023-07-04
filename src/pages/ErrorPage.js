import React from 'react';
import video from '../../src/assets/users/98642-error-404.mp4'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <video autoPlay loop >
                <source type="video/mp4" src={video} />
            </video>
        </div>
    );
};

export default ErrorPage;