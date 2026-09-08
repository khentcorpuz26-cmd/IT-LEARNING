import 'server-only';
import { jwtVerify, createRemoteJWKSet } from 'jose';

// Verifying a Firebase ID token only requires Google's public signing keys —
// no service account credential needed. This avoids firebase-admin's
// Node-only OAuth2 token exchange, which does not work in edge/Workers
// runtimes (Cloudflare Workers included).
const GOOGLE_JWKS = createRemoteJWKSet(
  new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com')
);

export type DecodedIdToken = {
  uid: string;
  email: string | null;
  name: string | null;
  picture: string | null;
};

export async function verifyGoogleIdToken(idToken: string): Promise<DecodedIdToken> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  if (!projectId) throw new Error('Firebase project id is not configured');

  const { payload } = await jwtVerify(idToken, GOOGLE_JWKS, {
    issuer: `https://securetoken.google.com/${projectId}`,
    audience: projectId,
  });

  if (typeof payload.sub !== 'string') throw new Error('Token is missing a subject');

  return {
    uid: payload.sub,
    email: typeof payload.email === 'string' ? payload.email : null,
    name: typeof payload.name === 'string' ? payload.name : null,
    picture: typeof payload.picture === 'string' ? payload.picture : null,
  };
}
