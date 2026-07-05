import powerlifting1 from "../../../assets/images/projects/powerlifting/powerlifting1.jpeg";
import powerlifting2 from "../../../assets/images/projects/powerlifting/powerlifting2.png";
import powerlifting3 from "../../../assets/images/projects/powerlifting/powerlifting3.png";
import powerlifting4 from "../../../assets/images/projects/powerlifting/powerlifting4.png";
import powerlifting5 from "../../../assets/images/projects/powerlifting/powerlifting5.png";
import powerlifting6 from "../../../assets/images/projects/powerlifting/powerlifting6.png";
import powerlifting7 from "../../../assets/images/projects/powerlifting/powerlifting7.png";

import meraki1 from "../../../assets/images/projects/meraki/meraki1.jpeg";
import meraki2 from "../../../assets/images/projects/meraki/meraki2.png";
import meraki3 from "../../../assets/images/projects/meraki/meraki3.png";
import meraki4 from "../../../assets/images/projects/meraki/meraki4.png";
import meraki5 from "../../../assets/images/projects/meraki/meraki5.png";
import meraki6 from "../../../assets/images/projects/meraki/meraki6.png";
import meraki7 from "../../../assets/images/projects/meraki/meraki7.png";
import meraki8 from "../../../assets/images/projects/meraki/meraki8.png";
import meraki9 from "../../../assets/images/projects/meraki/meraki9.png";
import meraki10 from "../../../assets/images/projects/meraki/meraki10.png";
import meraki11 from "../../../assets/images/projects/meraki/meraki11.png";
import meraki12 from "../../../assets/images/projects/meraki/meraki12.png";
import meraki13 from "../../../assets/images/projects/meraki/meraki13.png";

import turbo1 from "../../../assets/images/projects/turbo-parts/turbo1.jpeg";
import turbo2 from "../../../assets/images/projects/turbo-parts/turbo2.png";
import turbo3 from "../../../assets/images/projects/turbo-parts/turbo3.png";
import turbo4 from "../../../assets/images/projects/turbo-parts/turbo4.png";
import turbo5 from "../../../assets/images/projects/turbo-parts/turbo5.png";
import turbo6 from "../../../assets/images/projects/turbo-parts/turbo6.png";
import turbo7 from "../../../assets/images/projects/turbo-parts/turbo7.png";
import turbo8 from "../../../assets/images/projects/turbo-parts/turbo8.png";
import turbo9 from "../../../assets/images/projects/turbo-parts/turbo9.png";
import turbo10 from "../../../assets/images/projects/turbo-parts/turbo10.png";
import turbo11 from "../../../assets/images/projects/turbo-parts/turbo11.png";

import dentist1 from "../../../assets/images/projects/LP-dentist/dentist1.jpeg";
import dentist2 from "../../../assets/images/projects/LP-dentist/dentist2.png";
import dentist3 from "../../../assets/images/projects/LP-dentist/dentist3.png";
import dentist4 from "../../../assets/images/projects/LP-dentist/dentist4.png";
import dentist5 from "../../../assets/images/projects/LP-dentist/dentist5.png";
import dentist6 from "../../../assets/images/projects/LP-dentist/dentist6.png";
import dentist7 from "../../../assets/images/projects/LP-dentist/dentist7.png";
import dentist8 from "../../../assets/images/projects/LP-dentist/dentist8.png";
import dentist9 from "../../../assets/images/projects/LP-dentist/dentist9.png";

import architecture1 from "../../../assets/images/projects/LP-architecture/architecture1.jpeg";
import architecture2 from "../../../assets/images/projects/LP-architecture/architecture2.png";
import architecture3 from "../../../assets/images/projects/LP-architecture/architecture3.png";
import architecture4 from "../../../assets/images/projects/LP-architecture/architecture4.png";
import architecture5 from "../../../assets/images/projects/LP-architecture/architecture5.png";
import architecture6 from "../../../assets/images/projects/LP-architecture/architecture6.png";

import inventario1 from "../../../assets/images/projects/inventario-repuestos/inventario1.png";
import inventario2 from "../../../assets/images/projects/inventario-repuestos/inventario2.png";
import inventario3 from "../../../assets/images/projects/inventario-repuestos/inventario3.png";
import inventario4 from "../../../assets/images/projects/inventario-repuestos/inventario4.png";
import inventario5 from "../../../assets/images/projects/inventario-repuestos/inventario5.png";
import inventario6 from "../../../assets/images/projects/inventario-repuestos/inventario6.png";
import inventario7 from "../../../assets/images/projects/inventario-repuestos/inventario7.png";
import inventario8 from "../../../assets/images/projects/inventario-repuestos/inventario8.png";
import inventario9 from "../../../assets/images/projects/inventario-repuestos/inventario9.png";
import inventario10 from "../../../assets/images/projects/inventario-repuestos/inventario10.png";
import inventario11 from "../../../assets/images/projects/inventario-repuestos/inventario11.png";
import inventario12 from "../../../assets/images/projects/inventario-repuestos/inventario12.png";
import inventario13 from "../../../assets/images/projects/inventario-repuestos/inventario13.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: ImageMetadata;
  stack: string[];
  linkRepo: string;
  linkDeploy?: string;
  gallery: ImageMetadata[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "IRON-FORGE PLATFORM",
    description: "IRON-FORGE PLATFORM es un sistema de gestión de competiciones de powerlifting desarrollado con Laravel 13 (backend) y React 19 con Inertia.js (frontend), que permite la administración en tiempo real de eventos de levantamiento de pesas. Este sistema ofrece funcionalidades como el registro de competidores, un sistema de votación para jueces, y la gestion de la competencia en tiempo real con actualizaciones en vivo mediante Laravel Reverb(WebSockets) para los espectadores.",
    image: powerlifting1,
    stack: ["React", "Laravel", "Laravel Reverb", "Inertia.js", "PostgreSQL", "TailwindCSS"],
    linkRepo: "https://github.com/DuduCossio/Powerlifting",
    linkDeploy: "https://competicion-powerlifting.up.railway.app/",
    gallery: [
      powerlifting2,
      powerlifting3,
      powerlifting4,
      powerlifting5,
      powerlifting6,
      powerlifting7
    ]
  },
  {
    id: 2,
    title: "Meraki",
    description: "Meraki es una aplicación web que funciona como catálogo de productos, combinando la robustez de Laravel con la interactividad de React para presentar productos de manera atractiva y gestionar el inventario desde un panel de administración. La aplicación permite a los usuarios explorar productos, ver detalles y filtrarlos, mientras que los administradores pueden agregar, editar o eliminar productos, y gestionar categorías.",
    image: meraki1,
    stack: ["React", "Laravel", "Inertia.js", "PostgreSQL", "TailwindCSS", "framer-motion"],
    linkRepo: "https://github.com/rich-333/meraki",
    gallery: [
      meraki2,
      meraki3,
      meraki4,
      meraki5,
      meraki6,
      meraki7,
      meraki8,
      meraki9,
      meraki10,
      meraki11,
      meraki12,
      meraki13
    ]
  },
  {
    id: 3,
    title: "Inventario de Repuestos",
    description: "El sistema Inventario Repuestos es una aplicación de escritorio para Windows diseñada para la gestión de inventarios de repuestos. Facilita el seguimiento de productos, marcas, orígenes y niveles de stock específicos de cada almacén. La aplicación está desarrollada con una moderna plataforma .NET y sigue una estricta separación arquitectónica para garantizar su mantenibilidad y escalabilidad.",
    image: inventario1,
    stack: [".NET", "C#", "Windows Forms", "SQL Lite"],
    linkRepo: "https://github.com/rich-333/Inventario_Repuestos",
    gallery: [
      inventario2,
      inventario3,
      inventario4,
      inventario5,
      inventario6,
      inventario7,
      inventario8,
      inventario9,
      inventario10,
      inventario11,
      inventario12,
      inventario13
    ]
  },
  {
    id: 4,
    title: "TurboParts",
    description: "TurboParts es una plataforma de comercio electrónico de repuestos automotrices desarrollada con una arquitectura moderna que combina Laravel y React. Este sistema cuenta con un catalogo de productos con filtros avanzados y detalles de cada producto, así como un sistema de autenticación con registro e inicio de sesión.",
    image: turbo1,
    stack: ["React", "Laravel", "MySQL", "TailwindCSS"],
    linkRepo: "https://github.com/rich-333/auto-parts",
    gallery: [
      turbo2,
      turbo3,
      turbo4,
      turbo5,
      turbo6,
      turbo7,
      turbo8,
      turbo9,
      turbo10,
      turbo11
    ]
  },
  {
    id: 5,
    title: "Landing Page Dental Clinic",
    description: "Este proyecto consiste en un sitio web de marketing de alto rendimiento y una sola página para una clínica dental. Está diseñado para ofrecer una experiencia de usuario rápida y fluida, a la vez que muestra los servicios clínicos, las biografías de los profesionales, los testimonios de los pacientes y la información de contacto.",
    image: dentist1,
    stack: ["Astro", "TailwindCSS", "HTML", "JavaScript"],
    linkRepo: "https://github.com/rich-333/landing-page-dentist",
    linkDeploy: "https://landing-page-dentist.vercel.app/",
    gallery: [
      dentist2,
      dentist3,
      dentist4,
      dentist5,
      dentist6,
      dentist7,
      dentist8,
      dentist9
    ]
  },
  {
    id: 6,
    title: "Landing Page Architecture Studio",
    description: "El sitio web del estudio de arquitectura e interiorismo Inteo es una página de destino moderna y de alto rendimiento, desarrollada con el framework Astro . El proyecto consiste en la implementación técnica de una plantilla de diseño profesional, centrada en diseños adaptables, una arquitectura de componentes modulares y un sistema centralizado de gestión de datos.",
    image: architecture1,
    stack: ["Astro", "TailwindCSS", "HTML", "JavaScript"],
    linkRepo: "https://github.com/rich-333/estudio-arquitectura",
    linkDeploy: "https://estudio-arquitectura-two.vercel.app/",
    gallery: [
      architecture2,
      architecture3,
      architecture4,
      architecture5,
      architecture6,
    ]
  }
]