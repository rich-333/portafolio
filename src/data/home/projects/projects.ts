import project1 from "../../../assets/images/project1.jpg";
import project2 from "../../../assets/images/project2.webp";
import project3 from "../../../assets/images/project3.webp";
import project4 from "../../../assets/images/project4.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: ImageMetadata;
  stack: string[];
  linkRepo: string;
  linkDeploy: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: project1,
    stack: ["React", "Node.js", "MongoDB"],
    linkRepo: "https://github.com/user/repo1",
    linkDeploy: "https://user.github.io/repo1"
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: project2,
    stack: ["Vue", "Firebase"],
    linkRepo: "https://github.com/user/repo2",
    linkDeploy: "https://user.github.io/repo2"
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: project3,
    stack: ["Angular", "Express", "MySQL"],
    linkRepo: "https://github.com/user/repo3",
    linkDeploy: "https://user.github.io/repo3"
  },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Descripción del proyecto 4",
    image: project4,
    stack: ["Svelte", "Django"],
    linkRepo: "https://github.com/user/repo4",
    linkDeploy: "https://user.github.io/repo4"
  }
]