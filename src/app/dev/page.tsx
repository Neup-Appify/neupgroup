import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Blocks, Code2, FlaskConical, ShieldCheck, TerminalSquare } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Neup.Dev',
  description: 'Developer hub for internal tools, workflows, and shipping status across Neup.Group.',
};

const pillars = [
  {
    title: 'Developer Workspace',
    description: 'A single place to coordinate product work, experiments, and operating context.',
    icon: Code2,
  },
  {
    title: 'Shipping Systems',
    description: 'Shared patterns for releases, observability, reliability, and internal tooling.',
    icon: Blocks,
  },
  {
    title: 'Safe Iteration',
    description: 'Tight feedback loops for testing ideas without losing production discipline.',
    icon: ShieldCheck,
  },
];

const surfaces = [
  'Internal dashboards',
  'Prototype environments',
  'Automation scripts',
  'Developer documentation',
];

/**
 * Renders the developer-facing landing page for the `/dev` route.
 */
export default function DevPage() {
  return (
    <div className="bg-gradient-to-b from-background via-background to-card">
      <section className="border-b border-border/60">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl space-y-8">
            <Badge variant="outline" className="gap-2 px-3 py-1 text-xs uppercase tracking-[0.24em]">
              <TerminalSquare className="h-3.5 w-3.5" />
              Developer Surface
            </Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                Build, test, and ship from one internal workspace.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                Neup.Dev is the entry point for engineering work across product infrastructure,
                operational tooling, and fast iteration loops.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/dev/documentation">
                  Open Documentation
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/manage">Open Management</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="border-border/60 bg-background/80">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="container pb-20 md:pb-28">
        <Card className="overflow-hidden border-border/60">
          <CardContent className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                <FlaskConical className="h-4 w-4 text-primary" />
                Current focus
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Ship faster without lowering the bar.</h2>
              <p className="max-w-2xl text-muted-foreground">
                Use this surface to centralize experiments, connect operating tools, and keep
                engineering decisions visible across the studio.
              </p>
            </div>
            <div className="grid gap-3">
              {surfaces.map((surface) => (
                <div
                  key={surface}
                  className="rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-sm font-medium"
                >
                  {surface}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
