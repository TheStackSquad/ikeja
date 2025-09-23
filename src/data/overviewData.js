// src/data/overviewData.js

const overviewData = {
  basicInfo: {
    name: "Ikeja Local Government Area",
    abbreviation: "LGA",
    state: "Lagos State",
    country: "Nigeria",
    established: "1976 (as capital of Lagos State)",
    headquarters: "Ikeja",
    parentLGA: "N/A (serves as a primary LGA)",
  },

  introduction: {
    title: "Welcome to Ikeja Local Government",
    subtitle: "The Centre of Excellence on the Mainland",
    description:
      "Ikeja Local Government is the administrative and commercial nerve centre of Lagos State. Home to the state capital, it is a bustling metropolis that combines government institutions, major corporations, and vibrant communities. Under the leadership of Hon. Dauda Akeem Olalekan, the LGA is committed to urban renewal, economic growth, and the welfare of its residents.",
    missionStatement:
      "To provide transparent and effective governance that fosters a secure, prosperous, and sustainable environment for all residents and businesses within Ikeja Local Government.",
    visionStatement:
      "To be a model local government for innovation, economic development, and citizen-centered service delivery in Nigeria.",
  },

  demographics: {
    population: {
      total: "313,196 (2006 Census)",
      households: "N/A",
      growthRate: "N/A",
      density: "High urban density",
    },
    communities: [
      "Alausa",
      "Oregun",
      "Ogba",
      "Opebi",
      "Maryland",
      "Onigbongbo",
      "Anifowose",
      "Ojodu",
      "Ikeja GRA",
    ],
    economicProfile: {
      primarySectors: [
        "Information and Communication Technology (ICT)",
        "Commerce and Retail",
        "Hospitality and Tourism",
        "Administrative and Government Services",
        "Small and Medium-sized Enterprises",
      ],
      majorMarkets: [
        "Computer Village",
        "Ikeja City Mall (ICM)",
        "Ogba Sunday Market",
        "Jara Shopping Mall",
      ],
    },
  },

  governance: {
    currentAdministration: {
      chairman: "Hon. Dauda Akeem Olalekan",
      viceChairman: "Hon. Abisola Omisore",
      tenure: "2021 - 2025",
      party: "All Progressives Congress (APC)",
      inaugurated: "July 2021",
    },
    governancePhilosophy: {
      title: "I.K.E.J.A. AGENDA",
      principles: [
        {
          letter: "I",
          word: "Infrastructural Development",
          description:
            "Focus on urban renewal, road construction, and maintenance.",
        },
        {
          letter: "K",
          word: "Knowledge-Based Economy",
          description:
            "Supporting tech hubs and skill acquisition for youth empowerment.",
        },
        {
          letter: "E",
          word: "Environmental Governance",
          description:
            "Promoting sanitation, green spaces, and sustainable practices.",
        },
        {
          letter: "J",
          word: "Justice and Security",
          description:
            "Ensuring public safety and access to fair legal services.",
        },
        {
          letter: "A",
          word: "Accountability",
          description:
            "Upholding transparency and responsible use of public funds.",
        },
      ],
    },
  },

  keyServices: {
    title: "Our Services",
    categories: [
      {
        name: "Public Health Services",
        icon: "🏥",
        services: [
          "Primary Healthcare Centers",
          "Immunization Programs",
          "Maternal and Child Health",
          "Community Health Outreach",
          "Health Education Programs",
        ],
      },
      {
        name: "Education Support",
        icon: "🎓",
        services: [
          "Primary School Oversight",
          "Educational Infrastructure",
          "Student Support Programs",
          "Adult Literacy Programs",
          "Skills Development Centers",
        ],
      },
      {
        name: "Infrastructure Development",
        icon: "🏗️",
        services: [
          "Road Construction and Maintenance",
          "Public Buildings and Facilities",
          "Drainage Systems",
          "Street Lighting Projects",
          "Market Development",
        ],
      },
      {
        name: "Environmental Services",
        icon: "🌱",
        services: [
          "Waste Management",
          "Sanitation Programs",
          "Environmental Protection",
          "Tree Planting Initiatives",
          "Climate Change Adaptation",
        ],
      },
      {
        name: "Security & Safety",
        icon: "🛡️",
        services: [
          "Community Policing Support",
          "Emergency Response Coordination",
          "Fire Safety Programs",
          "Traffic Management",
          "Public Safety Awareness",
        ],
      },
      {
        name: "Social Services",
        icon: "👥",
        services: [
          "Youth Development Programs",
          "Women Empowerment Initiatives",
          "Senior Citizens Support",
          "Disability Support Services",
          "Community Development Projects",
        ],
      },
    ],
  },

  contact: {
    office: {
      address: "1, Acme Road, Ogba, Ikeja, Lagos State",
      phone: "+234 (0) 1 234-5678",
      email: "info@ikeja.lg.gov.ng",
      website: "www.ikeja.lg.gov.ng",
    },
    socialMedia: {
      facebook: "@IkejaLocalGovt",
      twitter: "@IkejaLGA",
      instagram: "@ikejalga",
    },
    operatingHours: {
      weekdays: "Monday - Friday: 8:00 AM - 4:00 PM",
      publicHolidays: "Closed",
      emergencyContact: "Available 24/7 via designated helplines",
    },
  },
};

export default overviewData;
