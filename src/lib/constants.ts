export const SITE = {
  name: "Forte Pilates",
  tagline: "Creative Pilates in Los Angeles",
  description:
    "Forte Pilates is a boutique Pilates studio in Los Angeles offering private sessions, duet and trio classes, and creative workshops.",
  url: "https://fortepilatesla.com",
  bookingUrl: "https://www.mindbodyonline.com/explore/locations/forte-pilates",
  instagram: "https://www.instagram.com/fortepilatesla/",
  email: "info@fortepilatesla.com",
  phone: "(213) 915-0006",
  address: {
    street: "2217-2219 Beverly Blvd",
    city: "Los Angeles",
    state: "California",
    zip: "90057",
    neighborhood: "Los Angeles",
  },
  hours: {
    monday: "8:00 AM – 9:00 PM",
    tuesday: "8:00 AM – 9:00 PM",
    wednesday: "8:00 AM – 9:00 PM",
    thursday: "8:00 AM – 9:00 PM",
    friday: "8:00 AM – 9:00 PM",
    saturday: "9:00 AM – 6:00 PM",
    sunday: "Closed",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;
