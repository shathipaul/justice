import React, { useEffect, useState } from 'react';
import home from '../../assets/icon/Suitcase -gray.png'
import menu from '../../assets/icon/menu.png'
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'

const navData = [
    {id: 1, nav: 'Home', link: '/', type: 'home', icon: home},
    {id: 2, nav: 'Services', link: '/', type: 'home', icon: home},
    {id: 3, nav: 'Cases', link: '/', type: 'home', icon: home},
    {id: 4, nav: 'Blog', link: '/', type: 'home', icon: home},
    {id: 5, nav: 'Contact Us', link: '/', type: 'home', icon: home},
]

const Navbar = () => {
    const [expand, setExpand] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth <= 1366) {
            setExpand(false);
        }
    },[]);

    const handleExpand = () =>{
        setExpand(!expand);
    }
    return (
        <div className='nav-container hidden md:block'>
        <div className='mt-3 container'>
        {/* <span >
                    <img src={logoHead} alt="" width="40" height="50" />
                    {
                        expand && <img src={logoTail} alt="" width="140" height="50" />
                    }
                </span> */}
            <div className='mt-3'>
                <button className={`${expand ? 'btn-width' : ''} text-start flex justify-start align-center border-0 nav-btn-style-hide`} onClick={handleExpand}>
                    <img className='menu-icon-style' src={menu} alt="" width={30} />
                    {
                        expand && <span className='px-3 menu-icon-color'>
                            Hide Menu
                        </span>
                    }
                </button>
            </div>
            <div className='border menu-icon-color'>
                    <div>
                        {
                            navData.map(data => <div key={data.id} className='my-3'>
                                <Link to={data.link} className='removeUnderline'>
                                <button className={`${expand ? 'btn-width' : ''} text-start flex justify-start align-center nav-btn-style`}>
                                    <img className='menu-icon-style' src={`${location.pathname === data.link ? data.icon : data.icon}`} alt="" width={30} />
                                    {
                                        expand && <span className={`${location.pathname === data.link ? 'text-black' : 'menu-icon-color'} px-3`}>
                                            {data.nav}
                                        </span>
                                    }
                                </button>
                                </Link>

                            </div>)
                        }
                    </div>
            </div>
        </div>   
    </div>
    );
};

export default Navbar;