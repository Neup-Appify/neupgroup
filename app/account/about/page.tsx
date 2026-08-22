import type { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, KeyRound, ShieldCheck, Link2, Settings, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";
import { NeupLogo } from "@/components/NeupLogo";
import Image from "next/image";
import { ventures } from "@/components/sections/VenturePortfolio.config";

export const metadata: Metadata = {
  title: 'Neup.Account',
};

const whatItEnables = [
  {
    icon: <UserCheck className="h-6 w-6 text-primary" />,
    title: "Unified Access",
    description: "One account to access all Neup platforms, removing the need for multiple logins and passwords.",
  },
  {
    icon: <Link2 className="h-6 w-6 text-primary" />,
    title: "Identity Continuity",
    description: "Your profile, preferences, and progress move with you seamlessly across different products.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Security & Control",
    description: "Centralized authentication with user-controlled privacy settings, putting you in charge of your data.",
  },
  {
    icon: <Settings className="h-6 w-6 text-primary" />,
    title: "Ecosystem Integration",
    description: "Built from the ground up to connect current and future Neup products into a single, cohesive experience.",
  },
];

const philosophyPoints = [
  "Identity should simplify, not complicate",
  "Security is foundational, not optional",
  "Systems scale better than silos",
];

const howItWorks = [
  { name: "Create", description: "Create your single Neup.Account in minutes." },
  { name: "Verify", description: "Verify your identity once for security." },
  { name: "Access", description: "Access all Neup products seamlessly." },
  { name: "Manage", description: "Manage permissions and settings from one place." },
];

const products = ventures.filter(v => v.name !== "Project Synapse" && v.name !== "Katalyst");


export default function NeupAccountPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 lg:py-40 bg-card">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-2xl">
                  One Identity. Every Neup Product.
                </h1>
                <p className="max-w-xl mt-4 text-muted-foreground md:text-xl">
                  Neup.Account is a secure, unified login system that gives you seamless access across the Neup ecosystem — without friction.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/account/auth/start">Create Your Neup.Account</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#how-it-works">Learn How It Works</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/seed/neup-account-hero/600/500"
                  alt="Unified digital identity"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl"
                  data-ai-hint="digital identity security"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              The Problem: Fragmentation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Digital products are fragmented. Users face multiple accounts, repeated logins, scattered data, and inconsistent experiences.
            </p>
            <p className="mt-4 text-lg font-medium">
              Neup.Account exists to unify this access, keeping control firmly in the user’s hands while enabling a connected ecosystem.
            </p>
          </div>
        </section>

        {/* What It Enables Section */}
        <section id="features" className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">What Neup.Account Enables</h2>
              <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
                We framed Neup.Account around core capabilities, not just features.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {whatItEnables.map((item) => (
                <Card key={item.title} className="bg-background">
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

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-28">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">A Simple, Secure Flow</h2>
              <p className="mt-4 text-muted-foreground">One-time setup for ecosystem-wide access.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-x-6 gap-y-8">
              {howItWorks.map((step, index) => (
                <div key={step.name} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                    {index < howItWorks.length - 1 && <div className="w-px h-16 bg-border mt-2"></div>}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Powered Products Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Products Powered by Neup.Account</h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
              Your single identity connects you to a growing list of Neup products.
            </p>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {products.map((product) => (
                <Link href={product.link} key={product.name} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="p-3 rounded-lg bg-background border group-hover:border-primary group-hover:bg-primary/5">
                    <product.logo className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">{product.name}</span>
                </Link>
              ))}
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <div className="p-3 rounded-lg bg-background border border-dashed">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
                <span className="font-medium">Future Products</span>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Philosophy</h2>
                <p className="text-xl font-medium text-primary">
                  Identity infrastructure should be invisible and empowering.
                </p>
                <p className="text-muted-foreground">
                  Our approach is built on principles that prioritize user experience and system integrity.
                </p>
              </div>
              <div className="space-y-4">
                {philosophyPoints.map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-chart-2 flex-shrink-0" />
                    <p className="text-lg font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Part of Neup Group */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container text-center max-w-3xl mx-auto">
            <NeupLogo className="h-12 w-12 text-primary mx-auto" />
            <h2 className="font-headline text-3xl font-bold mt-4">Core Neup Group Infrastructure</h2>
            <p className="text-muted-foreground mt-2">Neup.Account is a core infrastructure product of Neup Group Private Limited, designed for long-term ecosystem growth, security, and scalability.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md-py-28">
          <div className="container max-w-3xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Your identity across Neup starts here.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Create your Neup.Account and access everything — seamlessly.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/account/auth/start">
                  Create Your Neup.Account
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

