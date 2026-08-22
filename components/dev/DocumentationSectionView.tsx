import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { DocumentationSection } from '@/lib/dev-documentation';

type DocumentationSectionViewProps = {
  section: DocumentationSection;
};

/**
 * Renders a documentation section with support for paragraphs, lists, code blocks, and tables.
 */
export function DocumentationSectionView({ section }: DocumentationSectionViewProps) {
  return (
    <Card className="border-border/60">
      <CardHeader>
        <CardTitle className="text-2xl">{section.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {section.blocks.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p key={index} className="leading-7 text-muted-foreground">
                {block.text}
              </p>
            );
          }

          if (block.type === 'list') {
            return (
              <ul key={index} className="space-y-2 pl-5 text-sm text-muted-foreground">
                {block.items.map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            );
          }

          if (block.type === 'table') {
            return (
              <div key={index} className="overflow-x-auto rounded-xl border border-border/60">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={`${section.id}-${rowIndex}`} className="border-t border-border/60">
                        {row.map((cell, cellIndex) => (
                          <td key={`${section.id}-${rowIndex}-${cellIndex}`} className="px-4 py-3 align-top text-muted-foreground">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          return (
            <pre
              key={index}
              className="overflow-x-auto rounded-xl border border-border/60 bg-muted/40 p-4 text-sm leading-6"
            >
              <code>{block.code}</code>
            </pre>
          );
        })}
      </CardContent>
    </Card>
  );
}
