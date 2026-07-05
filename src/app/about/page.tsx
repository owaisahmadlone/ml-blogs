import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl font-medium tracking-tight">About</h1>

      <div className="prose-blog mt-8 max-w-none">
        <p>
          I&apos;m <strong>{site.name}</strong>, a machine learning engineer
          focused on turning research into products that people actually use.
        </p>
        <p>
          I currently work as <strong>{site.role}</strong> at{" "}
          <a href={site.companyUrl} target="_blank" rel="noreferrer">
            {site.company}
          </a>
          , where I build AI systems end to end — from data and model training to
          the infrastructure and product surfaces around them. Before that, I
          earned my <strong>B.Tech in Computer Science from IIT Kharagpur</strong>.
        </p>
        <p>
          This blog is my notebook in public: attention internals, training and
          inference at scale, RAG and retrieval, evals, and the messy realities
          of shipping ML. I write to understand things more deeply, and to leave
          behind the guide I wish I&apos;d found earlier.
        </p>

        <h2>Get in touch</h2>
        <p>
          The best way to reach me is by{" "}
          <a href={`mailto:${site.email}`}>email</a>. You can also find me on{" "}
          <a href={site.socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          ,{" "}
          <a href={site.socials.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
          , and{" "}
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
