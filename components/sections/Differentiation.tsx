import { Lightbulb, Users, Link2, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: <Lightbulb className="h-5 w-5 text-primary" />,
    text: "Building products and platforms that Nepal currently lacks.",
  },
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    text: "Creating opportunities for young, ambitious talent to build at scale.",
  },
  {
    icon: <Link2 className="h-5 w-5 text-primary" />,
    text: "Connecting disparate digital systems to create a cohesive ecosystem.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
    text: "Scaling ideas from concepts into meaningful, independent ventures.",
  },
];

export function Differentiation() {
  return (
    <section id="differentiation" className="py-20 lg:py-32 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-primary font-semibold">Why We Exist</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Our Meaningful Differentiation
            </h2>
            <p className="text-muted-foreground">
              We are not just another company. We are a mission-driven group with a clear purpose to uplift Nepal's digital landscape.
            </p>
          </div>
          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 p-2 bg-primary/10 rounded-full">
                  {item.icon}
                </div>
                <p className="text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
