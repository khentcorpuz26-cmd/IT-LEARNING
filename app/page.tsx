import { getSession } from '@/lib/session';
import HomeClient from '@/components/home-client';

export default async function Home() {
  const session = await getSession();
  return <HomeClient session={session} />;
}
