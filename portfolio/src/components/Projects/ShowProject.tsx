import { useParams } from "react-router-dom";
import { Project } from "../../types/project";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";

const ShowProject: React.FC = () => {
  const { projectId } = useParams<{ projectId: string | any }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const projectIdNumber = parseInt(projectId);
    const foundProject = projects.find((project) => project.id === projectIdNumber);

    if (foundProject) {
      setProject(foundProject);
    } else {
      setProject(null);
    }
  }, [projectId]);

  return (
    <>
      <div id="projects" className="min-h-screen p-16 mt-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold dark:text-[#ABB2BF] text-[#282C33]">
              {project ? project.name : "Project Not Found"}
            </h2>
            <div className="w-16 h-1 bg-[#C778DD] mx-auto mt-4"></div>
          </div>
          {project && (
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover rounded-lg w-full"
                />
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="text-white">
                  <h3 className="text-2xl font-semibold dark:text-[#ABB2BF] text-[#282C33]">Description</h3>
                  <p className="mt-2 dark:text-[#ABB2BF] text-[#282C33]">{project.description}</p>
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold dark:text-[#ABB2BF] text-[#282C33]">Technologies</h3>
                  <div className="mt-2 space-x-4">
                    {project.technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="text-[#C778DD] border border-[#C778DD] px-2 py-1 rounded-md text-sm hover:bg-[#C778DD] hover:text-black transition duration-300 ease-in-out"
                      >
                        {technology.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowProject;
