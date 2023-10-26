


const About = () => {
    return (
        <>
            <div id="about" className="container mx-auto lg:px-32 my-[10rem] md:my-25 flex flex-col gap-12">
                <div className="flex flex-row items-center justify-center md:justify-start">
                    <h2 className="text-3xl dark:text-white text-[#282C33]"><span className="text-[#C778DD]">#</span>a_propos</h2>
                    <div className="w-[50%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
                </div>
                <div className="mt-10 justify-items-center sm:px-0 px-10 dark:text-white text-[#282C33]">
                    Je suis étudiant à Epitech en première année de Master Of Science en préparation du diplôme de RNCP niv 7 Architecte Logiciel et Développement. Passionné par le monde du développement, 
                    j'aime apprendre de nouvelles choses et j'en ai fait ma force. Je suis une personne très ouverte d'esprit et j'aime travailler en équipe pour résoudre des problèmes complexes. 
                    Mon objectif est de devenir un développeur expérimenté et de contribuer à des projets innovants qui ont un impact positif sur la société. En dehors du développement, j'aime voyager, découvrir de nouvelles cultures et pratiquer du sport comme le vélo ou la randonnée.
                </div>

                <div className="flex flex-row items-center justify-center md:justify-start">
                    <h2 className="text-3xl dark:text-white text-[#282C33]"><span className="text-[#C778DD]">#</span>formation</h2>
                    <div className="w-[50%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
                </div>
                <div className="mt-10 justify-items-center sm:px-0 px-10 text-white">


                    <ol className="items-center sm:flex">
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bac Pro SN / ARED</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2021</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lycée Professionnel François Arago</p>    
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BTS SIO SLAM</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2023</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lycée Polyvalent St Pierre La Joliverie</p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master Of Sciences</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2023 - 2026</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Epitech Nantes</p>
                            </div>
                        </li>
                    </ol>

                </div>
                <div className="flex flex-row items-center justify-center md:justify-start">
                    <h2 className="text-3xl dark:text-white text-[#282C33]"><span className="text-[#C778DD]">#</span>stages/emplois</h2>
                    <div className="w-[50%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
                </div>
                <div className="mt-10 justify-items-center sm:px-0 px-10 text-white">


                    <ol className="items-center sm:flex">
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Développeur</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mai 2022 - Juin 2022</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Zébratero, Nantes en remote</p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Developpeur</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Janvier 2023 - Février 2023</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Infineo, La Chapelle Sur Erdre</p>
                            </div>
                        </li>
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Préparateur de commande</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aout 2022 - Decembre 2023</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Systeme U, La Chapelle Sur Erdre</p>
                            </div>
                        </li>
                    </ol>

                </div>
                <div className="flex flex-row items-center justify-center md:justify-start">
                    <h2 className="text-3xl dark:text-white text-[#282C33]"><span className="text-[#C778DD]">#</span>bénévola</h2>
                    <div className="w-[50%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
                </div>
                <div className="mt-10 justify-items-center sm:px-0 px-10 text-white">


                    <ol className="items-center sm:flex">
                        <li className="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-800 shrink-0">
                                    <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DevFest 2023</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Octobre 2023 (3 jours)</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">GDG Nantes</p>
                            </div>
                        </li>
                    </ol>

                </div>
            </div>
        </>
    )
}

export default About