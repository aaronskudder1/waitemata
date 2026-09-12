import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Layout from "@theme/Layout";

type Section = {
  title: string;
  description: string;
  to: string;
};

type Topic = {
  label: string;
  to: string;
};

const sections: Section[] = [
  {
    title: "Who we are",
    description: `
      "Waitemata Lodge No. 689 is the oldest English Constitution lodge in Auckland. We first met on 6 September 1855, received our warrant in December 1856, and have met monthly, almost without interruption, ever since.
      We are part of a tradition that traces its formal origins to 1717 and its symbolic origins a good deal further back than that. We are not a networking group, a charity, or a social club — though we do all three of those things on the side.

We are an initiatic fraternity. That word is precise, and we mean it."`,
    to: "/docs/basic/getting-started/history",
  },
  {
    title: "What we ask",
    description: `We ask one evening a month to begin with — the first Wednesday, March to December — and before long two more, at the Lodge of Instruction, which is where the work is actually learned. We would rather tell you that now than after you have joined.

We ask that you believe in something greater than yourself. We do not ask what you call it, we do not require you to explain it, and we do not discuss it in the lodge.

We ask seriousness about a set of rituals that have been performed in roughly their present form for several centuries. We ask willingness to be taught by men older than you, inside a structure that will not adjust itself to your schedule or your preferences.

We ask discretion about what happens in the lodge room — not because it is secret, but because it is meant to be encountered rather than described.

And we ask, eventually, that you become someone the lodge can trust to teach the men who come after you.

`
    ,
    to: "/docs/basic/getting-started/history",
  },
  {
    title: "What we offer",
    description:
      `"We offer a small number of older men who will know your name, expect things of you, and go on doing so for the rest of your life.

We offer a structure for the moral development of a man — not self-help, but something older and considerably harder.

We offer the experience of being initiated into a tradition rather than enrolled in a service. We offer fellowship that is neither transactional nor casual.

And we offer the increasingly rare experience of belonging to something whose value does not depend on whether the modern world approves of it."`,
    to: "/docs/basic/getting-started/history",
  },
];

const popularTopics: Topic[] = [
  { label: "History", to: "/docs/basic/getting-started/history" },
  {
    label: "Past Masters",
    to: "/docs/basic/getting-started/past-masters",
  },
  {
    label: "Meetings",
    to: "/docs/basic/getting-started/meetings",
  },
 
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Waitemata Lodge 689"
      description="The oldest English Constitution Lodge in New Zealand. Est. 1856">
      <header
        className="hero text--center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/img/b-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="container padding-vert--xl">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "nowrap",
            }}>
            <img
              src="/img/mark-sc.png"
              alt="Waitemata Lodge mark"
              style={{
                width: "52px",
                height: "52px",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.65))",
                marginBottom: "0.1rem",
              }}
            />
            <h1
              className="hero__title"
              style={{
                color: "#ffffff",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.65)",
                margin: 0,
              }}>
              {siteConfig.title}
            </h1>
          </div>
          <p
            className="hero__subtitle"
            style={{
              color: "#f3f3f3",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.65)",
            }}>
            {siteConfig.tagline}
          </p>
        </div>
      </header>

      <main>
        <section className="container padding-vert--xl">
          <div className="homeSectionGrid">
            {sections.map((section) => (
              <Link
                key={section.title}
                to={section.to}
                className="homeSectionCard"
              >
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="container padding-vert--xl">
          <h2 className="text--center margin-bottom--lg">Popular topics</h2>
          <div className="homeTopicsGrid">
            {popularTopics.map((topic) => (
              <Link key={topic.to} to={topic.to} className="homeTopicLink">
                {topic.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
