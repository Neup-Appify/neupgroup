
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, BarChart, ShieldCheck, Settings, ArrowRight, Star, DollarSign, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.Ledger | Smart, Secure, and Transparent Accounting',
  description: 'Track every transaction, manage finances, and gain insights—effortlessly with Neup.Ledger.',
};

const features = [
    {
        icon: <BookOpen className="h-6 w-6 text-primary" />,
        title: "Real-Time Ledger",
        description: "Every transaction automatically logged and updated."
    },
    {
        icon: <DollarSign className="h-6 w-6 text-primary" />,
        title: "Expense Tracking",
        description: "Monitor costs, profits, and budgets instantly."
    },
    {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "Analytics & Insights",
        description: "Smart dashboards help you make informed financial decisions."
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Secure & Reliable",
        description: "Encrypted data storage and robust security protocols."
    },
    {
        icon: <Layers className="h-6 w-6 text-primary" />,
        title: "Multi-Platform Access",
        description: "Access your ledger anytime, anywhere—desktop, mobile, or tablet."
    }
];

const howItWorksSteps = [
    {
      number: 1,
      title: "Connect Your Accounts",
      description: "Link bank accounts, payment gateways, or sales channels."
    },
    {
      number: 2,
      title: "Track & Record Transactions",
      description: "Automatically log and categorize every transaction."
    },
    {
      number: 3,
      title: "Analyze & Optimize",
      description: "Get insights, reports, and alerts to manage finances efficiently."
    }
];

const dashboardImages = [
  { image: "https://picsum.photos/seed/ledger1/600/400", alt: "Ledger Dashboard" },
  { image: "https://picsum.photos/seed/ledger2/600/400", alt: "Ledger Analytics" },
  { image: "https://picsum.photos/seed/ledger3/600/400", alt: "Ledger Reports" }
];

const testimonials = [
  {
    quote: "Neup.Ledger streamlined our accounts and gave us real-time insights—game changer!",
    author: "Raj, SME Owner",
    image: "https://picsum.photos/seed/raj-testimonial-ledger/100/100"
  },
  {
    quote: "Finally, a simple, secure ledger that helps us track every transaction.",
    author: "Sita, Startup Founder",
    image: "https://picsum.photos/seed/sita-testimonial-ledger/100/100"
  }
];

export default function LedgerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      Smart, Secure, and Transparent Accounting for Your Business.
                    </h1>
                    <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                      Track every transaction, manage finances, and gain insights—effortlessly with Neup.Ledger.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg">Get Started for Free</Button>
                      <Button size="lg" variant="outline">See It in Action</Button>
                    </div>
                     <p className="text-sm mt-6 text-muted-foreground flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-chart-2"/> Secure, encrypted, and compliant with industry standards.</p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-ledger-hero/600/500" 
                        alt="Neup.Ledger dashboard"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="accounting dashboard analytics"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">All-in-One Financial Management</h2>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Simplify Your Accounting in 3 Steps</h2>
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

        {/* 4. Dashboard Showcase Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">See Neup.Ledger in Action</h2>
                     <p className="max-w-xl mx-auto mt-2 text-muted-foreground">Clarity and control at your fingertips.</p>
                </div>
                 <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                        {dashboardImages.map((item, index) => (
                          <CarouselItem key={index}>
                            <Image src={item.image} alt={item.alt} width={1200} height={800} className="w-full object-cover aspect-video rounded-lg shadow-lg border"/>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex -left-12" />
                    <CarouselNext className="hidden sm:flex -right-12" />
                </Carousel>
            </div>
        </section>

        {/* 5. Testimonials Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Trusted by Businesses Across Nepal</h2>
                </div>
                 <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
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
              Take Control of Your Finances Today
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join businesses that trust Neup.Ledger to simplify their accounting and reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Get Started for Free</Button>
              <Button size="lg" variant="outline">Book a Demo</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

    