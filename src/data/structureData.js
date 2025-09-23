// src/data/structureData.js

const structureData = {
  executiveArm: {
    title: "Executive Arm",
    description:
      "The administrative leadership responsible for policy implementation and day-to-day governance of Ikeja Local Government Area.",
    positions: [
      {
        id: 1,
        title: "Executive Chairman",
        name: "Hon. Dauda Akeem Olalekan",
        department: "Executive Office",
        image: "/img/chairman.webp",
        responsibilities: [
          "Overall administration and governance",
          "Policy formulation and implementation",
          "Community relations and development",
          "Budget oversight and resource allocation",
        ],
      },
      {
        id: 2,
        title: "Vice Chairman",
        name: "Hon. Abisola Omisore",
        department: "Executive Office",
        image: "/img/viceChair.webp",
        responsibilities: [
          "Assists the Chairman in administrative duties",
          "Coordinates departmental activities",
          "Community outreach and engagement",
          "Supervises and monitors projects",
        ],
      },
    ],
  },

  legislativeArm: {
    title: "Legislative Arm",
    description:
      "The law-making body responsible for enacting bye-laws and overseeing executive functions within the LGA.",
    positions: [
      {
        id: 3,
        title: "Leader of Legislative Council",
        name: "Hon. Adedamola Richard Kasunmu",
        department: "Legislative Council",
        image: "/img/placeholderMan.webp",
        responsibilities: [
          "Presides over council sessions",
          "Coordinates legislative activities",
          "Represents council interests",
          "Facilitates law-making processes",
        ],
      },
      {
        id: 4,
        title: "Councilor",
        name: "Hon. Adeseyi Lawal",
        department: "Legislative Council",
        image: "/img/placeholderMan.webp",
        responsibilities: [
          "Represents constituents in legislative council",
          "Contributes to bye-law formulation",
          "Oversight of government projects in their ward",
          "Addresses community issues",
        ],
      },
    ],
  },

  departments: {
    title: "Key Departments",
    description:
      "Essential service departments ensuring efficient delivery of public services to residents.",
    units: [
      {
        id: 5,
        name: "Administration & Human Resources",
        head: "N/A", // This information is not publicly available
        image: "/img/placeholderMan.webp",
        functions: [
          "Personnel management",
          "Staff development and training",
          "Administrative support services",
          "Policy coordination",
        ],
      },
      {
        id: 6,
        name: "Finance & Accounts",
        head: "N/A", // This information is not publicly available
        image: "/img/placeholderFemale.webp",
        functions: [
          "Budget preparation and monitoring",
          "Revenue generation and collection",
          "Financial reporting and analysis",
          "Audit and compliance",
        ],
      },
      {
        id: 7,
        name: "Works & Infrastructure",
        head: "N/A", // This information is not publicly available
        image: "/img/placeholderMan.webp",
        functions: [
          "Road construction and maintenance",
          "Public infrastructure development",
          "Project management and supervision",
          "Technical advisory services",
        ],
      },
      {
        id: 8,
        name: "Health Services",
        head: "N/A", // This information is not publicly available
        image: "/img/placeholderFemale.webp",
        functions: [
          "Primary healthcare delivery",
          "Public health programs",
          "Health facility management",
          "Community health outreach",
        ],
      },
      {
        id: 9,
        name: "Education & Social Services",
        head: "Comrade Amosu Akeem Abolore (Education Secretary)",
        image: "/img/placeholderMan.webp",
        functions: [
          "Primary education oversight",
          "Youth and community development",
          "Social welfare programs",
          "Educational facility management",
        ],
      },
      {
        id: 10,
        name: "Environment & Sanitation",
        head: "N/A", // This information is not publicly available
        image: "/img/placeholderMan.webp",
        functions: [
          "Waste management coordination",
          "Environmental protection programs",
          "Public sanitation oversight",
          "Climate change adaptation",
        ],
      },
    ],
  },

  organizationalChart: {
    title: "Organizational Structure",
    hierarchy: {
      level1: {
        position: "Executive Chairman",
        name: "Hon. Dauda Akeem Olalekan",
      },
      level2: [
        {
          position: "Vice Chairman",
          name: "Hon. Abisola Omisore",
        },
        {
          position: "Legislative Leader",
          name: "Hon. Adedamola Richard Kasunmu",
        },
      ],
      level3: [
        "Administration & HR",
        "Finance & Accounts",
        "Works & Infrastructure",
        "Health Services",
        "Education & Social Services",
        "Environment & Sanitation",
      ],
    },
  },

  contactInfo: {
    headquarters: {
      name: "Ikeja Local Government Secretariat",
      address: "2 Obafemi Awolowo Way, Ikeja, Lagos State",
      phone: "+234 (0) 1 234-5678", // Placeholder
      email: "info@ikeja.lg.gov.ng", // Placeholder
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM",
    },
    emergencyContacts: [
      {
        service: "Emergency Response",
        number: "112 (Lagos State Emergency)",
      },
      {
        service: "Security Hotline",
        number: "767 (Lagos State Security)",
      },
    ],
  },
};

export default structureData;
