
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Landmark, Mountain, Plane, Tag, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';

const clients = [
  {
    name: "Happy Mountain Nepal",
    services: "Neup.Marketing, Neup.Site",
    icon: "https://neupgroup.com/content/p3happymountainnepal/logo.png",
    slug: "happy-mountain-nepal-seo-migration",
  },
  {
    name: "Lalpurja Nepal",
    services: "Neup.Marketing",
    icon: <Landmark className="h-10 w-10 text-primary" />,
  },
  {
    name: "Yes Tourism Nepal",
    services: "Neup.Site",
    icon: "https://neupgroup.com/content/p3yestourismnepal/logo.full.svg",
    slug: "yes-tourism-nepal-dynamic-news-site",
  },
  {
    name: "Bhattarai Deals",
    services: "Neup.Marketing & Neup.Site",
    icon: <Tag className="h-10 w-10 text-primary" />,
    slug: "bhattarai-deals-iphone-market-research",
  },
  {
    name: "A2 Consultancy, India",
    services: "Neup.Marketing",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
  },
  {
    name: "Finance 360",
    services: "Neup.Marketing",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
  },
];

export function OurClients() {
  return (
    <section id="clients" className="py-20 lg:py-32 bg-card">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Clients</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We are proud to partner with ambitious brands and help them grow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clients.map((client) => (
            <Card key={client.name} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-6 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg h-[64px] w-[64px] flex items-center justify-center">
                    {typeof client.icon === 'string' ? (
                      <Image src={client.icon} alt={`${client.name} logo`} width={40} height={40} className="object-contain" />
                    ) : (
                      client.icon
                    )}
                  </div>
                  <div>
                    <p className="text-xl font-bold">{client.name}</p>
                    <p className="text-muted-foreground">Services: {client.services}</p>
                  </div>
                </div>
                {client.slug && (
                  <div className="mt-auto pt-4 border-t border-border">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={`/case/${client.slug}`}>
                        Read Case
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
