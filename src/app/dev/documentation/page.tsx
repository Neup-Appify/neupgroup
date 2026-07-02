import type { Metadata } from 'next';
import Link from 'next/link';

import { DocumentationPageShell } from '@/components/dev/DocumentationPageShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { documentationChapters } from '@/lib/dev-documentation';

export const metadata: Metadata = {
  title: 'Neup.Dev Documentation',
  description: 'Structured documentation pages for the Neup Documentation Standard.',
};

/**
 * Renders the `/dev/documentation` index page.
 */
export default function DevDocumentationPage() {
  return (
    <DocumentationPageShell
      title="Neup Documentation Standard"
      description="Version 1.1.0, organized into subpages so the full pasted standard is easier to navigate, read, and maintain."
    >
      <div className="space-y-6">
        <Card className="border-border/60">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              This documentation section includes all of the pasted standard, split into smaller pages by topic.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              The standard defines a machine-readable format for keeping documentation close to the code it describes.
              It supports source comments, folder README files, and dedicated Markdown pages while separating public and private output.
            </p>
            <p>
              Use the chapter cards below to move through foundations, block syntax, folder inheritance,
              generation rules, and semantic link generation.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 lg:grid-cols-2">
          {documentationChapters.map((chapter) => (
            <Link key={chapter.slug} href={`/dev/documentation/${chapter.slug}`}>
              <Card className="h-full border-border/60 transition-colors hover:border-primary/50">
                <CardHeader>
                  <CardTitle>{chapter.title}</CardTitle>
                  <CardDescription>{chapter.sectionRange}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{chapter.description}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DocumentationPageShell>
  );
}
