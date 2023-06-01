import React from 'react';
import business from '../assets/images/business.png'
import criminal from '../assets/images/criminal.png'
import child from '../assets/images/child.png'
import education from '../assets/images/education.png'
import divorce from '../assets/images/divorce.png'
import tax from '../assets/images/tax.png'
import frame from '../assets/images/Frame.png'

const Services = () => {
    const serviceData = [
        { id: 1, title: 'Business Law', des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', icon: business },
        { id: 2, title: 'Criminal Law', des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', icon: criminal },
        { id: 3, title: 'Child Support', des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', icon: child },
        { id: 4, title: 'Education Law', des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', icon: education },
        { id: 5, title: 'Divorce Law', des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', icon: divorce },
        { id: 6, title: 'Tax Law', des: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.', icon: tax },
    ]
    return (
        <>
            <div className='text-center py-8 '>
                <h2 className='custom-font text-2xl font-bold pb-2'>The Legal Practice Area</h2>
                <p className='w-4/5 lg:w-3/5 m-auto text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(data => <div
                        className='flex  flex-col items-center justify-center px-10 py-2'
                        key={data.id}>
                        <img src={data.icon} alt="" />
                        <h3 className='custom-font text-lg font-bold pt-2'>{data.title}</h3>
                        <p className='text-center text-md'>{data.des}</p>
                        <button className='py-4'><img src={frame} alt="" /></button>
                    </div>)
                }
            </div>
        </>
    );
};

export default Services;