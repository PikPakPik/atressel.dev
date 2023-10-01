import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants"
import { ChangeEvent, useState } from "react";


const LangageMenu = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<string>("fr")

    const changeLanguage = (lang: string) => {
        setLanguage(lang)
        i18n.changeLanguage(lang)
    }
    return (
        <>
            <div className="dropdown dropdown-right dropdown-end fixed bottom-0 mb-16 ml-2 rounded-full">
                <label tabIndex={0} className="btn m-1"><span className={`fi fi-${language} w-6 h-6 text-lg rounded-full border-0 shadow-none`}></span></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {LANGUAGES.map((lang) => (
                        <li>
                            <span className={`fi fi-${lang.code} w-7 h-7 rounded-full border-0 shadow-none`} onClick={() => changeLanguage(lang.code)}></span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default LangageMenu