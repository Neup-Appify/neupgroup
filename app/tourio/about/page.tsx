import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Search, Map, ShoppingBag, Bot, ArrowRight, Building2, TrendingUp, BarChart, Rocket, Plane } from "lucide-react";
import Link from "next/link";
import { NeupLogo } from "@/components/NeupLogo";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Neup.Tourio',
};

const whatYouCanDo = [
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "Find Great Food",
    description: "Discover the best local eateries and culinary gems near you.",
  },
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: "Discover Local Experiences",
    description: "Uncover unique activities, workshops, and hidden spots.",
  },
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "Book Travel Packages",
    description: "Effortlessly plan and book your next trip with curated packages.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Get Smart Recommendations",
    description: "AI-powered suggestions tailored to your tastes and interests.",
  },
];

const differentiators = [
  "One platform for food, experiences, and travel",
  "Local-first recommendations from verified businesses",
  "Smart discovery, not endless searching",
  "Built for modern travelers and discerning locals",
];

const howItWorks = [
    { name: "Explore", description: "Search by interest or location." },
    { name: "Discover", description: "Get smart recommendations." },
    { name: "Compare", description: "Evaluate your options easily." },
    { name: "Book or Visit", description: "Finalize your plan effortlessly." },
];

const forBusinessFeatures = [
    { icon: <TrendingUp className="h-6 w-6 text-primary" />, title: "Reach Ready-to-Buy Customers" },
    { icon: <BarChart className="h-6 w-6 text-primary" />, title: "Manage Listings Easily" },
    { icon: <Rocket className="h-6 w-6 text-primary" />, title: "Get Insights & Analytics" },
    { icon: <Building2 className="h-6 w-6 text-primary" />, title: "Advertise Smartly" },
];

const visionFeatures = [
    "Personalized AI travel assistant",
    "Ride & logistics integration",
    "Smart itinerary generation",
    "Loyalty & rewards program",
];

export default function TourioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 lg:py-40 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-2xl">
                        Discover Food, Experiences & Travel — All in One Place
                    </h1>
                    <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
                        Neup.Tourio helps you find the best food, local experiences, and travel packages with smart recommendations and easy booking.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button size="lg" asChild>
                            <Link href="#explore">
                                Explore Near You
                                <Search className="ml-2" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="ghost" asChild>
                            <Link href="#for-business">
                                List Your Business
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
                 <div className="flex justify-center">
                        <Image 
                            src="https://picsum.photos/seed/tourio-hero/600/500" 
                            alt="Discover local experiences" 
                            width={600}
                            height={500}
                            className="rounded-lg shadow-xl"
                            data-ai-hint="travel discovery map"
                        />
                    </div>
            </div>
          </div>
        </section>
        
        {/* What You Can Do */}
        <section id="explore" className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">What You Can Do With Neup.Tourio</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                Your one-stop platform for discovering and booking the best local experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatYouCanDo.map((item) => (
                <Card key={item.title} className="text-center bg-card">
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

        {/* Why Tourio is Better */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Neup.Tourio is Better</h2>
                        <p className="mt-4 text-lg text-muted-foreground">We built Neup.Tourio to be a smarter, faster, and more integrated discovery engine.</p>
                    </div>
                    <div className="space-y-4">
                        {differentiators.map((text) => (
                            <div key={text} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" />
                                <p className="text-lg font-medium">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28">
            <div className="container max-w-5xl">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">A Simple Path to Discovery</h2>
                     <p className="mt-4 text-muted-foreground">Zero complexity, maximum enjoyment.</p>
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

        {/* For Businesses */}
        <section id="for-business" className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="flex justify-center">
                         <Image 
                            src="https://picsum.photos/seed/tourio-business/600/500" 
                            alt="Business growth dashboard" 
                            width={600}
                            height={500}
                            className="rounded-lg shadow-xl"
                            data-ai-hint="analytics dashboard chart"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Grow Your Business with Neup.Tourio</h2>
                        <p className="text-lg text-muted-foreground">
                            Connect with a ready-to-buy audience of locals and travelers. Neup.Tourio is your new, most effective sales channel.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                           {forBusinessFeatures.map(feature => (
                               <div key={feature.title} className="flex items-center gap-3">
                                   {feature.icon}
                                   <p className="font-medium">{feature.title}</p>
                               </div>
                           ))}
                        </div>
                        <div className="pt-4">
                            <Button size="lg" asChild>
                                <Link href="mailto:partner@neup.group">
                                    List Your Business on Neup.Tourio
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Vision Teaser */}
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl text-center">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold">The Future is Intelligent</h2>
                 <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Neup.Tourio is more than a platform; it's a growing ecosystem. We're building the future of local discovery and travel planning.
                </p>
                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                    {visionFeatures.map((item) => (
                        <Card key={item} className="p-4 flex items-center gap-4 text-left">
                            <Bot className="h-6 w-6 text-primary flex-shrink-0"/>
                            <p className="font-medium">{item}</p>
                        </Card>
                    ))}
                </div>
                 <p className="mt-8 text-muted-foreground">
                    ...and much more.
                </p>
            </div>
        </section>

        {/* Trust & Momentum */}
        <section className="py-12 bg-card">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
                    <NeupLogo className="h-10 w-10 text-primary"/>
                    <div>
                        <p className="font-bold">Built by Neup Group</p>
                        <p className="text-muted-foreground text-sm">Designed for Nepal, ready for the world.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Ready to Explore Smarter?
            </h2>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="#explore">
                  Start Exploring
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

    
