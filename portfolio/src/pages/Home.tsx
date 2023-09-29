import About from "../components/Home/About"
import Contact from "../components/Home/Contact"
import Hero from "../components/Home/Hero"
import Projects from "../components/Home/Projects"
import { projects } from "../data/projects"


const Home = () => {
    let projectsHome = projects.filter(project => project.homePage)
    return (
        <>
            <Hero />
            <About />
            <Projects projects={projectsHome} />
            <Contact />
        </>
    )
}

export default Home