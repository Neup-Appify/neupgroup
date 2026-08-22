
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Briefcase, BookOpen, Sparkles, Code, Lightbulb, Users } from "lucide-react";
import Link from "next/link";
import { NeupLogo } from "@/components/NeupLogo";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Neup.Jobs',
};

const opportunityPaths = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Internships & Apprenticeships",
    description: "Gain real-world experience working on live projects with mentorship from our core team.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Entry-Level & Graduate Roles",
    description: "Start your career by contributing to meaningful products from day one.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Growth & Specialist Roles",
    description: "For experienced professionals looking to build, lead, and scale digital ventures.",
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Project-Based Opportunities",
    description: "Collaborate on specific projects that match your unique skills and passion.",
  },
];

const whoFor = [
    "Students & fresh graduates ready to apply their knowledge.",
    "Self-learners and builders who create things for the joy of it.",
    "Ambitious individuals who want real experience, not just a certificate.",
    "Fast learners who are not afraid of challenges and responsibility."
];

const howItWorks = [
    { name: "Explore", description: "Discover opportunities that align with your ambition." },
    { name: "Apply with Intent", description: "Show us your skills, mindset, and what you've built." },
    { name: "Get Evaluated", description: "We assess your potential, not just your CV." },
    { name: "Start Building", description: "Join a team and start contributing to real products." },
];

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 lg:py-40 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-2xl">
                      Build Skills. Build Products. Build Your Career.
                    </h1>
                    <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
                      Neup.Jobs connects ambitious talent with real work, mentorship, and growth opportunities across Neup Group ventures.
                    </p>
                    <div className="mt-8">
                      <Button size="lg" asChild>
                        <Link href="#opportunities">
                            Explore Opportunities
                            <ArrowRight className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                </div>
                 <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-jobs/600/500" 
                        alt="Team collaborating on a project" 
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="team growth collaboration"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* Why Neup.Jobs Exists */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    Why We Built This
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Most job platforms are just listing sites. They treat talent like a number and offer no real path to growth.
                </p>
                <p className="mt-4 text-lg font-medium">
                    Neup.Jobs is different. We exist to create real learning opportunities, place talent inside active ventures, and build long-term careers, not just fill short-term roles.
                </p>
            </div>
        </section>

        {/* What You'll Find Here */}
        <section id="opportunities" className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Your Path to Growth</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                We structure opportunities as career paths, not just job posts. Find the one that fits your ambition.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunityPaths.map((item) => (
                <Card key={item.title} className="text-center bg-background">
                  <CardHeader className="items-center">
                    {item.icon}
                    <CardTitle className="font-headline text-xl pt-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl">
                <div>
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">Who We're Looking For</h2>
                     <p className="mt-4 text-muted-foreground">This is for builders, learners, and future leaders.</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    {whoFor.map((item) => (
                        <Card key={item} className="p-6 flex items-start gap-4">
                            <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                            <p className="font-medium">{item}</p>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 p-6 bg-card rounded-lg">
                    <p className="font-bold text-lg">If you just want a job, this isn't for you.</p>
                    <p className="text-lg text-primary font-semibold">If you want to build a career and make an impact, you're in the right place.</p>
                </div>
            </div>
        </section>
        
        {/* Learning + Work */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <BookOpen className="h-12 w-12 text-primary"/>
                        <h2 className="font-headline text-3xl font-bold">More Than a Job. It's an Apprenticeship.</h2>
                        <p className="text-muted-foreground text-lg">We believe the best way to learn is by doing. Every role at Neup comes with:</p>
                         <ul className="space-y-3">
                            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-chart-2" /><span>Hands-on work on real, shipped products.</span></li>
                            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-chart-2" /><span>Direct mentorship from builders and operators.</span></li>
                            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-chart-2" /><span>Exposure to systems thinking and startup culture.</span></li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Image 
                            src="https://picsum.photos/seed/neup-learning/500/400" 
                            alt="Mentorship session" 
                            width={500}
                            height={400}
                            className="rounded-lg shadow-xl" 
                            data-ai-hint="mentorship coding" />
                    </div>
                </div>
            </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28">
            <div className="container max-w-5xl">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Process</h2>
                     <p className="mt-4 text-muted-foreground">Simple, transparent, and focused on potential.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-x-6 gap-y-8">
                    {howItWorks.map((step, index) => (
                        <div key={step.name} className="flex flex-col md:flex-row items-start text-center md:text-left gap-4">
                            <div className="flex md:flex-col items-center gap-4 mx-auto">
                                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">{index + 1}</div>
                                {index < howItWorks.length - 1 && <div className="hidden md:block w-px h-16 bg-border mt-2"></div>}
                            </div>
                            <div className="pt-1">
                                <h3 className="font-semibold text-lg">{step.name}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Backed by Neup Group */}
        <section className="py-12 bg-card">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                    <NeupLogo className="h-10 w-10 text-primary"/>
                    <div>
                        <p className="font-bold">A Neup Group Initiative</p>
                        <p className="text-muted-foreground text-sm">Neup.Jobs is the talent gateway for our entire ecosystem of ventures.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Ready to Start Building?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
             Explore opportunities to grow your skills and your career within the Neup ecosystem.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="#opportunities">
                  Explore Open Roles
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
