import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { toast } from 'react-toastify';


const Home = ({ data }) => {

    useEffect(() => {
        if (data) {
            console.log(data);
            toast.success('Consultation Booked');
        }
    }, [data]);
    return (
        <div className='pt-4 pb-16 px-2 lg:px-40 md:px-20'>
            <Banner />
            <Services />
            <Reviews />
            <FAQ />
            <Contact />
        </div>
    );
};

export default Home;