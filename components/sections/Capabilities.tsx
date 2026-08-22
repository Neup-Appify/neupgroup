import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cloud, Blocks, Speaker } from "lucide-react";

const capabilities = [
  {
    value: "platforms",
    title: "Digital Ecosystems & Platforms",
    description: "We build multi-sided platforms that create network effects and long-term value by connecting users, businesses, and services in a unified digital space.",
    icon: <Blocks className="h-6 w-6 text-primary" />,
  },
  {
    value: "saas",
    title: "SaaS Products",
    description: "Our focus is on developing scalable, subscription-based software that solves specific business problems with intuitive design and powerful features.",
    icon: <Cloud className="h-6 w-6 text-primary" />,
  },
  {
    value: "ai",
    title: "AI Applications",
    description: "We leverage machine learning and artificial intelligence to build intelligent, adaptive products that automate processes and provide data-driven insights.",
    icon: <Bot className="h-6 w-6 text-primary" />,
  },
  {
    value: "marketing",
    title: "Marketing Infrastructure",
    description: "We create the systems, tools, and strategies for modern, data-driven marketing to help brands grow and connect with their audiences effectively.",
    icon: <Speaker className="h-6 w-6 text-primary" />,
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Capabilities</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We apply systems thinking to build robust and scalable digital solutions.
          </p>
        </div>
        
        <Tabs defaultValue="platforms" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            {capabilities.map((cap) => (
              <TabsTrigger key={cap.value} value={cap.value} className="text-sm">
                {cap.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          {capabilities.map((cap) => (
            <TabsContent key={cap.value} value={cap.value}>
              <Card className="mt-6 border-l-4 border-primary bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-xl">
                    {cap.icon}
                    {cap.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cap.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
