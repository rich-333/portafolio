export interface AboutMe {
  icon: string;
  title: string;
  description: string;
}

export const aboutMe: AboutMe[] = [
  {
    icon: 'icon-park-solid:data',
    title: 'Datos SQL',
    description: 'Consultas y modelado intermedio en MySQL y PostgreSQL.'
  },
  {
    icon: 'mdi:console',
    title: 'Linux y Git',
    description: 'Uso diario de terminal y control de versiones en proyectos personales.'
  },
  {
    icon: 'material-symbols:developer-mode-tv-outline',
    title: 'Full Stack',
    description: 'Laravel, React, Astro, Tailwind, SCSS, CSS y JavaScript vanilla.'
  }
]