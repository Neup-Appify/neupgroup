import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target, Layers, Hourglass, Users, Globe } from 'lucide-react';

const principles = [
  {
    icon: <Hourglass className="h-6 w-6 text-primary" />,
    title: "Long-Term Value",
    description: "We build for the next decade, not just the next quarter. We believe in patience and compounding returns."
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Product-First Focus",
    description: "Our obsession is crafting exceptional products that people love to use and that solve real problems."
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Systems Thinking",
    description: "We connect the dots, building ecosystems and platforms, not just isolated features or single-use apps."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Talent as Capital",
    description: "We invest in young, ambitious talent, providing them a platform to build, learn, and grow at an accelerated pace."
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Nepal-First, Global-Ready",
    description: "We start by solving problems for Nepal, with a vision to build products ready for the global stage."
  },
];


export function Vision() {
  return (
    <section id="vision" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Vision & Philosophy</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            These are the guiding principles that inform every decision we make.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, index) => (
            <Card key={item.title} className={`bg-card text-center flex flex-col ${index === 4 ? 'lg:col-start-2' : ''}`}>
              <CardHeader className="items-center">
                 <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {item.icon}
                </div>
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
