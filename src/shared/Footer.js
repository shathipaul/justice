import React from 'react';
import logo from '../assets/images/logo.png';
import { BsSend } from 'react-icons/bs';
import email from '../assets/images/email.png'
import call from '../assets/images/call.png'
import location from '../assets/images/location.png'

const Footer = () => {
    return (
        <div className='bg-black text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 p-16 text-sm'>
            <div >
                <img src={logo} className='pb-6 w-32' alt='' />
                <p className='text-sm lg:w-1/2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div>
                <p className='custom-font text-xl font-bold pb-6'>Contact Now</p>
                <div className='flex items-center'>
                    <img className='w-5 mr-2' src={email} alt='' />
                    <p>info@gmail.com</p>
                </div>
                <div className='flex items-center'>
                    <img className='w-5 mr-2' src={call} alt='' />
                    <p className='py-3'>+88 01750 000 000</p>
                </div>
                <div className='flex items-center'>
                    <img className='w-6 mr-2' src={location} alt='' />
                    <p>555 4th 5t NW, Washington <br /> DC 20530, United States</p>
                </div>
            </div>
            <div>
                <p className='custom-font text-xl font-bold pb-6'>Subscribe</p>
                <p className='text-sm lg:w-1/2 pb-4'>Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
                <div className='flex'>
                    <input className='rounded-l-lg pl-2' placeholder='Email Address' />
                    <button className='p-3 rounded-r-lg btn-footer'><BsSend className=' text-white ' /></button>
                </div>
            </div>
        </div>
    );
};

export default Footer;