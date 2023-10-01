import { Project } from "../types/project";
import portoflio from '../assets/img/projects/portfolio.png';
import infineocdataclient from '../assets/img/projects/infineocdata.png';
import prisel from '../assets/img/projects/prisel.png';
import gitlabbackup from '../assets/img/projects/gitlabbackup.png';
import discordbot from '../assets/img/projects/discordbot.png';
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiSolidData } from "react-icons/bi";
import { SiCsharp, SiDiscord, SiDotnet, SiGitlab, SiNextdotjs, SiScaleway, SiTypescript, SiUikit } from "react-icons/si";


export const projects: Project[] = [
    {
      id: 1,
      name: 'Portfolio',
      description: 'Creation of my portfolio',
      image: portoflio,
      url: 'https://atressel.dev',
      technologies: [
        {
          name: 'TypeScript',
          icon: BiLogoTypescript
        },
        {
          name: 'React',
          icon: BiLogoReact
        },
        {
          name: 'Tailwind',
          icon: BiLogoTailwindCss
        }
      ],
      homePage: true
    },
    {
      id: 2,
      name: 'InfineoCData Client',
      description: 'Envoie de requêtes SQL vers différents types de bases de données',
      image: infineocdataclient,
      technologies: [
        {
          name: 'C#',
          icon: SiCsharp
        },
        {
          name: '.NET',
          icon: SiDotnet
        },
        {
          name: 'AvaloniaUI',
          icon: SiUikit
        },
        {
          name: 'CData',
          icon: BiSolidData
        },
      ],
      homePage: true
    },
    {
      id: 3,
      name: 'Prisel.fr',
      description: 'Site vitrine de l\'entreprise Prisel',
      image: prisel,
      url: 'https://prisel.fr',
      technologies: [
        {
          name: 'React',
          icon: BiLogoReact
        },
        {
          name: 'Tailwind',
          icon: BiLogoTailwindCss
        }
      ],
      homePage: true
    },
    {
      id: 4,
      name: 'BackupGitLab',
      description: 'Sauvegarde des projets GitLab sur un bucket S3',
      image: gitlabbackup,
      technologies: [
        {
          name: 'TypeScript',
          icon: SiTypescript
        },
        {
          name: 'NextJS',
          icon: SiNextdotjs
        },
        {
          name: 'GitLab',
          icon: SiGitlab
        },
        {
          name: 'Scaleway',
          icon: SiScaleway
        }
      ],
      homePage: false
    },
    {
      id: 5,
      name: 'Bot Discord',
      description: 'Bot Discord pour le serveur de l\'entreprise Prisel',
      image: discordbot,
      technologies: [
        {
          name: 'JavaScript',
          icon: BiLogoJavascript
        },
        {
          name: 'Discord.js',
          icon: SiDiscord
        }
      ],
      homePage: false
    }
  ]
