import FloatingMenu from '@/components/floating-menu';
import Header from '@/components/header';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main className='px-4 flex flex-col gap-4'>
        <div className='flex flex-col justify-center gap-3'>
          <h1 className='font-bold text-5xl tracking-tight'>
            Olá! Sou <br />
            Ana Paula✌️
          </h1>
          <h2 className='text-2xl font-semibold bg-gradient bg-clip-text text-transparent'>
            Front End Developer
          </h2>
          <h3 className='text-gray'>Seja bem vindo(a) ao meu Portfólio!</h3>
          <p className='text-sm'>
            Aqui, vou lhe mostrar como venho transformando ideias em{' '}
            <span className='text-pink'>soluções digitais</span>.
          </p>
        </div>
        <Image
          width={200}
          height={200}
          src='/ImagemPerfil.png'
          alt='Mulher jovem de cabelos longos e escuros sorrindo levemente, com as mãos apoiadas sob o queixo em pose descontraída. Fundo recortado em formato orgânico.'
        />
      </main>
      <footer className='flex p-4'>
        <Link href='/sobre-mim'>
          <button className='flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-medium rounded-full '>
            Explore comigo
            <ArrowRight></ArrowRight>
          </button>
        </Link>
      </footer>
      <FloatingMenu></FloatingMenu>
    </div>
  );
}
