import { Project } from "../../types/project"
import ProjectCard from "../ProjectCard";

type ProjectsProps = {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <>
            <div id="projects" className="container mx-auto lg:px-32  my-[10rem] md:my-25">
                <div className="flex flex-row items-center justify-center md:justify-start">
                    <h2 className="text-3xl text-white"><span className="text-[#C778DD]">#</span>projets</h2>
                    <div className="w-[50%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10 justify-items-center sm:px-0 px-10">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;