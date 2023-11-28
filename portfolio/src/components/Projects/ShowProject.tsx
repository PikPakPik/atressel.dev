import { Link, useParams } from "react-router-dom";
import { Project } from "../../types/project";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import { IconType } from "react-icons";
import { t } from "i18next";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import 'react-image-gallery/styles/css/image-gallery.css';
import { IoClose } from "react-icons/io5";


const ShowProject: React.FC = () => {
  const { projectId } = useParams<{ projectId: string | any }>();
  const [project, setProject] = useState<Project | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const closeModal = () => setModalIsOpen(false);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const images = project?.images?.map(image => ({
    original: image,
    renderItem: () => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={image} onClick={() => openModal(image)} />
    )
  }));

  const Icon = ({ icon }: { icon: IconType }) => {
    const IconComponent = icon;
    return (
      <div className="flex items-center justify-center w-12 h-12 rounded-full border-[#C778DD] border-2">
        <IconComponent className="text-2xl dark:text-white text-[#282C33]" />
      </div>
    );
  }

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
                <ImageGallery
                  items={images || []}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  additionalClass="border border-[#C778DD] shadow-xl max-h-38"
                />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Image Preview"
                  overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                  className="outline-none p-4 bg-slate-900 rounded-lg shadow-xl flex flex-col items-center relative"
                >
                  {/* Bouton de fermeture en forme de croix */}
                  <button onClick={closeModal} className="absolute top-2 right-2 transition duration-300 ease-in-out hover:cursor-pointer">
                    <IoClose className="text-white text-2xl hover:text-[#C778DD] transition duration-300 ease-in-out" />
                  </button>

                  <img src={selectedImage} alt="Aperçu" className="max-w-7xl max-h-screen object-contain rounded-lg" /> 
                </Modal>
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
                      <div className="tooltip tooltip-bottom" data-tip={technology.name} key={index}>
                        <div>
                          <Icon icon={technology.icon} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {project.url && (
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold dark:text-[#ABB2BF] text-[#282C33]">Links</h3>
                    <div className="mt-2 space-x-4">
                      <a href={project.url} target="_blank" rel="noreferrer" className="text-[#C778DD] border border-[#C778DD] px-2 py-1 rounded-md text-sm hover:bg-[#C778DD] hover:text-black transition duration-300 ease-in-out">
                        Project
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="flex justify-center mt-8">
            <Link to={"/projects"} className="text-[#C778DD] border border-[#C778DD] px-2 py-1 rounded-md text-sm hover:bg-[#C778DD] hover:text-black transition duration-300 ease-in-out">
              {t("projects.back_button")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProject;
