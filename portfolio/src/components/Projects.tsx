import { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className="container mx-auto lg:px-32">
            <div className="flex flex-row items-center">
                <h1 className="text-2xl text-white"><span className="text-[#C778DD]">#</span>projets</h1>
                <div className="w-[50%] h-[2px] bg-[#C778DD] ml-4"></div>
                <a href="#" className="text-white font-semibold ml-auto hover:text-[#C778DD] transition duration-300 ease-in-out">Voir plus ~~&gt;</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;