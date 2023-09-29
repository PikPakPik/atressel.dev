import { projects } from "../data/projects"
import Projects from "../components/Projects/index"

const ProjectsPage = () => {
    return (
        <>
            <Projects projects={projects} />
        </>
    )
}

export default ProjectsPage