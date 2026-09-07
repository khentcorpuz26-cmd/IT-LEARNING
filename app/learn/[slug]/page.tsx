import {notFound} from 'next/navigation';
import {resources} from '@/lib/lesson-catalog';
import {guides} from '@/lib/guides';
import {LessonContent} from '@/components/lesson-content';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const guide=guides.find(g=>g.slug===slug);return {title:guide?`${guide.title} | DevShelf Learn`:'Lesson not found',description:guide?.summary}}
export default async function Lesson({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  if(!resources.some(lesson=>lesson.slug===slug)) notFound();
  return <LessonContent slug={slug}/>;
}
