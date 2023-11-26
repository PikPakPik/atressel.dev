import React, { useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { CircleFlag } from 'react-circle-flags';
import { LANGUAGES } from '../../constants/index';
import { useTranslation } from 'react-i18next';

const LangageMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { i18n } = useTranslation();
    const selectedLanguage = i18n.language;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (language:string) => {
        i18n.changeLanguage(language);  
    };

    return (
        <div className="">
            <div className="relative flex">
                <button
                    onClick={toggleDropdown}
                    className="bg-white rounded-full p-2 shadow-md focus:outline-none dark:hover:text-[#C778DD] hover:text-[#C778DD] transition duration-300 ease-in-out z-20"
                    name='langage'
                    aria-label='langage'
                >
                    <IoLanguage size={24} />
                </button>
                <div
                    className={`${
                        isOpen
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-[43px] opacity-0'
                    } absolute mt-2 p-2 rounded-full shadow-lg bg-white border -top-20 left-0 transform transition-transform ease-in-out duration-700    z-10`}
                >
                    <ul className="flex flex-col space-y-2 rounded-lg">
                        {LANGUAGES.map((language) => (
                            <li
                                key={language.code}
                                onClick={() => changeLanguage(language.code)}
                                className="flex items-center space-x-2 rounded-lg cursor-pointer"
                            >
                                <CircleFlag
                                    aria-label={language.code}
                                    countryCode={language.code}
                                    height="24"
                                    className={`rounded-full ${
                                        selectedLanguage === language.code
                                            ? 'ring-2 ring-[#C778DD]'
                                            : ''
                                    } hover:ring-2 hover:ring-[#C778DD] transition duration-300 ease-in-out`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LangageMenu;
