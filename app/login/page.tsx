import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { getSession } from '@/lib/session';
import AccountEntry from '@/components/account-entry';

export const metadata = { title: 'Sign in — DevShelf' };

export default async function Login({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const session = await getSession();
  if (session) {
    const params = await searchParams;
    const next = typeof params.next === 'string' ? params.next : '/dashboard';
    redirect(next);
  }
  return (
    <Suspense>
      <AccountEntry />
    </Suspense>
  );
}
