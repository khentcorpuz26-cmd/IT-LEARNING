import 'server-only';
import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase-admin';

export const SESSION_COOKIE = 'devshelf_session';

export type Session = { uid: string; email: string | null; name: string | null };

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionCookie) return null;
  try {
    const decoded = await adminAuth.verifySessionCookie(sessionCookie, true);
    return { uid: decoded.uid, email: decoded.email ?? null, name: decoded.name ?? null };
  } catch {
    return null;
  }
}
