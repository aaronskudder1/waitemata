import React from 'react';
import Layout from "@theme/Layout";
import { useState } from "react";
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";


const values = [
  'Community and fellowship',
  'Moral and personal development',
  'ritual and symbolic knowledge',
];


export default function AboutPage() {
  return (
    <Layout title="About" description="About the Waitemata Lodge">
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem', fontFamily: 'sans-serif', lineHeight: 1.6 }}>
      <header
        style={{
          position: 'relative',
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/img/a-dinner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '1rem',
          overflow: 'hidden',
          padding: '3rem 1.5rem',
          marginBottom: '2rem',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ margin: 0, color: '#ffffff', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            About
          </p>
          <h1 style={{ margin: '0.5rem 0 1rem', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#ffffff' }}>
            The Waitemata Lodge
          </h1>
        </div>
      </header>

      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          The Waitemata Lodge is a Freemasons’ Lodge, which is part of the United Grand Lodge of Ancient Free & Accepted Masons Of England, also known as the English Constitution. It is the oldest English Constitution Lodge in the Auckland area, having met regularly in Auckland since 1855.
The Lodge meets in the purpose-built Masonic Centre at Ellerslie, in Auckland, New Zealand. It meets on the first Wednesday of each month from March to December, and our members enjoy a dinner together after the ceremony.
        </p>

      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '0.75rem' }}>Video</h2>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.75rem', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}>
          <iframe
            src="https://www.youtube.com/embed/wvnzL5GzxxY"
            title="Waitemata Lodge video"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '0.75rem' }}>History</h2>
        <p style={{ margin: 0 }}>
          At the time of the formation of the Waitemata Lodge, the only Masonic Lodge in Auckland was the Ara Lodge, No. 348 in the Irish Constitution. A petition, signed by six brothers, was sent to the Provincial Grand Lodge of New South Wales asking for dispensation to start this Lodge. The Petition was granted and the first meeting of the Lodge was held on 6 September 1855 when W. Bro. Buchanan, W. Master of Ara Lodge No. 348 IC installed Sir Samuel Osborne-Gibbes as Master of Waitemata Lodge.
        </p>

        <Link
          to="/docs/basic/getting-started/history"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: '#1a365d',
            color: '#ffffff',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          More Info
        </Link>

      </section>
    </main>
    </Layout>
  );
}
