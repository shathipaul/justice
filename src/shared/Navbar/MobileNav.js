import React from 'react';
import logo from '../../assets/images/logo2.png'

const MobileNav = () => {
    return (
        <div className='md:none py-2 fixed bg-white header-zIndex'>
            <div className='flex justify-between'>
                <img src={logo} alt="" height='50' />
            </div>
        </div>
    );
};

export default MobileNav;