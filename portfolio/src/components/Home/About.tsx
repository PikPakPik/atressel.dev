const About: React.FC = () => {
    return (
        <div id="about" className="container mx-auto lg:px-32">
            <div className="flex flex-row items-center justify-center md:justify-start">
                <h2 className="text-3xl dark:text-white text-[#282C33]"><span className="text-[#C778DD]">#</span>a_propos</h2>
                <div className="w-[25%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
            </div>
            <div className="flex flex-col lg:flex-row mt-10 px-10 md:px-0">
                <div className="w-full lg:w-1/2 dark:text-gray-400 text-[#282C33]">
                    <p>Salut ! Je m'appelle Alexandre !</p>
                    <p className="mt-5">Je suis étduiant en Master à Epitech Nantes, j'ai toujours été passioné par l'informatique et le développement. J'ai commencé à apprendre le développement web en 2017, et depuis je n'ai jamais arrêté d'apprendre !</p>
                    <p className="mt-5">Cette soif d'apprendre est l'une de mes plus grandes qualités, je suis toujours curieux de découvrir de nouvelles technologies et de nouveaux langages de programmation.</p>
                    <button className="border-[#C778DD] border-2 dark:text-white text-[#282C33] font-semibold px-4 py-2 mt-4 w-fit hover:bg-[#C778DD] dark:hover:text-black hover:text-white transition duration-300 ease-in-out">En savoir plus -&gt;</button>
                </div>
                <div className="w-full lg:w-1/2 lg:flex lg:justify-center hidden">
                    <img src="https://picsum.photos/500/500" alt="Alexandre" className="w-[300px] h-[300px] rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default About;
