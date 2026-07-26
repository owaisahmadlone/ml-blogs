export const site = {
  name: "Owais Ahmad Lone",
  title: "Owais Ahmad Lone",
  role: "Foundational Software and AI Engineer",
  company: "Landeed (YC)",
  companyUrl: "https://www.landeed.com",
  education: "B.Tech in Computer Science, IIT Kharagpur",
  description:
    "Notes on machine learning, AI engineering, and building things — by Owais Ahmad Lone.",
  url: "https://ml-blogs-ten.vercel.app",
  email: "loneowaisahmad@gmail.com",
  resumeUrl: "/Resume_Owais.pdf",
  socials: {
    github: "https://github.com/owaisahmadlone",
    twitter: "https://twitter.com/owaisahmadlone",
    linkedin: "https://www.linkedin.com/in/owais-ahmad-lone-b2b241233",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "About", href: "/about" },
] as const;
