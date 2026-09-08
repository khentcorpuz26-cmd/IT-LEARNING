'use client';

import { useState } from 'react';
import {
  Globe,
  Server,
  Palette,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Terminal,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  CheckCircle2,
  Lock,
  Boxes,
  Cpu
} from 'lucide-react';

type HubTab = 'widgets' | 'domains' | 'hosting' | 'libraries';

interface WidgetItem {
  id: string;
  name: string;
  category: string;
  description: string;
  preview: React.ReactNode;
  codeHtml: string;
  codeCss: string;
}

export default function FreeResourcesHub() {
  const [activeTab, setActiveTab] = useState<HubTab>('widgets');
  const [activeWidgetId, setActiveWidgetId] = useState<string>('glow-btn');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [codeType, setCodeType] = useState<'html' | 'css'>('html');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copySnippet = (text: string, id: string) => {
    void navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const WIDGETS: WidgetItem[] = [
    {
      id: 'glow-btn',
      name: 'Linear Shimmer Button',
      category: 'Buttons & CTAs',
      description: 'Ultra-modern call-to-action button with radial glow and energetic lime accent.',
      preview: (
        <button
          type="button"
          className="demo-shimmer-btn"
          onClick={() => alert('Clicked Linear Shimmer Button!')}
        >
          <Sparkles size={16} />
          <span>Launch Project Now</span>
          <ArrowRight size={15} />
        </button>
      ),
      codeHtml: `<button class="linear-shimmer-btn">
  <svg class="icon" ...></svg>
  <span>Launch Project Now</span>
  <svg class="arrow" ...></svg>
</button>`,
      codeCss: `.linear-shimmer-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 26px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  background: #c7f86c;
  color: #121e07;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 24px rgba(199, 248, 108, 0.35);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.linear-shimmer-btn:hover {
  background: #dcffa4;
  transform: translateY(-2px);
  box-shadow: 0 0 35px rgba(199, 248, 108, 0.55);
}`
    },
    {
      id: 'glass-card',
      name: 'Obsidian Glass Metric Card',
      category: 'Cards & Containers',
      description: 'Frosted obsidian card with glowing micro-border and lime statistics.',
      preview: (
        <div className="demo-glass-card">
          <div className="card-glass-top">
            <span className="card-glass-badge">Active</span>
            <Zap size={16} className="text-lime" />
          </div>
          <div className="card-glass-number">99.9%</div>
          <div className="card-glass-label">Client Uptime</div>
          <p className="card-glass-desc">Zero downtime continuous deployment</p>
        </div>
      ),
      codeHtml: `<div class="glass-metric-card">
  <div class="card-top">
    <span class="badge">Active</span>
    <svg class="icon"></svg>
  </div>
  <div class="metric-number">99.9%</div>
  <div class="metric-label">Client Uptime</div>
  <p class="metric-desc">Zero downtime continuous deployment</p>
</div>`,
      codeCss: `.glass-metric-card {
  padding: 24px;
  border-radius: 14px;
  background: rgba(18, 20, 26, 0.85);
  border: 1px solid rgba(199, 248, 108, 0.25);
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.7);
  color: #ffffff;
}

.metric-number {
  font-size: 36px;
  font-weight: 700;
  color: #c7f86c;
  letter-spacing: -1px;
}`
    },
    {
      id: 'pulse-badge',
      name: 'Cyberpunk Pulse Status Pill',
      category: 'Status & Badges',
      description: 'Pulsing live status indicator for servers, APIs, or user presence.',
      preview: (
        <div className="demo-pulse-pill">
          <span className="pulse-ping" />
          <span className="pulse-dot" />
          <span className="pulse-text">System Operational // 0ms Latency</span>
        </div>
      ),
      codeHtml: `<div class="pulse-status-pill">
  <span class="ping"></span>
  <span class="dot"></span>
  <span>System Operational // 0ms Latency</span>
</div>`,
      codeCss: `.pulse-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(199, 248, 108, 0.08);
  border: 1px solid rgba(199, 248, 108, 0.3);
  color: #c7f86c;
  font-size: 12px;
  font-family: monospace;
}

.ping {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c7f86c;
  animation: pulse-ring 1.8s infinite ease-in-out;
}

@keyframes pulse-ring {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}`
    },
    {
      id: 'cmd-pill',
      name: 'Keyboard Command Quick-Bar',
      category: 'Inputs & Search',
      description: 'Linear-style floating search or command palette activator with kbd keys.',
      preview: (
        <div className="demo-cmd-pill">
          <Terminal size={14} className="text-lime" />
          <span>Quick actions &amp; lessons...</span>
          <div className="cmd-keys">
            <span className="key-chip">⌘</span>
            <span className="key-chip">K</span>
          </div>
        </div>
      ),
      codeHtml: `<div class="cmd-quick-bar">
  <svg class="terminal-icon"></svg>
  <span>Quick actions & lessons...</span>
  <div class="keys">
    <kbd>⌘</kbd>
    <kbd>K</kbd>
  </div>
</div>`,
      codeCss: `.cmd-quick-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 8px;
  background: #14171f;
  border: 1px solid #2a2f3d;
  color: #9094a6;
  font-size: 13px;
}

.cmd-quick-bar kbd {
  padding: 2px 6px;
  border-radius: 4px;
  background: #1e222d;
  border: 1px solid #3b4255;
  color: #c7f86c;
  font-family: monospace;
  font-size: 11px;
}`
    }
  ];

  const selectedWidget = WIDGETS.find((w) => w.id === activeWidgetId) || WIDGETS[0];

  return (
    <section id="free-resources" className="free-resources-hub">
      {/* Hub Section Header */}
      <div className="hub-header">
        <div className="hub-badge">
          <Sparkles size={14} />
          <span>100% FREE DEVELOPER ARSENAL</span>
        </div>
        <h2 className="hub-title">
          Build &amp; Deploy for <span className="linear-gradient-text">$0 Forever.</span>
        </h2>
        <p className="hub-subtitle">
          Walang bayad, walang credit card na kailangan. Tuklasin ang mga libreng domain,
          unlimited cloud hosting, at copy-paste modern UI widgets para sa iyong mga projects.
        </p>
      </div>

      {/* Main Navigation Tabs */}
      <div className="hub-tab-bar">
        <button
          type="button"
          className={`hub-tab-btn ${activeTab === 'widgets' ? 'active' : ''}`}
          onClick={() => setActiveTab('widgets')}
        >
          <Palette size={16} />
          <span>Free Custom UI Widgets</span>
          <span className="tab-counter">4 Ready</span>
        </button>

        <button
          type="button"
          className={`hub-tab-btn ${activeTab === 'domains' ? 'active' : ''}`}
          onClick={() => setActiveTab('domains')}
        >
          <Globe size={16} />
          <span>Free Domains &amp; DNS</span>
          <span className="tab-counter">6 Options</span>
        </button>

        <button
          type="button"
          className={`hub-tab-btn ${activeTab === 'hosting' ? 'active' : ''}`}
          onClick={() => setActiveTab('hosting')}
        >
          <Server size={16} />
          <span>Free Hosting &amp; Deploy</span>
          <span className="tab-counter">CI/CD Guide</span>
        </button>

        <button
          type="button"
          className={`hub-tab-btn ${activeTab === 'libraries' ? 'active' : ''}`}
          onClick={() => setActiveTab('libraries')}
        >
          <Boxes size={16} />
          <span>UI Kits &amp; Component Resources</span>
          <span className="tab-counter">Curated</span>
        </button>
      </div>

      {/* TAB 1: Free Custom UI Widgets */}
      {activeTab === 'widgets' && (
        <div className="hub-content-box">
          <div className="widget-playground-grid">
            {/* Widget Selector List */}
            <div className="widget-list">
              <div className="widget-list-header">
                <Code2 size={15} className="text-lime" />
                <span>SELECT A COMPONENT</span>
              </div>
              {WIDGETS.map((w) => (
                <button
                  key={w.id}
                  type="button"
                  className={`widget-item-btn ${activeWidgetId === w.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveWidgetId(w.id);
                    setViewMode('preview');
                  }}
                >
                  <div>
                    <strong>{w.name}</strong>
                    <span className="widget-cat">{w.category}</span>
                  </div>
                  <ArrowRight size={14} className="widget-arrow" />
                </button>
              ))}
              <div className="widget-tip-box">
                <ShieldCheck size={14} className="text-lime" />
                <span>Pure CSS &amp; HTML. Copy at i-paste agad sa kahit anong framework.</span>
              </div>
            </div>

            {/* Widget Interactive Stage & Code Viewer */}
            <div className="widget-stage-panel">
              <div className="stage-topbar">
                <div className="stage-meta">
                  <h4>{selectedWidget.name}</h4>
                  <p>{selectedWidget.description}</p>
                </div>

                <div className="stage-controls">
                  <div className="view-mode-toggle">
                    <button
                      type="button"
                      className={`mode-btn ${viewMode === 'preview' ? 'active' : ''}`}
                      onClick={() => setViewMode('preview')}
                    >
                      Live Preview
                    </button>
                    <button
                      type="button"
                      className={`mode-btn ${viewMode === 'code' ? 'active' : ''}`}
                      onClick={() => setViewMode('code')}
                    >
                      View Code
                    </button>
                  </div>

                  <button
                    type="button"
                    className="copy-widget-btn"
                    onClick={() =>
                      copySnippet(
                        codeType === 'html'
                          ? selectedWidget.codeHtml
                          : selectedWidget.codeCss,
                        selectedWidget.id
                      )
                    }
                  >
                    {copiedId === selectedWidget.id ? (
                      <>
                        <Check size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Stage Body */}
              <div className="stage-display">
                {viewMode === 'preview' ? (
                  <div className="stage-interactive-canvas">
                    <div className="canvas-grid-bg" />
                    <div className="canvas-widget-wrapper">
                      {selectedWidget.preview}
                    </div>
                    <span className="canvas-hint">Interactive Widget · Click or hover to test</span>
                  </div>
                ) : (
                  <div className="stage-code-viewer">
                    <div className="code-sub-tabs">
                      <button
                        type="button"
                        className={`sub-tab ${codeType === 'html' ? 'active' : ''}`}
                        onClick={() => setCodeType('html')}
                      >
                        HTML / JSX
                      </button>
                      <button
                        type="button"
                        className={`sub-tab ${codeType === 'css' ? 'active' : ''}`}
                        onClick={() => setCodeType('css')}
                      >
                        CSS / Tailwind
                      </button>
                    </div>
                    <pre className="code-pre">
                      <code>
                        {codeType === 'html'
                          ? selectedWidget.codeHtml
                          : selectedWidget.codeCss}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Free Domains & DNS */}
      {activeTab === 'domains' && (
        <div className="hub-content-box">
          <div className="domain-guide-grid">
            {/* Card 1: is-a.dev */}
            <div className="resource-detail-card">
              <div className="card-badge lime">100% Free Developer Domain</div>
              <h3>.is-a.dev Subdomain</h3>
              <p>
                Opisyal at sikat na open-source community service. Makakakuha ka ng sarili mong domain tulad ng{' '}
                <code>yourname.is-a.dev</code> sa pamamagitan lamang ng isang simpleng GitHub Pull Request.
              </p>
              <div className="card-specs">
                <div className="spec-row">
                  <span>Requirement:</span>
                  <strong>GitHub Account</strong>
                </div>
                <div className="spec-row">
                  <span>Best For:</span>
                  <strong>Developer Portfolios, Personal Projects</strong>
                </div>
                <div className="spec-row">
                  <span>Cost:</span>
                  <strong className="text-lime">Free Forever</strong>
                </div>
              </div>
              <div className="card-steps">
                <strong>Quick Setup:</strong>
                <ol>
                  <li>I-fork ang repository sa <code>github.com/is-a-dev/register</code>.</li>
                  <li>Mag-create ng JSON file sa <code>domains/yourname.json</code>.</li>
                  <li>Ilagay ang CNAME o A record na ibinigay ng iyong host.</li>
                  <li>I-submit ang Pull Request; maa-approve ito sa loob ng ilang oras!</li>
                </ol>
              </div>
              <a
                href="https://www.is-a.dev"
                target="_blank"
                rel="noreferrer"
                className="resource-cta-btn"
              >
                <span>Register on is-a.dev</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 2: js.org */}
            <div className="resource-detail-card">
              <div className="card-badge blue">Open Source JS</div>
              <h3>.js.org Domain</h3>
              <p>
                Libreng subdomains para sa mga JavaScript, TypeScript, at web libraries/packages na bukas sa publiko.
                Halimbawa: <code>mypackage.js.org</code>.
              </p>
              <div className="card-specs">
                <div className="spec-row">
                  <span>Requirement:</span>
                  <strong>Public JS GitHub Repo</strong>
                </div>
                <div className="spec-row">
                  <span>Best For:</span>
                  <strong>NPM packages, JS documentation</strong>
                </div>
              </div>
              <div className="card-steps">
                <strong>Quick Setup:</strong>
                <ol>
                  <li>I-deploy ang iyong documentation o site sa GitHub Pages.</li>
                  <li>I-add ang subdomain sa <code>js-org/js.org</code> via PR.</li>
                </ol>
              </div>
              <a
                href="https://js.org"
                target="_blank"
                rel="noreferrer"
                className="resource-cta-btn"
              >
                <span>Visit js.org</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 3: Cloudflare Free DNS & SSL */}
            <div className="resource-detail-card">
              <div className="card-badge green">Essential Tool</div>
              <h3>Cloudflare Free DNS &amp; Proxy</h3>
              <p>
                Kahit mayroon kang sariling domain o subdomain, gamitin ang Cloudflare Free tier para sa
                world-class lightning DNS, libreng automatic SSL certificate, at DDoS security.
              </p>
              <div className="card-specs">
                <div className="spec-row">
                  <span>Included:</span>
                  <strong>Universal SSL, Global Edge CDN, CNAME Flattening</strong>
                </div>
                <div className="spec-row">
                  <span>Speed:</span>
                  <strong className="text-lime">&lt; 10ms DNS lookup</strong>
                </div>
              </div>
              <div className="card-steps">
                <strong>Quick Setup:</strong>
                <ol>
                  <li>Gumawa ng free account sa Cloudflare.</li>
                  <li>I-point ang nameservers ng iyong registrar.</li>
                  <li>I-enable ang orange cloud (Proxied) para sa libreng CDN at SSL!</li>
                </ol>
              </div>
              <a
                href="https://www.cloudflare.com"
                target="_blank"
                rel="noreferrer"
                className="resource-cta-btn"
              >
                <span>Setup Cloudflare DNS</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Card 4: DuckDNS & FreeDNS */}
            <div className="resource-detail-card">
              <div className="card-badge orange">Homelab &amp; APIs</div>
              <h3>DuckDNS Dynamic DNS</h3>
              <p>
                Kung gusto mong mag-host mula sa sarili mong PC o Raspberry Pi nang hindi nagbabayad ng static IP,
                nagbibigay ang DuckDNS ng libreng <code>yourname.duckdns.org</code> na may automated IP updater.
              </p>
              <div className="card-specs">
                <div className="spec-row">
                  <span>Support:</span>
                  <strong>Cron scripts, Docker, Windows updater</strong>
                </div>
                <div className="spec-row">
                  <span>Domains allowed:</span>
                  <strong>Up to 5 free domains per account</strong>
                </div>
              </div>
              <a
                href="https://www.duckdns.org"
                target="_blank"
                rel="noreferrer"
                className="resource-cta-btn"
              >
                <span>Visit DuckDNS</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Free Hosting & Deployment Blueprint */}
      {activeTab === 'hosting' && (
        <div className="hub-content-box">
          {/* Visual 4-Step Deployment Flow */}
          <div className="deploy-flow-box">
            <h3 className="flow-title">
              <Zap size={18} className="text-lime" />
              The Modern 4-Step Zero-Cost Deploy Blueprint
            </h3>
            <div className="deploy-steps-row">
              <div className="step-card">
                <span className="step-number">01</span>
                <h4>Push to GitHub</h4>
                <p>I-commit ang iyong code at i-push sa isang public o private GitHub repository.</p>
                <code>git push origin main</code>
              </div>
              <div className="step-card">
                <span className="step-number">02</span>
                <h4>Connect to Vercel / Cloudflare</h4>
                <p>Mag-sign in gamit ang GitHub, i-click ang &quot;Import Project&quot;. Awtomatikong madedetect ang React, Next.js, o HTML.</p>
              </div>
              <div className="step-card">
                <span className="step-number">03</span>
                <h4>Set Custom Domain</h4>
                <p>I-link ang iyong libreng <code>.is-a.dev</code> o sariling domain sa platform DNS settings.</p>
              </div>
              <div className="step-card">
                <span className="step-number">04</span>
                <h4>Continuous Live Sync</h4>
                <p>Bawat bagong commit sa GitHub, kusa itong magbi-build at magiging live sa buong mundo sa loob ng 15 segundo!</p>
              </div>
            </div>
          </div>

          {/* Free Hosts Comparison Matrix */}
          <div className="hosts-matrix-grid">
            <div className="host-card highlight">
              <div className="host-top">
                <h3>Vercel</h3>
                <span className="host-tag lime">Best for Next.js &amp; React</span>
              </div>
              <p>Ang pamantayan sa modernong web hosting. May libreng serverless functions, fast edge delivery, at instant GitHub integration.</p>
              <ul className="host-perks">
                <li><CheckCircle2 size={14} className="text-lime" /> 100GB Bandwidth kada buwan</li>
                <li><CheckCircle2 size={14} className="text-lime" /> Automatic HTTPS at subdomains (.vercel.app)</li>
                <li><CheckCircle2 size={14} className="text-lime" /> Preview deployments sa bawat Pull Request</li>
              </ul>
              <a href="https://vercel.com" target="_blank" rel="noreferrer" className="resource-cta-btn">
                <span>Open Vercel</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="host-card">
              <div className="host-top">
                <h3>Cloudflare Pages</h3>
                <span className="host-tag green">Unlimited Bandwidth</span>
              </div>
              <p>Napakabilis na global CDN network na walang bandwidth bill shocks. Napakaganda para sa static websites, Vite, at Astro.</p>
              <ul className="host-perks">
                <li><CheckCircle2 size={14} className="text-lime" /> Unlimited monthly bandwidth</li>
                <li><CheckCircle2 size={14} className="text-lime" /> 500 builds kada buwan</li>
                <li><CheckCircle2 size={14} className="text-lime" /> Libreng custom domains at SSL</li>
              </ul>
              <a href="https://pages.cloudflare.com" target="_blank" rel="noreferrer" className="resource-cta-btn">
                <span>Open Cloudflare Pages</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="host-card">
              <div className="host-top">
                <h3>GitHub Pages</h3>
                <span className="host-tag blue">Zero Config</span>
              </div>
              <p>Naka-built in direkta sa iyong repository. Diretso lang i-on sa repo Settings nang walang ibang third-party account.</p>
              <ul className="host-perks">
                <li><CheckCircle2 size={14} className="text-lime" /> Walang build expiry o cold starts</li>
                <li><CheckCircle2 size={14} className="text-lime" /> Libreng username.github.io domain</li>
                <li><CheckCircle2 size={14} className="text-lime" /> Suportado ang custom CNAME</li>
              </ul>
              <a href="https://pages.github.com" target="_blank" rel="noreferrer" className="resource-cta-btn">
                <span>Learn GitHub Pages</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="host-card">
              <div className="host-top">
                <h3>Supabase</h3>
                <span className="host-tag orange">Free Backend &amp; DB</span>
              </div>
              <p>Kailangan ng backend database at user login? May 500MB free PostgreSQL, authentication, at real-time subscriptions ang Supabase.</p>
              <ul className="host-perks">
                <li><CheckCircle2 size={14} className="text-lime" /> 500MB Postgres database</li>
                <li><CheckCircle2 size={14} className="text-lime" /> 50,000 monthly active users (Auth)</li>
                <li><CheckCircle2 size={14} className="text-lime" /> 1GB storage bucket</li>
              </ul>
              <a href="https://supabase.com" target="_blank" rel="noreferrer" className="resource-cta-btn">
                <span>Explore Supabase</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Curated UI Kits & Component Resources */}
      {activeTab === 'libraries' && (
        <div className="hub-content-box">
          <div className="libraries-grid">
            <div className="library-card">
              <div className="lib-header">
                <span className="lib-badge">Components</span>
                <h4>shadcn/ui</h4>
              </div>
              <p>
                Hindi ito traditional npm package na nakatali ka sa version; kinokopya mo ang source code ng button,
                dialog, o dropdown nang direkta sa iyong repo para ikaw ang 100% may kontrol.
              </p>
              <div className="lib-meta">
                <span>Tailwind CSS</span>
                <span>Radix UI</span>
                <span>Fully Accessible</span>
              </div>
              <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" className="lib-link">
                <span>ui.shadcn.com</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="library-card">
              <div className="lib-header">
                <span className="lib-badge lime">Animations</span>
                <h4>Aceternity UI</h4>
              </div>
              <p>
                Trending na collection ng makabagong animated landing page components, background beams,
                glowing cards, at 3D effects na inspired sa Linear at Vercel.
              </p>
              <div className="lib-meta">
                <span>Framer Motion</span>
                <span>Tailwind CSS</span>
                <span>Next.js Ready</span>
              </div>
              <a href="https://ui.aceternity.com" target="_blank" rel="noreferrer" className="lib-link">
                <span>ui.aceternity.com</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="library-card">
              <div className="lib-header">
                <span className="lib-badge">Icons</span>
                <h4>Lucide Icons</h4>
              </div>
              <p>
                Mahigit 1,400+ malinis, pare-parehong stroke weight na open-source SVG icons na ginagamit
                sa buong DevShelf at mga modernong professional web apps.
              </p>
              <div className="lib-meta">
                <span>MIT License</span>
                <span>React, Vue, SVG</span>
                <span>Lightweight</span>
              </div>
              <a href="https://lucide.dev" target="_blank" rel="noreferrer" className="lib-link">
                <span>lucide.dev</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="library-card">
              <div className="lib-header">
                <span className="lib-badge">CSS Widgets</span>
                <h4>Uiverse.io</h4>
              </div>
              <p>
                Community-made open-source library ng libu-libong creative buttons, loading animations, checkboxes,
                at toggle switches na puwedeng kopyahin bilang pure CSS.
              </p>
              <div className="lib-meta">
                <span>Pure HTML/CSS</span>
                <span>Zero Dependencies</span>
                <span>Creative Effects</span>
              </div>
              <a href="https://uiverse.io" target="_blank" rel="noreferrer" className="lib-link">
                <span>uiverse.io</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="library-card">
              <div className="lib-header">
                <span className="lib-badge">Visuals</span>
                <h4>Haikei &amp; unDraw</h4>
              </div>
              <p>
                Libreng tools para mag-generate ng mga sleek SVG wave dividers, polygon meshes, gradients,
                at customizable open-source vector illustrations para sa landing pages.
              </p>
              <div className="lib-meta">
                <span>SVG Exports</span>
                <span>Royalty Free</span>
                <span>Zero Attribution</span>
              </div>
              <a href="https://haikei.app" target="_blank" rel="noreferrer" className="lib-link">
                <span>haikei.app</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <div className="library-card">
              <div className="lib-header">
                <span className="lib-badge">Public APIs</span>
                <h4>Public APIs GitHub Repo</h4>
              </div>
              <p>
                Koleksyon ng daan-daang libreng public APIs (weather, anime, games, crypto, science, books)
                na walang bayad at marami ang hindi nangangailangan ng API key.
              </p>
              <div className="lib-meta">
                <span>REST / JSON</span>
                <span>No Auth Needed</span>
                <span>CORS Ready</span>
              </div>
              <a href="https://github.com/public-apis/public-apis" target="_blank" rel="noreferrer" className="lib-link">
                <span>github.com/public-apis</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer Banner linking to in-depth modules */}
      <div className="hub-bottom-banner">
        <div>
          <h4>Gusto mong matutunan ang bawat hakbang nang detalyado?</h4>
          <p>Tingnan ang aming in-depth lessons sa deployment at free resources na may interactive quizzes.</p>
        </div>
        <a href="#resources" className="linear-btn-primary">
          <span>Pumunta sa Learning Library</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
