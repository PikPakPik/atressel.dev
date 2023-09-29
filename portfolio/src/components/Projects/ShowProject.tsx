import { useParams } from "react-router-dom";
import { Project } from "../../types/project"
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";

const ShowProject: React.FC = () => {
    const { projectId } = useParams<{ projectId: any }>();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const foundProject = projects.find((p) => p.id === projectId);

        if (foundProject) {
            setProject(foundProject);
        } else {
            setProject(null);
        }
    }, [projectId, projects]);


    return (
        <>
            <div id="projects" className="container mx-auto lg:px-32  my-[10rem] md:my-25">
                <div className="flex flex-row items-center justify-center md:justify-start">
                    <h2 className="text-3xl text-white"><span className="text-[#C778DD]">#</span>projets</h2>
                    <div className="w-[50%] h-[2px] bg-[#C778DD] ml-4 hidden md:block"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10 justify-items-center sm:px-0 px-10">
                    {project && (
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl text-white font-bold">{project.name}</h3>
                            <div className="w-[50%] h-[2px] bg-[#C778DD]"></div>
                            <p className="text-white text-center mt-4">{project.description}</p>
                            <div className="flex flex-row items-center justify-center gap-4 mt-4">
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="text-white text-sm">{technology.name}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ShowProject;