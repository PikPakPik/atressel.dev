import { Project } from "../../types/project"
import About from "../Home/About"
import Contact from "../Home/Contact"
import Hero from "../Home/Hero"
import Projects from "../Home/Projects"

const projects: Project[] = [
    {
      name: 'Project 1',
      description: 'This is a description for project 1',
      image: 'https://picsum.photos/300/200',
      url: 'https://google.com',
      technologies: [
        {
          name: 'React',
          image: 'https://picsum.photos/300/200'
        },
        {
          name: 'Tailwind',
          image: 'https://picsum.photos/300/200'
        }
      ],
      homePage: true
    },
    {
      name: 'Project 2',
      description: 'This is a description for project 2',
      image: 'https://picsum.photos/300/200',
      url: 'https://google.com',
      technologies: [
        {
          name: 'React',
          image: 'https://picsum.photos/300/200'
        },
        {
          name: 'Tailwind',
          image: 'https://picsum.photos/300/200'
        }
      ],
      homePage: true
    },
    {
      name: 'Project 3',
      description: 'This is a description for project 3',
      image: 'https://picsum.photos/300/200',
      url: 'https://google.com',
      technologies: [
        {
          name: 'React',
          image: 'https://picsum.photos/300/200'
        },
        {
          name: 'Tailwind',
          image: 'https://picsum.photos/300/200'
        }
      ],
      homePage: true
    },
    {
      name: 'Project 4',
      description: 'This is a description for project 4',
      image: 'https://picsum.photos/300/200',
      url: 'https://google.com',
      technologies: [
        {
          name: 'React',
          image: 'https://picsum.photos/300/200'
        },
        {
          name: 'Tailwind',
          image: 'https://picsum.photos/300/200'
        }
      ],
      homePage: false
    },
    {
      name: 'Project 5',
      description: 'This is a description for project 5',
      image: 'https://picsum.photos/300/200',
      url: 'https://google.com',
      technologies: [
        {
          name: 'React',
          image: 'https://picsum.photos/300/200'
        },
        {
          name: 'Tailwind',
          image: 'https://picsum.photos/300/200'
        }
      ],
      homePage: false
    },
    {
      name: 'Project 6',
      description: 'This is a description for project 6',
      image: 'https://picsum.photos/300/200',
      url: 'https://google.com',
      technologies: [
        {
          name: 'React',
          image: 'https://picsum.photos/300/200'
        },
        {
          name: 'Tailwind',
          image: 'https://picsum.photos/300/200'
        }
      ],
      homePage: false
    }
  ]

const Home = () => {
    return (
        <>
            <Hero />
            <Projects projects={projects} />
            <About />
            <Contact />
        </>
    )
}

export default Home