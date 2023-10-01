import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div id="about" className="container mx-auto lg:px-20">
            <div className="flex flex-row items-center justify-center md:justify-start">
                <h2 className="text-3xl dark:text-white text-[#282C33]"><span className="text-[#C778DD]">#</span>{t("home.menu.about")}</h2>
                <div className="w-[25%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 px-10 md:px-0">
                <div className="w-full lg:w-1/2 dark:text-gray-400 text-[#282C33]">
                    <p>{t("home.about.first")}</p>
                    <p className="mt-5">{t("home.about.second")}</p>
                    <p className="mt-5">{t("home.about.third")}</p>
                    <button className="border-[#C778DD] border-2 dark:text-white text-[#282C33] font-semibold px-4 py-2 mt-4 w-fit hover:bg-[#C778DD] dark:hover:text-black hover:text-white transition duration-300 ease-in-out">{t("home.about.button")} -&gt;</button>
                </div>
                <div className="w-full lg:w-1/2 lg:flex lg:justify-center hidden">
                    <img src="https://picsum.photos/500/500" alt="Alexandre" className="w-[300px] h-[300px] rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default About;
