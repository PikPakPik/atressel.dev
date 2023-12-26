import { Project } from "../types/project";

import portoflio from '../assets/img/projects/portfolio/portfolio.webp';
import portfolioprojects from '../assets/img/projects/portfolio/portfolio_project.webp';

import infineocdataclient from '../assets/img/projects/infineocdata.webp';
import prisel from '../assets/img/projects/prisel.webp';
import gitlabbackup from '../assets/img/projects/gitlabbackup.webp';
import discordbot from '../assets/img/projects/discordbot.webp';
import jobboard from '../assets/img/projects/jobboard.webp';
import epitale from '../assets/img/projects/epitale.webp';
import nsa501 from '../assets/img/projects/nsa501.webp';
import { BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiSolidData } from "react-icons/bi";
import { SiCsharp, SiDebian, SiDiscord, SiDotnet, SiFreebsd, SiGitlab, SiGradle, SiMysql, SiNextdotjs, SiNginx, SiOpenbsd, SiPhp, SiPrisma, SiScaleway, SiTypescript, SiUikit, SiWindows10 } from "react-icons/si";


export const projects: Project[] = [
    {
      id: 1,
      name: 'Portfolio',
      description: 'Création et publication de mon portfolio afin de me créer une identité numérique et permettre d\'avoir un support pour présenter mes projets.',
      image: portoflio,
      images: [
        portoflio,
        portfolioprojects
      ],
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
      images: [
        epitale
      ],
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
      images: [
        jobboard
      ],
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
      images: [
        infineocdataclient
      ],
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
      id: 8,
      name: 'DHCP Infrastucture',
      description: 'Création d\'une infrastructure DHCP avec un serveur DHCP (OpenBSD) et un serveur WEB (FreeBSD) et deux machines clients (Libre OS). Le but étant de créer un serveur DHCP avec 3 interfaces réseaux avec différentes spécifications, pour chaque machine. Définir des règles de pare-feu afin de permettre la communication entre les machines, mais aussi de bloquer certaines communications. Projet réalisé dans le cadre de ma formation à EPITECH.',
      image: nsa501,
      images: [
        nsa501
      ],
      technologies: [
        {
          name: 'OpenBSD',
          icon: SiOpenbsd
        },
        {
          name: 'Freebsd',
          icon: SiFreebsd
        },
        {
          name: 'Debian',
          icon: SiDebian
        },
        {
          name: 'Windows',
          icon: SiWindows10
        },
        {
          name: 'Nginx',
          icon: SiNginx
        },
        {
          name: 'PHP',
          icon: SiPhp
        },
        {
          name: 'MySQL',
          icon: SiMysql
        }
      ],
      homePage: false
    },
    {
      id: 3,
      name: 'Prisel.fr',
      description: 'Site vitrine de l\'entreprise Prisel, évoluant dans le domaine du jeu vidéo.',
      image: prisel,
      images: [
        prisel
      ],
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
      images: [
        gitlabbackup
      ],
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
      images: [
        discordbot
      ],
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
