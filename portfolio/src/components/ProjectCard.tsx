import { useTranslation } from "react-i18next";
import { Project } from "../types/project";
import { useNavigate } from "react-router-dom";

type ProjectCardProps = {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const navigate = useNavigate();
    const goProject = (id: number) => {
        navigate(`/projects/${id}`);
    }

    const { t } = useTranslation();

    return (
        <div className='flex flex-col border-[1px] dark:border-[#ABB2BF] border-[#282C33] sm:w-[300px] lg:md:w-[400px]'>
            <div className='border-[#ABB2BF] border-b-[1px]'>
                <img src={project.image} alt={project.name} className='w-full h-[200px] object-cover' />
            </div>
            <div className="flex flex-row border-b-[1px] border-[#ABB2BF] w-full uppercase px-4 overflow-auto">
                {project.technologies.map((technology, index) => (
                    <div className='dark:text-[#ABB2BF] text-[#282C33] my-1' key={index} style={{ marginRight: '10px' }}>
                        {technology.name}
                    </div>
                ))}
            </div>
            <div className='w-full'>
                <div className='dark:text-white text-lg font-medium px-4 my-4 text-[#282C33]'>
                    {project.name}
                </div>
                <div className='dark:text-[#ABB2BF] text-[#282C33] px-4 mb-4'>
                    {project.description.length > 100 ? project.description.substring(0, 100) + '...' : project.description}
                </div>
                <div className='flex flex-row px-4 mb-4'>
                    <button className='border-[#C778DD] border-[1px] dark:text-white font-semibold px-4 py-2 mr-4 hover:bg-[#C778DD] dark:hover:text-black hover:text-white transition duration-300 ease-in-out text-[#282C33]' onClick={() => goProject(project.id)}>
                        {t("projects.button")}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard