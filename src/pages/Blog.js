import React from 'react';
import video from '../assets/users/coming-soon-message-8642642-6872531.mp4'

const Blog = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <video autoPlay loop >
                <source type="video/mp4" src={video} />
            </video>
        </div>
    );
};

export default Blog;