import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts, siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Poomala Travel Blog',
  description:
    'Read travel stories, guides, and inspiration about Poomala and Thrissur district. Discover tips, seasonal guides, and local insights for your Kerala adventure.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Poomala Travel Blog',
    description:
      'Travel stories, guides, and inspiration about Poomala and Thrissur district.',
    url: `${siteConfig.url}/blog`,
    images: [
      {
        url: '/IMG-20251101-WA0013.jpg',
        width: 1200,
        height: 630,
        alt: 'Poomala travel blog',
      },
    ],
  },
};

export default function BlogPage() {
  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'VisitPoomala Travel Blog',
    description: 'Travel stories, guides, and inspiration about Poomala and Thrissur district, Kerala.',
    url: `${siteConfig.url}/blog`,
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      image: `${siteConfig.url}${post.image}`,
      author: {
        '@type': 'Organization',
        name: post.author,
      },
      datePublished: post.date,
    })),
  };

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Hero Banner */}
      <section className="relative h-72 sm:h-80 flex items-center justify-center">
        <Image
          src="/IMG-20251101-WA0004.jpg"
          alt="Lush green landscapes of the Poomala region"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2d2a26]/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Travel Blog
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
            Stories, guides, and inspiration for your Poomala adventure.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-[#e8e4df]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-sm font-medium text-[#2d2a26] mr-2">Categories:</span>
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="bg-[#5b7a6a]/10 text-[#5b7a6a] hover:bg-[#5b7a6a]/20 cursor-pointer whitespace-nowrap"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden hover-lift border-[#e8e4df] bg-white"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-[#5b7a6a] text-white text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-5 pb-5 px-5">
                  <div className="flex items-center gap-3 mb-2 text-xs text-[#8a8580]">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-[#2d2a26] mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#8a8580] leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-[#5b7a6a] hover:text-[#4d6b5c] transition-colors"
                  >
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
