import React, { useEffect, useState } from 'react';
import './NavBar.css'
import logo from '../../assets/images/logo2.png'
import menu from '../../assets/icon/menu.png'
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const NavLogo = () => {
    const [expand, setExpand] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, data, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset()

    };
    useEffect(() => {
        if (data) {
            toast.success('Consultation Booked');
        }
    }, [data])


    const navData = [
        { id: 1, nav: 'Home', link: '/', type: 'home' },
        { id: 2, nav: 'Services', link: '/', type: 'home' },
        { id: 3, nav: 'Cases', link: '/', type: 'home' },
        { id: 4, nav: 'Blog', link: '/', type: 'home' },
        { id: 5, nav: 'Contact Us', link: '/', type: 'home' },
    ];

    const handleExpand = () => {
        setExpand(!expand);
    }

    const handleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='hidden md:block'>
                <div className='flex justify-evenly py-4'>
                    <img src={logo} alt="" />
                    <div className='flex items-center'>
                        {
                            navData.map(data =>
                                <Link key={data.id} to={data.link} className='px-2 lg:px-4 font-semibold text-gray-600'>{data.nav}</Link>)
                        }
                    </div>
                    <button className='navBtn' onClick={handleDrawer} >
                        Free Consultation
                    </button>
                </div>
            </div>

            {isOpen && <Modal
                handleDrawer={handleDrawer}
                register={register}
                handleSubmit={handleSubmit}
                data={data}
                errors={errors}
                onSubmit={onSubmit} />}

            {/* Mobile Nav */}
            <div className='flex justify-between px-4 py-3 md:hidden'>
                <button onClick={handleExpand}>
                    <img src={menu} alt="" width={30} />
                </button>
                <img src={logo} alt="" width={120} />
                <button className='navBtnMobile'>Free Consultation</button>
            </div>

            {
                expand && <div className='flex flex-col items-start'>
                    {
                        navData.map(data =>
                            <Link key={data.id} to={data.link} className='font-semibold text-gray-600'>{data.nav}</Link>)
                    }
                </div>
            }

        </>
    );
};

export default NavLogo;