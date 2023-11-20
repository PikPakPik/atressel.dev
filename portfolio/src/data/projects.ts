import { Project } from "../types/project";
import portoflio from '../assets/img/projects/portfolio.png';
import infineocdataclient from '../assets/img/projects/infineocdata.png';
import prisel from '../assets/img/projects/prisel.png';
import gitlabbackup from '../assets/img/projects/gitlabbackup.png';
import discordbot from '../assets/img/projects/discordbot.png';
import jobboard from '../assets/img/projects/jobboard.png';
import epitale from '../assets/img/projects/epitale.png';
import { BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiSolidData } from "react-icons/bi";
import { SiCsharp, SiDiscord, SiDotnet, SiGitlab, SiGradle, SiNextdotjs, SiPrisma, SiScaleway, SiTypescript, SiUikit } from "react-icons/si";


export const projects: Project[] = [
    {
      id: 1,
      name: 'Portfolio',
      description: 'Création et publication de mon portfolio afin de me créer une identité numérique et permettre d\'avoir un support pour présenter mes projets.',
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
      id: 7,
      name: 'Epitale (Undertale)',
      description: 'Création d\'un jeu vidéo en 2D avec libGDX (Java), dans le style de Undertale, regroupant des boss à battre afin de pouvoir accéder à différents boutons pour ouvrir des portes et ainsi avancer dans le jeu. Projet réalisé dans le cadre de ma formation à EPITECH.',
      image: epitale,
      technologies: [
        {
          name: 'Java',
          icon: BiLogoJava
        },
        {
          name: 'libGDX',
          icon: SiGradle
        }
      ],
      homePage: true
    },
    {
      id: 6,
      name: 'JobBoard',
      description: 'Site de recherche d\'emploi avec des offres d\'emploi et des candidatures, ainsi qu\'un espace administrateur pour gérer les offres et les candidatures. Projet réalisé dans le cadre de ma formation à EPITECH.',
      image: jobboard,
      technologies: [
        {
          name: 'React',
          icon: BiLogoReact
        },
        {
          name: 'Prisma',
          icon: SiPrisma
        },
        {
          name: 'NodeJS',
          icon: BiLogoNodejs
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
      description: 'Client lourd permettant de se connecter à une base de données grâce à CData et d\'effectuer des requêtes SQL. Projet réalisé dans le cadre de mon stage de fin de BTS SIO.',
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
      homePage: false
    },
    {
      id: 3,
      name: 'Prisel.fr',
      description: 'Site vitrine de l\'entreprise Prisel, évoluant dans le domaine du jeu vidéo.',
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
      homePage: false
    },
    {
      id: 4,
      name: 'BackupGitLab',
      description: 'Sauvegarde des projets GitLab sur un bucket S3 de Scaleway. Projet réalisé dans le cadre de mon stage de fin de BTS SIO.',
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
      description: 'Bot Discord pour le serveur de l\'entreprise Prisel, permettant de gérer les rôles et les salons, ou encore de faire des sondages.',
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
