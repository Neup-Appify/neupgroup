import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight, BarChart, LayoutDashboard, FileText, GitBranch, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.Analytics | Turn Data Into Smart Decisions',
  description: 'Neup.Analytics provides real-time insights and actionable reports to grow your business efficiently.',
};

const features = [
    {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "Real-Time Analytics",
        description: "Monitor performance instantly and make faster decisions."
    },
    {
        icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
        title: "Custom Dashboards",
        description: "Visualize data the way your business needs it."
    },
    {
        icon: <FileText className="h-6 w-6 text-primary" />,
        title: "Reports & Forecasting",
        description: "Generate actionable reports and predict future trends."
    },
    {
        icon: <GitBranch className="h-6 w-6 text-primary" />,
        title: "Integration-Ready",
        description: "Connect seamlessly with Neup apps and other platforms."
    },
    {
        icon: <Cpu className="h-6 w-6 text-primary" />,
        title: "AI-Powered Insights",
        description: "Leverage AI to identify patterns and opportunities."
    }
];

const howItWorksSteps = [
    {
      number: 1,
      title: "Connect Your Data",
      description: "Integrate Neup apps or external sources."
    },
    {
      number: 2,
      title: "Analyze & Visualize",
      description: "Use dashboards, charts, and AI insights to understand trends."
    },
    {
      number: 3,
      title: "Act & Optimize",
      description: "Make informed decisions and track results in real-time."
    }
];

const benefits = [
    "Make data-driven decisions confidently",
    "Save time with automated reporting",
    "Identify growth opportunities quickly",
    "Integrates seamlessly with Neup ecosystem for full visibility"
];

const testimonials = [
  {
    quote: "Neup.Analytics transformed our decision-making—we see everything in real-time!",
    author: "Raj, SME Owner",
    image: "https://picsum.photos/seed/raj-analytics/100/100"
  },
  {
    quote: "The AI insights are a game-changer for spotting growth opportunities.",
    author: "Sita, Startup Founder",
    image: "https://picsum.photos/seed/sita-analytics/100/100"
  }
];

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      Turn Data Into Smart Decisions.
                    </h1>
                    <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                      Neup.Analytics provides real-time insights and actionable reports to grow your business efficiently.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg">Get Started Free</Button>
                      <Button size="lg" variant="outline">Request a Demo</Button>
                    </div>
                     <p className="text-sm mt-6 text-muted-foreground">Accurate, real-time, and easy-to-understand analytics for every business.</p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-analytics-hero/600/500" 
                        alt="Analytics dashboard showing charts"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="analytics dashboard chart"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Insights That Drive Results</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature) => (
                        <Card key={feature.title}>
                            <CardHeader className="flex flex-row items-center gap-4">
                                {feature.icon}
                                <CardTitle className="font-headline text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. How It Works Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">From Data to Decisions in 3 Steps</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center gap-4">
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl mb-4">{step.number}</div>
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                   {index < howItWorksSteps.length - 1 && (
                      <div className="absolute top-7 left-1/2 w-full border-t-2 border-dashed border-border hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Benefits Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Neup.Analytics?</h2>
                         <p className="mt-4 text-muted-foreground text-lg">We empower you with clear, automated, and integrated insights to drive confident decisions.</p>
                    </div>
                    <div className="space-y-4">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-4">
                          <CheckCircle className="h-5 w-5 text-chart-2 mt-1 flex-shrink-0" />
                          <p className="font-medium">{benefit}</p>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 5. Testimonials Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Businesses Trust Neup.Analytics</h2>
                </div>
                 <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2">
                                <Card className="bg-background">
                                    <CardContent className="p-8 text-center space-y-4">
                                        <p className="text-lg italic">"{testimonial.quote}"</p>
                                        <div className="flex items-center justify-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={testimonial.image} alt={testimonial.author} />
                                                <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <p className="font-semibold">{testimonial.author}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4 hidden sm:flex" />
                    <CarouselNext className="-right-4 hidden sm:flex" />
                </Carousel>
            </div>
        </section>

        {/* 6. Call-to-Action Section */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Make Smarter Decisions Today
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join businesses that rely on Neup.Analytics to unlock insights and drive growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Get Started Free</Button>
              <Button size="lg" variant="outline">Request a Demo</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
