
import React, { useState } from 'react'
import Layout from "@theme/Layout";
import '../css/faqs.css';
import data from "../data/faqsData";

interface PanelProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
}

function Panel({ title, children, isActive, onToggle }: PanelProps) {
  const isHtml = typeof children === 'string';

  return (
    <section className={`faq-panel ${isActive ? 'is-open' : ''}`}>
      <button
        type="button"
        className="faq-question"
        aria-expanded={isActive}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="faq-icon" aria-hidden="true">
          {isActive ? '−' : '+'}
        </span>
      </button>

      {isActive && (
        <div className="faq-answer">
          {isHtml ? (
            <div dangerouslySetInnerHTML={{ __html: children }} />
          ) : (
            children
          )}
        </div>
      )}
    </section>
  );
}

export default function faqsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setActiveIndex((currentActiveIndex) =>
      currentActiveIndex === index ? null : index,
    );
  };

  return (
    <Layout title="FAQ's" description="Frequently Asked Questions">
      <main className="faq-page">
        <header className="faq-hero">
          <div className="faq-hero-content">
            <p className="faq-kicker">About</p>
            <h1 className="faq-title">The Waitemata Lodge</h1>
          </div>
        </header>

        <h2 className="faq-intro">What do people ask about the Waitemata Lodge?</h2>

        <div className="faq-list">
          {data.map((item, index) => (
            <Panel
              key={item.question}
              title={item.question}
              isActive={activeIndex === index}
              onToggle={() => toggleQuestion(index)}
            >
              {item.answer}
            </Panel>
          ))}
        </div>
      </main>
    </Layout>
  );
}