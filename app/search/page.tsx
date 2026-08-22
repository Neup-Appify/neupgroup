
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Search, Shield, ArrowRight, Bot, Filter, Globe, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
  title: 'Neup.Search | Find What Matters, Instantly',
  description: 'Neup.Search delivers fast, accurate, and secure search results for everything you need—web, products, or services.',
};

const features = [
    {
        icon: <Bot className="h-6 w-6 text-primary" />,
        title: "Instant Results",
        description: "Get relevant answers instantly with our smart search algorithms."
    },
    {
        icon: <Shield className="h-6 w-6 text-primary" />,
        title: "Secure & Private",
        description: "Your searches are encrypted and never sold. Your privacy is our priority."
    },
    {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: "Multi-Source Search",
        description: "Find web pages, products, services, and content all in one place."
    },
    {
        icon: <Filter className="h-6 w-6 text-primary" />,
        title: "Advanced Filters",
        description: "Refine results by location, category, date, or type with powerful tools."
    },
    {
        icon: <Bot className="h-6 w-6 text-primary" />,
        title: "AI-Powered Suggestions",
        description: "Get smart recommendations and related searches to find exactly what you need."
    },
];

const howItWorksSteps = [
    {
      number: 1,
      title: "Enter Your Query",
      description: "Type what you’re looking for in the Neup.Search bar."
    },
    {
      number: 2,
      title: "Filter & Refine",
      description: "Use smart filters and AI suggestions to find the perfect results."
    },
    {
      number: 3,
      title: "Discover & Act",
      description: "Get instant access to websites, products, and resources."
    }
];

const uniqueBenefits = [
    { icon: <CheckCircle className="h-5 w-5 text-chart-2" />, text: "Faster and more accurate than generic search engines" },
    { icon: <CheckCircle className="h-5 w-5 text-chart-2" />, text: "Privacy-focused: your data stays yours" },
    { icon: <CheckCircle className="h-5 w-5 text-chart-2" />, text: "Tailored for Nepali users: localized results, businesses, and services" },
    { icon: <CheckCircle className="h-5 w-5 text-chart-2" />, text: "Integrates with Neup.Group apps: find properties, products, or services instantly" }
];


const testimonials = [
  {
    quote: "I found what I needed in seconds—Neup.Search is fast and reliable!",
    author: "Anil, Business Owner",
    image: "https://picsum.photos/seed/anil-search/100/100"
  },
  {
    quote: "Finally, a search engine that respects my privacy and gives local results.",
    author: "Sita, Freelancer",
    image: "https://picsum.photos/seed/sita-search/100/100"
  }
];

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative py-20 md:py-32 bg-card">
          <div className="container relative z-10">
             <div className="max-w-3xl text-center mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Find What Matters, Instantly.
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
                  Neup.Search delivers fast, accurate, and secure search results for everything you need—web, products, or services.
                </p>
                <div className="mt-8 max-w-lg mx-auto">
                    <div className="flex gap-2">
                        <Input placeholder="Search the web, products, services..." className="h-12 text-base" />
                        <Button size="lg" className="h-12"><Search className="mr-2 h-5 w-5"/> Search</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Fast, secure, and private—your search, your control.</p>
                </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Powerful Search, Smarter Results</h2>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Search Smarter in 3 Steps</h2>
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

        {/* 4. Unique Benefits Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Neup.Search?</h2>
                         <p className="mt-4 text-muted-foreground text-lg">We're building a search experience that is faster, more private, and better integrated for your needs.</p>
                    </div>
                    <div className="space-y-4">
                      {uniqueBenefits.map((benefit) => (
                        <div key={benefit.text} className="flex items-start gap-4">
                          {benefit.icon}
                          <p className="font-medium">{benefit.text}</p>
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
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Users Love Neup.Search</h2>
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
              Start Searching Smarter Today
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join thousands of users who rely on Neup.Search for accurate, fast, and secure results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Start Searching Now</Button>
              <Button size="lg" variant="outline">See How It Works</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
