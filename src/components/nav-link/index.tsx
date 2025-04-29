import Link from 'next/link';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
  return (
    <li className='flex items-center justify-center p-1 gap-3 text-gray min-w-fit'>
      <Link href={href}>{children}</Link>
    </li>
  );
}
