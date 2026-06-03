import Image from 'next/image';
import Link from 'next/link';
import {
  Trees,
  Wind,
  Compass,
  Flame,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { places, galleryImages, blogPosts, whyVisitFeatures } from '@/lib/data';

const iconMap = {
  Trees,
  Wind,
  Compass,
  Flame,
} as const;

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
        <Image
          src="/IMG-20251101-WA0013.jpg"
          alt="Panoramic view of Poomala hills and reservoir at golden hour"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d2a26]/60 via-[#2d2a26]/40 to-[#2d2a26]/70" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4 animate-fade-in-up">
            Discover Poomala
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Explore the untouched beauty of Kerala&apos;s hidden gem
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#5b7a6a] hover:bg-[#4d6b5c] text-white px-8 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link href="/places">
              Explore Places
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-16 lg:py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2d2a26] tracking-tight">
              Places to Explore
            </h2>
            <p className="mt-3 text-[#8a8580] text-lg max-w-2xl mx-auto">
              Three unforgettable destinations in the heart of Thrissur, each offering a unique glimpse into Kerala&apos;s natural beauty.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {places.map((place) => (
              <Card
                key={place.slug}
                className="overflow-hidden hover-lift border-[#e8e4df] bg-white"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="pt-5 pb-5 px-5">
                  <h3 className="text-xl font-semibold text-[#2d2a26] mb-2">
                    {place.name}
                  </h3>
                  <p className="text-sm text-[#8a8580] leading-relaxed mb-4">
                    {place.shortDescription}
                  </p>
                  <Link
                    href={`/places/${place.slug}`}
                    className="inline-flex items-center text-sm font-medium text-[#5b7a6a] hover:text-[#4d6b5c] transition-colors"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit Poomala */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2d2a26] tracking-tight">
              Why Visit Poomala
            </h2>
            <p className="mt-3 text-[#8a8580] text-lg max-w-2xl mx-auto">
              A destination where nature, culture, and serenity come together in perfect harmony.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyVisitFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#5b7a6a]/10">
                    <Icon className="h-6 w-6 text-[#5b7a6a]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2d2a26] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#8a8580] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 lg:py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2d2a26] tracking-tight">
              A Glimpse of Poomala
            </h2>
            <p className="mt-3 text-[#8a8580] text-lg max-w-2xl mx-auto">
              See the beauty that awaits you in the hills of Thrissur.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {galleryImages.map((img, i) => (
              <Link
                key={img.src}
                href="/gallery"
                className={`relative overflow-hidden rounded-lg group ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={i === 0 ? 600 : 300}
                  height={i === 0 ? 400 : 200}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 50vw, 20vw"}
                />
                <div className="absolute inset-0 bg-[#2d2a26]/0 group-hover:bg-[#2d2a26]/10 transition-colors duration-300" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-[#5b7a6a] text-[#5b7a6a] hover:bg-[#5b7a6a] hover:text-white">
              <Link href="/gallery">
                View Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#2d2a26] tracking-tight">
              From Our Blog
            </h2>
            <p className="mt-3 text-[#8a8580] text-lg max-w-2xl mx-auto">
              Travel stories, guides, and inspiration for your Poomala adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden hover-lift border-[#e8e4df] bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="pt-5 pb-5 px-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-[#5b7a6a] bg-[#5b7a6a]/10 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#8a8580]">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#2d2a26] mb-2 line-clamp-2">
                    {post.title}
                  </h3>
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
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-[#5b7a6a] text-[#5b7a6a] hover:bg-[#5b7a6a] hover:text-white">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#5b7a6a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Plan Your Visit
          </h2>
          <p className="mt-3 text-white/80 text-lg max-w-2xl mx-auto">
            Ready to discover the beauty of Poomala? Get in touch with us and start planning your unforgettable Kerala getaway.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#5b7a6a] hover:bg-[#f8f6f3] px-8"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8"
            >
              <a
                href={`https://wa.me/919876543210`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
