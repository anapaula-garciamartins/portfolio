import Button from '@/components/button';
import Header from '@/components/header';
import TechToolsCard from '@/components/tech-tools-card';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export default function SobreMim() {
  return (
    <div className='flex flex-col gap-8'>
      <Header></Header>
      <main className='flex flex-col justify-center gap-4 px-4'>
        <h1 className='font-bold text-5xl'>Quem sou eu?</h1>
        <p>
          Me chamo Ana Paula, mas pode me chamar de Ana (afinal, quem teve a ideia de
          nomes compostos?). <br />
          Sou desenvolvedora <span className='text-pink font-bold'>front-end</span>,{' '}
          <span className='text-pink font-bold'>designer</span> e{' '}
          <span className='text-pink font-bold'>freelancer</span>, apaixonada por
          transformar ideias em interfaces intuitivas e atraentes. <br />
          Entre códigos e criatividade, busco criar experiências digitais que unem
          estética e funcionalidade. <br />
          Fora das telas, sou uma leitora voraz, fã de jogos, séries e aventuras na
          cozinha. Também sou completamente apaixonada por animais, a irmã mais babona do
          mundo e, segundo meu marido, a esposa engraçadinha. <br />
          Seja bem-vindo(a) ao meu mundo digital.{' '}
          <span className='text-pink font-bold'>
            Vamos construir algo incrível juntos?
          </span>
        </p>
        <h2 className='text-[32px] leading-9'>Tecnologias e ferramentas que utilizo</h2>
        <div className='grid grid-cols-2 gap-4'>
          <TechToolsCard
            title='HTML'
            src='/techs/html.png'
            alt='Logo do HTML5: escudo laranja com número 5 branco no centro, representando a linguagem de marcação usada para estruturar páginas web.'
          />
          <TechToolsCard
            title='CSS'
            src='/techs/css.png'
            alt='Logo do CSS3: escudo azul com número 3 branco no centro, simbolizando a linguagem de estilo usada para criar layouts, cores e responsividade em sites.'
          />
          <TechToolsCard
            title='JavaScript'
            src='/techs/js.png'
            alt='Logo do JavaScript: fundo amarelo com as letras JS em preto, representando a linguagem de programação responsável por adicionar interatividade às páginas web.'
          />
          <TechToolsCard
            title='React'
            src='/techs/react.png'
            alt='Logo do React: átomo azul claro sobre fundo escuro, representando a biblioteca JavaScript usada para criar interfaces dinâmicas baseadas em componentes.'
          />
          <TechToolsCard
            title='Tailwind'
            src='/techs/tailwind.png'
            alt='Logo do Tailwind CSS: forma ondulada em azul sobre fundo branco, simbolizando o framework utilitário usado para estilizar páginas com rapidez e personalização.'
          />
          <TechToolsCard
            title='Next.js'
            src='/techs/next.png'
            alt='Logo do Next.js: texto preto estilizado com a palavra Next, com um corte diagonal atravessando a letra N, representando o framework de React focado em performance e renderização híbrida.'
          />
          <TechToolsCard
            title='Figma'
            src='/tools/figma.png'
            alt='Logo do Figma: cinco formas circulares coloridas formando a letra F, representando a ferramenta de design colaborativo focada em UI e prototipação.'
          />
        </div>
        <footer className='flex p-4 justify-center'>
          <Link href='/projetos'>
            <Button>
              Conheça meus projetos <ArrowRight></ArrowRight>
            </Button>
          </Link>
        </footer>
      </main>
    </div>
  );
}
