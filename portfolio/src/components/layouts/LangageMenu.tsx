import React, { useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { FaFlag } from 'react-icons/fa';

const LangageMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (language: any) => {
        setSelectedLanguage(language);
        setIsOpen(false);
        // You can add logic to change the application's language here
    };

    return (
        <div className="fixed bottom-16 left-4">
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="bg-white rounded-full p-2 shadow-md focus:outline-none"
                >
                    <IoLanguage size={24} />
                </button>
                {isOpen && (
                    <div className="absolute mt-2 p-2 rounded-full shadow-lg bg-white border -top-24 left-0">
                        <ul className="flex flex-col space-y-2 rounded-lg">
                            <button
                                className="block text-sm text-start items-center hover:bg-gray-100"
                                role="menuitem"
                            >
                                <span className='fi fi-gb text-lg' />
                            </button>
                            <button
                                className="block text-sm text-start items-center hover:bg-gray-100"
                                role="menuitem"
                            >
                                <span className='fi fi-gb text-lg' />
                            </button>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LangageMenu;
