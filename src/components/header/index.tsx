import NavLink from '../nav-link';

export default function Header() {
  return (
    <header className='flex items-center justify-center px-4 h-[60px] min-h-[60px] md:h-[120px] md:min-h-[120px]'>
      <nav>
        <ul className='flex items-center justify-center gap-1 font-semibold md:gap-8'>
          <NavLink href='/'>Inicio</NavLink>
          <NavLink href='/sobre-mim'>Sobre Mim</NavLink>
          <NavLink href='/projetos'>Projetos</NavLink>
          <NavLink href='/contato'>Contato</NavLink>
        </ul>
      </nav>
    </header>
  );
}
