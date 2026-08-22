import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, Users, Upload, ArrowRight, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.Heritage | Preserve Your Family Story',
  description: 'Build your family tree, connect with relatives, and safeguard your heritage with Neup.Heritage.',
};

const howItWorksSteps = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Create Your Family Tree",
      description: "Add members, upload photos, and record stories."
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: "Connect with Relatives",
      description: "Invite family members to collaborate and contribute."
    },
    {
      icon: <Upload className="h-8 w-8 text-primary" />,
      title: "Preserve & Share",
      description: "Securely save your family history and share it with generations to come."
    }
];

const features = [
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Family Tree Builder",
        description: "Intuitive, interactive, and visual tree creation."
    },
    {
        icon: <Upload className="h-6 w-6 text-primary" />,
        title: "Multimedia Memories",
        description: "Add photos, videos, documents, and stories for every member."
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Privacy & Security",
        description: "You control who sees what—family data is protected."
    },
    {
        icon: <Share2 className="h-6 w-6 text-primary" />,
        title: "Collaboration",
        description: "Invite relatives to add and edit entries."
    },
];

const stories = [
  {
    quote: "We rediscovered my great-grandmother's journal through a cousin I met on Neup.Heritage. It's priceless!",
    author: "Anjali, Biratnagar",
    image: "https://picsum.photos/seed/anjali-heritage/100/100"
  },
  {
    quote: "Building our family tree together has brought us closer, even though we live in different countries. A wonderful platform.",
    author: "Bikash, USA",
    image: "https://picsum.photos/seed/bikash-heritage/100/100"
  }
];

export default function HeritagePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative py-20 md:py-32 bg-card">
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
           <Image 
            src="https://picsum.photos/seed/heritage-hero/1920/1080"
            alt="Family tree illustration"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="family tree heritage"
          />
          <div className="container relative z-10">
             <div className="max-w-3xl text-center mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Preserve Your Family Story, One Generation at a Time.
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
                  Build your family tree, connect with relatives, and safeguard your heritage with Neup.Heritage.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Button size="lg">Start Your Family Tree</Button>
                  <Button size="lg" variant="outline">Learn How It Works</Button>
                </div>
                 <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2"><ShieldCheck className="h-4 w-4 text-chart-2"/> Your family’s history, private, secure, and preserved forever.</p>
                </div>
            </div>
          </div>
        </section>

        {/* 2. How It Works Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Preserve, Connect, Share in 3 Simple Steps</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {howItWorksSteps.map((item) => (
                        <div key={item.title} className="flex flex-col items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">{item.icon}</div>
                            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Features Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Tools to Keep Your Heritage Alive</h2>
                </div>
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-background">
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

        {/* 4. Community & Stories Section */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Stories That Connect Generations</h2>
                </div>
                 <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                        {stories.map((story, index) => (
                            <CarouselItem key={index}>
                                <Card className="bg-card">
                                    <CardContent className="p-8 text-center space-y-4">
                                        <p className="text-lg italic">"{story.quote}"</p>
                                        <div className="flex items-center justify-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={story.image} alt={story.author} />
                                                <AvatarFallback>{story.author.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <p className="font-semibold">{story.author}</p>
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

        {/* 5. Call-to-Action Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Start Preserving Your Family Legacy Today
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Create your tree, invite relatives, and safeguard your heritage for generations to come.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Start Your Family Tree <ArrowRight className="ml-2 h-4 w-4"/></Button>
              <Button size="lg" variant="outline">See Sample Trees</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
