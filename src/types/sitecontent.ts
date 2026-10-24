import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import type {
  SimpleNavLink,
  HeroSectionConfig,
  DifferenceConfig,
  Agent,
  Property,
  ReviewPageData,
  CTAContentConfig,
  DashboardCardConfig,
  StatBarConfig,
  ValuationConfig,
  PropertiesSectionConfig,
  FooterConfig,
} from "../types";

/**
 ============================================================
   SITE CONFIG — SINGLE SOURCE OF TRUTH FOR THIS CLIENT
 ============================================================
 * Client: Lisa Blunt - Coldwell Banker Community Professionals
 * Listings: 3 real + 4 demo (demo entries are marked // DEMO)
 * VERIFY: Years, sold volume, satisfaction %, area count are placeholders.
 * VERIFY: MLS numbers were not supplied for the 3 real listings.
 * VERIFY: Original name: Lisa Jackson Blunt; brokerage lists her as Lisa Blunt.
 ============================================================
 */

// ----------------------------------------------------------
// Navbar.tsx
// ----------------------------------------------------------

export const navbarLinks: SimpleNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/#properties" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

// ----------------------------------------------------------
// HeroSection.tsx
// ----------------------------------------------------------

export const heroConfig: HeroSectionConfig = {
  brand: {
    initials: "LB",
    name: "Lisa Blunt",
    title: "Sales Representative",
    heroImage: "/3.jpg",
    heroImageAlt: "Hamilton & Area Real Estate",
  },
  hero: {
    eyebrow: "Coldwell Banker Community Professionals · Hamilton, Cayuga & Haldimand County",
    headingMain: "Buy, sell, and invest with",
    headingItalic: "confidence",
    headingEnd: "with Lisa Blunt.",
    subheading:
      "Dedicated residential real estate sales representative serving Hamilton, Cayuga, and surrounding communities since 2016. Delivering personalized guidance and seamless property transactions.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/aboutus",
    headerCtaText: "Get In Touch",
    headerCtaLink: "/#contact",
  },
  navLinks: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/", active: false },
    { name: "Services", href: "/", active: false },
    { name: "Properties", href: "/#properties", active: false },
    { name: "Insights", href: "/#insights", active: false },
    { name: "Contact", href: "/#contact", active: false },
  ],
  stats: [
    { icon: Award, value: "$40M+", suffix: "", label: "worth of real estate sold" },
    { icon: Building2, value: "10+", suffix: " Yrs", label: "of experience (Since 2016)" },
    { icon: Users, value: "96%", suffix: "", label: "client satisfaction" },
    { icon: Clock, value: "8+", suffix: " Cities", label: "areas served" },
  ],
};

// ----------------------------------------------------------
// WhyUsSection.tsx ("The Lisa Difference")
// ----------------------------------------------------------

export const differenceConfig: DifferenceConfig = {
  eyebrow: "/ Why Choose Lisa?",
  headingMain: "The Lisa ",
  headingItalic: "Difference",
  subtext:
    "Combining deep local market knowledge across Hamilton, Cayuga, and surrounding communities with personalized service, clear communication, and dedicated professional representation.",
  callNowText: "Call Direct",
  callNowHref: "tel:4165057831",
  bookConsultationText: "Book a Consultation",
  bookConsultationHref: "#contact",
  features: [
    {
      icon: TrendingUp,
      title: "Extensive Regional Coverage",
      description:
        "Serving Hamilton, Cayuga, Haldimand County, and communities across the Hamilton area.",
    },
    {
      icon: ShieldCheck,
      title: "RECO & Coldwell Banker Standards",
      description:
        "Professional brokerage representation ensuring all legal, contractual, and regulatory standards are rigorously met.",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Real Estate Professional",
      description:
        "Expert strategic guidance tailored to residential single-family homes, townhouses, and first-time buyers.",
      linkText: "Our services",
      linkHref: "/services",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Commitment",
      description:
        "A personalized, responsive approach focused on building lasting trust and achieving your unique real estate goals.",
      linkText: "Learn about Lisa",
      linkHref: "/aboutus",
    },
  ],
};

// ----------------------------------------------------------
// AgentSection.tsx
// ----------------------------------------------------------

export const agent: Agent = {
  name: "Lisa Blunt",
  role: "Sales Representative | Coldwell Banker Community Professionals",
  bio: "Serving Hamilton, Cayuga, and surrounding communities, Lisa Blunt brings a personal, attentive approach to every transaction. From downtown Hamilton character homes to townhouses and small-town properties, Lisa guides buyers and sellers with strong market knowledge, clear communication, and genuine care.",
  image: "/user.jpg",
  specialties: [
    "Residential Single-Family Homes",
    "Townhouses & Condominiums",
    "First-Time Homebuyer Guidance",
    "Buyer & Seller Representation",
    "Free Comparative Market Assessments",
    "Hamilton, Cayuga & Surrounding Communities",
  ],
  recentClosings: [
    { address: "Single-Family Homes", neighbourhood: "Kirkendall & Hamilton", price: "Guidance" },
    { address: "Townhouses & Small-Town Homes", neighbourhood: "Bruleville & Cayuga", price: "Expertise" },
    { address: "Free Property Evaluation", neighbourhood: "Hamilton & Area", price: "Value" },
    { address: "Client Satisfaction Focus", neighbourhood: "96% Satisfaction Rate", price: "Trust" },
  ],
};

// ----------------------------------------------------------
// PropertiesCarousel.tsx (7 Total Listings — 3 real, 4 demo)
// ----------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    number: "01/07",
    title: "Hamilton Mountain Family Home",
    subtitle: "Comfortable family home close to schools, parks, and highway access with a finished lower level.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,900 sq ft", beds: "4 Beds", baths: "2.5 Baths" },
    mls: "MLS® 202614001",  // DEMO
  },
  {
    id: "2",
    number: "02/07",
    title: "Westdale Character Bungalow",
    subtitle: "Charming bungalow near the university with original details and a private backyard.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,300 sq ft", beds: "3 Beds", baths: "2 Baths" },
    mls: "MLS® 202614002",  // DEMO
  },
  {
    id: "3",
    number: "03/07",
    title: "63 Chedoke Avenue, Hamilton, ON",
    subtitle: "Kirkendall home with 5 bedrooms and 4 baths on a 40 x 110 ft lot.",
    image: "/listing1.png",
    price: "$1,489,000",
    category: "residential",
    status: "Active",
    specs: { size: "2,923 sq ft", beds: "5 Beds", baths: "4 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "4",
    number: "04/07",
    title: "403 Broad Street E, Cayuga, ON",
    subtitle: "Cayuga home with 4 bedrooms and 2 baths on a 60 x 59 ft lot.",
    image: "/listing2.png",
    price: "$574,900",
    category: "residential",
    status: "Active",
    specs: { size: "2,332 sq ft", beds: "4 Beds", baths: "2 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "5",
    number: "05/07",
    title: "10 - 266 Limeridge Road E, Hamilton, ON",
    subtitle: "Bruleville townhouse with 2 bedrooms and 2 baths.",
    image: "/listing3.png",
    price: "$349,900",
    category: "residential",
    status: "Active",
    specs: { size: "1,215 sq ft", beds: "2 Beds", baths: "2 Baths" },
    mls: "MLS® On Request",
  },
  {
    id: "6",
    number: "06/07",
    title: "Ancaster Executive Residence",
    subtitle: "Refined living in a sought-after sector with premium finishes and a landscaped yard.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "3,400 sq ft", beds: "5 Beds", baths: "4 Baths" },
    mls: "MLS® 202614006",  // DEMO
  },
  {
    id: "7",
    number: "07/07",
    title: "Haldimand County Country Property",
    subtitle: "Peaceful rural property with open space, mature trees, and scenic views.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,500 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202614007",  // DEMO
  },
];

export const propertiesSectionConfig: PropertiesSectionConfig = {
  brand: { initial: agent.name.charAt(0), name: agent.name },
  contactLink: { label: "Get in touch", href: "#contact" },
  filters: {
    all: "All Properties",
    residential: "Residential & buyers",
    portfolio: "Rural & specialty",
  },
  heading: {
    line1: "Explore",
    line1Emphasis: "your",
    line2: "possibilities",
    line2Emphasis: "with",
  },
  inquireButtonText: "Inquire",
  footerNote: {
    label: "Hamilton Clients",
    body: "From Hamilton homes to Cayuga family properties, receive personal guidance for the move ahead.",
  },
  areaBadge: "Hamilton & Area & surrounding areas",
};

// ----------------------------------------------------------
// ReviewsGlassSection.tsx
// ----------------------------------------------------------

export const reviewPages: ReviewPageData[] = [
  {
    featured: {
      name: "Trusted Regional Professional",
      quote: "Providing dedicated guidance and professional expertise for every step of your real estate transaction.",
      tags: ["Coldwell Banker", "96% Satisfaction"],
      handle: "Lisa Blunt | Coldwell Banker",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    quoteBanner: {
      quote: "Committed to delivering smooth, stress-free real estate experiences across Hamilton, Cayuga, and surrounding communities.",
      name: "Lisa Blunt",
      role: "Sales Representative",
      initials: "LB",
      rating: 5,
    },
    wide: {
      name: "Attentive & Professional",
      timeAgo: "Since 2016",
      quote: "10+ years of professional real estate experience serving over 8 regional communities with passion and dedication.",
      rating: 5,
    },
    hero: {
      name: "Lisa Blunt",
      role: "Sales Representative | Coldwell Banker Community Professionals",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Experience & Integrity",
      body: "Lisa brings local market knowledge, thorough communication, and personalized care to clients across Hamilton & Area.",
      rating: 5,
    },
    badge: { reviewCount: "96%", ratingLabel: "Client Satisfaction", clientsCount: "8+ Cities" },
    split: {
      date: "Hamilton & Area & Surrounding Areas",
      title: "Your Regional Real Estate Partner",
      quote: "Helping families, buyers, and investors navigate local real estate markets with complete confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    search: { title: "Hamilton & Area Real Estate", body: "Comprehensive buy, sell, and market evaluation services." },
    teal: {
      name: "Market Expertise",
      body: "Leveraging the Coldwell Banker network and regional market insight to deliver optimal results for every client.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      likes: 0,
      views: "$40M+ Sold",
    },
  },
];

// ----------------------------------------------------------
// FinalCTASection.tsx
// ----------------------------------------------------------

export const ctaConfig: CTAContentConfig = {
  headingMain: "Ready to Start Your",
  headingItalic: "Real Estate Journey?",
  subheading:
    "Contact Lisa Blunt at Coldwell Banker Community Professionals for expert real estate services across Hamilton, Cayuga, and surrounding communities.",
  bulletPoints: [
    "Over 10 years of dedicated experience serving clients since 2016",
    "Free, no-obligation comparative market analysis for your property",
    "Attentive service across 8+ cities including Hamilton, Cayuga, surrounding communities",
  ],
  primaryCtaText: "Book Consult",
  primaryCtaLink: "#contact",
  secondaryCtaText: "Call Lisa (416) 505-7831",
  secondaryCtaLink: "tel:4165057831",
  agentName: "Lisa Blunt",
  agentTitle: "Sales Representative",
};

export const dashboardCardConfig: DashboardCardConfig = {
  title: "Lisa's Approach",
  subtitle: "Hamilton & Area",
  stats: [
    { label: "Satisfaction", value: "96%" },
    { label: "Experience", value: "10+ Years" },
  ],
  marketStatusLabel: "Status",
  marketStatusValue: "Ready to Assist",
  badgeName: "Coldwell Banker Community Professionals",
  badgeTagline: "Trust, Professionalism, Results",
};

export const ctaStatBars: StatBarConfig[] = [
  { label: "Experience", value: "10+ Years", color: "bg-accent-champagne", valueColor: "text-accent-champagne" },
  { label: "Satisfaction", value: "96%", color: "bg-emerald-400", valueColor: "text-emerald-400" },
];

// ----------------------------------------------------------
// HomeValuationSection.tsx
// ----------------------------------------------------------

export const valuationConfig: ValuationConfig = {
  sectionTag: "Home Evaluation",
  title: {
    main: "What Is Your Property",
    highlight: "Really Worth?",
  },
  description:
    "Thinking of selling or curious about market value in your sector? Request a free, professional market evaluation prepared by Lisa Blunt.",
  defaultPropertyType: "Single Family Home",
  formPlaceholders: {
    name: "e.g. John Smith",
    emailOrPhone: "e.g. name@example.com or (905) 555-0199",
    address: "e.g. 123 Main Street, Hamilton",
  },
  contactDetails: {
    phone: { label: "Cell: (416) 505-7831", href: "tel:4165057831" },
    email: { label: "lisa-blunt@coldwellbanker.ca", href: "mailto:lisa-blunt@coldwellbanker.ca" },
    location: "Coldwell Banker Community Professionals, 318 Dundurn Street South, Unit 1B, Hamilton, ON L8P 4L6",
  },
  propertyOptions: [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Condominium", value: "Condominium" },
    { label: "Multi-Family / Income Property", value: "Multi-Family" },
    { label: "Townhouse / Rowhouse", value: "Townhouse" },
  ],
};

// ----------------------------------------------------------
// FooterSection.tsx
// ----------------------------------------------------------

export const footerConfig: FooterConfig = {
  headerImage: {
    src: "/7.jpg",
    alt: "Coldwell Banker Community Professionals - Lisa Blunt",
  },
  exploreSection: {
    title: "Explore",
    links: [
      { label: "Buy & Sell Residential", href: "#services" },
      { label: "Free Property Valuation", href: "#valuation" },
      { label: "Featured Listings", href: "#properties" },
      { label: "About Lisa Blunt", href: "#about" },
    ],
  },
  resourcesSection: {
    title: "Resources",
    links: [
      { label: "First-Time Buyer Guide", href: "#services" },
      { label: "Home Seller Tips", href: "#services" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Get in Touch", href: "#contact" },
    ],
  },
  legalSection: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "RECO Compliance", href: "#disclaimer" },
    ],
  },
  contactDetails: {
    location: "Hamilton, ON",
    phonePrimary: { label: "Cell: (416) 505-7831", href: "tel:4165057831" },
    phoneSecondary: { label: "Office: (905) 522-1110", href: "tel:9055221110" },
    contactLink: { label: "Email: lisa-blunt@coldwellbanker.ca", href: "mailto:lisa-blunt@coldwellbanker.ca" },
  },
  brandBar: {
    brandName: "LISA BLUNT",
    badgeText: "Coldwell Banker Community Professionals",
    footerLinks: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    copyrightHolder: "Lisa Blunt - Coldwell Banker Community Professionals.",
    copyrightRights: "All rights reserved.",
  },
};