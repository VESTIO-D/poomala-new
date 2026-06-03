import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { places, siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Places to Visit in Poomala',
  description:
    'Explore the best places to visit in Poomala, Thrissur. From the serene Poomala Dam to Vattayi Waterfalls and Cheppara Viewpoint, discover Kerala\'s hidden gems.',
  alternates: {
    canonical: '/places',
  },
  openGraph: {
    title: 'Places to Visit in Poomala',
    description:
      'Explore the best places to visit in Poomala, Thrissur. Discover Kerala\'s hidden gems.',
    url: `${siteConfig.url}/places`,
    images: [
      {
        url: '/IMG-20251101-WA0013.jpg',
        width: 1200,
        height: 630,
        alt: 'Places to visit in Poomala, Kerala',
      },
    ],
  },
};

export default function PlacesPage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Places to Visit in Poomala',
    description: 'Tourist destinations in Poomala, Thrissur, Kerala',
    numberOfItems: places.length,
    itemListElement: places.map((place, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristDestination',
        name: place.name,
        description: place.shortDescription,
        url: `${siteConfig.url}/places/${place.slug}`,
        image: `${siteConfig.url}${place.image}`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: place.latitude,
          longitude: place.longitude,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
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
            Explore Poomala
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
            Discover the destinations that make Poomala one of Kerala&apos;s most enchanting regions.
          </p>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {places.map((place) => (
              <Card
                key={place.slug}
                className="overflow-hidden hover-lift border-[#e8e4df] bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="pt-5 pb-5 px-5">
                  <h2 className="text-xl font-semibold text-[#2d2a26] mb-2">
                    {place.name}
                  </h2>
                  <p className="text-sm text-[#8a8580] leading-relaxed mb-4">
                    {place.shortDescription}
                  </p>
                  <Button
                    asChild
                    className="bg-[#5b7a6a] hover:bg-[#4d6b5c] text-white"
                  >
                    <Link href={`/places/${place.slug}`}>
                      Explore
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
