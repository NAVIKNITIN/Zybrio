export const aboutPageContent = {
  hero: {
    titleLines: ["Meet the people", "behind the platform"],
    description:
      "We're a team of technologists, clinicians, and operators united by one goal: to help humans perform their best when it matters most.",
  },

  teamImage: {
    src: "/about/ABOUT1.png",
    alt: "ReflexAI team working together",
  },

  teamPrinciples: [
    {
      title: "Extensively trained",
      description:
        "100% of our team members have gone through AI ethics, HIPAA, and cybersecurity training.",
    },
    {
      title: "Subject matter experts",
      description:
        "Every member of the team has expertise in their areas of focus to deliver the highest quality tools.",
    },
    {
      title: "Mission-driven",
      description:
        "Each Reflexer is inspired by our role as enablers for incredible customers and their teams.",
    },
  ],

  teamMembers: {
    leaders: [
      {
        name: "Sam Dorison",
        role: "Cofounder and Chief Executive Officer",
        imageSrc: "/about/Leader1.png",
        imageAlt: "Sam Dorison",
        linkedinUrl: "#",
      },
      {
        name: "John Callery",
        role: "Cofounder and Chief Product & Technology Officer",
        imageSrc: "/about/Leader2.png",
        imageAlt: "John Callery",
        linkedinUrl: "#",
      },
    ],
    advisors: [
      {
        name: "Reid Blackman, PhD",
        role: "AI Ethicist, Founder, Virtue Consultants",
        imageSrc: "/about/advisors1.png",
        imageAlt: "Reid Blackman",
        linkedinUrl: "#",
      },
      {
        name: "Alfiee Breland Noble, PhD",
        role: "Psychologist & Public Speaker, Founder, AAKOMA Project",
        imageSrc: "/about/advisors2.png",
        imageAlt: "Alfiee Breland Noble",
        linkedinUrl: "#",
      },
      {
        name: "Amy Green, PhD",
        role: "Clinical Psychologist, Head of Research, Hopelab",
        imageSrc: "/about/advisors3.png",
        imageAlt: "Amy Green",
        linkedinUrl: "#",
      },
    ],
  },
    careersCta: {
    title: "Join a team building for the moments that matter",
    description:
      "We're growing a diverse, mission-driven team of technologists, researchers, and practitioners who believe empathy is a skill worth scaling.",
    imageSrc: "/about/CTa.png",
    imageAlt: "Team member smiling in an office",
    ctaLabel: "Join our team",
    ctaHref: "/careers",
  },
} as const;
