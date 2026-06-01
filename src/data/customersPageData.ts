// src/data/customersPageData.ts

export const customersPageData = {
  hero: {
    eyebrow: "Customers",
    title: "ReflexAI in action",
  },

  stories: [
    {
      id: 1,
      brand: "lines for life",
      title:
        "Transforming Crisis Line Training and Quality Assurance at Lines for Life with ReflexAI",
      metricValue: "71%",
      metricLabel: "Feel better prepared to answer calls",
      image: "/Customer/Customer_hero1.png",
      imageAlt: "Lines for Life customer story",
      showPlayButton: true,
      imageBadge: null,
      hasImageOverlay: false,
    },
    {
      id: 2,
      brand: "verstela.",
      title: "Enhancing Verstela's Outbound Sales with ReflexAI",
      metricValue: "1,000+",
      metricLabel: "Hours of roleplays completed since start of partnership",
      image: "/Customer/Customer_hero2.png",
      imageAlt: "Verstela customer story",
      showPlayButton: false,
      imageBadge: null,
      hasImageOverlay: false,
    },
    {
      id: 3,
      brand: "Varsity Tutors",
      title:
        "Enhancing How Varsity Tutors Engages Students and Parents with ReflexAI",
      metricValue: "460",
      metricLabel: "Total individuals trained in 6 months",
      image: "/Customer/Customer_hero3.png",
      imageAlt: "Varsity Tutors customer story",
      showPlayButton: false,
      imageBadge: null,
      hasImageOverlay: true,
    },
  ],

  trustedSection: {
    title: "Trusted by companies across industries",
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
        category: "Staffing & Recruiting",
        title: "Enhancing Verstela's Outbound Sales with ReflexAI",
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
        category: "Education",
        title:
          "Enhancing How Varsity Tutors Engages Students and Parents with ReflexAI",
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
        category: "211 and 988 Contact Center",
        title:
          "United Way of Connecticut: transforming crisis line operations with ReflexAI",
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
        category: "Crisis Center",
        title:
          "Transforming Crisis Line Training and Quality Assurance at Lines for Life with ReflexAI",
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