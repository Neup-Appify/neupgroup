import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getDocumentationChapterSiblings } from '@/lib/dev-documentation';

type DocumentationChapterPagerProps = {
  currentSlug: string;
};

/**
 * Renders previous and next chapter navigation for documentation chapter pages.
 */
export function DocumentationChapterPager({ currentSlug }: DocumentationChapterPagerProps) {
  const { previous, next } = getDocumentationChapterSiblings(currentSlug);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {previous ? (
        <Link href={`/dev/documentation/${previous.slug}`}>
          <Card className="h-full border-border/60 transition-colors hover:border-primary/50">
            <CardHeader>
              <CardDescription className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous Chapter
              </CardDescription>
              <CardTitle>{previous.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {previous.sectionRange} · {previous.description}
            </CardContent>
          </Card>
        </Link>
      ) : (
        <Card className="border-dashed border-border/60 bg-muted/20">
          <CardHeader>
            <CardDescription>Previous Chapter</CardDescription>
            <CardTitle>Start of Standard</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            This is the first chapter in the documentation sequence.
          </CardContent>
        </Card>
      )}

      {next ? (
        <Link href={`/dev/documentation/${next.slug}`}>
          <Card className="h-full border-border/60 transition-colors hover:border-primary/50">
            <CardHeader>
              <CardDescription className="flex items-center gap-2">
                Next Chapter
                <ArrowRight className="h-4 w-4" />
              </CardDescription>
              <CardTitle>{next.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {next.sectionRange} · {next.description}
            </CardContent>
          </Card>
        </Link>
      ) : (
        <Card className="border-dashed border-border/60 bg-muted/20">
          <CardHeader>
            <CardDescription>Next Chapter</CardDescription>
            <CardTitle>End of Standard</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            This is the last chapter in the documentation sequence.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
