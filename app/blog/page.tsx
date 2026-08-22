
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Rss } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Neup.Blog',
  description: 'Insights, stories, and updates from the Neup Group team.',
};

const featuredPosts = [
    {
        slug: '#',
        title: 'The Systems Thinking Approach to Building Ventures',
        description: 'Why we believe building interconnected systems is more powerful than creating isolated products.',
        author: 'Kishor Neupane',
        date: 'October 26, 2024',
        imageUrl: 'https://picsum.photos/seed/blog1/400/300'
    },
    {
        slug: '#',
        title: 'Design is Not a Department: Integrating Design Into Your Core Strategy',
        description: 'How we leverage design as a strategic tool, not just an aesthetic layer.',
        author: 'Neup.Design',
        date: 'October 22, 2024',
        imageUrl: 'https://picsum.photos/seed/blog2/400/300'
    },
     {
        slug: '#',
        title: 'Marketing That Compounds: Lessons from Our In-House Ventures',
        description: 'Moving beyond campaigns to build marketing engines that deliver predictable growth.',
        author: 'Neup.Marketing',
        date: 'October 18, 2024',
        imageUrl: 'https://picsum.photos/seed/blog3/400/300'
    }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-4xl">
              Neup.Blog
            </h1>
            <p className="max-w-2xl mt-4 text-muted-foreground md:text-xl">
              Insights, stories, and updates from the Neup Group team. We write about technology, design, business, and building for the future.
            </p>
             <div className="mt-8">
              <Button>
                <Rss className="mr-2 h-4 w-4" />
                Subscribe to our feed
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-20 md:py-28">
            <div className="container">
              <h2 className="font-headline text-3xl font-bold mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                    <Link href={post.slug} key={post.title} className="group block">
                        <Card className="h-full flex flex-col hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                             <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <CardDescription className="flex-grow mb-4">{post.description}</CardDescription>
                                <div className="text-sm text-muted-foreground">
                                    <span>By {post.author}</span> &middot; <span>{post.date}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
              </div>
               <div className="mt-12 text-center">
                    <Button variant="outline">
                        View All Articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
