import type { ReactNode } from 'react';

import { Badge } from '@/components/ui/badge';

type DocumentationPageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

/**
 * Wraps documentation pages with shared navigation and consistent layout.
 */
export function DocumentationPageShell({
  title,
  description,
  children,
}: DocumentationPageShellProps) {
  return (
    <div className="bg-gradient-to-b from-background via-background to-card">
      <section className="border-b border-border/60">
        <div className="container py-16 md:py-20">
          <div className="max-w-4xl space-y-5">
            <Badge variant="outline" className="px-3 py-1 text-xs uppercase tracking-[0.24em]">
              Documentation Standard
            </Badge>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
              <p className="max-w-3xl text-base text-muted-foreground md:text-lg">{description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="mx-auto max-w-6xl">{children}</div>
      </section>
    </div>
  );
}
