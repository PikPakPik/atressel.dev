import { IconType } from "react-icons";

export type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    url?: string;
    technologies: Technologies[];
    homePage: boolean;
}

type Technologies = {
    name: string;
    image: IconType;
}