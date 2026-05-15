export interface ContactData {
  name: string;
  text: string;
  icon: string;
}

export const contactData: ContactData[] = [
  {
    name: "EMAIL",
    text: "tuemail@example.com",
    icon: "bitcoin-icons:email-filled",
  },
  {
    name: "LINKEDIN",
    text: "linkedin.com/in/tu-perfil",
    icon: "mdi:linkedin",
  },
  {
    name: "Localización",
    text: "Remoto // Mundial",
    icon: "mdi:world",
  }
]