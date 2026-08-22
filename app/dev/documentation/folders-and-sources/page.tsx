import type { Metadata } from 'next';

import { DocumentationChapterPager } from '@/components/dev/DocumentationChapterPager';
import { DocumentationPageShell } from '@/components/dev/DocumentationPageShell';
import { DocumentationSectionView } from '@/components/dev/DocumentationSectionView';
import { getDocumentationChapter } from '@/lib/dev-documentation';

export const metadata: Metadata = {
  title: 'Documentation Folders and Sources',
  description: 'Folder README behavior, source-comment placement, and complete reference examples.',
};

const chapter = getDocumentationChapter('folders-and-sources');

/**
 * Renders the folders and sources chapter of the Neup Documentation Standard.
 */
export default function DevDocumentationFoldersAndSourcesPage() {
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
