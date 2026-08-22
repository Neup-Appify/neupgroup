
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Cookie, Shield, Gavel } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Information',
};

const legalPages = [
  {
    title: "Terms of Service",
    description: "The terms and conditions for using our services.",
    link: "/legal/terms",
    icon: <Gavel className="h-6 w-6 text-primary" />
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your data.",
    link: "/legal/privacy",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "Cookie Policy",
    description: "Information about the cookies we use.",
    link: "/legal/cookies",
    icon: <Cookie className="h-6 w-6 text-primary" />
  },
    {
    title: "Compliance",
    description: "Official company information and legal documents.",
    link: "/legal/compliance",
    icon: <FileText className="h-6 w-6 text-primary" />
  }
];

export default function LegalPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2 mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Legal Center</h1>
          <p className="text-muted-foreground">
            Find all our legal documents, policies, and compliance information here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {legalPages.map((page) => (
            <Link href={page.link} key={page.title} className="group block">
              <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between">
                   <div className="flex items-center gap-4">
                     {page.icon}
                    <CardTitle className="font-headline text-xl">{page.title}</CardTitle>
                   </div>
                   <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{page.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
