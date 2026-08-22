import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Layers, BarChart, Users, DollarSign, Briefcase, Heart, Cpu, GitBranch, ChevronsRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.Suite | All Your Business Tools, One Powerful Platform',
  description: 'Neup.Suite brings CRM, HR, Ledger, Project Management, and more together—streamline your operations and grow smarter.',
};

const whyNeupSuite = [
    {
        icon: <Layers className="h-6 w-6 text-primary" />,
        title: "Unified Platform",
        description: "Manage projects, clients, finances, and HR in one place."
    },
    {
        icon: <GitBranch className="h-6 w-6 text-primary" />,
        title: "Seamless Integration",
        description: "All Neup apps work together for complete business visibility."
    },
    {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "Data-Driven Insights",
        description: "Analytics across modules to make smarter decisions."
    },
    {
        icon: <Cpu className="h-6 w-6 text-primary" />,
        title: "Time & Cost Efficiency",
        description: "Reduce overheads, streamline processes, and increase productivity."
    },
];

const howItWorksSteps = [
    {
      number: 1,
      title: "Connect Your Modules",
      description: "Link CRM, HR, Ledger, Projects, and more in a single dashboard."
    },
    {
      number: 2,
      title: "Manage & Automate",
      description: "Track tasks, finances, employees, and clients effortlessly."
    },
    {
      number: 3,
      title: "Analyze & Grow",
      description: "Use insights across all operations to optimize and scale your business."
    }
];

const modules = [
    { name: "Neup.CRM", description: "Lead & client management", icon: <Users className="h-6 w-6 text-primary"/> },
    { name: "Neup.HR", description: "Workforce management", icon: <Users className="h-6 w-6 text-primary"/> },
    { name: "Neup.Ledger", description: "Finance & accounting", icon: <DollarSign className="h-6 w-6 text-primary"/> },
    { name: "Neup.Works", description: "Projects & freelancer management", icon: <Briefcase className="h-6 w-6 text-primary"/> },
    { name: "Neup.Heritage", description: "Family & legacy management", icon: <Heart className="h-6 w-6 text-primary"/> },
];

const testimonials = [
  {
    quote: "Neup.Suite made managing our company effortless—we track clients, payroll, and projects in one place!",
    author: "Raj, Startup Owner",
    image: "https://picsum.photos/seed/raj-suite/100/100"
  },
  {
    quote: "Everything we need to run operations is integrated. The time and cost saved are incredible.",
    author: "Sita, SME Founder",
    image: "https://picsum.photos/seed/sita-suite/100/100"
  }
];


export default function SuitePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      All Your Business Tools, One Powerful Platform.
                    </h1>
                    <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                      Neup.Suite brings CRM, HR, Ledger, Project Management, and more together—streamline your operations and grow smarter.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg">Get Started Today</Button>
                      <Button size="lg" variant="outline">See the Suite in Action</Button>
                    </div>
                     <p className="text-sm mt-6 text-muted-foreground flex items-center gap-2"><CheckCircle className="h-4 w-4 text-chart-2"/> Trusted by Nepali businesses for seamless operations and growth.</p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-suite-hero/600/500" 
                        alt="Integrated business dashboard"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="business dashboard integration"
                    />
                </div>
            </div>
          </div>
        </section>
        
        {/* 2. Why Neup.Suite Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Neup.Suite?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {whyNeupSuite.map((item) => (
                        <Card key={item.title}>
                            <CardHeader className="flex flex-row items-center gap-4">
                                {item.icon}
                                <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Run Your Business Smarter in 3 Steps</h2>
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

        {/* 4. Modules Showcase Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Everything You Need, Integrated</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {modules.map((module) => (
                    <Card key={module.name}>
                      <CardHeader className="flex flex-row items-center gap-4">
                        {module.icon}
                        <CardTitle className="font-headline text-lg">{module.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{module.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                   <Card className="border-dashed">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <ChevronsRight className="h-6 w-6 text-muted-foreground"/>
                        <CardTitle className="font-headline text-lg text-muted-foreground">And More to Come</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>Our suite is constantly expanding to meet your needs.</CardDescription>
                      </CardContent>
                    </Card>
                </div>
                <div className="text-center mt-12">
                  <Button variant="outline">Learn More About Modules</Button>
                </div>
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
              Unify Your Business Operations Today
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join businesses that trust Neup.Suite to simplify workflows, increase productivity, and grow smarter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">Book a Demo</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
