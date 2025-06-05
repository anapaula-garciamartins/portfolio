import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

type ProjectCard = {
  url: string;
  title: string;
  subtitle: string;
};

export default function ProjectCard({ url, title, subtitle }: ProjectCard) {
  return (
    <Link
      href={url}
      className='flex flex-col w-full p-4 bg-pink-dark rounded-xl hover:bg-pink active:bg-pink transition-colors duration-300'
    >
      <h2 className='text-xl font-bold lg:text-[32px]'>{title}</h2>
      <div className='flex justify-between items-center'>
        <span className='text-sm lg:text-2xl'>{subtitle}</span>

        <ArrowRight weight='fill' className='lg:size-8'></ArrowRight>
      </div>
    </Link>
  );
}
