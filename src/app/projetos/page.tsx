import Button from '@/components/button';
import FloatingMenu from '@/components/floating-menu';
import Header from '@/components/header';
import ProjectCard from '@/components/project-card';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function Projetos() {
  return (
    <div className='flex flex-col gap-8 min-h-dvh'>
      <Header></Header>
      <main className='flex flex-col justify-center gap-4 px-4 flex-1'>
        <h1 className='font-bold text-5xl'>Projetos</h1>
        <section className='flex flex-col gap-3 flex-1'>
          <ProjectCard
            url='/projetos/meu-portfolio'
            title='Meu Portfólio'
            subtitle='Website & Design'
          ></ProjectCard>
        </section>
      </main>
      <footer className='flex p-4 justify-center'>
        <Link href='/contato'>
          <Button>
            Entre em contato <ArrowRight></ArrowRight>
          </Button>
        </Link>
      </footer>
      <FloatingMenu className='hidden md:flex'></FloatingMenu>
    </div>
  );
}
