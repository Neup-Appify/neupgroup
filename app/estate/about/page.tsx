import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Search, Users, ShieldCheck, Handshake, ArrowRight, Building, MapPin, DollarSign, Home, KeyRound } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Neup.Estate | Find Your Dream Property in Nepal',
  description: 'Buy, Sell, or Rent properties in Nepal with confidence. Trusted listings, verified agents, and smart tools at your fingertips.',
};

const howItWorksSteps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Search & Explore",
      description: "Find verified properties across Nepal in just a few clicks."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Connect with Trusted Agents",
      description: "Directly communicate with verified sellers or buyers."
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Tour & Decide",
      description: "Book visits, view virtual tours, and evaluate options easily."
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Close the Deal Securely",
      description: "Safe, transparent transactions and full guidance."
    }
];

const features = [
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Verified Listings & Agents",
        description: "Only genuine, quality properties and trusted professionals are featured on our platform."
    },
    {
        icon: <KeyRound className="h-6 w-6 text-primary" />,
        title: "Smart Search & AI Suggestions",
        description: "Our smart algorithms help you find properties that perfectly match your preferences."
    },
    {
        icon: <DollarSign className="h-6 w-6 text-primary" />,
        title: "Market Insights",
        description: "Access data on property values and neighborhood trends to make informed decisions."
    },
    {
        icon: <CheckCircle className="h-6 w-6 text-primary" />,
        title: "Secure Transactions",
        description: "We provide guidance and a secure framework to ensure your deals are completed safely."
    },
];

const featuredProperties = [
  { image: "https://picsum.photos/seed/prop1/400/300", type: "House", price: "NPR 2.5 Cr", location: "Baneshwor, Kathmandu", tag: "New Listing" },
  { image: "https://picsum.photos/seed/prop2/400/300", type: "Apartment", price: "NPR 1.8 Cr", location: "Sanepa, Lalitpur", tag: "Hot Deal" },
  { image: "https://picsum.photos/seed/prop3/400/300", type: "Land", price: "NPR 80 Lakh/Ropani", location: "Bhaktapur", tag: "" },
  { image: "https://picsum.photos/seed/prop4/400/300", type: "Commercial", price: "NPR 5 Cr", location: "New Road, Kathmandu", tag: "Featured" }
];

const testimonials = [
  {
    quote: "Neup.Estate made buying our new home stress-free. The verified listings gave us confidence. Highly recommended!",
    author: "Anil, Kathmandu",
    image: "https://picsum.photos/seed/anil-testimonial/100/100"
  },
  {
    quote: "Listing our property was easy, and we got multiple genuine offers within days. The platform is a game-changer.",
    author: "Sita, Lalitpur",
    image: "https://picsum.photos/seed/sita-testimonial/100/100"
  }
];

export default function EstatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative py-20 md:py-32 bg-card">
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
          <Image 
            src="https://picsum.photos/seed/estate-hero/1920/1080"
            alt="Modern home in Nepal"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="modern house luxury"
          />
          <div className="container relative z-10">
             <div className="max-w-3xl text-center mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Find Your Dream Property in Nepal, Hassle-Free.
                </h1>
                <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
                  Buy, Sell, or Rent with confidence—trusted listings, verified agents, and smart tools at your fingertips.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <Button size="lg">Browse Properties</Button>
                  <Button size="lg" variant="secondary">List Your Property</Button>
                </div>
            </div>
            <Card className="mt-12 lg:mt-16 p-4 max-w-4xl mx-auto shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                    <Input placeholder="Enter city or area" className="sm:col-span-2 lg:col-span-1"/>
                    <Select>
                        <SelectTrigger><SelectValue placeholder="Property Type" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                    </Select>
                     <Select>
                        <SelectTrigger><SelectValue placeholder="Price Range" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="<50l">Under 50 Lakh</SelectItem>
                            <SelectItem value="50l-1cr">50 Lakh - 1 Cr</SelectItem>
                            <SelectItem value="1cr-3cr">1 Cr - 3 Cr</SelectItem>
                            <SelectItem value=">3cr">Above 3 Cr</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="w-full lg:w-auto"><Search className="mr-2 h-4 w-4"/> Search</Button>
                </div>
            </Card>
          </div>
        </section>

        {/* 2. Featured Listings Section */}
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Start Your Property Journey</h2>
                    <p className="max-w-xl mx-auto mt-2 text-muted-foreground">Explore our curated collection of featured properties available right now.</p>
                </div>
                 <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                        {featuredProperties.map((prop, index) => (
                          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <Card className="group overflow-hidden">
                               <div className="relative">
                                    <Image src={prop.image} alt={prop.type} width={400} height={300} className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"/>
                                    {prop.tag && <Badge className="absolute top-2 right-2">{prop.tag}</Badge>}
                               </div>
                               <CardHeader>
                                   <CardTitle className="font-headline text-xl">{prop.type}</CardTitle>
                                   <CardDescription className="flex items-center gap-2 pt-1"><MapPin className="h-4 w-4"/> {prop.location}</CardDescription>
                               </CardHeader>
                               <CardContent className="flex justify-between items-center">
                                   <p className="text-lg font-bold text-primary">{prop.price}</p>
                                   <Button variant="ghost" size="sm">View Details <ArrowRight className="ml-2 h-4 w-4"/></Button>
                               </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
                <div className="text-center mt-12">
                    <Button variant="outline">View All Properties</Button>
                </div>
            </div>
        </section>

        {/* 3. How It Works Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Buying & Selling Made Simple</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-x-8 gap-y-12">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">{step.icon}</div>
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < howItWorksSteps.length - 1 && (
                      <div className="absolute top-10 left-1/2 w-full border-t-2 border-dashed border-border hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us Section */}
        <section className="py-20 md:py-28">
          <div className="container">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">Nepal’s Most Trusted Real Estate Platform</h2>
                     <p className="mt-4 text-muted-foreground text-lg">We are committed to building a transparent, secure, and efficient property market for everyone.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <Card key={feature.title} className="p-4 bg-card">
                      <CardHeader className="flex flex-row items-start gap-4 p-2">
                        {feature.icon}
                        <CardTitle className="font-headline text-base">{feature.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
            </div>
          </div>
        </section>

        {/* 5. Testimonials Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
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
              Ready to Buy, Sell, or Invest?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join thousands of satisfied clients and discover your perfect property today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button size="lg">Browse Properties</Button>
              <Button size="lg" variant="secondary">List Your Property</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
