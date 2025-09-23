// src/data/homeUI.js

export const heroContent = {
  title: "Welcome to Ikeja Local Govt",
  description:
    "Ikeja Local Government is dedicated to serving the community, fostering sustainable development, and ensuring the well-being of all residents.",
  ctaText: "Get Started",
  ctaLink: "/contact",
};

export const carouselImages = [
  {
    id: 1,
    src: "/img/monument_Ikeja.webp",
    alt: "Ikeja Monument - Symbol of Progress",
  },
  {
    id: 2,
    src: "/img/AllenAvenue.webp",
    alt: "Allen Avenue - Commercial Hub",
  },
  {
    id: 3,
    src: "/img/ikejaTrain.webp",
    alt: "Ikeja Train Station - Modern Transportation",
  },
  {
    id: 4,
    src: "/img/culture.webp",
    alt: "Cultural Heritage of Ikeja",
  },
  {
    id: 5,
    src: "/img/lasuth.webp",
    alt: "LASUTH - Quality Healthcare",
  },
  {
    id: 6,
    src: "/img/subway.webp",
    alt: "Modern Infrastructure",
  },
  {
    id: 7,
    src: "/img/egungun.webp",
    alt: "Traditional Culture",
  },
  {
    id: 8,
    src: "/img/LOS_1.webp",
    alt: "Lagos State Government",
  },
  {
    id: 9,
    src: "/img/Yellow_bus,_lagos_state.webp",
    alt: "Public Transportation System",
  },
  {
    id: 10,
    src: "/img/monument_Ikeja.webp",
    alt: "Ikeja Central Development",
  },
];


export const cardsData = [
  {
    image: "/img/leadership.webp",
    title: "Meet Our Leadership",
    description:
      "Connect with the executive and councillors shaping our community's future.",
    href: "/about#leadership",
  },
  {
    image: "/img/yellowPages.webp",
    title: "Yellow Pages Directory",
    description:
      "Find public institutions, police stations, schools, and healthcare centers.",
    href: "/community/yellow-pages",
  },
  {
    image: "/img/services.webp",
    title: "Emergency Services",
    description:
      "Get immediate help for infrastructure issues and security concerns.",
    href: "/community/service",
  },
  {
    image: "/img/sec.webp",
    title: "Report to Neighbourhood Watch",
    description:
      "Securely report issues and act as a whistleblower to the neighbourhood watch.",
    href: "/community",
  },
];


export const serviceCards = [
  {
    id: "citizen-services",
    icon: "Users",
    title: "Citizen Services",
    description:
      "Access essential government services including birth certificates, tax payments, and business registration.",
    cta: {
      text: "Access Services",
      href: "/services/citizen-services",
    },
  },
  {
    id: "community-development",
    icon: "Building2",
    title: "Community Development",
    description:
      "Explore ongoing projects, urban planning initiatives, and infrastructure development in your area.",
    cta: {
      text: "View Projects",
      href: "/services/community-development",
    },
  },
  {
    id: "public-resources",
    icon: "MapPin",
    title: "Public Resources",
    description:
      "Find information about public facilities, emergency services, healthcare centers, and educational institutions.",
    cta: {
      text: "Find Resources",
      href: "/services/public-resources",
    },
  },
];

export const carouselConfig = {
  autoPlay: true,
  interval: 5000,
  showIndicators: true,
  showArrows: false,
  pauseOnHover: true,
  transitionDuration: 1000,
};
