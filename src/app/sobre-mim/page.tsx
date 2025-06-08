import Button from '@/components/button';
import FloatingMenu from '@/components/floating-menu';
import Header from '@/components/header';
import TechToolsCard from '@/components/tech-tools-card';
import { TECHNOLOGIES } from '@/utils/technologies';
import { TOOLS } from '@/utils/tools';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function SobreMim() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <Header></Header>
      <main className='flex flex-col justify-center md:text-center gap-4 px-4 md:px-12 md:gap-6 xl:gap-10 max-w-[1200px]'>
        <h1 className='font-bold text-5xl'>Quem sou eu?</h1>
        <p className='md:text-2xl xl:text-3xl'>
          {' '}
          Oi! Eu sou a Ana — desenvolvedora{' '}
          <span className='text-pink font-bold'>front-end</span> e{' '}
          <span className='text-pink font-bold'>designer</span> (sim, os dois, porque a
          vida é curta demais pra escolher só um lado do cérebro). <br />
          Minha paixão é transformar ideias em experiências digitais que façam sentido,
          encantem e funcionem de verdade. <br /> Gosto de unir lógica com estética,
          código com empatia, e tecnologia com aquele toque humano que faz diferença.{' '}
          <br /> Sou{' '}
          <span className='text-pink font-bold'>
            tecnóloga em Análise e Desenvolvimento de Sistemas
          </span>{' '}
          pela <span className='text-pink font-bold'>UNINTER</span> de Porto Alegre, o que
          fortalece minha base técnica e alimenta meu lado inquieto que adora resolver
          problemas com criatividade. <br /> Quando não tô criando interfaces ou
          mergulhada em um layout, você provavelmente vai me encontrar com um livro na
          mão, cozinhando alguma receita maluca, maratonando séries com meu marido ou
          mimando e babando todos animais do mundo (e meus irmãos também, porque irmã
          coruja é apelido). <br /> Aqui no meu portfólio, você vai ver um pouquinho do
          meu jeito de pensar, criar e resolver. <br /> Se quiser trocar ideia, colaborar
          ou só bater um papo sobre design, tecnologia ou a vida — chega mais. <br />
          <span className='text-pink font-bold'>Vamos criar algo incrível?</span>
        </p>
        <h2 className='text-[32px] leading-9 font-bold'>
          Tecnologias e ferramentas que utilizo
        </h2>
        <section className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <TechToolsCard tech={TECHNOLOGIES.HTML} />
          <TechToolsCard tech={TECHNOLOGIES.CSS} />
          <TechToolsCard tech={TECHNOLOGIES.BOOTSTRAP} />
          <TechToolsCard tech={TECHNOLOGIES.MATERIAL_UI} />
          <TechToolsCard tech={TECHNOLOGIES.TAILWIND} />
          <TechToolsCard tech={TECHNOLOGIES.JAVASCRIPT} />
          <TechToolsCard tech={TECHNOLOGIES.TYPESCRIPT} />
          <TechToolsCard tech={TECHNOLOGIES.REACTJS} />
          <TechToolsCard tech={TECHNOLOGIES.VITEJS} />
          <TechToolsCard tech={TECHNOLOGIES.NEXTJS} />
          <TechToolsCard tech={TECHNOLOGIES.MY_SQL} />
          <TechToolsCard tech={TECHNOLOGIES.GIT} />
          <TechToolsCard tech={TECHNOLOGIES.GITHUB} />
          <TechToolsCard tech={TECHNOLOGIES.VSCODE} />
          <TechToolsCard tech={TOOLS.FIGMA} />
          <TechToolsCard tech={TOOLS.CANVA} />
        </section>
      </main>
      <footer className='flex p-4 justify-center'>
        <Link href='/projetos'>
          <Button>
            Conheça meus projetos <ArrowRight></ArrowRight>
          </Button>
        </Link>
      </footer>
      <FloatingMenu className='hidden md:flex'></FloatingMenu>
    </div>
  );
}
