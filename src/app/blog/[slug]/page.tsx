import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Clock,
  Calendar,
  User,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { blogPosts, siteConfig } from '@/lib/data';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    image: `${siteConfig.url}${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: post.date,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-[#f8f6f3] pt-20 pb-2" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-1.5 text-sm text-[#8a8580]">
            <li>
              <Link href="/" className="hover:text-[#2d2a26] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#2d2a26] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-[#2d2a26] font-medium truncate max-w-[200px]">
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Featured Image */}
      <section className="relative h-64 sm:h-80 lg:h-96">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a26]/50 to-transparent" />
      </section>

      {/* Article */}
      <article className="py-12 lg:py-16 bg-[#f8f6f3]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-8">
            <Badge className="bg-[#5b7a6a]/10 text-[#5b7a6a] hover:bg-[#5b7a6a]/20 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#2d2a26] tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8a8580]">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          <Separator className="bg-[#e8e4df] mb-8" />

          {/* Article Content */}
          <div className="space-y-5">
            {post.content.map((para, i) => (
              <p key={i} className="text-[#8a8580] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <Separator className="bg-[#e8e4df] my-8" />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-[#2d2a26] mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-[#5b7a6a]/10 text-[#5b7a6a] hover:bg-[#5b7a6a]/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="bg-[#e8e4df] my-8" />

          {/* CTA */}
          <div className="bg-[#5b7a6a] rounded-xl p-6 sm:p-8 text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">
              Experience Poomala Yourself
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Ready to explore the places mentioned in this article?
            </p>
            <Button
              asChild
              className="bg-white text-[#5b7a6a] hover:bg-[#f8f6f3]"
            >
              <Link href="/places">
                Explore Places
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-[#2d2a26] mb-6">
                Related Posts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex gap-4 p-4 rounded-xl bg-white border border-[#e8e4df] hover-lift"
                  >
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2d2a26] group-hover:text-[#5b7a6a] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-xs text-[#8a8580] mt-1">
                        {related.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
