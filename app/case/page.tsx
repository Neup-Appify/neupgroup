
import type { Metadata } from 'next';
import { caseStudies } from '@/app/case/case-studies';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Work: Case Studies',
  description: 'Explore how Neup Group has helped businesses achieve their goals through strategic design, marketing, and technology.',
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl">
              Case Studies
            </h1>
            <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
              Explore how we partner with ambitious brands to solve complex challenges and drive meaningful results through technology, design, and strategy.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Link href={`/case/${study.slug}`} key={study.slug} className="group block">
                  <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <p className="text-sm text-primary font-semibold">{study.clientName}</p>
                      <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.services.map(service => (
                            <div key={service} className="text-xs font-medium text-muted-foreground border rounded-full px-2.5 py-0.5">{service}</div>
                        ))}
                      </div>
                      <p className="text-muted-foreground flex items-center font-medium">
                        Read Case Study <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </p>
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
