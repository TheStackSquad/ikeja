// src/data/leadershipData.js

const leadershipData = {
  politicalLeadership: {
    title: "Political Leadership",
    description:
      "The elected officials steering the governance and development agenda of Ikeja Local Government.",
    leaders: [
      {
        id: 1,
        name: "Hon. Dauda Akeem Olalekan",
        title: "Executive Chairman",
        nickname: "The People's Chairman",
        image: "/img/councillor.webp",
        tenure: "2021 - 2025",
        party: "All Progressives Congress (APC)",
        bio: "A seasoned politician and public administrator committed to driving infrastructural development and a 'Progressive Agenda' for Ikeja. He is known for his dedication to community engagement and transparent governance.",
        achievements: [
          "Successfully implemented the I.K.E.J.A. AGENDA blueprint for urban renewal.",
          "Secured state government partnerships for key development projects.",
          "Championed youth empowerment and skills acquisition initiatives.",
          "Improved internally generated revenue through transparent processes.",
        ],
        priorities: [
          "Infrastructural Development and Urban Renewal",
          "Knowledge-Based Economic Empowerment",
          "Environmental Governance and Healthcare Initiatives",
          "Access to Social Services and Accountability",
        ],
        contact: {
          email: "chairman@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5670",
        },
        socialMedia: {
          twitter: "@AkeemDauda",
          facebook: "Dauda Akeem Olalekan Official",
        },
      },
      {
        id: 2,
        name: "Hon. Abisola Omisore",
        title: "Vice Chairman",
        image: "/img/placeholderMan.webp",
        tenure: "2021 - 2025",
        party: "All Progressives Congress (APC)",
        bio: "An experienced administrator with a strong background in public health and environmental management. She is a dedicated advocate for community well-being and grassroots development.",
        achievements: [
          "Led environmental and health services programs.",
          "Coordinated successful community sanitation initiatives.",
          "Implemented efficient project monitoring systems.",
          "Enhanced inter-departmental coordination.",
        ],
        priorities: [
          "Environmental & Health Services",
          "Community Relations",
          "Administrative Efficiency",
          "Women & Youth Development Programs",
        ],
        contact: {
          email: "vicechairman@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5671",
        },
        specialties: [
          "Public Health",
          "Environmental Governance",
          "Community Development",
          "Strategic Planning",
        ],
      },
    ],
  },
  executiveTeam: {
    title: "Executive Leadership",
    description:
      "The dynamic leadership team driving transformation and development across Ikeja Local Government.",
    leaders: [
      {
        id: 3,
        name: "Hon. Wale Adelana",
        title: "Chief Of Staff",
        department: "Administration",
        image: "/img/placeholderMan.webp",
        experience: "15+ years in public administration",
        bio: "A seasoned administrator with extensive experience in local government operations and policy coordination. Responsible for the seamless administrative function of the council.",
        keyResponsibilities: [
          "Administrative coordination across all departments",
          "Policy implementation and monitoring",
          "Inter-governmental relations",
          "Council meeting administration and documentation",
        ],
        achievements: [
          "Streamlined administrative processes for greater efficiency",
          "Enhanced communication protocols within the council",
          "Improved service delivery to the public",
        ],
        qualifications: [
          "Master's in Public Administration",
          "Certificate in Local Government Management",
          "Advanced Training in Policy Analysis",
        ],
        contact: {
          email: "secretary@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5672",
        },
      },
      {
        id: 4,
        name: "Mr. Kunle Adebayo",
        title: "Director of Administration & Human Resources",
        department: "Administration & HR",
        image: "/img/placeholderMan.webp",
        experience: "18 years in human resource management",
        bio: "HR professional specializing in organizational development and staff management within the public sector. Dedicated to building a motivated and efficient workforce.",
        keyResponsibilities: [
          "Personnel management and development",
          "Staff training and capacity building",
          "Recruitment and performance management",
          "Administrative support services coordination",
        ],
        achievements: [
          "Developed comprehensive staff training programs",
          "Implemented a performance-based evaluation system",
          "Reduced staff turnover through improved welfare programs",
        ],
        specializations: [
          "Human Resource Management",
          "Organizational Development",
          "Training & Development",
          "Performance Management",
        ],
        contact: {
          email: "hr@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5673",
        },
      },
      {
        id: 5,
        name: "Mrs. Bunmi Olaiya",
        title: "Director of Finance & Accounts",
        department: "Finance",
        image: "/img/placeholderFemale.webp",
        experience: "25 years in financial management",
        bio: "Certified accountant with extensive experience in public finance, budget management, and transparent financial planning for local governments.",
        keyResponsibilities: [
          "Budget preparation, monitoring and control",
          "Revenue generation and collection oversight",
          "Financial reporting and analysis",
          "Audit coordination and compliance",
        ],
        achievements: [
          "Increased internally generated revenue by 40%",
          "Implemented transparent financial reporting systems",
          "Achieved 95% budget execution efficiency",
        ],
        qualifications: [
          "ICAN (Institute of Chartered Accountants of Nigeria)",
          "MBA in Finance",
          "Certificate in Public Financial Management",
        ],
        contact: {
          email: "finance@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5674",
        },
      },
      {
        id: 6,
        name: "Engr. Tunde Agboola",
        title: "Director of Works & Infrastructure",
        department: "Engineering",
        image: "/img/placeholderMan.webp",
        experience: "20 years in civil engineering and project management",
        bio: "Professional engineer with expertise in infrastructure development and sustainable construction practices. Dedicated to delivering high-quality public works.",
        keyResponsibilities: [
          "Infrastructure development and maintenance",
          "Road construction and rehabilitation projects",
          "Public building construction oversight",
          "Technical advisory services",
        ],
        achievements: [
          "Successfully completed over 30 infrastructure projects",
          "Reduced project completion time through efficient management",
          "Implemented quality control systems ensuring high project standards",
        ],
        qualifications: [
          "B.Eng Civil Engineering",
          "COREN Registered Engineer",
          "Project Management Professional (PMP)",
          "Certificate in Sustainable Construction",
        ],
        contact: {
          email: "works@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5675",
        },
      },
      {
        id: 7,
        name: "Dr. Adeola Fashola",
        title: "Director of Health Services",
        department: "Health",
        image: "/img/placeholderFemale.webp",
        experience: "16 years in public health and healthcare management",
        bio: "Medical doctor and public health specialist committed to improving healthcare access and quality for all residents of Ikeja.",
        keyResponsibilities: [
          "Primary healthcare service delivery oversight",
          "Public health program implementation",
          "Health facility management and development",
          "Community health outreach coordination",
        ],
        achievements: [
          "Improved healthcare access for 85% of residents",
          "Successfully managed public health campaigns",
          "Upgraded 5 primary healthcare centers with modern equipment",
        ],
        qualifications: [
          "MBBS (Medicine and Surgery)",
          "Masters in Public Health",
          "Fellowship in Community Health",
          "Certificate in Healthcare Management",
        ],
        contact: {
          email: "health@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5676",
        },
      },
      {
        id: 8,
        name: "Mrs. Bisi Ogundipe",
        title: "Director of Education & Social Services",
        department: "Education",
        image: "/img/placeholderFemale.webp",
        experience:
          "19 years in education administration and social development",
        bio: "Experienced educator and social development specialist passionate about educational excellence and community empowerment.",
        keyResponsibilities: [
          "Primary education oversight and support",
          "Educational facility development and maintenance",
          "Youth and community development programs",
          "Social welfare program implementation",
        ],
        achievements: [
          "Implemented 'Empower the Ikeja Child' initiative benefiting 700+ students",
          "Revamped 15 primary schools with modern facilities",
          "Established skills acquisition centers in key communities",
        ],
        qualifications: [
          "M.Ed Educational Administration",
          "B.Ed (Primary Education)",
          "Certificate in Community Development",
          "Diploma in Social Work",
        ],
        contact: {
          email: "education@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5677",
        },
      },
      {
        id: 9,
        name: "Mr. Yemi Akindele",
        title: "Director of Environment & Sanitation",
        department: "Environment",
        image: "/img/placeholderMan.webp",
        experience: "14 years in environmental management and sanitation",
        bio: "Environmental specialist focused on sustainable waste management, environmental protection, and climate change adaptation strategies.",
        keyResponsibilities: [
          "Waste management system coordination",
          "Environmental protection program oversight",
          "Public sanitation monitoring and improvement",
          "Climate change adaptation initiatives",
        ],
        achievements: [
          "Implemented efficient waste collection system",
          "Established recycling centers promoting circular economy",
          "Launched tree planting initiative to beautify the LGA",
        ],
        qualifications: [
          "M.Sc Environmental Management",
          "B.Sc Environmental Science",
          "Certificate in Waste Management",
          "Training in Climate Change Adaptation",
        ],
        contact: {
          email: "environment@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5678",
        },
      },
    ],
  },

  legislativeCouncil: {
    title: "Legislative Council",
    description:
      "Elected representatives ensuring democratic governance and community representation.",
    councilors: [
      {
        id: 10,
        name: "Hon. Mojeed Balogun",
        title: "Leader of Legislative Council",
        ward: "Ward G",
        image: "/img/placeholderMan.webp",
        tenure: "2021 - 2025",
        bio: "Experienced legislator with a strong background in law-making, community representation, and public policy development.",
        keyFocus: [
          "Legislative oversight of executive functions",
          "Community representation and advocacy",
          "Policy development and review",
          "Inter-community conflict resolution",
        ],
        achievements: [
          "Sponsored key bye-laws for community development",
          "Facilitated resolution of community disputes",
          "Led legislative review of LGA development plans",
        ],
        contact: {
          email: "legislative.leader@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5680",
        },
      },
      {
        id: 11,
        name: "Hon. Kemi Adeleye",
        title: "Deputy Leader of Legislative Council",
        ward: "Ward B",
        image: "/img/placeholderFemale.webp",
        tenure: "2021 - 2025",
        bio: "Community advocate and women's rights champion with extensive experience in grassroots mobilization and legislative processes.",
        keyFocus: [
          "Women and children's rights advocacy",
          "Committee coordination and management",
          "Public hearing facilitation",
          "Bill review and analysis",
        ],
        achievements: [
          "Championed passage of Gender Equity Development Bill",
          "Organized public hearings on community issues",
          "Led women's empowerment legislative initiatives",
        ],
        contact: {
          email: "deputy.legislative@ikeja.lg.gov.ng",
          phone: "+234 (0) 1 234-5681",
        },
      },
    ],
  },

  advisoryBoard: {
    title: "Advisory Council",
    description:
      "Distinguished community leaders providing strategic guidance and wisdom to the administration.",
    advisors: [
      {
        id: 12,
        name: "Chief Babatunde Adeyemi",
        title: "Chairman, Council of Elders",
        image: "/img/placeholderMan.webp",
        background:
          "Retired Permanent Secretary with 35 years in public service",
        expertise: "Public administration, policy development, governance",
      },
      {
        id: 13,
        name: "Mrs. Olufunke Aromolaran",
        title: "Chairperson, Women's Advisory Committee",
        image: "/img/placeholderFemale.webp",
        background: "Successful entrepreneur and women's rights advocate",
        expertise:
          "Women empowerment, small business development, community organizing",
      },
      {
        id: 14,
        name: "Dr. Adekunle Ogundare",
        title: "Chairman, Youth Development Committee",
        image: "/img/placeholderMan.webp",
        background: "University lecturer and youth development specialist",
        expertise: "Youth empowerment, education, skills development",
      },
    ],
  },

  organizationalValues: {
    title: "Our Leadership Values",
    values: [
      {
        name: "Servant Leadership",
        description:
          "We lead by serving our community with humility, dedication, and unwavering commitment to public good.",
      },
      {
        name: "Transparency & Accountability",
        description:
          "We maintain open governance, ensuring all actions and decisions are transparent and accountable to our people.",
      },
      {
        name: "Innovation & Excellence",
        description:
          "We embrace innovative solutions and strive for excellence in all our programs and service delivery.",
      },
      {
        name: "Inclusive Participation",
        description:
          "We ensure all voices are heard and all citizens have opportunities to participate in governance and development.",
      },
      {
        name: "Sustainable Development",
        description:
          "We pursue development that meets today's needs while preserving resources and opportunities for future generations.",
      },
    ],
  },
};

export default leadershipData;
