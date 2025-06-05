import Image from 'next/image';
import { projectsList } from '../projects-list';
import Header from '@/components/header';
import TechToolsCard from '@/components/tech-tools-card';
import Link from 'next/link';
import Button from '@/components/button';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default async function Projeto({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsList.find((project) => project.slug === slug);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className='flex flex-col items-center min-h-dvh'>
      <Header></Header>
      <main className='flex flex-col gap-4'>
        <Image width={320} height={200} src={project.image.src} alt={project.image.alt} />
        <div className='flex flex-col gap-1 px-4'>
          <h1 className='font-bold text-[32px]'>{project.title}</h1>
          <h2 className='text-2xl'>{project.subtitle}</h2>
        </div>
        {project.site && (
          <section className='flex flex-col gap-4 p-4 bg-lead rounded-lg'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-pink text-2xl font-semibold'>Sobre o Site</h3>
              <p className='text-sm'>{project.site?.description}</p>
            </div>
            <div className='flex flex-col gap-6'>
              <h4 className='text-pink text-2xl font-semibold'>
                Tecnologias Utilizadas no Desenvolvimento
              </h4>
              <div className='flex flex-wrap gap-4 items-center justify-center'>
                {project.site?.technologies.map((tech) => (
                  <TechToolsCard
                    key={tech.title}
                    title={tech.title}
                    src={tech.src}
                    alt={tech.alt}
                  />
                ))}
              </div>
            </div>
            <Link href={project.site?.url} target='_blank'>
              <Button>
                Acessar Website <ArrowRight></ArrowRight>
              </Button>
            </Link>
          </section>
        )}
        {project.design && (
          <section className='flex flex-col gap-4 p-4 bg-lead rounded-lg'>
            <div className='flex flex-col gap-1'>
              <h3 className='text-pink text-2xl font-semibold'>Sobre o Design</h3>
              <p className='text-sm'>{project.design?.description}</p>
            </div>
            <div className='flex flex-col gap-6'>
              <h4 className='text-pink text-2xl font-semibold'>
                Ferramentas Utilizadas no Design
              </h4>
              <div className='flex flex-wrap gap-4 items-center justify-center'>
                {project.design?.technologies.map((tech) => (
                  <TechToolsCard
                    key={tech.title}
                    title={tech.title}
                    src={tech.src}
                    alt={tech.alt}
                  />
                ))}
              </div>
            </div>
            <Link href={project.design?.url} target='_blank'>
              <Button>
                Ver Design <ArrowRight></ArrowRight>
              </Button>
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}
