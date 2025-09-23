// src/data/navigationData.js

// Debug logging for data file load
console.log("📊 navigationData.js file loading...");
console.trace("navigationData.js load trace");

export const navigationLinks = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    id: "community",
    label: "Community",
    href: "/community",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];

export const mobileNavConfig = {
  closeOnLinkClick: true,
  enableBackdrop: true,
  animationDuration: 0.3,
};

// Debug logging after data definition
console.log("✅ navigationData.js loaded successfully");
console.log("📊 navigationLinks exported:", navigationLinks);
console.log("📊 navigationLinks length:", navigationLinks.length);
console.log("📊 mobileNavConfig exported:", mobileNavConfig);

// Validate data structure
navigationLinks.forEach((link, index) => {
  if (!link.id || !link.label || !link.href) {
    console.error(`❌ Invalid navigation link at index ${index}:`, link);
    console.trace(`Invalid link ${index} trace`);
  } else {
    console.log(
      `✅ Valid link ${index}: ${link.id} - ${link.label} - ${link.href}`
    );
  }
});

// Export validation
if (navigationLinks.length === 0) {
  console.error("❌ navigationLinks array is empty!");
  console.trace("Empty navigationLinks trace");
}

if (!Array.isArray(navigationLinks)) {
  console.error("❌ navigationLinks is not an array!");
  console.trace("Invalid navigationLinks type trace");
}

console.log("🏁 navigationData.js processing complete");
