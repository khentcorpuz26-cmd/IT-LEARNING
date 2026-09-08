import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import LibraryDashboard from '@/components/library-dashboard';

export const metadata = { title: 'Your learning library — DevShelf' };

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect('/login?next=/dashboard');
  return <LibraryDashboard session={session} />;
}
