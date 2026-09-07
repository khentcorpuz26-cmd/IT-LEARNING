'use client';
import { Code2, ArrowLeft, ShieldCheck, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase-client';

export default function AccountEntry({ mode }: { mode: 'login' | 'signup' }) {
  const signup = mode === 'signup';
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/';
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
      if (!response.ok) throw new Error('session');
      router.push(next);
      router.refresh();
    } catch {
      setStatus('error');
      setErrorMessage('Sign-in failed. Please try again.');
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
          <a href="/">Learning library</a>
          <a href={signup ? '/login' : '/signup'}>{signup ? 'Log in' : 'Sign up'}</a>
        </nav>
      </header>
      <main className="account-main">
        <a className="account-back" href="/">
          <ArrowLeft size={16} /> Back to learning
        </a>
        <section className="account-card" aria-labelledby="account-title">
          <span className="account-icon">
            <ShieldCheck size={26} />
          </span>
          <p className="eyebrow">YOUR DEVSHELF ACCOUNT</p>
          <h1 id="account-title">
            {signup ? 'Create your account' : 'Welcome back'}
            <span>.</span>
          </h1>
          <p className="account-description">
            {signup
              ? 'Start your DevShelf account with your Google account.'
              : 'Continue to your DevShelf account with your Google account.'}
          </p>
          <button className="primary" type="button" onClick={handleGoogleSignIn} disabled={status === 'working'}>
            {status === 'working' ? <Loader2 size={16} className="account-spin" /> : null}
            {signup ? 'Sign up with Google' : 'Continue with Google'}
          </button>
          {status === 'error' && (
            <p role="status" className="error">
              {errorMessage}
            </p>
          )}
          <p className="account-switch">
            {signup ? 'Already have an account?' : 'New to DevShelf?'}{' '}
            <a href={signup ? '/login' : '/signup'}>{signup ? 'Log in' : 'Sign up'}</a>
          </p>
        </section>
        <p className="account-footnote">Your learning progress stays in this browser.</p>
      </main>
    </div>
  );
}
