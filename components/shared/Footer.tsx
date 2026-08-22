
'use client';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { NeupLogo } from '@/components/NeupLogo';
import Link from 'next/link';
import { ventures, type Venture } from '@/components/sections/VenturePortfolio.config';
import { useState, useEffect } from 'react';

// Function to shuffle array and get first N items
function getShuffledVentures(array: typeof ventures, count: number) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


export function Footer() {
  const [randomVentures, setRandomVentures] = useState<Venture[]>([]);

  useEffect(() => {
    setRandomVentures(getShuffledVentures(ventures, 4));
  }, []);


  return (
    <footer className="border-t py-16 bg-card">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-4 group">
              <NeupLogo className="h-8 w-8 mr-2 text-primary group-hover:text-primary/80 transition-colors" />
              <h3 className="text-xl font-headline font-bold group-hover:text-foreground/80 transition-colors">Neup.Group</h3>
            </Link>
            <p className="text-muted-foreground pr-4">
              Building the next generation of digital ventures from Nepal, for the world.
            </p>
            <div className="flex space-x-4 mt-6">
                <Link href="https://facebook.com/neupgroup" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
                <Link href="https://instagram.com/neupgroup" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
                <Link href="https://linkedin.com/company/neupgroup" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                <Link href="https://twitter.com/neupgroup" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                <Link href="https://youtube.com/@neupgroup" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground hover:text-primary"><Youtube /></Link>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Ventures</h4>
              <ul className="space-y-3">
                {randomVentures.map(venture => (
                   <li key={venture.name}><Link href={venture.link} className="text-muted-foreground hover:text-primary">{venture.name}</Link></li>
                ))}
                 <li><Link href="/about/ventures" className="text-muted-foreground hover:text-primary font-medium">View All &rarr;</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-3">
                <li><Link href="/about/teams" className="text-muted-foreground hover:text-primary">Team</Link></li>
                <li><Link href="/about/life" className="text-muted-foreground hover:text-primary">Life at Neup</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/case" className="text-muted-foreground hover:text-primary">Case Studies</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
                <li><Link href="/foundation" className="text-muted-foreground hover:text-primary">Foundation</Link></li>
                 <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Partnerships</Link></li>
                <li><Link href="/legal" className="text-muted-foreground hover:text-primary">Legal</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            Developed with <Link href="/site" className="font-semibold text-foreground hover:underline">Neup.Site</Link> by <Link href="/marketing" className="font-semibold text-foreground hover:underline">Neup.Marketing</Link>
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Neup Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
