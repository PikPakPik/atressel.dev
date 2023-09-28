import Typed from "typed.js";
import { useEffect, useRef } from "react";

import me from '../../assets/img/me.png';
import bg_me from '../../assets/img/bg-me.png';

const Hero: React.FC = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["passioné", "curieux", "développeur"],
            loop: true,
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div id="home" className="container mx-auto mt-[10rem] md:mt-20 -mb-10 lg:px-20 flex md:flex-row md:justify-center gap-20 px-10 md:h-[30rem] h-[30rem] flex-col justify-center">
            <div className="flex flex-col self-center">
                <h1 className="text-3xl font-semibold text-white">Je m'appelle Alexandre alias <br/><span className="text-[#C778DD]">PikPak</span></h1>
                <h2 className="text-2xl text-white">Je suis <span ref={el}></span></h2>
                <button className="border-[#C778DD] border-2 text-white font-semibold px-4 py-2 mt-4 w-fit hover:bg-[#C778DD] hover:text-black transition duration-300 ease-in-out">Me contacter</button>
            </div>
            <div className="flex flex-col items-center justify-center relative ">
                <img src={bg_me} alt="Background behind Alexandre" className="w-[30rem]" />
                <img src={me} alt="Alexandre" className="w-[20rem] absolute inset-0 m-auto" />
            </div>
        </div>
    )
}

export default Hero;
