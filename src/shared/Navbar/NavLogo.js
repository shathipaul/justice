import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/images/logo2.png";
import menu from "../../assets/icon/menu.png";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { toast } from "react-toastify";

const NavLogo = ({ register, handleSubmit, data, reset, errors }) => {
    const [expand, setExpand] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        handleDrawer();
        reset();
    };

    // useEffect(() => {
    //     if (data) {
    //         toast.success('Consultation Booked');
    //     }
    // }, [data]);

    const navData = [
        { id: 1, nav: "Home", link: "/", type: "home" },
        { id: 2, nav: "Services", link: "/", type: "home" },
        { id: 3, nav: "Cases", link: "/cases", type: "home" },
        { id: 4, nav: "Blog", link: "/blog", type: "home" },
        { id: 5, nav: "Contact Us", link: "contact", type: "home" },
    ];

    const handleExpand = () => {
        setExpand(!expand);
    };

    const handleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="relative">
                <div className="hidden md:block">
                    <div className="flex py-4 justify-evenly">
                        <img src={logo} alt="" />
                        <div className="flex items-center">
                            {navData.map((data) => (
                                <Link
                                    key={data.id}
                                    to={data.link}
                                    className="px-2 font-semibold text-gray-600 lg:px-4"
                                >
                                    {data.nav}
                                </Link>
                            ))}
                        </div>
                        <button className="navBtn" onClick={handleDrawer}>
                            Free Consultation
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? "-mr-[0px]  " : "-mr-[1000px] "} transition-all ease-in-out duration-500 z-[999] fixed top-0 right-0`}>
                    <Modal
                        handleDrawer={handleDrawer}
                        register={register}
                        handleSubmit={handleSubmit}
                        data={data}
                        errors={errors}
                        onSubmit={onSubmit}
                    />
                </div>

                {/* Mobile Nav */}
                <div className="flex justify-between px-4 py-3 md:hidden">
                    <button onClick={handleExpand}>
                        <img src={menu} alt="" width={30} />
                    </button>
                    <img src={logo} alt="" width={120} />
                    <button className="navBtn" onClick={handleDrawer}>
                        Free Consultation
                    </button>
                </div>

                {/* {expand && (
                    <>
                        <div className="absolute flex flex-col items-start z-[999] bg-white px-5 py-2 pb-4">
                            {navData.map((data) => (
                                <Link
                                    key={data.id}
                                    to={data.link}
                                    className="font-semibold text-gray-600"
                                >
                                    {data.nav}
                                </Link>
                            ))}
                        </div>

                    </>
                )} */}


                <div className={`${expand ? "h-[135px] visible " : "h-0 invisible"} absolute flex flex-col items-start z-[999] bg-white px-5 py-2 pb-4 transition-all duration-500 ease-in-out `}>
                    {navData.map((data) => (
                        <Link
                            key={data.id}
                            to={data.link}
                            className={`${expand ? " visible delay-300" : "invisible"} font-semibold text-gray-600`}
                        >
                            {data.nav}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavLogo;
