import 'server-only';
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import type { DecodedIdToken } from '@/lib/firebase-admin';

export const SESSION_COOKIE = 'devshelf_session';
const FIVE_DAYS_SECONDS = 5 * 24 * 60 * 60;

export type Session = { uid: string; email: string | null; name: string | null; picture: string | null };

function getSecretKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error('SESSION_SECRET is not configured');
  return new TextEncoder().encode(secret);
}

export async function createSessionToken(user: DecodedIdToken): Promise<string> {
  return new SignJWT({ email: user.email, name: user.name, picture: user.picture })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(user.uid)
    .setIssuedAt()
    .setExpirationTime(`${FIVE_DAYS_SECONDS}s`)
    .sign(getSecretKey());
}

export async function getSession(): Promise<Session | null> {
  if (!process.env.SESSION_SECRET) return null;
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionCookie) return null;
  try {
    const { payload } = await jwtVerify(sessionCookie, getSecretKey());
    if (typeof payload.sub !== 'string') return null;
    return {
      uid: payload.sub,
      email: typeof payload.email === 'string' ? payload.email : null,
      name: typeof payload.name === 'string' ? payload.name : null,
      picture: typeof payload.picture === 'string' ? payload.picture : null,
    };
  } catch {
    return null;
  }
}
