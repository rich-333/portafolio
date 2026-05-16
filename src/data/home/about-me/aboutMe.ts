export interface AboutMe {
  icon: string;
  title: string;
  description: string;
}

export const aboutMe: AboutMe[] = [
  {
    icon: 'icon-park-solid:data',
    title: 'Arquitectura SQL',
    description: 'Diseño de esquemas relacionales y optimización de consultas en MySQL y PostgreSQL.'
  },
  {
    icon: 'mdi:console',
    title: 'Entorno Linux y Git',
    description: 'Manejo ágil de la terminal y control de versiones para un flujo de desarrollo organizado.'
  },
  {
    icon: 'material-symbols:developer-mode-tv-outline',
    title: 'Desarrollo End-to-End',
    description: 'Conexión de lógicas complejas en Laravel con interfaces modernas y rápidas en React o Astro.'
  }
]