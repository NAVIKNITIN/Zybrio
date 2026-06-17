export type FooterColumn = {
  title: string;
  links: string[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: ["UI/UX Design", "Brand Identity","Web Development","Mobile Apps","Digital Marketing","SEO"],
  },
  {
    title: "Work",
    links: [
      "Fintech",
      "E-Commerce",
      "SaaS & Tech",
      "Mental Health",
      "D2C Brands",
      "Real Estate",
      "EdTech",      
    ],
  },
  {
    title: "Use Cases",
    links: [
      "Startup Launch",
      "Brand Refresh",
      "Product Design",
      "Growth Campaigns",
    ],
  },
  {
    title: "Connect",
    links: ["Case Studies", "Blog", "Process", "Pricing"],
  },
  {
    title: "Company",
    links: ["About Zybrio", "Our Work", "Journal", "Careers"],
  },
];

export const organizationsColumn: FooterColumn = {
  title: "Connect",
  links: ["hello@zybrio.com", "LinkedIn", "Instagram", "Behance"],
};