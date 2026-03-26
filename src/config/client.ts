export const client = {
  // Business Details
  name: "Canna Verdi Garden Design",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bournemouth.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01202 914144",
  email: "",
  website: "",

  // Location
  address: "Bournemouth",
  city: "Bournemouth",
  county: "",
  postcode: "",
  basedIn: "Bournemouth",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Martin Hayward", rating: 5, text: "I had my garden completely done by Tom at Canna Verdi. I moved in to a new build house so I had a a dull garden just sloping grass & fencing. Tom completely changing my garden into a Mediterranean oasis & also a …  +3 ", date: "3 years ago" },
    { name: "Chris Johnson", rating: 5, text: "Tom designed and built a large spectacular aviary for me. He is a talented young man who worked hard and achieved a great result. My canaries and finches love it !  ", date: "3 years ago" },
    { name: "Carole Clements", rating: 5, text: "Tom listened to my ideas to completely make over my garden and made suggestions as to what would and wouldn’t work. He explained the differences between hard landscaping and what I wanted for a coastal garden as I was unclear. He took on …  ", date: "3 years ago" },
    { name: "David Hilling", rating: 5, text: "Tom gave thoughtful, knowledgeable and helpful advice to remodel our small urban garden. He then produced design options one of which he refined to fully meet our requirements. We were pleased with his service and the final result.  ", date: "3 years ago" },
    { name: "Anthony Bennett", rating: 5, text: "I used Tom's Canna Verdi firm to design patio, garden lighting and a water feature. Very pleased with his ideas as well as his prompt, courteous and professional service. Highly recommended.  ", date: "4 years ago" },
    { name: "Ray Dicker", rating: 5, text: "Great Attention to details.  Pleasant  safe working all the time.  Excellent design plans, interesting helpful information about plants.  Many thanks for all their work.  Norma Dicker.  ", date: "Edited 3 years ago" },
    { name: "John Williams", rating: 5, text: "We have been delighted throughout with the service we have received from Tom Brown of Canna Verdi and very much with the result which has transformed our garden  ", date: "3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Canna Verdi Garden Design | Landscaper in Bournemouth",
    description: "Professional landscaper in Bournemouth. 5.0-star rated on Google. Call for a free quote.",
  },
};
