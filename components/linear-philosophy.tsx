'use client';

import Image from 'next/image';

const PILLARS = [
  {
    fig: 'FIG 0.1',
    title: 'Curriculum-first.',
    description:
      'DevShelf is shaped by the habits and mental models of world-class engineers — structured tracks, not scattered docs.',
    img: '/fig01.jpg',
    alt: 'Layered tech stack wireframe illustration',
  },
  {
    fig: 'FIG 0.2',
    title: 'Built for momentum.',
    description:
      'From formatter to flashcard, every tool and lesson is designed to reduce friction and keep you in the flow state.',
    img: '/fig02.jpg',
    alt: 'Modular architecture wireframe illustration',
  },
  {
    fig: 'FIG 0.3',
    title: 'Zero barriers.',
    description:
      'No sign-up. No paywall. No server roundtrip. Everything runs offline in your browser at sub-10ms.',
    img: '/fig03.jpg',
    alt: 'Speed and flow wireframe illustration',
  },
];

export default function LinearPhilosophy() {
  return (
    <section className="linear-philosophy" id="philosophy">
      {/* Large statement headline — Linear style */}
      <div className="philosophy-header">
        <h2 className="philosophy-statement">
          <span className="philosophy-emphasis">A new kind of learning platform.</span>{' '}
          <span className="philosophy-muted">
            Purpose-built for developers who learn by building, with zero barriers and instant
            access to the tools that matter.
          </span>
        </h2>
      </div>

      {/* Three-column wireframe illustration cards */}
      <div className="philosophy-grid">
        {PILLARS.map((pillar) => (
          <div key={pillar.fig} className="philosophy-card">
            <span className="philosophy-fig">{pillar.fig}</span>
            <div className="philosophy-illustration">
              <Image
                src={pillar.img}
                alt={pillar.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="philosophy-img"
              />
            </div>
            <div className="philosophy-card-body">
              <h3 className="philosophy-card-title">{pillar.title}</h3>
              <p className="philosophy-card-desc">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
