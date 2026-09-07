import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { SESSION_COOKIE } from '@/lib/session';

const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { idToken?: unknown };
  const { idToken } = body;
  if (typeof idToken !== 'string' || !idToken) {
    return NextResponse.json({ error: 'Missing idToken' }, { status: 400 });
  }

  try {
    await adminAuth.verifyIdToken(idToken);
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn: FIVE_DAYS_MS });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(SESSION_COOKIE, sessionCookie, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: FIVE_DAYS_MS / 1000,
    });
    return response;
  } catch {
    return NextResponse.json({ error: 'Invalid ID token' }, { status: 401 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, '', { path: '/', maxAge: 0 });
  return response;
}
