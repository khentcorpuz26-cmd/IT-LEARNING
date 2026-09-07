import {notFound,redirect} from 'next/navigation';
import {resources} from '@/lib/lesson-catalog';
import {guides} from '@/lib/guides';
import {LessonContent} from '@/components/lesson-content';
import {getSession} from '@/lib/session';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const guide=guides.find(g=>g.slug===slug);return {title:guide?`${guide.title} | DevShelf Learn`:'Sign in to learn — DevShelf',description:guide?.summary}}
export default async function Lesson({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  if(!resources.some(lesson=>lesson.slug===slug)) notFound();
  // Fail closed until a verified server-side session exists.
  // Never trust localStorage, a query parameter, or an unsigned cookie as identity.
  const session=await getSession();
  if(!session) redirect('/login?next='+encodeURIComponent('/learn/'+slug));
  return <LessonContent slug={slug}/>;
}
