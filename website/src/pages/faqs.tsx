import React, { useState } from "react";
import Layout from "@theme/Layout";
//import '../css/faqs.css';
import data from "../data/faqsData";

//  accordionitem component
interface PanelProps {
  title: string;
  children: React.ReactNode;
}

function Panel({ title, children }: PanelProps) {
  const [isActive, setIsActive] = useState(false);

  const html = typeof children === "string" ? children : "";

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <button onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  );
}

export default function faqsPage() {
  return (
    <Layout title="FAQ's" description="Frequently Asked Questions">
      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          fontFamily: "sans-serif",
          lineHeight: 1.6,
        }}
      >
        <header
          style={{
            position: "relative",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/img/a-dinner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "1rem",
            overflow: "hidden",
            padding: "3rem 1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                margin: 0,
                color: "#ffffff",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              About
            </p>
            <h1
              style={{
                margin: "0.5rem 0 1rem",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#ffffff",
              }}
            >
              The Waitemata Lodge
            </h1>
          </div>
        </header>

        <h2>What do people ask about the Waitemata Lodge?</h2>

        {data.map((item) => (
          <Panel key={item.question} title={item.question}>
            {item.answer}
          </Panel>
        ))}
      </main>
    </Layout>
  );
}
