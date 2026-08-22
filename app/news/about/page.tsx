import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Rss, Layers, Globe, Cpu, BookOpen, Video, Mic } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.News | Stay Informed. Stay Ahead.',
  description: 'Neup.News delivers the latest stories, insights, and updates—fast, reliable, and in one place.',
};

const features = [
    {
        icon: <Rss className="h-6 w-6 text-primary" />,
        title: "Breaking News Alerts",
        description: "Stay updated with live notifications on the most important stories."
    },
    {
        icon: <Layers className="h-6 w-6 text-primary" />,
        title: "Diverse Categories",
        description: "Politics, business, technology, entertainment, and more."
    },
    {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: "Local & Global Coverage",
        description: "News from Nepal and around the world, all in one place."
    },
    {
        icon: <Cpu className="h-6 w-6 text-primary" />,
        title: "Curated Insights",
        description: "Smart recommendations based on your interests and reading habits."
    },
    {
        icon: <BookOpen className="h-6 w-6 text-primary" />,
        title: "Multimedia Content",
        description: "Read, watch, or listen—news in your preferred format."
    }
];

const howItWorksSteps = [
    {
      number: 1,
      title: "Browse & Discover",
      description: "Explore trending stories and topics you care about."
    },
    {
      number: 2,
      title: "Customize Your Feed",
      description: "Follow categories, tags, or authors for personalized updates."
    },
    {
      number: 3,
      title: "Engage & Share",
      description: "Comment, share, and stay connected with the community."
    }
];

const benefits = [
    "Fast, accurate, and reliable reporting",
    "Personalized feed for every reader",
    "Multimedia content for varied engagement",
    "Connect with trending stories in real-time"
];

const testimonials = [
  {
    quote: "Neup.News keeps me informed with accurate updates every day. It's my go-to source.",
    author: "Anil, Entrepreneur",
    image: "https://picsum.photos/seed/anil-news/100/100"
  },
  {
    quote: "I love the personalized feed and how I can switch between articles, videos, and podcasts.",
    author: "Sita, Student",
    image: "https://picsum.photos/seed/sita-news/100/100"
  }
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      Stay Informed. Stay Ahead.
                    </h1>
                    <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                      Neup.News delivers the latest stories, insights, and updates—fast, reliable, and in one place.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg">Read the Latest News</Button>
                      <Button size="lg" variant="outline">Subscribe Now</Button>
                    </div>
                     <p className="text-sm mt-6 text-muted-foreground">Trusted news from verified sources, curated for you.</p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-news-hero/600/500" 
                        alt="Modern news feed layout"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="news feed interface"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Everything You Need in One News Platform</h2>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Follow News, Your Way</h2>
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
                         <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Neup.News?</h2>
                         <p className="mt-4 text-muted-foreground text-lg">We provide a modern, personalized, and trustworthy news experience.</p>
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
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Readers Love Neup.News</h2>
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
              Stay Updated. Join Our Community Today.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Subscribe or start reading now to never miss an important story.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Read the Latest News</Button>
              <Button size="lg" variant="outline">Subscribe Now</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
