import React, { useEffect } from 'react';
import location from '../assets/images/location.png';
import call from '../assets/images/call.png';
import email from '../assets/images/email.png';
import time from '../assets/images/time.png';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const { register, handleSubmit, data, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
        if (data) {
            toast.success('Thanks for your message');
        }
    };

    useEffect(() => {
        if (data) {
            toast.success('Thanks for your message');
        }
    }, [data]);



    const contactData = [
        { id: 1, title: 'Address', des: 'A108 Adam Street, New York, NY 535022', icon: location },
        { id: 2, title: 'Call Us', des: '+88 01750 00 00 00', icon: call },
        { id: 3, title: 'Email Us', des: 'info@gmail.com', icon: email },
        { id: 4, title: 'Working Hours', des: 'Mon-Fri: 9AM to 5PM Sunday: 9AM to 1 PM', icon: time },
    ];

    return (
        <>
            <div id='contact' className='text-center my-10'>
                <h2 className='custom-font text-2xl font-bold pb-2'>Contact with Us</h2>
                <p className='w-4/5 lg:w-3/5 m-auto text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='grid grid-cols-2'>
                    {
                        contactData.map(data => <div
                            key={data.id}
                            className='bg-gray-100 flex flex-col items-center py-4 px-2 md:px-12 lg:px-8 border'>
                            <img src={data.icon} alt='' />
                            <p className='custom-font font-semibold pt-2'>{data.title}</p>
                            <p className='text-center'>{data.des}</p>
                        </div>)
                    }
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Your Name"
                        name='name'
                        {...register("name", { required: true })}
                        className="rounded bg-gray-100 py-2 pl-2"
                    />
                    {errors.name && <span>This field is required</span>}

                    <input
                        type="email"
                        placeholder="Your Email"
                        name='email'
                        {...register("email", { required: true })}
                        className="rounded bg-gray-100 py-2 pl-2 my-3"
                    />
                    {errors.email && <span>This field is required</span>}

                    <input
                        type="text"
                        placeholder="Subject"
                        name='subject'
                        {...register("subject", { required: true })}
                        className="rounded bg-gray-100 py-2 pl-2"
                    />
                    {errors.subject && <span>This field is required</span>}

                    <input
                        type="text"
                        name='message'
                        placeholder="Your Message"
                        {...register("message", { required: true })}
                        className="rounded bg-gray-100 pt-2 pb-16 pl-2 my-3"
                    />
                    {errors.message && <span>This field is required</span>}

                    <button type="submit" className="navBtn">Send Message</button>
                </form>
            </div>


        </>
    );
};

export default Contact;