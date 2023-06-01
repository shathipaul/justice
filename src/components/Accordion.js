import React, { useState } from 'react';

const Accordion = ({ title, content, isOpenByDefault }) => {
    const [isOpen, setIsOpen] = useState(isOpenByDefault);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="bg-gray-100 my-2 rounded-md">
            <div
                className="flex justify-between items-center px-4 py-2 cursor-pointer"
                onClick={handleToggle}
            >
                <h3 className="text-lg font-medium py-2">{title}</h3>
                <span className="text-gray-600">
                    {isOpen ? '-' : '+'}
                </span>
            </div>
            {isOpen && (
                <div className="px-4 py-2 ">
                    <p className="text-gray-700">{content}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;