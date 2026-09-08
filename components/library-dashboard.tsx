'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLearning } from '@/lib/use-learning';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { Code2, ArrowUpRight, Search, BookOpen, LogOut } from 'lucide-react';
import { resources } from '@/lib/lesson-catalog';
import type { Session } from '@/lib/session';

export default function LibraryDashboard({ session }: { session: Session }) {
  const router = useRouter();
  const { data: learning, storageError } = useLearning();
  const [view, setView] = useState('All lessons');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [signingOut, setSigningOut] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const completed = resources.filter((r) => learning.lessons[r.slug]?.completed).length;
  const saved = resources.filter((r) => learning.lessons[r.slug]?.saved).length;
  const last = resources.find((r) => r.slug === learning.lastVisited);

  const filtered = resources.filter(
    (r) =>
      (view === 'All lessons' ||
        (view === 'Saved' && learning.lessons[r.slug]?.saved) ||
        (view === 'Completed' && learning.lessons[r.slug]?.completed) ||
        (view === 'Unfinished' && !learning.lessons[r.slug]?.completed)) &&
      (category === 'All' || r.category === category) &&
      `${r.name} ${r.description}`.toLowerCase().includes(query.toLowerCase())
  );

  async function signOut() {
    setSigningOut(true);
    try {
      await fetch('/api/session', { method: 'DELETE' });
    } finally {
      router.push('/');
      router.refresh();
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <a href="/" className="logo">
          <span>
            <Code2 size={22} />
          </span>
          devshelf<span className="logo-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/">Back to site</a>
        </nav>
        <div className="account-nav">
          <span role="status">{session.name || session.email}</span>
          <button className="quiet" onClick={signOut} disabled={signingOut}>
            <LogOut size={15} /> {signingOut ? 'Signing out…' : 'Sign out'}
          </button>
        </div>
      </header>

      <main id="top">
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
