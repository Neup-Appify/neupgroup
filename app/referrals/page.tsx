
import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Gift, Users, DollarSign, UserPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
  title: 'Referrals | Earn by Connecting!',
  description: 'Turn connections into rewards. Invite clients to Neup Group and earn 5% for every successful referral.',
};

const howItWorksSteps = [
    {
      number: 1,
      title: "Refer a Client",
      description: "Share our services with someone who needs them."
    },
    {
      number: 2,
      title: "They Work With Us",
      description: "Once your referral transacts with us, everything is handled smoothly."
    },
    {
      number: 3,
      title: "Earn Your Reward",
      description: "Receive a 5% referral bonus directly for every successful transaction."
    }
];

const whyJoinBenefits = [
    {
        icon: <CheckCircle className="h-6 w-6 text-primary" />,
        title: "Clear & Straightforward",
        description: "No hidden terms. You refer, they benefit, you get rewarded."
    },
    {
        icon: <Gift className="h-6 w-6 text-primary" />,
        title: "Perfect Incentive",
        description: "Every successful referral gives you a tangible reward."
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "Help Us Grow",
        description: "Your connections help us reach the right clients while you profit."
    }
];

const getStartedSteps = [
    { name: "Sign Up or Log In" },
    { name: "Share your unique referral link" },
    { name: "Watch your rewards grow with every successful referral" }
];

const testimonial = {
    quote: "I referred a friend, and the process was so smooth. I got my bonus instantly. Highly recommended!",
    author: "Happy Referrer",
    image: "https://picsum.photos/seed/referrer/100/100"
};

export default function ReferralsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container text-center max-w-4xl">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Turn Connections into Rewards – Earn 5% for Every Referral
              </h1>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl">
                Helping others has never been this rewarding. Invite clients, and get paid when they work with us.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Button size="lg">Start Referring & Earning</Button>
              </div>
          </div>
        </section>

        {/* 2. How It Works Section */}
        <section className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">How It Works</h2>
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

        {/* 3. Why Join Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Join Our Referral Program?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {whyJoinBenefits.map((benefit) => (
                        <Card key={benefit.title} className="text-center p-6">
                           <div className="flex justify-center mb-4">{benefit.icon}</div>
                           <CardTitle className="font-headline text-lg mb-2">{benefit.title}</CardTitle>
                           <CardDescription>{benefit.description}</CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* 4. Get Started Section */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Get Started Today
            </h2>
            <div className="mt-8 space-y-4 max-w-md mx-auto">
                {getStartedSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 text-left">
                        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">{index + 1}</div>
                        <p className="font-medium text-lg">{step.name}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10">
              <Button size="lg">Start Referring & Earning</Button>
            </div>
          </div>
        </section>
        
        {/* 5. Testimonial Section */}
        <section className="py-20 md:py-28 bg-card">
            <div className="container max-w-2xl">
                <Card className="bg-background">
                    <CardContent className="p-8 text-center space-y-4">
                        <p className="text-xl italic">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-center gap-3 pt-2">
                            <Avatar>
                                <AvatarImage src={testimonial.image} alt={testimonial.author} />
                                <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold text-lg">{testimonial.author}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
    </div>
  );
}
