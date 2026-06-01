export type FooterColumn = {
  title: string;
  links: string[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: ["Prepare", "Assure"],
  },
  {
    title: "Industries",
    links: [
      "Crisis",
      "Education",
      "Healthcare",
      "Mental Health",
      "Emergency Response",
      "Contact Centers",
      "Staffing Services",
      "Financial Services",
      "Large Hospitals",
      "Insurance",
      "Travel",
    ],
  },
  {
    title: "Use Cases",
    links: [
      "Customer Service",
      "Sales Teams",
      "Clinical Teams",
      "Regulatory Compliance",
    ],
  },
  {
    title: "Resources",
    links: ["Customers", "Blog", "Press"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Security & Compliance", "HomeTeam"],
  },
];

export const organizationsColumn: FooterColumn = {
  title: "Organizations",
  links: ["SMB", "Enterprise", "Nonprofit"],
};