import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavLogo from '../shared/Navbar/NavLogo';
import { useForm } from 'react-hook-form';

const Main = () => {
    const { register, handleSubmit, data, reset, formState: { errors } } = useForm();
    return (
        <>
            {/* <Navbar/> */}
            <NavLogo
                register={register}
                handleSubmit={handleSubmit}
                data={data}
                errors={errors}
                reset={reset}
            />
            <Outlet data={data} />
            <Footer />
        </>
    );
};

export default Main;