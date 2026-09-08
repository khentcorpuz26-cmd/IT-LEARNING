'use client';

import { useState, useEffect, useRef } from 'react';
import { useLearning } from '@/lib/use-learning';
import { Progress } from '@/components/ui/progress';
import GrowingTextarea from '@/components/growing-textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import {
  Code2,
  Braces,
  Binary,
  Link as LinkIcon,
  Fingerprint,
  ArrowUpRight,
  ArrowRight,
  Copy,
  Check,
  Search,
  Terminal,
  BookOpen,
  ShieldCheck
} from 'lucide-react';

import { transform } from '@/lib/toolbox';
import { resources } from '@/lib/lesson-catalog';
import LinearHero from '@/components/linear-hero';
import LinearBento from '@/components/linear-bento';
import FreeResourcesHub from '@/components/free-resources-hub';
import LinearPhilosophy from '@/components/linear-philosophy';

const tools = [
  {
    id: 'json',
    name: 'JSON formatter',
    icon: Braces,
    description: 'Format, validate, and minify JSON.',
    tag: 'DATA'
  },
  {
    id: 'base64',
    name: 'Base64 converter',
    icon: Binary,
    description: 'Encode and decode UTF-8 text.',
    tag: 'ENCODING'
  },
  {
    id: 'url',
    name: 'URL encoder',
    icon: LinkIcon,
    description: 'Encode or decode URL components.',
    tag: 'WEB'
  },
  {
    id: 'uuid',
    name: 'UUID generator',
    icon: Fingerprint,
    description: 'Generate a random version 4 UUID.',
    tag: 'UTILITY'
  }
];

export default function Home() {
  const { data: learning, storageError } = useLearning();
  const [view, setView] = useState('All lessons');
  const completed = resources.filter((r) => learning.lessons[r.slug]?.completed).length;
  const saved = resources.filter((r) => learning.lessons[r.slug]?.saved).length;
  const last = resources.find((r) => r.slug === learning.lastVisited);

  const [active, setActive] = useState('json');
  const [input, setInput] = useState('{"project":"DevShelf","ready":true,"stack":["TypeScript","React"]}');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selected = tools.find((t) => t.id === active)!;

  // Keyboard shortcut listener (Linear style ⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const resourcesEl = document.getElementById('resources');
        if (resourcesEl) {
          resourcesEl.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 400);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function run(action: string) {
    setError('');
    setCopied(false);
    try {
      setOutput(active === 'uuid' ? crypto.randomUUID() : transform(active, input, action));
    } catch (e) {
      setOutput('');
      setError(e instanceof Error ? e.message : 'Unable to convert this input.');
    }
  }

  function select(id: string) {
    setActive(id);
    setInput(id === 'json' ? '{"project":"DevShelf","ready":true}' : '');
    setOutput('');
    setError('');
    setCopied(false);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
    } catch {
      setError('Clipboard unavailable. Select and copy the output manually.');
    }
  }

  const filtered = resources.filter(
    (r) =>
      (view === 'All lessons' ||
        (view === 'Saved' && learning.lessons[r.slug]?.saved) ||
        (view === 'Completed' && learning.lessons[r.slug]?.completed) ||
        (view === 'Unfinished' && !learning.lessons[r.slug]?.completed)) &&
      (category === 'All' || r.category === category) &&
      `${r.name} ${r.description}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      {/* Linear-grade Glass Topbar */}
      <header className="topbar">
        <a href="/" className="logo">
          <span>
            <Code2 size={22} />
          </span>
          devshelf<span className="logo-dot">.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#free-resources">Free Arsenal &amp; Widgets</a>
          <a href="#resources">Curriculum</a>
          <a href="#tools">Toolbox</a>
        </nav>

        <div className="account-nav">
          <a href="#resources" className="topbar-linear-btn">
            <span>Start Building</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </header>

      {/* Linear Landing Experience */}
      <LinearHero />

      {/* Linear Philosophy — wireframe illustration section */}
      <LinearPhilosophy />

      <div id="features">
        <LinearBento />
      </div>

      {/* 100% Free Developer Arsenal & Custom UI Widgets */}
      <FreeResourcesHub />

      {/* DevShelf Workspace & Interactive Library */}
      <main id="top">
        <div className="intro">
          <div>
            <p className="eyebrow">LESS TAB HOPPING. MORE BUILDING.</p>
            <h1>
              A good day to <span>build something.</span>
            </h1>
            <p className="subtitle">
              Practical IT tools and in-depth coding lessons, all in one place.
            </p>
          </div>
          <div className="terminal-mark">
            <Terminal size={24} />
            <span>
              ~/your-workspace<span className="cursor">_</span>
            </span>
          </div>
        </div>

        <div className="learning-dashboard">
          <div>
            <p className="eyebrow">YOUR LEARNING</p>
            <strong>
              {completed} of {resources.length} lessons complete
            </strong>
            <Progress value={(completed / resources.length) * 100} aria-label="Lesson completion" />
            <p>{saved} saved · progress stored on this browser</p>
          </div>
          {last ? (
            <a className="continue-card" href={last.url}>
              <span>CONTINUE LEARNING →</span>
              {last.name}
            </a>
          ) : (
            <a className="continue-card" href={resources[0].url}>
              <span>START HERE →</span>
              {resources[0].name}
            </a>
          )}
          {storageError && <p role="status">{storageError}</p>}
        </div>

        {/* Learning Library Section */}
        <section id="resources" aria-labelledby="resources-title">
          <div className="section-title resources-title">
            <div>
              <h2 id="resources-title">
                <BookOpen size={19} />
                Your learning library
              </h2>
              <p>Start with Web foundations, then explore coding, systems, data, and operations.</p>
            </div>
            <label className="search">
              <Search size={17} />
              <input
                ref={searchInputRef}
                aria-label="Search lessons"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find a lesson… (⌘K)"
              />
            </label>
          </div>

          <div className="library-controls">
            <Select value={view} onValueChange={(v) => v && setView(v)}>
              <SelectTrigger aria-label="Filter by learning status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {['All lessons', 'Saved', 'Unfinished', 'Completed'].map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={category} onValueChange={(v) => v && setCategory(v)}>
              <SelectTrigger aria-label="Filter lessons by topic">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {['All', ...new Set(resources.map((r) => r.category))].map((c) => (
                  <SelectItem key={c} value={c}>
                    {c === 'All' ? 'All topics' : c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <span role="status">
              {filtered.length} of {resources.length} lessons
            </span>

            {(query || category !== 'All' || view !== 'All lessons') && (
              <button
                className="quiet"
                onClick={() => {
                  setQuery('');
                  setCategory('All');
                  setView('All lessons');
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="resource-grid">
            {filtered.map((r) => (
              <a key={r.name} className="resource-card" href={r.url}>
                <div className="resource-top">
                  <span className={`resource-icon ${r.color}`}>{r.label}</span>
                  <ArrowUpRight size={18} />
                </div>
                <h3>{r.name}</h3>
                <div className="lesson-badges">
                  {learning.lessons[r.slug]?.saved && <span>★ Saved</span>}
                  {learning.lessons[r.slug]?.completed && <span>✓ Completed</span>}
                  {learning.lessons[r.slug]?.score !== undefined && (
                    <span>Quiz {learning.lessons[r.slug].score}/2</span>
                  )}
                </div>
                <p>{r.description}</p>
                <div className="resource-meta">
                  <span>{r.category}</span>
                  <span>{r.minutes} MIN</span>
                </div>
              </a>
            ))}
          </div>

          {!filtered.length && (
            <div className="no-results">
              No lessons match your search. Try another term or category.
            </div>
          )}
        </section>

        {/* Toolbox Workbench Section */}
        <section id="tools" aria-labelledby="tools-title">
          <div className="section-title">
            <h2 id="tools-title">
              <Terminal size={19} />
              The toolbox
            </h2>
            <span>04 TOOLS · RUNS IN YOUR BROWSER</span>
          </div>

          <div className="tool-grid">
            {tools.map((t) => (
              <button
                key={t.id}
                className={`tool-card ${active === t.id ? 'selected' : ''}`}
                onClick={() => select(t.id)}
                aria-pressed={active === t.id}
              >
                <div>
                  <span className="tool-icon">
                    <t.icon size={23} />
                  </span>
                  <span className="tool-tag">{t.tag}</span>
                </div>
                <h3>
                  {t.name}
                  <ArrowUpRight size={17} />
                </h3>
                <p>{t.description}</p>
              </button>
            ))}
          </div>

          <div className="workbench">
            <div className="bench-header">
              <div>
                <span className="file-dot" />
                <strong>{selected.name}</strong>
                <span className="bench-sub">/ workspace</span>
              </div>
              <span>
                <ShieldCheck size={14} />
                Processed locally
              </span>
            </div>

            {active !== 'uuid' ? (
              <div className="editors">
                <div className="editor">
                  <label htmlFor="input">
                    INPUT <span>{input.length} characters</span>
                  </label>
                  <GrowingTextarea
                    id="input"
                    spellCheck={false}
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      setOutput('');
                      setError('');
                      setCopied(false);
                    }}
                    placeholder={
                      active === 'json'
                        ? 'Paste your JSON here…'
                        : 'Enter text to encode or decode…'
                    }
                  />
                </div>
                <div className="editor">
                  <label htmlFor="output">
                    OUTPUT{' '}
                    <button onClick={copy} disabled={!output} aria-label="Copy output">
                      {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy'}
                    </button>
                  </label>
                  <GrowingTextarea
                    id="output"
                    spellCheck={false}
                    readOnly
                    value={output}
                    placeholder="Your result will appear here."
                  />
                </div>
              </div>
            ) : (
              <div className="uuid-area">
                <Fingerprint size={30} />
                <h3>A fresh identifier for your next idea.</h3>
                <input
                  aria-label="Generated UUID"
                  readOnly
                  value={output}
                  placeholder="Click Generate UUID to begin"
                />
                <button className="quiet" onClick={copy} disabled={!output}>
                  {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy UUID'}
                </button>
              </div>
            )}

            <div className="bench-actions">
              <div>
                <button className="primary" onClick={() => run('encode')}>
                  {active === 'json'
                    ? 'Format JSON'
                    : active === 'uuid'
                    ? 'Generate UUID'
                    : 'Encode'}
                  <ArrowRight size={16} />
                </button>
                {active !== 'uuid' && (
                  <button
                    className="secondary"
                    onClick={() => run(active === 'json' ? 'minify' : 'decode')}
                  >
                    {active === 'json' ? 'Minify' : 'Decode'}
                  </button>
                )}
                <button
                  className="quiet"
                  onClick={() => {
                    setInput('');
                    setOutput('');
                    setError('');
                    setCopied(false);
                  }}
                >
                  Clear
                </button>
              </div>
              <span>No uploads. No account required for these tools.</span>
            </div>

            {error && (
              <p className="error" role="alert">
                {error}
              </p>
            )}
          </div>
        </section>

        <footer>
          <span>
            <Code2 size={16} />
            devshelf.
          </span>
          <p>Keep your tools close. Keep learning.</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </main>
    </div>
  );
}
