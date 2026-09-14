import React from 'react';
import Layout from "@theme/Layout";

export default function MeetingsPage() {
  return (
    <Layout title="Meetings" description="Information about Waitemata Lodge meetings">
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
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}/>
          
        <header style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Meetings</header>

        <p>The Waitemata Lodge meets at The Ellerslie Masonic Centre, 
        9a Robert Street, Ellerslie, Auckland. 
        Meetings are held on the first Wednesday of each month from March to December, starting at 6.30 pm. A dinner follows the meeting.
        </p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}/>
          
        <header style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Instruction</header>

        <p>Twice monthly. This is where the ritual is learned. It is not, in practice, optional.
        </p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}/>
          
        <header style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Dining</header>

        <p>The Waitemata Lodge are a dining lodge and we enjoy a meal together after each meeting. 
        </p>

        <img
          src="/img/a-table.jpg"
          alt="Dining table at a Waitemata Lodge meeting"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '800px',
            margin: '1.5rem auto 0',
            borderRadius: '0.75rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          }}
        />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}/>
          
        <header style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Cost</header>
        <p>$80 on initiation. $140 a year. $25 for dinner, if you stay for it. You provide your own dark suit and regalia.
        </p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}/>
        <header style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Requirements</header>

        <p>Over 18. Of good character. A belief in a supreme being, however you understand it.</p>
      </section>
      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}/>
        <header style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Dress</header>
        <p>Dark suit, white shirt, black shoes. Always.</p>
      </section>

    </main>
    </Layout>
  );
}
