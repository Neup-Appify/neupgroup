
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Users, Wallet, UserPlus, TrendingUp, BarChart, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.HR | Simplify HR, Empower Your Team',
  description: 'Manage employees, payroll, recruitment, and performance—all in one place.',
};

const features = [
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Employee Management",
        description: "Track profiles, roles, and attendance seamlessly."
    },
    {
        icon: <Wallet className="h-6 w-6 text-primary" />,
        title: "Payroll & Benefits",
        description: "Automate salaries, bonuses, and benefits with precision."
    },
    {
        icon: <UserPlus className="h-6 w-6 text-primary" />,
        title: "Recruitment & Onboarding",
        description: "Hire top talent and streamline onboarding."
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        title: "Performance Tracking",
        description: "Monitor goals, KPIs, and employee growth."
    },
    {
        icon: <BarChart className="h-6 w-6 text-primary" />,
        title: "Analytics & Reports",
        description: "Get actionable insights for smarter HR decisions."
    }
];

const howItWorksSteps = [
    {
      number: 1,
      title: "Add Your Team",
      description: "Import employee data and set roles quickly."
    },
    {
      number: 2,
      title: "Manage & Automate",
      description: "Track attendance, payroll, and performance effortlessly."
    },
    {
      number: 3,
      title: "Analyze & Optimize",
      description: "Get insights and reports to grow your workforce effectively."
    }
];

const dashboardImages = [
  { image: "https://picsum.photos/seed/hr-dash1/600/400", alt: "HR Dashboard" },
  { image: "https://picsum.photos/seed/hr-dash2/600/400", alt: "HR Analytics" },
  { image: "https://picsum.photos/seed/hr-dash3/600/400", alt: "HR Payroll" }
];

const testimonials = [
  {
    quote: "Neup.HR transformed how we manage our employees. The automation saved hours of work every week!",
    author: "Anil, Startup Founder",
    image: "https://picsum.photos/seed/anil-hr/100/100"
  },
  {
    quote: "Recruitment and payroll are now stress-free and accurate. Highly recommended.",
    author: "Sita, HR Manager",
    image: "https://picsum.photos/seed/sita-hr/100/100"
  }
];

export default function HRPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      Simplify HR, Empower Your Team.
                    </h1>
                    <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                      Neup.HR helps you manage employees, payroll, recruitment, and performance—all in one place.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg">Get Started Free</Button>
                      <Button size="lg" variant="outline">Request a Demo</Button>
                    </div>
                     <p className="text-sm mt-6 text-muted-foreground flex items-center gap-2"><CheckCircle className="h-4 w-4 text-chart-2"/> Secure, compliant, and tailored for Nepali businesses.</p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-hr-hero/600/500" 
                        alt="Neup.HR dashboard"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="HR dashboard analytics"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Everything You Need to Manage Your Workforce</h2>
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
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Streamline Your HR in 3 Steps</h2>
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
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">See Neup.HR in Action</h2>
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
              Empower Your HR, Empower Your Team
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join businesses that trust Neup.HR to simplify HR processes and improve employee experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Get Started Free</Button>
              <Button size="lg" variant="outline">Book a Demo</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
