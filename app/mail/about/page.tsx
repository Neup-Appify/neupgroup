import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Shield, Zap, Inbox, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Neup.Mail',
};

const features = [
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Privacy by Default",
    description: "End-to-end encrypted email. No tracking, no ads, no data mining. Your conversations are yours alone.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Lightning Fast",
    description: "A clean, bloat-free interface that loads instantly and lets you focus on what matters: communication.",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Anonymous & Secure",
    description: "Sign up without personal information. We believe in your right to digital privacy and freedom.",
  },
];

const pricingTiers = [
    {
        name: "Free",
        price: "$0",
        period: "/ month",
        description: "For basic personal use with essential privacy features.",
        features: [
            "1 GB Encrypted Storage",
            "End-to-End Encryption",
            "1 Email Address",
            "Community Support"
        ],
        cta: "Get Started for Free"
    },
    {
        name: "Plus",
        price: "$5",
        period: "/ month",
        description: "For power users who need more storage and features.",
        features: [
            "10 GB Encrypted Storage",
            "Custom Domain Support",
            "5 Email Aliases",
            "Priority Support"
        ],
        cta: "Choose Plus",
        popular: true,
    }
]

export default function MailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Introducing Neup.Mail
                    </div>
                    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                        Email That Respects You.
                    </h1>
                    <p className="max-w-xl text-muted-foreground md:text-xl">
                        Experience a new standard in email communication. Private, secure, and designed for focus. No ads, no trackers, just pure email.
                    </p>
                    <div className="flex justify-start gap-4">
                        <Button size="lg" asChild>
                            <Link href="#pricing">Get Your Private Email</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="https://picsum.photos/seed/neup-mail/600/500" 
                        alt="Neup.Mail Interface" 
                        width={600}
                        height={500}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="email interface security"
                    />
                </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-28">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">A Better Email Experience</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                We built Neup.Mail from the ground up with your privacy and productivity in mind.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card">
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

        {/* Pricing Section */}
        <section id="pricing" className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                        Choose the plan that's right for you. Our free plan is free forever.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {pricingTiers.map((tier) => (
                        <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary shadow-2xl' : ''}`}>
                             {tier.popular && <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-semibold rounded-t-lg">Most Popular</div>}
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                                <CardDescription>{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow space-y-6">
                                <div>
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    <span className="text-muted-foreground">{tier.period}</span>
                                </div>
                                <ul className="space-y-3 flex-grow">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-5 w-5 text-chart-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                                    {tier.cta}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Take Back Control of Your Inbox.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Join the growing community of users who choose privacy. Create your free Neup.Mail account today.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="#pricing">
                  Sign Up Now
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
