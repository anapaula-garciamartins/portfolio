import Button from '@/components/button';
import FloatingMenu from '@/components/floating-menu';
import Header from '@/components/header';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center gap-8'>
      <Header></Header>
      <main className='px-4 flex flex-col max-w-[1200px] gap-4 xl:flex-row xl:justify-center xl:items-center flex-1 md:px-12 md:gap-16'>
        <div className='flex flex-col justify-center gap-3 md:gap-6'>
          <h1 className='font-bold text-5xl tracking-tight md:text-7xl'>
            ✨ Olá! Sou <br />
            Ana Paula ✨
          </h1>
          <h2 className='text-2xl font-semibold text-pink md:text-5xl'>
            Front End Developer & UI/UX Designer
          </h2>
          <h3 className='text-gray md:text-[32px]'>
            Seja bem vindo(a) ao meu Portfólio!
          </h3>
          <p className='text-sm md:text-2xl'>
            Aqui, vou lhe mostrar como venho transformando ideias em{' '}
            <span className='text-pink'>soluções digitais</span>.
          </p>
        </div>
        <Image
          className='size-[400px] xl:size-[600px] object-contain'
          width={600}
          height={600}
          src='/ImagemPerfil.webp'
          alt='Mulher jovem de cabelos longos e escuros sorrindo levemente, com as mãos apoiadas sob o queixo em pose descontraída. Fundo recortado em formato orgânico.'
        />
      </main>
      <footer className='flex p-4 md:justify-center'>
        <Link href='/sobre-mim'>
          <Button>
            Explore comigo <ArrowRight></ArrowRight>
          </Button>
        </Link>
      </footer>
      <FloatingMenu></FloatingMenu>
    </div>
  );
}
