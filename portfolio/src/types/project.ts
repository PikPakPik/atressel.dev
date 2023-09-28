export type Project = {
    name: string;
    description: string;
    image: string;
    technologies: Technologies[];
}

type Technologies = {
    name: string;
    image: string;
}