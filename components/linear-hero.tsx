'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Terminal,
  Code2,
  Sparkles,
  Braces,
  Binary,
  Fingerprint,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Check,
  Layers
} from 'lucide-react';

export default function LinearHero() {
  const [activeTab, setActiveTab] = useState<'tools' | 'lessons' | 'workflow'>('tools');
  const [demoTool, setDemoTool] = useState<'json' | 'uuid' | 'base64'>('json');
  const [demoInput, setDemoInput] = useState('{"framework":"Next.js","state":"Ready","latency":"0ms"}');
  const [demoOutput, setDemoOutput] = useState('{\n  "framework": "Next.js",\n  "state": "Ready",\n  "latency": "0ms"\n}');
  const [copied, setCopied] = useState(false);

  const handleToolDemo = (type: 'json' | 'uuid' | 'base64') => {
    setDemoTool(type);
    if (type === 'json') {
      setDemoInput('{"framework":"Next.js","state":"Ready","latency":"0ms"}');
      setDemoOutput('{\n  "framework": "Next.js",\n  "state": "Ready",\n  "latency": "0ms"\n}');
    } else if (type === 'uuid') {
      setDemoInput('v4-random-generator');
      setDemoOutput('4f9d2b81-c3ea-4f91-8890-7d1a29480cf2');
    } else if (type === 'base64') {
      setDemoInput('DevShelf // Fast offline developer utilities');
      setDemoOutput('RGV2U2hlbGYgLy8gRmFzdCBvZmZsaW5lIGRldmVsb3BlciB1dGlsaXRpZXM=');
    }
  };

  const copyHeroSnippet = () => {
    void navigator.clipboard.writeText(demoOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="linear-hero">
      {/* Background ambient lighting */}
      <div className="linear-glow-mesh" aria-hidden="true">
        <div className="glow-sphere glow-lime" />
        <div className="glow-sphere glow-slate" />
        <div className="glow-grid-overlay" />
      </div>

      <div className="linear-hero-content">
        {/* Shimmer Announcement Pill */}
        <div className="linear-badge-wrapper">
          <a href="#resources" className="linear-badge">
            <span className="linear-badge-dot" />
            <span className="linear-badge-tag">DevShelf 2.0</span>
            <span className="linear-badge-divider" />
            <span className="linear-badge-text">The system for developer craft & learning</span>
            <ArrowRight size={13} className="linear-badge-arrow" />
          </a>
        </div>

        {/* Hero Title */}
        <h1 className="linear-hero-title">
          Built for momentum.<br />
          <span className="linear-gradient-text">Engineered for developers.</span>
        </h1>

        {/* Subtitle */}
        <p className="linear-hero-subtitle">
          Instant offline utilities paired with deep, structured IT and coding tracks.
          Experience a distraction-free workbench designed to sharpen your engineering speed.
        </p>

        {/* CTAs */}
        <div className="linear-hero-actions">
          <a href="#resources" className="linear-btn-primary">
            <span>Start Learning</span>
            <ArrowRight size={16} />
          </a>
          <a href="#tools" className="linear-btn-secondary">
            <Terminal size={15} />
            <span>Open Toolbox</span>
          </a>
        </div>

        {/* Keyboard hints & social proof */}
        <div className="linear-quick-specs">
          <div className="linear-spec-item">
            <span className="linear-kbd">⌘</span>
            <span className="linear-kbd">K</span>
            <span>Instant search</span>
          </div>
          <span className="spec-dot" />
          <div className="linear-spec-item">
            <ShieldCheck size={14} className="text-lime" />
            <span>100% Client-side privacy</span>
          </div>
          <span className="spec-dot" />
          <div className="linear-spec-item">
            <Zap size={14} className="text-lime" />
            <span>Zero server latency</span>
          </div>
        </div>

        {/* Interactive macOS-styled Showcase Window */}
        <div className="linear-window-frame">
          <div className="linear-window-glow" />
          
          <div className="linear-window-inner">
            {/* Window Top Bar */}
            <div className="linear-window-topbar">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="window-center-search">
                <Terminal size={13} />
                <span>devshelf:~/workspace &gt; ready</span>
              </div>

              <div className="window-status-pill">
                <span className="pulse-indicator" />
                <span>All systems local</span>
              </div>
            </div>

            {/* Window Tab Bar */}
            <div className="linear-window-tabs">
              <button
                type="button"
                className={`window-tab ${activeTab === 'tools' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('tools')}
              >
                <Zap size={14} />
                <span>Instant Utilities</span>
              </button>
              <button
                type="button"
                className={`window-tab ${activeTab === 'lessons' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('lessons')}
              >
                <BookOpen size={14} />
                <span>Structured Curriculum</span>
              </button>
              <button
                type="button"
                className={`window-tab ${activeTab === 'workflow' ? 'tab-active' : ''}`}
                onClick={() => setActiveTab('workflow')}
              >
                <Layers size={14} />
                <span>Developer Flow</span>
              </button>
            </div>

            {/* Window Tab Content */}
            <div className="linear-window-body">
              {activeTab === 'tools' && (
                <div className="showcase-tool-demo">
                  <div className="showcase-tool-switcher">
                    <button
                      type="button"
                      className={`tool-pill ${demoTool === 'json' ? 'active' : ''}`}
                      onClick={() => handleToolDemo('json')}
                    >
                      <Braces size={13} /> JSON Formatter
                    </button>
                    <button
                      type="button"
                      className={`tool-pill ${demoTool === 'uuid' ? 'active' : ''}`}
                      onClick={() => handleToolDemo('uuid')}
                    >
                      <Fingerprint size={13} /> UUID v4
                    </button>
                    <button
                      type="button"
                      className={`tool-pill ${demoTool === 'base64' ? 'active' : ''}`}
                      onClick={() => handleToolDemo('base64')}
                    >
                      <Binary size={13} /> Base64
                    </button>

                    <a href="#tools" className="showcase-full-link">
                      Jump to full toolbox <ArrowUpRight size={13} />
                    </a>
                  </div>

                  <div className="showcase-editor-preview">
                    <div className="editor-pane">
                      <div className="pane-header">
                        <span>INPUT</span>
                        <span className="mono-badge">UTF-8</span>
                      </div>
                      <div className="code-display input-style">
                        <code>{demoInput}</code>
                      </div>
                    </div>

                    <div className="editor-pane">
                      <div className="pane-header">
                        <span>TRANSFORMED RESULT</span>
                        <button type="button" onClick={copyHeroSnippet} className="copy-mini-btn">
                          {copied ? <Check size={12} /> : <Sparkles size={12} />}
                          <span>{copied ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                      <div className="code-display output-style">
                        <pre><code>{demoOutput}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'lessons' && (
                <div className="showcase-lessons-demo">
                  <div className="lessons-preview-grid">
                    <div className="mini-lesson-card">
                      <div className="card-tag orange">01 · Web Foundations</div>
                      <h4>How websites work: from a click to a complete page</h4>
                      <p>Follow browser requests, DOM tree creation, HTTP payloads, and rendering cycles.</p>
                      <div className="card-footer">
                        <span>7 MIN READ</span>
                        <a href="#resources" className="mini-card-btn">Learn track →</a>
                      </div>
                    </div>

                    <div className="mini-lesson-card">
                      <div className="card-tag cyan">02 · Programming</div>
                      <h4>Think like a programmer: a practical Python guide</h4>
                      <p>Transform ambiguous tasks into clean inputs, pure functions, and automated assertions.</p>
                      <div className="card-footer">
                        <span>7 MIN READ</span>
                        <a href="#resources" className="mini-card-btn">Learn track →</a>
                      </div>
                    </div>

                    <div className="mini-lesson-card">
                      <div className="card-tag green">03 · Developer Workflow</div>
                      <h4>Git without guesswork: a workflow for real projects</h4>
                      <p>Master staging, atomic commits, rebasing, and branching with predictable confidence.</p>
                      <div className="card-footer">
                        <span>6 MIN READ</span>
                        <a href="#resources" className="mini-card-btn">Learn track →</a>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-bottom-bar">
                    <span>12 complete lessons available with local interactive quizzes</span>
                    <a href="#resources" className="linear-btn-text">
                      Browse entire library <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'workflow' && (
                <div className="showcase-workflow-demo">
                  <div className="workflow-columns">
                    <div className="workflow-item">
                      <div className="workflow-icon"><Terminal size={18} /></div>
                      <h5>Zero-Friction Ergonomics</h5>
                      <p>No account, no tracking tokens, no popups. Jump straight into formatted outputs or focused reading.</p>
                    </div>
                    <div className="workflow-item">
                      <div className="workflow-icon"><Code2 size={18} /></div>
                      <h5>Local-First State</h5>
                      <p>All reading progress, completed quiz scores, and saved bookmarks stay securely in your browser.</p>
                    </div>
                    <div className="workflow-item">
                      <div className="workflow-icon"><Sparkles size={18} /></div>
                      <h5>Linear-Grade Aesthetics</h5>
                      <p>Carefully balanced high-contrast typography, dark canvas, and quick keyboard-first accessibility.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Window Footer strip */}
            <div className="linear-window-footer">
              <div className="footer-left">
                <span className="dot-lime" />
                <span>DevShelf v2.0 Ready</span>
              </div>
              <a href="#resources" className="footer-action">
                <span>Enter Library</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
