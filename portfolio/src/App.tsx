import React from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Hero from './components/Home/Hero';
import Projects from './components/Home/Projects';
import { Project } from './types/project';
import About from './components/Home/About';
import ScrollToTop from './components/layouts/ScrollToTop';

function App() {

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

  return (
    <>
      <Header />
      <div className="flex flex-col gap-[10rem] md:gap-[7rem]">
        <Hero />
        <About />
        <Projects projects={projects} />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App; 
