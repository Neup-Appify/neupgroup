
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug, getAllCaseStudySlugs } from '@/app/case/case-studies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs();
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: caseStudy.title,
    description: `A case study about our work with ${caseStudy.clientName}.`,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <p className="text-primary font-semibold mb-2">Case Study: {caseStudy.clientName}</p>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl">
              {caseStudy.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy.services.map(service => (
                    <div key={service} className="text-sm font-medium text-muted-foreground border rounded-full px-3 py-1">{service}</div>
                ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none space-y-6"
              dangerouslySetInnerHTML={{ __html: caseStudy.content }} 
            />

            {caseStudy.backlinks && caseStudy.backlinks.length > 0 && (
                <div className="mt-12 pt-8 border-t">
                    <h3 className="font-headline text-2xl font-bold mb-4">Related Links</h3>
                    <div className="flex flex-col gap-4 items-start">
                        {caseStudy.backlinks.map(link => (
                            <Button asChild variant="link" className="p-0 text-base h-auto" key={link.url}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.text}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>
            )}
          </div>
        </section>

        {/* More Case Studies */}
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <h2 className="font-headline text-3xl font-bold text-center mb-8">More Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {caseStudies.filter(cs => cs.slug !== params.slug).slice(0, 2).map(otherCase => (
                        <Link href={`/case/${otherCase.slug}`} key={otherCase.slug} className="group">
                             <Card className="h-full hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <p className="text-sm text-primary font-semibold">{otherCase.clientName}</p>
                                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{otherCase.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground flex items-center">
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
