export type Project = {
    name: string;
    description: string;
    image: string;
    url: string;
    technologies: Technologies[];
    homePage: boolean;
}

type Technologies = {
    name: string;
    image: string;
}