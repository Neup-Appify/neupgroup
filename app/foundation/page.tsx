
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandHeart, BookOpen, Users, Building, ArrowRight, Heart, DollarSign, Award, BookUser } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.Foundation',
  description: 'Giving back to the community, together. A part of every transaction and profit goes directly to empowering communities, students, and industries across Nepal.',
};

const howWeGive = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Profit Sharing",
      description: "20% of Neup Group's annual profits are allocated to non-profits across sectors that need it most."
    },
    {
      icon: <HandHeart className="h-8 w-8 text-primary" />,
      title: "Transaction Donations",
      description: "Every buy, sell, or service transaction contributes directly to a charitable cause."
    },
    {
      icon: <BookUser className="h-8 w-8 text-primary" />,
      title: "Resource Sharing",
      description: "Platforms for students to donate books, learning resources, and support educational initiatives."
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Sector Upliftment",
      description: "We work to strengthen industries by giving back to the communities that support them."
    }
];

const impactStats = [
    { value: "रु 5M+", label: "Funds Donated" },
    { value: "1,200+", label: "Students Helped" },
    { value: "5,000+", label: "Books Distributed" },
    { value: "15+", label: "Projects Supported" }
];

const participationMethods = [
    { 
        icon: <Heart className="h-6 w-6 text-primary"/>, 
        title: "Buy or Sell with Purpose",
        description: "A portion of your purchase or sale on any Neup platform is donated automatically.",
        cta: "Explore Ventures"
    },
    { 
        icon: <BookOpen className="h-6 w-6 text-primary"/>, 
        title: "Donate Resources",
        description: "Students and citizens can donate books, tools, or educational resources through our platforms.",
        cta: "Donate Books"
    },
    { 
        icon: <Users className="h-6 w-6 text-primary"/>, 
        title: "Support Our Projects",
        description: "Join campaigns or initiatives in your sector to create direct, hands-on impact.",
        cta: "See Projects"
    }
];

const testimonials = [
  {
    quote: "Thanks to Neup.Foundation, our school library now has over 500 donated books! The students are thrilled.",
    author: "Primary School Teacher, Lalitpur",
    image: "https://picsum.photos/seed/teacher-foundation/100/100"
  },
  {
    quote: "I sold my property through Neup.Estate and it feels amazing to know that part of the process contributed to supporting underprivileged students.",
    author: "Home Seller, Kathmandu",
    image: "https://picsum.photos/seed/seller-foundation/100/100"
  }
];

export default function FoundationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative py-20 md:py-32 bg-card">
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          <Image 
            src="https://picsum.photos/seed/foundation-hero/1920/1080"
            alt="Children in a classroom in Nepal"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="community charity children"
          />
          <div className="container relative z-10">
             <div className="max-w-4xl">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Giving Back to the Community, Together.
                </h1>
                <p className="max-w-3xl mt-4 text-muted-foreground md:text-xl">
                  At Neup.Foundation, a part of every transaction and profit goes directly to empowering communities, students, and industries across Nepal.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg">Join Our Mission</Button>
                  <Button size="lg" variant="outline">Learn How We Give</Button>
                </div>
                 <div className="mt-12">
                    <div className="inline-block bg-primary/10 border border-primary/20 text-primary font-semibold px-4 py-2 rounded-lg">
                        20% of our annual profits go to non-profits every year.
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* 2. How We Give Back Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Giving Back is Built Into Everything We Do</h2>
                    <p className="max-w-2xl mx-auto mt-2 text-muted-foreground">Our model integrates social impact into the core of our business operations.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {howWeGive.map((item) => (
                        <div key={item.title} className="flex flex-col items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">{item.icon}</div>
                            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 3. Our Impact Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">See the Difference Your Support Makes</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How You Can Participate Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Every Transaction Creates Change</h2>
                    <p className="max-w-xl mx-auto mt-2 text-muted-foreground">Three simple ways you can be part of our mission.</p>
                </div>
                 <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {participationMethods.map((method) => (
                        <Card key={method.title} className="text-center p-6 flex flex-col items-center">
                            {method.icon}
                            <CardTitle className="font-headline text-xl mt-4 mb-2">{method.title}</CardTitle>
                            <CardDescription className="flex-grow">{method.description}</CardDescription>
                            <Button variant="link" className="mt-4">{method.cta} <ArrowRight className="ml-2 h-4 w-4"/></Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* 5. Testimonials Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Voices of the Community</h2>
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
              Be Part of a Movement That Gives Back
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Every transaction, every contribution, every resource matters. Join us in building a stronger, empowered Nepal.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Contribute Now</Button>
              <Button size="lg" variant="outline">Learn More About Our Impact</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
