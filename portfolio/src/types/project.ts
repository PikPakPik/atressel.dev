import { IconType } from "react-icons";

export type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    url?: string;
    technologies: Technologies[];
    homePage: boolean;
    images?: string[];
}

type Technologies = {
    name: string;
    icon: IconType;
}