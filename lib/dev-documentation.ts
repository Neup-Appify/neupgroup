export type DocumentationBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
    }
  | {
      type: 'code';
      code: string;
    }
  | {
      type: 'table';
      headers: string[];
      rows: string[][];
    };

export type DocumentationSection = {
  id: string;
  title: string;
  blocks: DocumentationBlock[];
};

export type DocumentationChapter = {
  slug: string;
  title: string;
  sectionRange: string;
  description: string;
  sections: DocumentationSection[];
};

export const documentationChapters: DocumentationChapter[] = [
  {
    slug: 'foundations',
    title: 'Documentation Foundations',
    sectionRange: 'Core Structure',
    description: 'Core structure, root docs, visibility sections, and unscoped content rules.',
    sections: [
      {
        id: 'foundations-overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Documentation should stay close to the code it describes, remain machine-readable, and preserve a stable structure for generation and validation.',
          },
          {
            type: 'list',
            items: [
              'Keep canonical documentation near the owning code or folder.',
              'Separate public and private material explicitly.',
              'Prefer structured blocks over free-form prose when metadata matters.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'folders-and-sources',
    title: 'Documentation Folders and Sources',
    sectionRange: 'Folder Rules',
    description: 'Folder README behavior, source-comment placement, and complete reference examples.',
    sections: [
      {
        id: 'folders-and-sources-overview',
        title: 'Folder Rules',
        blocks: [
          {
            type: 'paragraph',
            text: 'Folder-level documentation explains ownership, boundaries, and inheritance rules. Source-level comments should only exist where they add context that the folder documentation cannot express.',
          },
          {
            type: 'list',
            items: [
              'Use folder documentation for shared behavior and conventions.',
              'Use source comments for implementation-specific context.',
              'Avoid duplicating the same explanation across multiple files.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'functions-and-apis',
    title: 'Documentation Functions and APIs',
    sectionRange: 'Function Blocks',
    description: 'Function and API block syntax, parameters, metadata, responses, and custom fields.',
    sections: [
      {
        id: 'functions-and-apis-overview',
        title: 'Function Metadata',
        blocks: [
          {
            type: 'paragraph',
            text: 'Functions and APIs should use consistent structured fields so generators and readers can understand inputs, outputs, status codes, and behavioral notes.',
          },
          {
            type: 'table',
            headers: ['Field', 'Purpose'],
            rows: [
              ['Parameters', 'Describe accepted inputs and constraints.'],
              ['Responses', 'Describe return values or HTTP responses.'],
              ['Metadata', 'Capture tags, ownership, or custom fields.'],
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'generation-and-validation',
    title: 'Documentation Generation and Validation',
    sectionRange: 'Generation Rules',
    description: 'Parser behavior, validation semantics, output generation rules, and standard templates.',
    sections: [
      {
        id: 'generation-and-validation-overview',
        title: 'Generation Rules',
        blocks: [
          {
            type: 'paragraph',
            text: 'Validation should reject malformed blocks early, and generation should preserve canonical structure so documentation output remains stable across runs.',
          },
          {
            type: 'list',
            items: [
              'Validate required fields before rendering output.',
              'Keep generated ordering deterministic.',
              'Use standard templates when possible.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'linking-and-titles',
    title: 'Documentation Linking and Titles',
    sectionRange: 'Links and Naming',
    description: 'Semantic link titles, README chapter generation, and canonical documentation routes.',
    sections: [
      {
        id: 'linking-and-titles-overview',
        title: 'Semantic Linking',
        blocks: [
          {
            type: 'paragraph',
            text: 'Titles and links should be stable, descriptive, and predictable so generated navigation and canonical routes remain readable over time.',
          },
          {
            type: 'list',
            items: [
              'Prefer semantic titles over filesystem-derived labels.',
              'Keep slugs stable once published.',
              'Use canonical routes consistently across index pages and chapter navigation.',
            ],
          },
        ],
      },
    ],
  },
];

export function getDocumentationChapter(slug: string) {
  return documentationChapters.find((chapter) => chapter.slug === slug) ?? null;
}

export function getDocumentationChapterSiblings(currentSlug: string) {
  const currentIndex = documentationChapters.findIndex((chapter) => chapter.slug === currentSlug);

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: documentationChapters[currentIndex - 1] ?? null,
    next: documentationChapters[currentIndex + 1] ?? null,
  };
}
