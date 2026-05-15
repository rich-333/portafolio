import certificationExample from "../../../assets/images/project3.webp"

export interface Certificacion {
  id: number;
  issued: string;
  name: string;
  organization: string;
  url: string;
  img: ImageMetadata;
  leftBorderColor: string;
  issuedColor?: string;
}

export const certificaciones: Certificacion[] = [
  {
    id: 1,
    issued: "Enero 2024",
    name: "Certificación de Ejemplo",
    organization: "Organización de Certificación",
    url: "https://www.example.com/certification",
    img: certificationExample,
    leftBorderColor: "border-l-[#4CAF50] hover:shadow-lg hover:shadow-[#4CAF50]/50 transition-shadow duration-300",
    issuedColor: "text-[#4CAF50]"
  }, 
  {
    id: 2,
    issued: "Febrero 2024",
    name: "Certificación de Ejemplo 2",
    organization: "Organización de Certificación 2",
    url: "https://www.example.com/certification2",
    img: certificationExample,
    leftBorderColor: "border-l-[#2196F3] hover:shadow-lg hover:shadow-[#2196F3]/50 transition-shadow duration-300",
    issuedColor: "text-[#2196F3]"
  },
  {
    id: 3, 
    issued: "Marzo 2024",
    name: "Certificación de Ejemplo 3",
    organization: "Organización de Certificación 3",
    url: "https://www.example.com/certification3",
    img: certificationExample,
    leftBorderColor: "border-l-[#FF5722] hover:shadow-lg hover:shadow-[#FF5722]/50 transition-shadow duration-300",
    issuedColor: "text-[#FF5722]"
  },
  {
    id: 4,
    issued: "Abril 2024",
    name: "Certificación de Ejemplo 4",
    organization: "Organización de Certificación 4",
    url: "https://www.example.com/certification4",
    img: certificationExample,
    leftBorderColor: "border-l-[#9C27B0] hover:shadow-lg hover:shadow-[#9C27B0]/50 transition-shadow duration-300",
    issuedColor: "text-[#9C27B0]"
  },
  {
    id: 5,
    issued: "Mayo 2024",
    name: "Certificación de Ejemplo 5",
    organization: "Organización de Certificación 5",
    url: "https://www.example.com/certification5",
    img: certificationExample,
    leftBorderColor: "border-l-[#FF9800] hover:shadow-lg hover:shadow-[#FF9800]/50 transition-shadow duration-300",
    issuedColor: "text-[#FF9800]"
  },
  {
    id: 6,
    issued: "Junio 2024",
    name: "Certificación de Ejemplo 6",
    organization: "Organización de Certificación 6",
    url: "https://www.example.com/certification6",
    img: certificationExample,
    leftBorderColor: "border-l-[#3F51B5] hover:shadow-lg hover:shadow-[#3F51B5]/50 transition-shadow duration-300",
    issuedColor: "text-[#3F51B5]"
  },
  {
    id: 7,
    issued: "Julio 2024",
    name: "Certificación de Ejemplo 7",
    organization: "Organización de Certificación 7",
    url: "https://www.example.com/certification7",
    img: certificationExample,
    leftBorderColor: "border-l-[#E91E63] hover:shadow-lg hover:shadow-[#E91E63]/50 transition-shadow duration-300",
    issuedColor: "text-[#E91E63]"
  }
]