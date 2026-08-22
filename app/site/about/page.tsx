import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Zap, Palette, Smartphone, Rocket, Shield, ArrowRight, Star, MousePointerClick } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.Site | Build Stunning Websites in Minutes',
  description: 'Launch your business, portfolio, or project online with Neup.Site’s powerful, easy-to-use website builder.',
};

const benefits = [
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: "Fast & Easy",
        description: "Launch your website in minutes with our intuitive drag-and-drop editor."
    },
    {
        icon: <Palette className="h-6 w-6 text-primary" />,
        title: "Customizable Templates",
        description: "Choose from professional templates and make them uniquely your own."
    },
    {
        icon: <Smartphone className="h-6 w-6 text-primary" />,
        title: "Responsive Design",
        description: "Your site will look perfect on desktop, tablet, and mobile devices."
    },
    {
        icon: <Rocket className="h-6 w-6 text-primary" />,
        title: "SEO & Marketing Ready",
        description: "Built-in tools to help your site rank and grow your online audience."
    },
     {
        icon: <Shield className="h-6 w-6 text-primary" />,
        title: "Secure & Reliable",
        description: "Host your website with confidence, backed by top-tier performance."
    },
     {
        icon: <MousePointerClick className="h-6 w-6 text-primary" />,
        title: "Drag-and-Drop Editor",
        description: "No code needed. Visually build and edit your entire website."
    }
];

const howItWorksSteps = [
    {
      number: 1,
      title: "Pick a Template",
      description: "Select a professional design that fits your brand and industry."
    },
    {
      number: 2,
      title: "Customize Your Site",
      description: "Drag, drop, and edit content, colors, and fonts your way."
    },
    {
      number: 3,
      title: "Publish & Grow",
      description: "Go live instantly with a single click and start attracting visitors."
    }
];

const templates = [
  { image: "https://picsum.photos/seed/template1/400/300", name: "Business Pro", category: "Business" },
  { image: "https://picsum.photos/seed/template2/400/300", name: "Creative Portfolio", category: "Portfolio" },
  { image: "https://picsum.photos/seed/template3/400/300", name: "Modern Store", category: "E-commerce" },
  { image: "https://picsum.photos/seed/template4/400/300", name: "The Blogger", category: "Blog" }
];

const testimonials = [
  {
    quote: "Neup.Site helped me launch my business in a single day. The templates are stunning and it's incredibly easy to use!",
    author: "Sita, Entrepreneur",
    image: "https://picsum.photos/seed/sita-testimonial-site/100/100"
  },
  {
    quote: "Finally, a website builder that’s both simple and powerful. I could customize everything without writing a line of code. Love it.",
    author: "Raj, Freelancer",
    image: "https://picsum.photos/seed/raj-testimonial-site/100/100"
  }
];


export default function SitePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      Build Stunning Websites in Minutes—No Coding Needed.
                    </h1>
                    <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                      Launch your business, portfolio, or project online with Neup.Site’s powerful, easy-to-use website builder.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg">Start Building Your Site</Button>
                      <Button size="lg" variant="outline">Explore Templates</Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-site-hero/600/500" 
                        alt="Website builder interface"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="website builder interface"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* 2. Key Benefits Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Neup.Site?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {benefits.map((benefit) => (
                        <Card key={benefit.title}>
                            <CardHeader className="flex flex-row items-center gap-4">
                                {benefit.icon}
                                <CardTitle className="font-headline text-lg">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{benefit.description}</p>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Create Your Website in 3 Easy Steps</h2>
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

        {/* 4. Featured Templates Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Websites Designed for Every Purpose</h2>
                    <p className="max-w-xl mx-auto mt-2 text-muted-foreground">Explore our curated collection of professional templates.</p>
                </div>
                 <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                        {templates.map((template, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                            <Card className="group overflow-hidden">
                               <Image src={template.image} alt={template.name} width={400} height={300} className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"/>
                               <CardContent className="p-4">
                                   <h3 className="font-semibold">{template.name}</h3>
                                   <p className="text-sm text-muted-foreground">{template.category}</p>
                               </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
                <div className="text-center mt-12">
                    <Button variant="outline">Explore All Templates</Button>
                </div>
            </div>
        </section>

        {/* 5. Testimonials Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Trusted by Entrepreneurs & Creators</h2>
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
              Ready to Build Your Website?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join thousands of creators who trust Neup.Site to launch their online presence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Start Building <ArrowRight className="ml-2 h-4 w-4"/></Button>
              <Button size="lg" variant="outline">See Templates</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
