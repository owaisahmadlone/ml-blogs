export const site = {
  name: "Owais Ahmad Lone",
  title: "Owais Ahmad Lone",
  role: "Founding AI Engineer",
  company: "Landeed (YC)",
  companyUrl: "https://www.landeed.com",
  education: "B.Tech in Computer Science, IIT Kharagpur",
  description:
    "Notes on machine learning, AI engineering, and building things — by Owais Ahmad Lone.",
  url: "https://ml-blogs-ten.vercel.app",
  email: "owaisahmadlone@gmail.com",
  socials: {
    github: "https://github.com/owaisahmadlone",
    twitter: "https://twitter.com/owaisahmadlone",
    linkedin: "https://www.linkedin.com/in/owaisahmadlone",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;
