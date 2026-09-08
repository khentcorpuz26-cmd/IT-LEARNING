'use client';
import { Code2, ArrowLeft, BookOpen, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase-client';

export default function AccountEntry() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/dashboard';
  const [status, setStatus] = useState<'idle' | 'working' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSignIn = async () => {
    setStatus('working');
    setErrorMessage('');
    try {
      const credential = await signInWithPopup(auth, googleProvider);
      const idToken = await credential.user.getIdToken();
      const response = await fetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      if (!response.ok) {
        throw new Error(response.status === 503 ? 'not-configured' : 'session');
      }
      router.push(next);
      router.refresh();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error && err.message === 'not-configured'
          ? 'Sign-in is not set up yet on this deployment. Please try again later.'
          : 'Sign-in failed. Please try again.'
      );
      return;
    }
    setStatus('idle');
  };

  return (
    <div className="app account-page">
      <header className="topbar account-topbar">
        <a href="/" className="logo">
          <span>
            <Code2 size={22} />
          </span>
          devshelf<span className="logo-dot">.</span>
        </a>
        <nav aria-label="Account navigation">
          <a href="/">Back to site</a>
        </nav>
      </header>
      <main className="account-main">
        <a className="account-back" href="/">
          <ArrowLeft size={16} /> Back to site
        </a>
        <section className="account-card" aria-labelledby="account-title">
          <span className="account-icon">
            <BookOpen size={26} />
          </span>
          <p className="eyebrow">YOUR LEARNING LIBRARY</p>
          <h1 id="account-title">
            Sign in to keep learning
            <span>.</span>
          </h1>
          <p className="account-description">
            Sign in with Google to open your learning library and track your progress.
          </p>
          <button className="primary" type="button" onClick={handleGoogleSignIn} disabled={status === 'working'}>
            {status === 'working' ? <Loader2 size={16} className="account-spin" /> : null}
            Continue with Google
          </button>
          {status === 'error' && (
            <p role="status" className="error">
              {errorMessage}
            </p>
          )}
        </section>
        <p className="account-footnote">We only use your Google account to identify you and save your progress.</p>
      </main>
    </div>
  );
}
