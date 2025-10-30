export type Experience = {
  title: string;
  company: string;
  location?: string;
  period: string; // e.g., "2023 — Present"
  bullets: string[];
  stack?: string[];
  link?: string;
};

export type Education = {
  degree: string;
  school: string;
  location?: string;
  period: string;
};

export type Resume = {
  experience: Experience[];
  education: Education[];
  achievements?: string[];
};

export const resume: Resume = {
  // Populated from PDF resume (Tanzil Hasan Resume.pdf)
  experience: [
    {
      title: "Technical Support",
      company: "Tafsir Computer",
      location: "Kushtia, Bangladesh",
      period: "2022 — 2024",
      bullets: [
        "Troubleshot and resolved technical issues across hardware, software, and network systems.",
        "Maintained and updated inventory management and accounting software.",
        "Provided on-site and remote support to customers and internal teams.",
        "Trained staff on new software features, upgrades, and troubleshooting techniques.",
        "Ensured smooth operation via routine maintenance and system updates.",
      ],
      stack: [
        "Hardware",
        "Software",
        "Networking",
        "Inventory/Accounting Software",
        "Remote Support",
      ],
    },
  ],
  education: [
    {
      degree: "M.Sc in Information and Communication Technology (ICT)",
      school: "Islamic University, Kushtia",
      location: "Kushtia, Bangladesh",
      period: "2024",
    },
    {
      degree: "B.Sc in Computer Science and Engineering (CSE)",
      school: "Bangladesh University of Business & Technology (BUBT)",
      period: "2021",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      school: "Kushtia Islamia College",
      period: "2015",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Kushtia Zilla School",
      period: "2013",
    },
  ],
  achievements: [
    // Add notable achievements or remove the array to hide the section
    // "Completed 10+ modern React projects with TypeScript and Tailwind.",
  ],
};
