import { Project } from "../types/project";

import portoflio from '../assets/img/projects/portfolio/portfolio.webp';
import portfolioprojects from '../assets/img/projects/portfolio/portfolio_project.webp';

import trelltech1 from '../assets/img/projects/trelltech/trelltech1.webp';
import trelltech2 from '../assets/img/projects/trelltech/trelltech2.webp';
import trelltech3 from '../assets/img/projects/trelltech/trelltech3.webp';
import trelltech4 from '../assets/img/projects/trelltech/trelltech4.webp';
import trelltech5 from '../assets/img/projects/trelltech/trelltech5.webp';

import infineocdataclient from '../assets/img/projects/infineocdata.webp';
import prisel from '../assets/img/projects/prisel.webp';
import gitlabbackup from '../assets/img/projects/gitlabbackup.webp';
import discordbot from '../assets/img/projects/discordbot.webp';
import jobboard from '../assets/img/projects/jobboard.webp';
import epitale from '../assets/img/projects/epitale.webp';
import nsa501 from '../assets/img/projects/nsa501.webp';
import { BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiSolidData } from "react-icons/bi";
import { SiCsharp, SiDart, SiDebian, SiDiscord, SiDotnet, SiExpress, SiFlutter, SiFreebsd, SiGitlab, SiGradle, SiGraphql, SiMinio, SiMysql, SiNestjs, SiNginx, SiOpenbsd, SiPhp, SiPrisma, SiReact, SiScaleway, SiSocketdotio, SiTailwindcss, SiTrello, SiTypescript, SiUikit, SiWindows10 } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";


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
      homePage: false
    },
    {
      id: 9,
      name: 'IRC Chat',
      description: 'Création d\'un chat IRC en JS avec NodeJS et Socket.io. Projet réalisé dans le cadre de ma formation à EPITECH.',
      image: infineocdataclient,
      images: [
        infineocdataclient
      ],
      technologies: [
        {
          name: 'NodeJS',
          icon: IoLogoNodejs
        },
        {
          name: 'Socket.io',
          icon: SiSocketdotio
        },
        {
          name: 'React',
          icon: SiReact
        },
        {
          name: 'TailwindCSS',
          icon: SiTailwindcss
        },
        {
          name: 'TypeScript',
          icon: SiTypescript
        },
        {
          name: 'Express',
          icon: SiExpress
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
      homePage: false
    },
    {
      id: 2,
      name: 'InfineoCData Client',
      description: 'Client CData permettant de se connecter à de mulitple sources de données grâce aux providers de CData et d\'effectuer des requêtes SQL. Projet réalisé dans le cadre de mon stage de fin d\'année de BTS SIO.',
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
      description: 'Sauvegarde automatique de projet GitLab sur un bucket S3. Projet réalisé dans le cadre de mon stage de fin de BTS SIO.',
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
          name: 'NestJS',
          icon: SiNestjs
        },
        {
          name: 'GitLab',
          icon: SiGitlab
        },
        {
          name: 'Scaleway',
          icon: SiScaleway
        },
        {
          name: 'GraphQL',
          icon: SiGraphql
        },
        {
          name: 'MinIO',
          icon: SiMinio
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
    },
    {
      id: 10,
      name: 'TrellTech',
      description: 'Application mobile inspirée de Trello 📋 en exploitant son API pour développer un clone de Trello. Projet réalisé dans le cadre de ma formation à EPITECH.',
      image: trelltech1,
      images: [
        trelltech1,
        trelltech2,
        trelltech3,
        trelltech4,
        trelltech5
      ],
      url: 'https://github.com/eloiJhn/T-DEV-600-NAN_2',
      technologies: [
        {
          name: 'Flutter',
          icon: SiFlutter
        },
        {
          name: 'Dart',
          icon: SiDart
        },
        {
          name: 'Trello',
          icon: SiTrello
        }
      ],
      homePage: true
    }
  ]
