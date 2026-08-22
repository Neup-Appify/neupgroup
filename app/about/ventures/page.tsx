
import type { Metadata } from 'next';
import {
  ventures,
} from '@/components/sections/VenturePortfolio.config';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Our Ventures',
};

const statusStyles: { [key: string]: string } = {
  Live: 'bg-chart-2/10 text-chart-2 border-chart-2/20',
  Building: 'bg-chart-4/20 text-chart-4 border-chart-4/30',
  Beta: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
  Alpha: 'bg-yellow-400/20 text-yellow-500 border-yellow-400/30',
};


export default function VenturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl">
              Our Ventures
            </h1>
            <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
              We build, operate, and scale a portfolio of companies designed to solve real-world problems and create long-term value.
            </p>
          </div>
        </section>

        {/* Ventures Grid */}
        <section id="ventures" className="py-20 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ventures.map((venture) => (
                <Link href={venture.link} key={venture.name} className="group block">
                  <Card className="h-full flex flex-col hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <venture.logo className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="font-headline text-xl">{venture.name}</CardTitle>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45" />
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <CardDescription className="flex-grow mb-4">{venture.description}</CardDescription>
                      <Badge variant="outline" className={`${statusStyles[venture.status]} font-medium`}>
                        {venture.status}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
