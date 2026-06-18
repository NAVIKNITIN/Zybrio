
export const customersPageData = {
  hero: {
  eyebrow: "Clients",
  title: "Real brands. Real results.",
  subtitle:
    "We measure our success in the outcomes our clients achieve — not the deliverables we ship.",
},

stories: [
  {
    id: 1,
    brand: "Fintech · Brand + UI/UX + Web",
    title:
      "How We Helped a Fintech Startup Go From Zero to 10,000 Users in 90 Days",
    metricValue: "10000",
    metricPrefix: "0% → ",
    metricSuffix: " users",
    metricLabel: "",
    image: "/Customer/Customer_hero1.png",
    imageAlt: "Fintech startup case study",
    showPlayButton: false,
    imageBadge: null,
    hasImageOverlay: false,
  },
  {
    id: 2,
    brand: "Fintech · Brand + UI/UX + Web",
    title:
      "How We Helped a Fintech Startup Go From Zero to 10,000 Users in 90 Days",
    metricValue: "10000",
    metricPrefix: "0% → ",
    metricSuffix: " users",
    metricLabel: "",
    image: "/Customer/Customer_hero2.png",
    imageAlt: "Fintech startup case study",
    showPlayButton: false,
    imageBadge: null,
    hasImageOverlay: false,
  },
  {
    id: 3,
    brand: "Fintech · Brand + UI/UX + Web",
    title:
      "How We Helped a Fintech Startup Go From Zero to 10,000 Users in 90 Days",
    metricValue: "10000",
    metricPrefix: "0% → ",
    metricSuffix: " users",
    metricLabel: "",
    image: "/Customer/Customer_hero3.png",
    imageAlt: "Fintech startup case study",
    showPlayButton: false,
    imageBadge: null,
    hasImageOverlay: false,
  },
],

  trustedSection: {
    title: "Brands that trusted us to lead.",
    cards: [
      {
        id: 1,
        type: "person",
        name: "Jennifer Rucker",
        role: "President & CEO",
        company: "United Way of Connecticut",
      },
      {
        id: 2,
        type: "person",
        name: "John-Paul Riordan",
        role: "Director of Learning & Development",
        company: "Varsity Tutors",
      },
      {
        id: 3,
        type: "metric",
        brand: "Varsity Tutors",
        value: "3,500+",
        label: "hours saved in first year of partnership",
      },
      {
        id: 4,
        type: "quote",
        quote:
          "Starting my day with ReflexAI simulations makes me sharper on live calls. I get to practice tough objections in a safe space first, so when I'm on the phone with a prospect, I feel confident and prepared.",
        role: "Outbound Sales Representative",
        company: "Verstela",
      },
      {
        id: 5,
        type: "quote",
        quote:
          "ReflexAI has been a terrific partner in helping us train our people and improve readiness across our contact center operations.",
        role: "Program Leader",
        company: "United Way of Connecticut",
      },
      {
        id: 6,
        type: "quote",
        quote:
          "ReflexAI has scaled our training in a way that would not have been possible otherwise, allowing us to coach more consistently across teams.",
        role: "Learning & Development Leader",
        company: "Varsity Tutors",
      },
    ],
  },

  allStories: {
    title: "All Stories",
    items: [
      {
        id: 1,
        category: "E-Commerce",
        title: "How a D2C jewellery brand built 40K Instagram followers in 4 months",
        image: "/Customer/Customer_hero2.png",
        imageAlt: "Verstela customer story",
        overlay: false,
        logo: {
          type: "none",
          label: "",
        },
      },
      {
        id: 2,
        category: "SaaS",
        title:
          " A complete product redesign that cut churn by 31%",
        image: "/Customer/Customer_hero3.png",
        imageAlt: "Varsity Tutors customer story",
        overlay: false,
        logo: {
          type: "none",
          label: "",
        },
      },
      {
        id: 3,
        category: "Real Estate",
        title:
          "A property platform that went from 0 to ₹2Cr in listings enquiries",
        image: "/Customer/Customer_her4.png",
        imageAlt: "United Way of Connecticut customer story",
        overlay: false,
        logo: {
          type: "none",
          label: "",
        },
      },
      {
        id: 4,
        category: "Fintech",
        title:
          "Rebranding a payments startup for Series A readiness",
        image: "/Customer/Customer_hero1.png",
        imageAlt: "Lines for Life customer story",
        overlay: false,
        logo: {
          type: "none",
          label: "",
        },
      },
    ],
  },
} as const;