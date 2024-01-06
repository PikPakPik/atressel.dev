import React from 'react';

const About = () => {
    return (
        <div id="about" className="container mx-auto px-4 md:px-12 py-12 lg:px-32 my-[10rem] md:my-25 flex flex-col gap-12">
            <section className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    <span className="text-[#C778DD]">#</span>a_propos
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg border-l-4 border-[#C778DD] pl-4">
                    Je suis étudiant à Epitech en première année de Master Of Science en préparation du diplôme de RNCP niv 7 Architecte Logiciel et Développement.
                    <br />
                    Passionné par le monde du développement, j'aime apprendre de nouvelles choses et j'en ai fait ma force. Je suis une personne très ouverte d'esprit et j'aime travailler en équipe pour résoudre des problèmes complexes.
                    <br />
                    Mon objectif est de devenir un développeur expérimenté et de contribuer à des projets innovants qui ont un impact positif sur la société.
                    <br />
                    En dehors du développement, j'aime voyager, découvrir de nouvelles cultures et pratiquer du sport comme le vélo ou la randonnée.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    <span className="text-[#C778DD]">#</span>formation
                </h2>
                <ol className="relative border-l-4 border-[#C778DD] pl-4">
                    <li className="mb-6">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Master Of Sciences</h3>
                            <p className="text-gray-500 dark:text-gray-400">Epitech Nantes</p>
                            <span className="text-sm text-gray-400">2023 - 2026</span>
                        </div>
                    </li>
                    <li className="mb-6">

                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">BTS SIO SLAM</h3>
                            <p className="text-gray-500 dark:text-gray-400">Lycée Polyvalent St Pierre La Joliverie</p>
                            <span className="text-sm text-gray-400">2021 - 2023</span>
                        </div>
                    </li>
                    <li className="mb-6">

                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bac Pro SN / ARED</h3>
                            <p className="text-gray-500 dark:text-gray-400">Lycée Professionnel François Arago</p>
                            <span className="text-sm text-gray-400">2018 - 2021</span>
                        </div>
                    </li>
                </ol>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    <span className="text-[#C778DD]">#</span>stages/emplois
                </h2>
                <ol className="relative border-l-4 border-[#C778DD] pl-4">
                    <li className="mb-6">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Développeur (Alternance)</h3>
                            <p className="text-gray-500 dark:text-gray-400">Infineo, La Chapelle Sur Erdre</p>
                            <span className="text-sm text-gray-400">Janvier 2024 - Maintenant</span>
                        </div>
                    </li>
                    <li className="mb-6">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Préparateur de commande (CDI Temps Partiel)</h3>
                            <p className="text-gray-500 dark:text-gray-400">Système U, La Chapelle Sur Erdre</p>
                            <span className="text-sm text-gray-400">Août 2022 - Décembre 2023</span>
                        </div>
                    </li>
                    <li className="mb-6">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Développeur (stage)</h3>
                            <p className="text-gray-500 dark:text-gray-400">Infineo, La Chapelle Sur Erdre</p>
                            <span className="text-sm text-gray-400">Janvier 2023 - Février 2023</span>
                        </div>
                    </li>
                    <li className="mb-6">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Développeur (stage)</h3>
                            <p className="text-gray-500 dark:text-gray-400">Zébratero, Nantes en remote</p>
                            <span className="text-sm text-gray-400">Mai 2022 - Juin 2022</span>
                        </div>
                    </li>
                </ol>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    <span className="text-[#C778DD]">#</span>bénévolat
                </h2>
                <ol className="relative border-l-4 border-[#C778DD] pl-4">
                    <li className="mb-6">
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">DevFest 2023</h3>
                            <p className="text-gray-500 dark:text-gray-400">GDG Nantes</p>
                            <span className="text-sm text-gray-400">Octobre 2023 (3 jours)</span>
                        </div>
                    </li>
                </ol>
            </section>
        </div>
    );
}

export default About;
