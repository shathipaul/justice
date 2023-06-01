import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavLogo from '../shared/Navbar/NavLogo';

const Main = () => {
    return (
        <>
        {/* <Navbar/> */}
        <NavLogo/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default Main;