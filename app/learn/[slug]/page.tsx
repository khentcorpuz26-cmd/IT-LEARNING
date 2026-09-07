import {notFound,redirect} from 'next/navigation';
import {resources} from '@/lib/lesson-catalog';
export const dynamic='force-dynamic';
export const metadata={title:'Sign in to learn — DevShelf'};
export default async function Lesson({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  if(!resources.some(lesson=>lesson.slug===slug)) notFound();
  // Fail closed until the backend provides a verified server-side session.
  // Never trust localStorage, a query parameter, or an unsigned cookie as identity.
  redirect('/login?next='+encodeURIComponent('/learn/'+slug));
}
