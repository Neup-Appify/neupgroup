
'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { ventures, type Venture } from '@/components/sections/VenturePortfolio.config';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


const statusStyles: { [key: string]: string } = {
  Live: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  Building: "bg-chart-4/20 text-chart-4 border-chart-4/30",
  Beta: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Alpha: "bg-yellow-400/20 text-yellow-500 border-yellow-400/30",
};

// Function to shuffle array and get first N items
function getShuffledVentures(array: typeof ventures, count: number) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


export function VenturePortfolio() {
  const [randomVentures, setRandomVentures] = useState<Venture[]>([]);

  useEffect(() => {
    setRandomVentures(getShuffledVentures(ventures, 5));
  }, []);

  return (
    <section id="ventures" className="py-20 lg:py-32 bg-card">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Ventures</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We build, operate, and scale a portfolio of companies designed to solve real-world problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomVentures.map((venture) => (
            <Link href={venture.link} key={venture.name} className="group block">
              <Card className="h-full flex flex-col hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                       <div className="p-3 rounded-lg bg-primary/10">
                        <venture.logo className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-xl">{venture.name}</CardTitle>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45" />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="flex-grow mb-4">{venture.description}</CardDescription>
                  <Badge variant="outline" className={`${statusStyles[venture.status]} font-medium`}>
                    {venture.status}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild variant="outline">
                <Link href="/about/ventures">
                    View All Ventures
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
