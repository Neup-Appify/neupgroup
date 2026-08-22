'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/core/utils';

const navLinks = [
  { href: '/#ventures', label: 'Ventures' },
  { href: '/#vision', label: 'Vision' },
  { href: '/about/teams', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

const MENU_ANIMATION_MS = 700;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderContent, setShouldRenderContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      setShouldRenderContent(true);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShouldRenderContent(false);
    }, MENU_ANIMATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const mainElement = document.querySelector('main');
    const footerElement = document.querySelector('footer');

    if (mainElement instanceof HTMLElement) {
      mainElement.style.filter = isOpen ? 'blur(8px)' : '';
      mainElement.style.transition = 'filter 300ms ease-out';
    }

    if (footerElement instanceof HTMLElement) {
      footerElement.style.filter = isOpen ? 'blur(8px)' : '';
      footerElement.style.transition = 'filter 300ms ease-out';
    }

    return () => {
      document.body.style.overflow = '';

      if (mainElement instanceof HTMLElement) {
        mainElement.style.filter = '';
        mainElement.style.transition = '';
      }

      if (footerElement instanceof HTMLElement) {
        footerElement.style.filter = '';
        footerElement.style.transition = '';
      }
    };
  }, [isOpen]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="relative hover:bg-transparent active:bg-transparent focus-visible:bg-transparent"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="relative block h-6 w-6" aria-hidden="true">
          <span
            className={cn(
              'absolute left-1/2 top-1/2 block h-1 rounded-full bg-foreground transition-all duration-300 ease-out',
              isOpen ? 'w-5 -translate-x-1/2 -translate-y-1/2 rotate-45' : 'w-[1.55rem] -translate-x-1/2 -translate-y-[0.3rem] rotate-0'
            )}
          />
          <span
            className={cn(
              'absolute left-1/2 top-1/2 block h-1 rounded-full bg-foreground transition-all duration-300 ease-out',
              isOpen ? 'w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45' : 'w-[1.55rem] -translate-x-1/2 translate-y-[0.3rem] rotate-0 opacity-100'
            )}
          />
        </span>
        <span className="sr-only">{isOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
      </Button>

      <div
        id="mobile-navigation"
        className={cn(
          'absolute inset-x-0 top-full z-50 h-[calc(100dvh-3.5rem)] origin-top overflow-hidden border-b border-border/40 bg-background/95 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-700 ease-out will-change-transform',
          isOpen ? 'pointer-events-auto scale-y-100 opacity-100 border-t border-border/70' : 'pointer-events-none scale-y-0 opacity-0 border-t-transparent'
        )}
      >
        {shouldRenderContent ? (
          <div className="container flex h-full flex-col overflow-hidden px-4 pb-8 pt-8">
            <nav className="flex flex-1 flex-col gap-6 overflow-hidden">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-4xl font-semibold leading-none text-foreground/80 transition-opacity duration-700 ease-out hover:text-foreground"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transitionDelay: isOpen ? `${80 + index * 40}ms` : '0ms',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div
              className="flex flex-col gap-4 overflow-hidden pt-8 transition-opacity duration-700 ease-out"
              style={{
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? `${80 + navLinks.length * 40}ms` : '0ms',
              }}
            >
              <Button asChild className="h-12 w-full text-base" size="lg" onClick={() => setIsOpen(false)}>
                <Link href="/account">Get Inside</Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
