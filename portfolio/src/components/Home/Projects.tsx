import { useTranslation } from "react-i18next";
import { Project } from "../../types/project";
import ProjectCard from "../ProjectCard";
import { Slide } from "react-awesome-reveal";

type ProjectsProps = {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    const { t } = useTranslation();
    return (
        <div id="projects" className="container mx-auto lg:px-20    ">
            <div className="flex flex-row items-center justify-center md:justify-start">
                <h2 className="text-3xl dark:text-white text-[#282C33]"><span className="text-[#C778DD]">#</span>{t("home.menu.projects")}</h2>
                <div className="w-[50%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
                <a href="projects" className="hidden md:block text-white font-semibold ml-auto hover:text-[#C778DD] transition duration-300 ease-in-out">{t("home.projects.show_more")} ~~&gt;</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10 justify-items-center sm:px-0 px-10">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Projects;