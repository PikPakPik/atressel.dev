import { Project } from "../types/project";

type ProjectCardProps = {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    const goProject = (id: number) => {
        window.location.href = `/projects/${id}`;
    }

    return (
        <div className='flex flex-col border-[1px] border-[#ABB2BF] w-[400px]'>
            <div className='border-[#ABB2BF] border-b-[1px]'>
                <img src={project.image} alt={project.name} className='w-full h-full' />
            </div>
            <div className="flex flex-row border-b-[1px] border-[#ABB2BF] w-full uppercase px-4">
                {project.technologies.map((technology, index) => (
                    <div className='text-[#ABB2BF] my-1' key={index} style={{ marginRight: '10px' }}>
                        {technology.name}
                    </div>
                ))}
            </div>
            <div className='w-full'>
                <div className='text-white text-lg font-medium px-4 my-4'>
                    {project.name}
                </div>
                <div className='text-[#ABB2BF] px-4 mb-4'>
                    {project.description}
                </div>
                <div className='flex flex-row px-4 mb-4'>
                    <button className='border-[#C778DD] border-[1px] text-white font-semibold px-4 py-2 mr-4 hover:bg-[#C778DD] hover:text-black transition duration-300 ease-in-out' onClick={() => goProject(project.id)}>
                        Voir le projet
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard