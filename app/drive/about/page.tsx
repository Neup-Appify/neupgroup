
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, FolderTree, ShieldCheck, Users, History, Link2, Bot, Folder, GitBranch, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NeupLogo } from '@/components/NeupLogo';

export const metadata: Metadata = {
  title: 'Neup.Drive | Your Files. Your System. Total Control.',
  description: 'A structured workspace for storing, managing, and sharing files across teams, ventures, and systems—without chaos.',
};

const painPoints = [
    { title: "Scattered Files", description: "Files lost across tools, drives, and endless links." },
    { title: "No Clear Ownership", description: "Who owns what? Nobody knows." },
    { title: "Duplicate Versions", description: "Version conflicts create chaos and rework." },
    { title: "Security Guesswork", description: "Access control becomes a complex, risky puzzle." }
];

const solutionFeatures = [
    { icon: <FolderTree className="h-6 w-6 text-primary" />, title: "Structured by Projects & Teams" },
    { icon: <Users className="h-6 w-6 text-primary" />, title: "Role-Based Access Control" },
    { icon: <History className="h-6 w-6 text-primary" />, title: "Version History Built-in" },
    { icon: <Bot className="h-6 w-6 text-primary" />, title: "Fast Search Across Everything" }
];

const howItWorksSteps = [
    { number: 1, title: "Create", description: "Create projects or workspaces." },
    { number: 2, title: "Organize", description: "Upload and organize files once." },
    { number: 3, title: "Assign", description: "Assign access by role or team." },
    { number: 4, title: "Share", description: "Share and collaborate with confidence." }
];

const useCases = [
    { title: "Startups & Founders", benefit: "A single source of truth from day one." },
    { title: "Agencies & Creative Teams", benefit: "Seamless handoffs and client collaboration." },
    { title: "Internal Company Operations", benefit: "Structured processes for HR, legal, and finance." },
    { title: "Multi-Venture Organizations", benefit: "Centralized control with delegated access." }
];


export default function DrivePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      Your files. Your system. Total control.
                    </h1>
                    <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                      Neup.Drive is a structured workspace for storing, managing, and sharing files across teams, ventures, and systems—without chaos.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg">Start using Neup.Drive</Button>
                      <Button size="lg" variant="outline">See how it works <ArrowRight className="ml-2 h-4 w-4"/></Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-drive-hero/600/500" 
                        alt="Neup.Drive file management interface"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="file management system"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* 2. Problem Section */}
        <section className="py-20 md:py-28">
            <div className="container max-w-5xl text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Cloud storage was built for files. Not for teams.</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {painPoints.map(point => (
                        <Card key={point.title} className="bg-card text-left">
                            <CardHeader>
                                <CardTitle className="font-headline text-lg">{point.title}</CardTitle>
                                <CardDescription>{point.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                <p className="mt-12 text-xl font-medium">Neup.Drive fixes this by design.</p>
            </div>
        </section>

        {/* 3. Solution Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">One place where work actually stays organized.</h2>
                <p className="mt-4 text-muted-foreground text-lg">Neup.Drive brings structure to how teams store, access, and collaborate on files. Everything is intentional—from folders to permissions.</p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {solutionFeatures.map(feature => (
                    <div key={feature.title} className="flex items-center gap-3">
                        {feature.icon}
                        <p className="font-medium">{feature.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                 <Image 
                    src="https://picsum.photos/seed/drive-solution/500/400"
                    alt="Expanded folder tree with tags and version history"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="folder structure versioning"
                  />
              </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works Section */}
        <section className="py-20 md:py-28">
            <div className="container max-w-5xl">
                <div className="text-center mb-16">
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">Designed for clarity from day one</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-x-6 gap-y-8">
                    {howItWorksSteps.map((step, index) => (
                        <div key={step.title} className="flex flex-col items-center text-center gap-4">
                             <div className="relative mb-4">
                                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">{step.number}</div>
                                {index < howItWorksSteps.length - 1 && 
                                    <div className="absolute top-1/2 left-full w-16 border-t-2 border-dashed border-border hidden md:block"></div>
                                }
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. Collaboration Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container text-center max-w-3xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Collaboration without mess.</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">Share files internally or externally without broken links, lost context, or permission confusion. Every file has history, ownership, and intent.</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
                <Card className="p-4"><p className="font-medium">Controlled external sharing</p></Card>
                <Card className="p-4"><p className="font-medium">Activity tracking</p></Card>
                <Card className="p-4"><p className="font-medium">No accidental overwrites</p></Card>
                <Card className="p-4 sm:col-start-2"><p className="font-medium">Clean handoffs between teams</p></Card>
            </div>
          </div>
        </section>

        {/* 6. Security & Ownership */}
        <section className="py-20 md:py-28 bg-background">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto bg-gray-900 text-gray-200 p-8 lg:p-12 rounded-lg">
                    <div className="space-y-4">
                        <h2 className="font-headline text-3xl font-bold text-white">Your data stays yours.</h2>
                         <p className="text-gray-400">Designed for businesses, not consumers.</p>
                    </div>
                    <div className="space-y-4">
                         <p className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-chart-2 flex-shrink-0" /> Permission-based access</p>
                         <p className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-chart-2 flex-shrink-0" /> Clear ownership per file</p>
                         <p className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-chart-2 flex-shrink-0" /> Built for long-term data integrity</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 7. Ecosystem Integration */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl text-center">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold">Built to work with the Neup ecosystem.</h2>
                 <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">Neup.Drive doesn’t live alone. It connects seamlessly with how Neup Group works—today and as it scales.</p>
                 <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-muted-foreground">
                    <div className="flex flex-col items-center gap-2"><NeupLogo className="h-8 w-8"/><span>Neup.ID</span></div>
                    <div className="flex flex-col items-center gap-2"><Folder className="h-8 w-8"/><span>Neup.Suite</span></div>
                    <div className="flex flex-col items-center gap-2"><Users className="h-8 w-8"/><span>Neup.CRM</span></div>
                    <div className="flex flex-col items-center gap-2"><GitBranch className="h-8 w-8"/><span>Neup.Foundation</span></div>
                </div>
            </div>
        </section>

        {/* 8. Use Cases */}
        <section className="py-20 md:py-28">
            <div className="container">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Who it’s for</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map(uc => (
                        <Card key={uc.title}>
                            <CardHeader>
                                <CardTitle className="font-headline text-lg">{uc.title}</CardTitle>
                                <CardDescription>{uc.benefit}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* 9. Final CTA */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Stop managing files. Start running a system.
            </h2>
             <p className="mt-4 text-muted-foreground">Built for teams that think long-term.</p>
            <div className="mt-8">
              <Button size="lg">Get started with Neup.Drive</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
