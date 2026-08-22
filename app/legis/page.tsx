import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Scale, FileText, Search, History, Users, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { NeupLogo } from "@/components/NeupLogo";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Neup.Legis',
};

const capabilities = [
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Structured Laws & Acts",
    description: "Acts broken down into readable sections, summaries, and references for easy navigation.",
  },
  {
    icon: <Scale className="h-6 w-6 text-primary" />,
    title: "Plain-Language Explanations",
    description: "Clear, practical summaries explaining what the law actually means and how it applies.",
  },
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "Search by Intent",
    description: "Find laws by what you need to do, not just by their official, often confusing, names.",
  },
  {
    icon: <History className="h-6 w-6 text-primary" />,
    title: "Updates & Amendments Tracking",
    description: "Stay aware of legal changes with a clear history of amendments and updates.",
  },
];

const whoFor = [
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Businesses & Founders",
        description: "Clarity on compliance, obligations, and corporate requirements."
    },
    {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: "Students & Learners",
        description: "Structured legal knowledge for study, research, and reference."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Citizens",
        description: "Understand your rights, duties, and legal procedures."
    }
];

const howItWorks = [
    { name: "Choose Topic/Law", description: "Select a specific Act or area of interest." },
    { name: "Read Explanation", description: "Grasp the core concepts in plain language." },
    { name: "Explore Sections", description: "Dive into detailed articles and clauses." },
    { name: "Stay Updated", description: "Track changes and amendments over time." },
];

export default function LegisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <div className="max-w-4xl">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Laws, Regulations, and Compliance — Made Understandable.
              </h1>
              <p className="max-w-3xl mt-4 text-muted-foreground md:text-xl">
                Neup.Legis turns complex laws into clear, structured, and searchable knowledge for businesses, students, and citizens.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#capabilities">Explore Laws & Regulations</Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link href="#how-it-works">How Neup.Legis Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                  Legal Information Is Scattered, Complex, and Hard to Trust.
                </h2>
                <p className="text-muted-foreground text-lg">
                    Navigating the legal landscape often means dealing with dense documents, confusing language, and no clear path to understanding.
                </p>
              </div>
              <div className="space-y-4">
                    <p className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" /> Laws are buried in dense, hard-to-read PDFs.</p>
                    <p className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" /> Legal language is confusing and impractical.</p>
                    <p className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" /> Updates and amendments are difficult to track.</p>
              </div>
            </div>
            <hr className="my-12"/>
            <p className="text-center text-lg font-medium max-w-4xl mx-auto">
                Neup.Legis exists to bring structure, clarity, and reliability to legal knowledge, making it accessible for everyone.
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">What Neup.Legis Provides</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                Core capabilities designed to make the law transparent and usable.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {capabilities.map((capability) => (
                <Card key={capability.title} className="bg-background border shadow-none">
                  <CardHeader>
                    {capability.icon}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="font-headline text-lg mb-2">{capability.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Designed for Clear Understanding</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                        Providing structured legal knowledge for key audiences across Nepal.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
                    {whoFor.map((item) => (
                        <div key={item.title} className="flex flex-col items-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-28 bg-card">
            <div className="container max-w-5xl">
                <div className="text-center mb-16">
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">A Clear Path to Knowledge</h2>
                     <p className="mt-4 text-muted-foreground">A simple, intuitive process for navigating complex information.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-x-6 gap-y-8">
                    {howItWorks.map((step, index) => (
                        <div key={step.name} className="flex flex-col items-center text-center gap-4">
                             <div className="relative mb-4">
                                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">{index + 1}</div>
                                {index < howItWorks.length - 1 && 
                                    <div className="absolute top-1/2 left-full w-16 border-t-2 border-dashed border-border hidden md:block"></div>
                                }
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{step.name}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Trust & Integrity Section */}
        <section className="py-20 md:py-28">
            <div className="container max-w-3xl text-center bg-background/50 p-8 rounded-lg">
                <h2 className="font-headline text-3xl font-bold">Built for Accuracy, Neutrality, and Long-Term Use</h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                    <p>Neup.Legis is an informational resource, not a legal advisor. Our platform is designed to provide structured, traceable information from official sources.</p>
                    <p className="font-semibold text-foreground">We provide clarity on the law as it is written, without interpretation or opinion.</p>
                </div>
            </div>
        </section>

        {/* Ecosystem Backing Section */}
        <section className="py-12 bg-card">
            <div className="container text-center">
                <p className="text-sm text-muted-foreground">
                    Neup.Legis is a legal knowledge platform by <b className="font-semibold text-foreground">Neup Group Private Limited</b>, designed as part of a long-term digital infrastructure ecosystem.
                </p>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Understand the Law. Act With Clarity.
            </h2>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="#capabilities">
                  Start Exploring Neup.Legis
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
