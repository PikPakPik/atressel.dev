import Typed from "typed.js";
import { useEffect, useRef } from "react";

import me from '../../assets/img/me.png';
import bg_me from '../../assets/img/bg-me.png';
import { useTranslation } from "react-i18next";

import { JackInTheBox } from "react-awesome-reveal";

const Hero: React.FC = () => {
    const el = useRef(null);
    const { t, i18n } = useTranslation();
    let listTrans = t("home.hero.typed", { returnObjects: true }) as string[];

    const scrollTo = (link: string) => {
        const element = document.getElementById(link);
        if (element) {
            if (element)
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }
    }

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: listTrans,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: "|",
            backDelay: 1000,
            smartBackspace: true,
        });

        return () => {
            typed.destroy();
        }
    }, [i18n.language, listTrans])
    return (
        <div id="home" className="container mx-auto mt-[10rem] md:mt-20 -mb-10 lg:px-20 flex md:flex-row md:justify-center gap-20 px-10 md:h-[30rem] h-[30rem] flex-col justify-center">
            <div className="flex flex-col self-center">
                <h1 className="text-3xl font-semibold dark:text-white text-[#282C33]">{t("home.hero.title")} <br /><span className="text-[#C778DD]">PikPak</span></h1>
                <h2 className="text-2xl dark:text-white text-[#282C33]">{t("home.hero.subtitle")} <span ref={el}></span></h2>
                <button className="border-[#C778DD] border-2 dark:text-white text-[#282C33] font-semibold px-4 py-2 mt-4 w-fit hover:bg-[#C778DD] dark:hover:text-black hover:text-white transition duration-300 ease-in-out" onClick={() => scrollTo("contact")}>{t("home.hero.button")}</button>
            </div>
            <div className="flex flex-col items-center justify-center relative ">
                <JackInTheBox triggerOnce>
                    <img src={bg_me} alt="Background behind Alexandre" className="w-[30rem]" />
                </JackInTheBox>
                <img src={me} alt="Alexandre" className="w-[20rem] absolute inset-0 m-auto" />
            </div>
        </div>
    )
}

export default Hero;
