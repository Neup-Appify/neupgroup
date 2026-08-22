import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Palette, Figma, Layers, Lightbulb, PenTool, ArrowRight, Dribbble, Clapperboard } from "lucide-react";
import Link from "next/link";
import { NeupLogo } from "@/components/NeupLogo";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Neup.Design',
};

const services = [
  {
    icon: <Palette className="h-6 w-6 text-primary" />,
    title: "Brand Identity & Systems",
    description: "Crafting memorable brands through logos, color palettes, and comprehensive design systems that ensure consistency.",
  },
  {
    icon: <Figma className="h-6 w-6 text-primary" />,
    title: "UI/UX & Product Design",
    description: "Designing intuitive, user-centered interfaces for web and mobile applications that are a joy to use.",
  },
  {
    icon: <Clapperboard className="h-6 w-6 text-primary" />,
    title: "Motion & Interaction Design",
    description: "Bringing interfaces to life with meaningful animations and micro-interactions that enhance user experience.",
  },
];

const principles = [
  "Clarity over complexity",
  "Function drives form",
  "Systems, not just visuals",
  "Business goals guide design decisions",
];

const whoFor = [
    "Ambitious startups needing a strong visual foundation.",
    "Established companies aiming to refresh their brand.",
    "Product teams focused on world-class user experience.",
    "Ventures that see design as a competitive advantage."
];


export default function DesignPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 lg:py-40 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
                      Design That Creates Value.
                    </h1>
                    <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
                      Neup.Design is a product and brand design studio. We partner with ambitious companies to build meaningful brands and user-centric products.
                    </p>
                    <div className="mt-8 flex justify-start gap-4">
                      <Button size="lg" asChild>
                        <Link href="mailto:design@neup.group">Start a Project</Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="#services">Our Services</Link>
                      </Button>
                    </div>
                </div>
                 <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-design/600/500" 
                        alt="Design process visualization" 
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="design user interface"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                We offer end-to-end design solutions to bring your vision to life.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service) => (
                <Card key={service.title} className="bg-card">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {service.icon}
                    <CardTitle className="font-headline text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Design Philosophy</h2>
                        <p className="text-xl font-medium text-primary">
                            We believe great design is invisible.
                        </p>
                        <p className="text-muted-foreground">
                            It's not about trends; it's about solving problems. Our approach is rooted in first-principles thinking, ensuring that every design decision has a clear purpose and drives tangible results for your business.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {principles.map((text) => (
                            <div key={text} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" />
                                <p className="text-lg font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        {/* Who This Is For */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl">
                <div>
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">Who We Partner With</h2>
                     <p className="mt-4 text-muted-foreground">We thrive on collaboration with teams that value design as a strategic asset.</p>
                </div>
                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    {whoFor.map((item) => (
                        <Card key={item} className="p-6 flex items-start gap-4">
                            <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                            <p className="font-medium">{item}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Part of Neup Group */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <NeupLogo className="h-12 w-12 text-primary"/>
                        <h2 className="font-headline text-3xl font-bold">Part of Neup Group</h2>
                        <p className="text-muted-foreground">As a venture within Neup Group, we have a unique perspective that blends creative excellence with a founder's mindset and business acumen.</p>
                        <p className="font-semibold">This means we design for market fit, scalability, and long-term success.</p>
                    </div>
                    <div className="flex justify-center">
                        <Image 
                            src="https://picsum.photos/seed/neup-ecosystem/500/400" 
                            alt="Neup Group Ecosystem" 
                            width={500}
                            height={400}
                            className="rounded-lg shadow-xl" 
                            data-ai-hint="digital ecosystem" />
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Let's work together to create something exceptional.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="mailto:design@neup.group">
                  Start a Conversation
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
