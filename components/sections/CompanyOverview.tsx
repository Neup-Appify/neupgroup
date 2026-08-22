import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Scale, BookOpen } from "lucide-react";

export function CompanyOverview() {
  const details = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Legal Name",
      value: "Neup Group Private Limited",
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Company Type",
      value: "Venture Studio",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Focus",
      value: "Digital Products & Platforms",
    },
  ];

  return (
    <section id="overview" className="py-20 lg:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold">Our Story</p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                A Vision for Nepal's Digital Future
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Neup Group was born from a simple observation: Nepal has immense talent but lacks home-grown digital platforms that solve local problems and compete globally. We are a collective of thinkers, builders, and strategists committed to changing that narrative.
              </p>
              <p>
                We operate with a long-term focus, patiently building systems and products that create compounding value. Our execution prowess is rooted in a deep understanding of technology and a passion for creating exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {details.map((item, index) => (
              <Card key={index} className="bg-card">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  {item.icon}
                  <CardTitle className="font-headline text-lg font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
