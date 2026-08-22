
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Laugh, Users, Lightbulb, TrendingUp, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


export const metadata: Metadata = {
  title: 'Life at Neup Group',
  description: 'Arrive. Do your work. Have some fun. Leave. Repeat.',
};

const coreValues = [
    {
        icon: <Brain className="h-6 w-6 text-primary" />,
        title: "Deep Work",
        description: "Focus on what matters. We create an environment that respects concentration and values meaningful output.",
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Team Bonding",
        description: "Moments together create culture. We believe strong relationships lead to better collaboration and innovation.",
    },
    {
        icon: <Calendar className="h-6 w-6 text-primary" />,
        title: "Flexibility",
        description: "Your schedule, your rhythm. We trust you to manage your time and deliver results in a way that works for you.",
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        title: "Growth",
        description: "Learn, create, thrive. We are committed to continuous learning and personal development for every team member.",
    }
];

const teamMoments = [
  {
    src: "https://picsum.photos/seed/team-moment-1/600/400",
    alt: "Team brainstorming session",
    caption: "Brainstorming ideas"
  },
  {
    src: "https://picsum.photos/seed/team-moment-2/600/400",
    alt: "Team celebrating a project launch",
    caption: "Celebrating wins"
  },
  {
    src: "https://picsum.photos/seed/team-moment-3/600/400",
    alt: "Team members having a coffee break",
    caption: "Coffee break chats"
  },
  {
    src: "https://picsum.photos/seed/team-moment-4/600/400",
    alt: "Team workshop",
    caption: "Learning together"
  }
];


export default function LifeAtNeupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative py-20 md:py-32 bg-card">
           <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
           <Image
            src="https://picsum.photos/seed/life-hero/1920/1080"
            alt="Neup Group team working together"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="team collaboration office"
          />
          <div className="container relative z-10 text-center">
             <div className="max-w-3xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Life at Neup Group
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
                  Arrive. Do your work. Have some fun. Leave. Repeat.
                </p>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/careers">Join the Team</Link>
                  </Button>
                </div>
            </div>
          </div>
        </section>

        {/* 2. Philosophy Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Work Philosophy</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We give you freedom to manage your day while expecting at least two full days of focused presence. Deep work drives results, shared moments drive connection.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 font-medium"><Brain className="h-5 w-5 text-primary"/> Work</div>
                             <div className="flex items-center gap-2 font-medium"><Laugh className="h-5 w-5 text-primary"/> Fun</div>
                              <div className="flex items-center gap-2 font-medium"><Users className="h-5 w-5 text-primary"/> Bonding</div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                         <Image
                            src="https://picsum.photos/seed/philosophy-visual/500/400"
                            alt="Visual representation of work, fun, and bonding"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="work life balance"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* 3. Core Values Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Values</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {coreValues.map((value) => (
                        <Card key={value.title} className="text-center bg-background p-4">
                            <CardHeader className="items-center">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    {value.icon}
                                </div>
                                <CardTitle className="font-headline text-xl pt-2">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        {/* 4. Team Moments / Gallery */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Team Moments</h2>
                </div>
                <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
                    <CarouselContent>
                        {teamMoments.map((moment, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                               <div className="p-1">
                                 <Card className="overflow-hidden group">
                                     <Image src={moment.src} alt={moment.alt} width={600} height={400} className="w-full object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"/>
                                     <p className="text-sm font-medium p-3 bg-card">{moment.caption}</p>
                                 </Card>
                               </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex -left-4" />
                    <CarouselNext className="hidden sm:flex -right-4" />
                </Carousel>
            </div>
        </section>

        {/* 5. Call-to-Action Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Life at Neup Group isn’t just about work—it’s about thriving together.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
                Ready to join us?
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/careers">
                  Explore Careers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
