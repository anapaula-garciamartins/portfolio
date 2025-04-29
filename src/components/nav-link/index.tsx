'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
  const path = usePathname();
  const isActive = path === href;
  return (
    <li
      data-active={isActive}
      className='flex items-center justify-center p-1 gap-3 text-gray min-w-fit border-b border-transparent data-[active="true"]:text-pink  data-[active="true"]:border-pink md:text-2xl'
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
