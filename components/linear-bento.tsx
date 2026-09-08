'use client';

import {
  ArrowRight,
  Terminal,
  ShieldCheck,
  Zap,
  BookOpen,
  Keyboard,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const TECH_PILLS = [
  'TypeScript',
  'Next.js',
  'Python',
  'Web Protocols',
  'Git Internals',
  'Linux & POSIX',
  'REST & JSON',
  'Crypto & UUID',
  'DevOps Foundations'
];

export default function LinearBento() {
  return (
    <section className="linear-bento-section">
      {/* Tech ticker / capabilities strip */}
      <div className="linear-ticker-container">
        <p className="ticker-heading">BUILT FOR ENGINEERS WORKING ACROSS THE MODERN STACK</p>
        <div className="ticker-pills">
          {TECH_PILLS.map((tech) => (
            <span key={tech} className="ticker-pill">
              <span className="ticker-bullet" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bento Grid Header */}
      <div className="bento-header">
        <div className="bento-badge">
          <Sparkles size={13} />
          <span>ENGINEERED FOR FLOW</span>
        </div>
        <h2 className="bento-title">
          Everything you need.<br />
          <span className="linear-gradient-text">Nothing in your way.</span>
        </h2>
        <p className="bento-subtitle">
          DevShelf replaces scattered tabs and sluggish online formatters with an integrated,
          blazing-fast suite of developer utilities and curriculum.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="bento-grid">
        {/* Bento Card 1 - Large / Wide */}
        <div className="bento-card bento-card-wide">
          <div className="bento-card-bg" />
          <div className="bento-card-content">
            <div className="bento-icon-wrapper">
              <Zap size={22} className="text-lime" />
            </div>
            <span className="bento-kicker">01 // INSTANT UTILITIES</span>
            <h3>Zero-Latency Client-Side Sandbox</h3>
            <p>
              Format JSON, generate UUIDs, encode URLs, and convert Base64 payloads directly inside your
              browser’s V8 engine. No roundtrips, no server logs, zero latency.
            </p>

            <div className="bento-code-mockup">
              <div className="mockup-bar">
                <span className="dot dot-green" />
                <span className="mockup-path">~/engine/sandbox.ts</span>
                <span className="mockup-latency">&lt; 1ms execution</span>
              </div>
              <div className="mockup-code">
                <span className="token-comment">{'// Format, minify & inspect data instantly'}</span><br />
                <span className="token-keyword">const</span> payload = <span className="token-func">transform</span>(<span className="token-string">&apos;json&apos;</span>, rawInput);<br />
                <span className="token-keyword">const</span> id = crypto.<span className="token-func">randomUUID</span>();
              </div>
            </div>

            <div className="bento-card-action">
              <a href="#tools" className="linear-link">
                <span>Explore the Toolbox</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bento Card 2 */}
        <div className="bento-card">
          <div className="bento-card-bg" />
          <div className="bento-card-content">
            <div className="bento-icon-wrapper">
              <BookOpen size={22} className="text-lime" />
            </div>
            <span className="bento-kicker">02 // CURATED TRACKS</span>
            <h3>Deep, Conceptual Engineering</h3>
            <p>
              Bite-sized, high-signal lessons covering web fundamentals, programming paradigms,
              Git workflows, networking, and security.
            </p>

            <div className="bento-tag-list">
              <span className="mini-tag">Web Foundations</span>
              <span className="mini-tag">Python Mindset</span>
              <span className="mini-tag">Git Mechanics</span>
              <span className="mini-tag">Linux Essentials</span>
            </div>

            <div className="bento-card-action">
              <a href="#resources" className="linear-link">
                <span>Browse Lessons</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bento Card 3 */}
        <div className="bento-card">
          <div className="bento-card-bg" />
          <div className="bento-card-content">
            <div className="bento-icon-wrapper">
              <ShieldCheck size={22} className="text-lime" />
            </div>
            <span className="bento-kicker">03 // LOCAL-FIRST ARCHITECTURE</span>
            <h3>Private &amp; Frictionless</h3>
            <p>
              Your bookmarks, completed lesson checkpoints, and quiz scores are preserved
              directly in local browser memory. No telemetry or database lock-in.
            </p>

            <div className="privacy-badge-box">
              <div className="privacy-row">
                <CheckCircle2 size={15} className="text-lime" />
                <span>Zero login wall or account needed</span>
              </div>
              <div className="privacy-row">
                <CheckCircle2 size={15} className="text-lime" />
                <span>No cookie tracking or telemetry</span>
              </div>
              <div className="privacy-row">
                <CheckCircle2 size={15} className="text-lime" />
                <span>Runs completely offline</span>
              </div>
            </div>

            <div className="bento-card-action">
              <a href="#resources" className="linear-link">
                <span>See Dashboard</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bento Card 4 - Wide */}
        <div className="bento-card bento-card-wide">
          <div className="bento-card-bg" />
          <div className="bento-card-content">
            <div className="bento-icon-wrapper">
              <Keyboard size={22} className="text-lime" />
            </div>
            <span className="bento-kicker">04 // KEYBOARD-FIRST FLOW</span>
            <h3>Crafted for Speed &amp; Ergonomics</h3>
            <p>
              Designed with high-contrast typography, monospace inspection views, and swift keyboard navigation.
              Copy results with a single click or keystroke.
            </p>

            <div className="shortcuts-showcase">
              <div className="shortcut-box">
                <div className="keys">
                  <span className="key-cap">⌘</span>
                  <span className="key-cap">K</span>
                </div>
                <span>Filter Lessons</span>
              </div>
              <div className="shortcut-box">
                <div className="keys">
                  <span className="key-cap">TAB</span>
                </div>
                <span>Switch Tools</span>
              </div>
              <div className="shortcut-box">
                <div className="keys">
                  <span className="key-cap">⌘</span>
                  <span className="key-cap">C</span>
                </div>
                <span>Instant Copy</span>
              </div>
            </div>

            <div className="bento-card-action">
              <a href="#tools" className="linear-link">
                <span>Try Workbench</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Linear Metrics Strip */}
      <div className="linear-stats-strip">
        <div className="stat-col">
          <div className="stat-number">0ms</div>
          <div className="stat-label">Network Latency</div>
          <p className="stat-desc">Tools compute on your device instantly</p>
        </div>
        <div className="stat-col">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client-Side Privacy</div>
          <p className="stat-desc">No data ever leaves your browser</p>
        </div>
        <div className="stat-col">
          <div className="stat-number">12+</div>
          <div className="stat-label">Engineering Guides</div>
          <p className="stat-desc">From web basics to systems &amp; security</p>
        </div>
        <div className="stat-col">
          <div className="stat-number">0</div>
          <div className="stat-label">Sign-up Friction</div>
          <p className="stat-desc">Immediate access without paywalls</p>
        </div>
      </div>

      {/* Bottom Linear CTA Card */}
      <div className="linear-bottom-cta">
        <div className="cta-ambient-glow" />
        <div className="cta-content">
          <div className="cta-pill">
            <span className="dot-lime" />
            <span>ACCELERATE YOUR CRAFT</span>
          </div>
          <h2>Ready to build something great today?</h2>
          <p>
            Dive straight into the learning library or use the developer workbench to format and test payloads.
          </p>
          <div className="cta-actions">
            <a href="#resources" className="linear-btn-primary">
              <span>Start Learning Now</span>
              <ArrowRight size={16} />
            </a>
            <a href="#tools" className="linear-btn-secondary">
              <Terminal size={15} />
              <span>Open Dev Toolbox</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
