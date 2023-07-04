import React, { useState } from 'react';

const Accordion = ({ title, content, isOpenByDefault }) => {
    const [isOpen, setIsOpen] = useState(isOpenByDefault);
    // const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={` ${isOpen ? "h-32" : ""} transition-all duration-300 my-2 bg-gray-100 rounded-md h-14`}>
            <div
                className="flex items-center justify-between px-4 py-2 cursor-pointer"
                onClick={handleToggle}
            >
                <h3 className="py-2 text-lg font-medium">{title}</h3>
                <span className="text-gray-600">
                    {isOpen ? '-' : '+'}
                </span>
            </div>
            {isOpen && (
                <div className="px-4 py-2">
                    <p className="text-gray-700">{content}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;