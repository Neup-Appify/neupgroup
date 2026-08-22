import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShieldCheck, Zap, User, Search, MessageSquare, CreditCard, Award, Star, ArrowRight, Rss, Briefcase, Code, Pencil, Megaphone, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Neup.Works',
  description: 'Nepal’s Marketplace for Talent & Projects. Hire skilled freelancers or showcase your expertise—fast, secure, and rewarding.',
};

const howItWorksSteps = [
    {
      icon: <User className="h-6 w-6 text-primary" />,
      title: "Sign Up & Create Profile",
      description: "Showcase your skills or business needs in just a few clicks."
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Browse & Connect",
      description: "Find projects or freelancers that match your expertise or requirements."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Collaborate & Deliver",
      description: "Chat, share files, and manage projects seamlessly on the platform."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Get Paid Securely",
      description: "Receive or release payments safely, with transparent tracking."
    }
];

const features = [
    {
        icon: <CheckCircle className="h-6 w-6 text-primary" />,
        title: "Verified Talent & Clients",
        description: "Every freelancer and client is verified for a trusted experience."
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Secure Payments",
        description: "Transparent, safe transactions with dispute resolution built-in."
    },
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: "AI-Powered Matching",
        description: "Get recommended projects or freelancers tailored to your skills and needs."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        title: "Portfolio & Skill Showcase",
        description: "Showcase your work and let clients find you effortlessly."
    },
     {
        icon: <Rss className="h-6 w-6 text-primary" />,
        title: "Multi-Category Opportunities",
        description: "IT, Design, Content, Marketing, and more."
    }
];

const featuredFreelancers = [
  { name: "Sita K.", skill: "UI/UX Designer", rating: 5, image: "https://picsum.photos/seed/sita/100/100" },
  { name: "Hari P.", skill: "Full-Stack Developer", rating: 5, image: "https://picsum.photos/seed/hari/100/100" },
  { name: "Gita S.", skill: "Content Writer", rating: 4, image: "https://picsum.photos/seed/gita/100/100" },
  { name: "Ram B.", skill: "Marketing Specialist", rating: 5, image: "https://picsum.photos/seed/ram/100/100" },
  { name: "Anju T.", skill: "Illustrator", rating: 5, image: "https://picsum.photos/seed/anju/100/100" }
];

const trendingProjects = [
    { title: "E-commerce Website Re-design", category: "Design" },
    { title: "Mobile App for Local Delivery", category: "IT" },
    { title: "Social Media Content for a Cafe", category: "Marketing" },
    { title: "Technical Blog Post Series", category: "Content" }
];

const testimonials = [
  {
    quote: "I found my dream client in just 3 days on Neup.Works! Highly recommended.",
    author: "Sita, Freelancer",
    image: "https://picsum.photos/seed/sita-testimonial/100/100"
  },
  {
    quote: "Neup.Works made hiring a breeze. Secure payments and verified talent saved us time.",
    author: "Raj, Client",
    image: "https://picsum.photos/seed/raj-testimonial/100/100"
  }
];

const trustPoints = [
    { icon: <CheckCircle className="h-6 w-6 text-primary"/>, text: "Focused on Nepali talent & businesses" },
    { icon: <Users className="h-6 w-6 text-primary"/>, text: "Community & Networking Opportunities" },
    { icon: <ShieldCheck className="h-6 w-6 text-primary"/>, text: "Safe & Transparent Payments" },
    { icon: <MessageSquare className="h-6 w-6 text-primary"/>, text: "Dedicated support & guidance" },
];

export default function WorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                      Nepal’s Marketplace for Talent & Projects.
                    </h1>
                    <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                      Hire skilled freelancers or showcase your expertise—fast, secure, and rewarding.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Button size="lg">Start Freelancing</Button>
                      <Button size="lg" variant="secondary">Hire Talent</Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-works-hero/600/500" 
                        alt="Nepali freelancers working remotely"
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="freelancers working collaboration"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* 2. How It Works Section */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Get Started in 4 Simple Steps</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-x-6 gap-y-12">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">{step.icon}</div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < howItWorksSteps.length - 1 && (
                      <div className="absolute top-8 left-1/2 w-full border-t-2 border-dashed border-border hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
                <Button size="lg" variant="outline">Sign Up Now & Start Working</Button>
            </div>
          </div>
        </section>

        {/* 3. Features Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Neup.Works?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

        {/* 4. Featured Freelancers / Projects Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet Our Top Talent & Projects</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-center">Top Freelancers</h3>
                        <Carousel opts={{ loop: true }} className="w-full">
                          <CarouselContent>
                            {featuredFreelancers.map((freelancer) => (
                              <CarouselItem key={freelancer.name} className="md:basis-1/2 lg:basis-1/3">
                                <Card className="p-4">
                                  <div className="flex flex-col items-center text-center gap-3">
                                      <Avatar className="h-16 w-16">
                                          <AvatarImage src={freelancer.image} alt={freelancer.name} />
                                          <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                                      </Avatar>
                                      <div className="space-y-1">
                                          <h4 className="font-semibold">{freelancer.name}</h4>
                                          <p className="text-sm text-primary">{freelancer.skill}</p>
                                          <div className="flex items-center justify-center">
                                            {[...Array(freelancer.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>)}
                                            {[...Array(5 - freelancer.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-muted-foreground"/>)}
                                          </div>
                                      </div>
                                  </div>
                                </Card>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="hidden sm:flex" />
                          <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-center">Trending Projects</h3>
                         <div className="space-y-4">
                            {trendingProjects.map(project => (
                                <Card key={project.title}>
                                    <CardContent className="p-4 flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">{project.title}</p>
                                            <p className="text-sm text-muted-foreground">{project.category}</p>
                                        </div>
                                        <Button variant="ghost" size="sm">View <ArrowRight className="ml-2 h-4 w-4"/></Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 5. Testimonials Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Success Stories from Our Community</h2>
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
              Join Nepal’s Fastest-Growing Freelance Community
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Whether you’re looking to hire or work, Neup.Works connects you with the right opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Start Freelancing</Button>
              <Button size="lg" variant="secondary">Hire Talent</Button>
            </div>
          </div>
        </section>

         {/* 7. Trust & Community Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Freelancers & Clients Love Neup.Works</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                    {trustPoints.map((point) => (
                        <div key={point.text} className="flex items-start gap-4">
                           {point.icon}
                           <p className="font-medium text-lg">{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
