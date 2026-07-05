import certficadoJS from "../../../assets/images/certificates/certificado-cisco-JS.png"
import certificadoCiberseguridad from "../../../assets/images/certificates/certificado-cisco-ciberseguridad.png"
import certificadoLinux from "../../../assets/images/certificates/certificado-cisco-linux.png"
import certificadoCplus from "../../../assets/images/certificates/certificado-sololearn-C++.png"
import certificadoProgramacion from "../../../assets/images/certificates/certificado-upds-programacion.png"

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
    issued: "Junio 2024",
    name: "Programacion Orientada a Objetos",
    organization: "Universidad Privada Domingo Savio",
    url: "/certificates/certificado-upds-programacion.pdf",
    img: certificadoProgramacion,
    leftBorderColor: "border-l-[#4CAF50] hover:shadow-lg hover:shadow-[#4CAF50]/50 transition-shadow duration-300",
    issuedColor: "text-[#4CAF50]"
  }, 
  {
    id: 2,
    issued: "Julio 2024",
    name: "Introduccion a Ciberseguridad",
    organization: "Cisco Networking Academy",
    url: "/certificates/Introduccion_Ciberseguridad.pdf",
    img: certificadoCiberseguridad,
    leftBorderColor: "border-l-[#2196F3] hover:shadow-lg hover:shadow-[#2196F3]/50 transition-shadow duration-300",
    issuedColor: "text-[#2196F3]"
  },
  {
    id: 3, 
    issued: "Noviembre 2024",
    name: "NDG Linux Unhatched Spanish",
    organization: "Cisco Networking Academy",
    url: "/certificates/Linux_Unhatched.pdf",
    img: certificadoLinux,
    leftBorderColor: "border-l-[#FF5722] hover:shadow-lg hover:shadow-[#FF5722]/50 transition-shadow duration-300",
    issuedColor: "text-[#FF5722]"
  },
  {
    id: 4,
    issued: "Abril 2024",
    name: "JavaScript Essentials",
    organization: "Cisco Networking Academy",
    url: "/certificates/JavaScript_Essentials.pdf",
    img: certficadoJS,
    leftBorderColor: "border-l-[#9C27B0] hover:shadow-lg hover:shadow-[#9C27B0]/50 transition-shadow duration-300",
    issuedColor: "text-[#9C27B0]"
  },
  {
    id: 5,
    issued: "Mayo 2024",
    name: "Introducción a C++",
    organization: "SoloLearn",
    url: "/certificates/Introduccion_C++.pdf",
    img: certificadoCplus,
    leftBorderColor: "border-l-[#FF9800] hover:shadow-lg hover:shadow-[#FF9800]/50 transition-shadow duration-300",
    issuedColor: "text-[#FF9800]"
  },
]