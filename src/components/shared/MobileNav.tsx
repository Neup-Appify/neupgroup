
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { NeupLogo } from '@/components/NeupLogo';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#ventures', label: 'Ventures' },
  { href: '/#vision', label: 'Vision' },
  { href: '/about/teams', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open navigation menu</span>
      </Button>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-background/80 backdrop-blur-lg transition-all duration-500 ease-in-out',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <NeupLogo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Neup.Group</span>
          </Link>
          <div className="flex items-center">
            <ThemeSwitcher />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close navigation menu</span>
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 top-14 flex flex-col items-center justify-center p-8">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-3xl font-semibold text-foreground/80 transition-all duration-300 ease-in-out hover:text-foreground"
                style={{
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${100 + index * 50}ms`,
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild
            className="mt-16 w-full max-w-xs transition-all duration-300 ease-in-out"
            style={{
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transitionDelay: `${100 + navLinks.length * 50}ms`,
            }}
            size="lg" onClick={() => setIsOpen(false)}>
            <Link href="/account">
              Get Inside
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
