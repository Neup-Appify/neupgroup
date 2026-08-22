
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Rss, Layers, Repeat, BarChart, Youtube, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { NeupLogo } from "@/components/NeupLogo";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Neup.Socials',
};

const capabilities = [
  {
    icon: <Rss className="h-6 w-6 text-primary" />,
    title: "Platform-Native Strategy",
    description: "Different platforms. Different language. Different psychology. We design content that speaks the native language of each channel.",
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Content Architecture",
    description: "Pillars, formats, hooks, and narratives—designed once, executed consistently to build a recognizable brand voice.",
  },
  {
    icon: <Repeat className="h-6 w-6 text-primary" />,
    title: "Distribution & Repurposing",
    description: "One powerful idea becomes multiple platform-optimized formats. We turn your core messages into a pervasive presence.",
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Growth & Feedback Loops",
    description: "We measure what works, double down on it, and eliminate the noise. Your strategy gets smarter over time.",
  },
];

const philosophyPoints = [
  "Content is useless without distribution",
  "Consistency beats spontaneous virality",
  "Systems create freedom, not constraints",
  "Attention is an asset that compounds",
];

const whoFor = [
    "Founders building influential personal brands.",
    "Startups that need sustainable visibility, not just a launch spike.",
    "Product-led companies whose products need a voice.",
    "Creators who are ready to build systems around their content."
];

const platforms = [
    { name: "Instagram", icon: <Instagram /> },
    { name: "YouTube", icon: <Youtube /> },
    { name: "LinkedIn", icon: <Linkedin /> },
    { name: "X (Twitter)", icon: <Twitter /> },
    { name: "Facebook", icon: <Facebook /> },
    // Using a generic SVG for Threads and TikTok as they are not in lucide-react
    { name: "Threads", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"></path><path d="M15.5 8.5c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5c.9 0 1.9-.4 2.5-1"></path><path d="M8.5 15.5c2 0 3.5-1.5 3.5-3.5S10.5 8.5 8.5 8.5c-.9 0-1.9.4-2.5 1"></path></svg> },
    { name: "TikTok", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.521 16.521a4.938 4.938 0 1 1-4.938-4.938V2.5h4.938v9.083a4.938 4.938 0 0 1 4.938 4.938 4.938 4.938 0 0 1-4.938 4.938Z"></path></svg> },
    { name: "Reddit", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.26 7.5a2.12 2.12 0 1 0-4.24 0c0 .41.12.8.32 1.14l-2.68 1.34a6.38 6.38 0 0 0-6.7 0l-2.68-1.34A2.12 2.12 0 1 0 .26 7.5c0 .41.12.8.32 1.14L3.26 10a6.38 6.38 0 0 0 0 4l-2.68 1.34A2.12 2.12 0 1 0 .26 16.5a2.12 2.12 0 1 0 4.24 0c0-.41-.12-.8-.32-1.14l2.68-1.34a6.38 6.38 0 0 0 6.7 0l2.68 1.34c-.2.34-.32.73-.32 1.14a2.12 2.12 0 1 0 4.24 0 2.12 2.12 0 1 0 0-4.24 2.12 2.12 0 1 0 0 4.24Z"></path></svg> },
]

export default function SocialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 lg:py-40 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-2xl">
                      Attention Is Built, Not Posted.
                    </h1>
                    <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
                      Neup.Socials designs platform-specific content systems that grow visibility, trust, and engagement across social platforms.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg" asChild>
                        <Link href="mailto:socials@neup.group">Build Your Distribution Engine</Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="#capabilities">See How We Do It</Link>
                      </Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-socials/600/500" 
                        alt="Social media distribution map" 
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="social media content"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* The Real Problem Section */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    Why Most Brands Fail on Social
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    They post the same content everywhere, chase trends without strategy, and confuse a viral moment with sustainable growth.
                </p>
                <p className="mt-4 text-lg font-medium">
                    Neup.Socials exists to build distribution systems, not to create decorative posts.
                </p>
            </div>
        </section>
        
        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">What We Actually Do</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                We design and manage content systems that turn ideas into influence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {capabilities.map((capability) => (
                <Card key={capability.title} className="bg-background">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {capability.icon}
                    <CardTitle className="font-headline text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Philosophy</h2>
                        <p className="text-xl font-medium text-primary">
                            We think in systems, not posts.
                        </p>
                        <p className="text-muted-foreground">
                            Random acts of content lead to random results. Our approach is disciplined, strategic, and designed for compounding returns on attention.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {philosophyPoints.map((text) => (
                            <div key={text} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" />
                                <p className="text-lg font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Where We Play</h2>
                <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                    We are experts at building native influence on the platforms that matter.
                </p>
                <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-6 text-muted-foreground">
                    {platforms.map((platform) => (
                        <div key={platform.name} className="flex items-center gap-2 text-lg font-medium">
                            {platform.icon}
                            <span>{platform.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl">
                <div>
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">Who This Is For</h2>
                     <p className="mt-4 text-muted-foreground">We partner with those who see attention as a long-term asset.</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    {whoFor.map((item) => (
                        <Card key={item} className="p-6 flex items-start gap-4">
                            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                            <p className="font-medium">{item}</p>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 p-6 bg-card rounded-lg">
                    <p className="font-bold text-lg">If you want someone to "just post for you," this isn't it.</p>
                    <p className="text-lg text-primary font-semibold">If you want to build a content engine that drives your brand forward, you're in the right place.</p>
                </div>
            </div>
        </section>
        
        {/* Part of Neup Group */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container text-center max-w-3xl mx-auto">
                <NeupLogo className="h-12 w-12 text-primary mx-auto"/>
                <h2 className="font-headline text-3xl font-bold mt-4">Part of Neup Group</h2>
                <p className="text-muted-foreground mt-2">Neup.Socials is the distribution engine for Neup Group's internal ventures and select partners, ensuring our ideas reach the audiences they are built for.</p>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Ready to build attention that compounds?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Start a conversation and let's design your distribution engine.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="mailto:socials@neup.group">
                  Build Your Distribution Engine
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
