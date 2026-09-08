import { NextResponse } from 'next/server';
import { verifyGoogleIdToken } from '@/lib/firebase-admin';
import { createSessionToken, SESSION_COOKIE } from '@/lib/session';

const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

function notifySignIn(user: { uid: string; email: string | null; name: string | null }) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) return;
  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event: 'sign_in',
      uid: user.uid,
      email: user.email,
      name: user.name,
      timestamp: new Date().toISOString(),
    }),
  }).catch(() => {
    // Best-effort tracking only; a failed webhook must never block sign-in.
  });
}

export async function POST(request: Request) {
  if (!process.env.SESSION_SECRET) {
    return NextResponse.json({ error: 'Sign-in is not configured on this deployment yet' }, { status: 503 });
  }

  const body = (await request.json().catch(() => ({}))) as { idToken?: unknown };
  const { idToken } = body;
  if (typeof idToken !== 'string' || !idToken) {
    return NextResponse.json({ error: 'Missing idToken' }, { status: 400 });
  }

  try {
    const user = await verifyGoogleIdToken(idToken);
    const sessionToken = await createSessionToken(user);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(SESSION_COOKIE, sessionToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: FIVE_DAYS_MS / 1000,
    });
    notifySignIn(user);
    return response;
  } catch (err) {
    console.error('Session verification failed:', err);
    return NextResponse.json({ error: 'Invalid ID token' }, { status: 401 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, '', { path: '/', maxAge: 0 });
  return response;
}
