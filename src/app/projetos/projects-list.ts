import { TECHNOLOGIES } from '@/utils/technologies';
import { TOOLS } from '@/utils/tools';

export const projectsList = [
  {
    url: '/projetos/meu-portfolio',
    slug: 'meu-portfolio',
    image: {
      src: '/projetos/meu-portfolio/pagina-inicial.jpeg',
      alt: 'Página inicial do portfólio de Ana Paula, com fundo preto e texto em destaque: Olá! Sou Ana Paula ✌ Front End Developer. Ao lado direito, há uma foto de Ana sorrindo levemente, com pose descontraída, moldada por um contorno orgânico branco',
    },
    title: 'Meu Portfólio',
    subtitle: 'Website & Design',
    site: {
      description:
        'Este portfólio foi desenvolvido com o objetivo de apresentar de forma clara, moderna e funcional o meu trabalho como desenvolvedora front-end, designer e freelancer. Cada seção foi pensada para refletir minha identidade visual, minhas habilidades técnicas e meu estilo de design, sempre priorizando a usabilidade e a estética. Utilizei tecnologias que domino — como React, NextJS, TypeScript, e Tailwind CSS — para garantir uma navegação fluida, responsiva e agradável, tanto em desktop quanto em dispositivos móveis. Além disso, combinei meu conhecimento em desenvolvimento com princípios de design visual, criando um site que não só informa, mas também conecta.',
      technologies: [
        TECHNOLOGIES.REACTJS,
        TECHNOLOGIES.NEXTJS,
        TECHNOLOGIES.TAILWIND,
        TECHNOLOGIES.TYPESCRIPT,
        TECHNOLOGIES.GIT,
        TECHNOLOGIES.GITHUB,
        TECHNOLOGIES.VSCODE,
      ],
      url: 'https://anapaula-portfolio.vercel.app/',
    },
    design: {
      description:
        'O design deste portfólio foi desenvolvido no Figma com foco em transmitir personalidade, clareza e profissionalismo. Cada detalhe — desde a paleta escura com toques contrastantes até as ilustrações — foi escolhido para refletir meu estilo e destacar minha identidade como designer criativa. As seções seguem uma hierarquia visual bem definida, com tipografia limpa, espaçamento consistente e componentes reutilizáveis, o que facilita tanto a leitura quanto a manutenção do projeto. Também priorizei a navegação fluida e a experiência do usuário (UX), garantindo que qualquer pessoa consiga encontrar o que procura sem esforço e de maneira intuitiva. Além disso, o layout foi pensado para ser totalmente responsivo e adaptável, mantendo a estética e usabilidade tanto no desktop quanto no mobile. Usei grids bem estruturados, alinhamentos intencionais e elementos interativos para criar uma experiência visual coerente, moderna e envolvente.',
      technologies: [TOOLS.FIGMA],
      url: 'https://www.figma.com/design/Zl9C2I3JGQ0c3s9F1jyzSG/Portf%C3%B3lio---Ana?node-id=130-532&t=KOkKLdCdqSvkL68R-1',
    },
  },
];
