import type { Metadata } from 'next';

import { DocumentationChapterPager } from '@/components/dev/DocumentationChapterPager';
import { DocumentationPageShell } from '@/components/dev/DocumentationPageShell';
import { DocumentationSectionView } from '@/components/dev/DocumentationSectionView';
import { getDocumentationChapter } from '@/lib/dev-documentation';

export const metadata: Metadata = {
  title: 'Documentation Linking and Titles',
  description: 'Semantic link titles, README chapter generation, and canonical documentation routes.',
};

const chapter = getDocumentationChapter('linking-and-titles');

/**
 * Renders the semantic linking and titles chapter of the Neup Documentation Standard.
 */
export default function DevDocumentationLinkingAndTitlesPage() {
  if (!chapter) {
    return null;
  }

  return (
    <DocumentationPageShell
      title={chapter.title}
      description={chapter.description}
    >
      <div className="space-y-6">
        {chapter.sections.map((section) => (
          <DocumentationSectionView key={section.id} section={section} />
        ))}
        <DocumentationChapterPager currentSlug={chapter.slug} />
      </div>
    </DocumentationPageShell>
  );
}
