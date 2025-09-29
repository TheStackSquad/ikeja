// src/data/achievementsData.js

const achievementsData = {
  keyInitiatives: {
    title: "The 'Ikeja First' Blueprint Initiatives",
    description:
      "Transformative programs designed to drive sustainable development and community empowerment across Ikeja Local Government.",
    programs: [
      {
        id: 1,
        title: "Ikeja Streetlight Project",
        category: "Infrastructure & Security",
        icon: "💡",
        image: "/img/aboutUI/streetlights.jpg",
        status: "Ongoing",
        description:
          "Deployment of solar-powered streetlights across Ikeja to enhance security and support local businesses.",
        impact:
          "Over 200 solar streetlights installed, contributing to a significant reduction in night-time crime.",
        timeline: "2024 - 2025",
        budget: "₦65 Million",
      },
      {
        id: 2,
        title: "Empower the Ikeja Child Initiative",
        category: "Education",
        icon: "🎓",
        image: "/img/aboutUI/child.jpg",
        status: "Active",
        description:
          "Comprehensive education program providing free JAMB and GCE coaching, school renovations, and educational support.",
        impact:
          "700+ students enrolled in free coaching, 15 schools renovated with modern facilities.",
        timeline: "2024 - Ongoing",
        budget: "₦80 Million",
      },
      {
        id: 3,
        title: "Ikeja Women & Youth Empowerment Program",
        category: "Social Development",
        icon: "👥",
        image: "/img/aboutUI/women.jpg",
        status: "Active",
        description:
          "Skills acquisition, microfinance support, and entrepreneurship training for women and youth in Ikeja.",
        impact:
          "1000+ beneficiaries trained, ₦40M in microloans disbursed, 300+ new businesses established.",
        timeline: "2024 - Ongoing",
        budget: "₦50 Million",
      },
      {
        id: 4,
        title: "Ikeja Primary Healthcare Revitalization",
        category: "Health Services",
        icon: "🏥",
        image: "/img/aboutUI/health.webp",
        status: "Phase 1 Complete",
        description:
          "Upgrading health centers, medical equipment procurement, and community health programs across Ikeja.",
        impact:
          "8 health centers upgraded, 20,000+ residents receiving improved healthcare services.",
        timeline: "2024 - 2025",
        budget: "₦55 Million",
      },
    ],
  },

  infrastructureDevelopment: {
    title: "Infrastructure Development",
    description:
      "Major infrastructure projects improving the quality of life for Ikeja residents.",
    projects: [
      {
        id: 5,
        name: "Awolowo Way Rehabilitation",
        type: "Road Construction",
        image: "/img/aboutUI/awolowo.webp",
        length: "1.2 km",
        status: "Completed",
        completionDate: "August 2025",
        cost: "₦50 Million",
        beneficiaries: "15,000+ residents and commuters",
      },
      {
        id: 6,
        name: "Ikeja Local Government Secretariat Annex",
        type: "Public Building",
        image: "/img/aboutUI/ikeja-house.jpg",
        features: "Modern offices, e-governance center, public service areas",
        status: "Completed",
        completionDate: "September 2025",
        cost: "₦90 Million",
        beneficiaries: "All Ikeja LGA residents",
      },
      {
        id: 7,
        name: "Oregun Community Market Renovation",
        type: "Commercial Infrastructure",
        image: "/img/aboutUI/market-rehab.jpg",
        features: "Modern stalls, parking, security, waste management systems",
        status: "Ongoing",
        expectedCompletion: "January 2026",
        cost: "₦45 Million",
        beneficiaries: "800+ traders, 20,000+ customers",
      },
    ],
  },

  communityPrograms: {
    title: "Community Development Programs",
    description:
      "Grassroots initiatives fostering community cohesion and development in Ikeja.",
    programs: [
      {
        id: 8,
        title: "Ikeja Community Security Watch Program",
        category: "Security",
        participants: "600+ volunteers",
        coverage: "All wards in Ikeja",
        impact: "Enhanced community surveillance and crime prevention.",
        image: "/img/aboutUI/cooperation.jpg",
      },
      {
        id: 9,
        title: "Ikeja Skills Acquisition Centers",
        category: "Capacity Building",
        participants: "500+ trainees monthly",
        courses:
          "ICT, Fashion Design, Catering, Solar Panel Installation, Electrical works",
        impact: "85% job placement rate, 200+ new businesses launched.",
        image: "/img/aboutUI/skill.jpg",
      },
      {
        id: 10,
        title: "Ikeja Senior Citizens Support Program",
        category: "Social Welfare",
        participants: "300+ elderly residents",
        services: "Free health screenings, social visits, financial support.",
        impact:
          "Improved quality of life and social inclusion for the elderly.",
        image: "/img/aboutUI/elder.jpg",
      },
    ],
  },

  recognitions: {
    title: "Awards & Recognition",
    description:
      "Acknowledgments of outstanding governance and community service for Ikeja Local Government.",
    awards: [
      {
        id: 11,
        title: "Best Performing LGA - Infrastructure",
        awardingBody: "Lagos State Government",
        year: "2025",
        category: "Infrastructure",
        image: "/img/aboutUI/infrastructure.png",
        description:
          "Recognition for exceptional infrastructure development and urban renewal in Ikeja.",
      },
      {
        id: 12,
        title: "Excellence in Youth Empowerment",
        awardingBody: "Lagos State Ministry of Youth and Social Development",
        year: "2025",
        category: "Leadership",
        image: "/img/aboutUI/power.png",
        description:
          "Outstanding contribution to youth empowerment and skills development programs.",
      },
      {
        id: 13,
        title: "Community Impact Award",
        awardingBody: "Association of Local Government Chairmen, Lagos",
        year: "2024",
        category: "Community Development",
        image: "/img/aboutUI/community.svg",
        description:
          "Exceptional community engagement and grassroots development initiatives in Ikeja.",
      },
    ],
  },

  keyMetrics: {
    title: "Performance Metrics",
    description: "Measurable outcomes of our development initiatives in Ikeja.",
    statistics: [
      {
        metric: "Infrastructure Projects",
        value: "30+",
        description: "Completed and ongoing projects",
        trend: "increasing",
      },
      {
        metric: "Citizens Empowered",
        value: "3,500+",
        description: "Through various programs",
        trend: "increasing",
      },
      {
        metric: "Jobs Created",
        value: "1,200+",
        description: "Direct and indirect employment",
        trend: "increasing",
      },
      {
        metric: "Budget Efficiency",
        value: "96%",
        description: "Project delivery on budget",
        trend: "stable",
      },
      {
        metric: "Citizen Satisfaction",
        value: "90%",
        description: "Based on community surveys",
        trend: "increasing",
      },
      {
        metric: "Healthcare Access",
        value: "85%",
        description: "Residents with improved access",
        trend: "increasing",
      },
    ],
  },
};

export default achievementsData;
