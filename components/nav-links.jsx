'use client';

import Link from 'next/link';
import { Home, Package, Package2, LineChart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href='/'
        className={cn(
          pathname === '/' ? 'text-primary bg-muted' : 'text-muted-foreground',
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
        )}
      >
        <Home className='h-4 w-4' />
        Home
      </Link>
      <Link
        href='/products'
        className={cn(
          pathname === '/products'
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
        )}
      >
        <Package className='h-4 w-4' />
        Products
      </Link>
      <Link
        href='/posts'
        className={cn(
          pathname === '/posts'
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary'
        )}
      >
        <LineChart className='h-4 w-4' />
        Posts
      </Link>
    </>
  );
}

export function NavLinksMobile() {
  const pathname = usePathname();

  return (
    <>
      <Link href='#' className='flex items-center gap-2 text-lg font-semibold'>
        <Package2 className='h-6 w-6' />
        <span className='sr-only'>Acme Inc</span>
      </Link>
      <Link
        href='/'
        className={cn(
          pathname === '/' ? 'text-primary bg-muted' : 'text-muted-foreground',
          'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground'
        )}
      >
        <Home className='h-5 w-5' />
        Home
      </Link>
      <Link
        href='/products'
        className={cn(
          pathname === '/products'
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground'
        )}
      >
        <Package className='h-5 w-5' />
        Products
      </Link>
      <Link
        href='/posts'
        className={cn(
          pathname === '/posts'
            ? 'text-primary bg-muted'
            : 'text-muted-foreground',
          'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground'
        )}
      >
        <LineChart className='h-5 w-5' />
        Posts
      </Link>
    </>
  );
}
