import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Calendar,
  MapPin,
  Navigation,
  Star,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { places, siteConfig } from '@/lib/data';

interface PlacePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: PlacePageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);
  if (!place) return {};

  return {
    title: place.metaTitle,
    description: place.metaDescription,
    alternates: {
      canonical: `/places/${place.slug}`,
    },
    openGraph: {
      title: place.metaTitle,
      description: place.metaDescription,
      url: `${siteConfig.url}/places/${place.slug}`,
      images: [
        {
          url: place.image,
          width: 1200,
          height: 630,
          alt: place.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: place.metaTitle,
      description: place.metaDescription,
      images: [place.image],
    },
  };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);

  if (!place) {
    notFound();
  }

  const touristDestinationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: place.name,
    description: place.shortDescription,
    url: `${siteConfig.url}/places/${place.slug}`,
    image: place.gallery.map((img) => `${siteConfig.url}${img}`),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: place.latitude,
      longitude: place.longitude,
    },
    touristType: ['Nature lovers', 'Adventure seekers', 'Photography enthusiasts'],
    includesAttraction: place.nearbyAttractions.map((name) => ({
      '@type': 'TouristAttraction',
      name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationJsonLd) }}
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
              <Link href="/places" className="hover:text-[#2d2a26] transition-colors">
                Places
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-[#2d2a26] font-medium">{place.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="relative h-72 sm:h-96 lg:h-[500px]">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a26]/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              {place.name}
            </h1>
            <p className="mt-2 text-white/80 text-lg max-w-2xl">
              {place.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold text-[#2d2a26] mb-4">
                  About {place.name}
                </h2>
                <div className="space-y-4">
                  {place.longDescription.map((para, i) => (
                    <p key={i} className="text-[#8a8580] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <Separator className="bg-[#e8e4df]" />

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-semibold text-[#2d2a26] mb-4">
                  Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {place.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-[#8a8580]"
                    >
                      <Star className="h-4 w-4 text-[#c4a882] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-[#e8e4df]" />

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-semibold text-[#2d2a26] mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {place.gallery.map((img) => (
                    <div key={img} className="relative h-48 sm:h-56 rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`${place.name} gallery image`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Best Time to Visit */}
              <Card className="border-[#e8e4df] bg-white">
                <CardContent className="pt-5 pb-5 px-5 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-[#5b7a6a]" />
                      <h3 className="font-semibold text-[#2d2a26]">Best Time to Visit</h3>
                    </div>
                    <p className="text-sm text-[#8a8580] leading-relaxed">
                      {place.bestTimeToVisit}
                    </p>
                  </div>

                  <Separator className="bg-[#e8e4df]" />

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Navigation className="h-4 w-4 text-[#5b7a6a]" />
                      <h3 className="font-semibold text-[#2d2a26]">How to Reach</h3>
                    </div>
                    <ul className="space-y-2">
                      {place.howToReach.map((way) => (
                        <li key={way} className="text-sm text-[#8a8580] leading-relaxed">
                          {way}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="bg-[#e8e4df]" />

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-[#5b7a6a]" />
                      <h3 className="font-semibold text-[#2d2a26]">Nearby Attractions</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {place.nearbyAttractions.map((attraction) => (
                        <Badge
                          key={attraction}
                          variant="secondary"
                          className="text-xs bg-[#5b7a6a]/10 text-[#5b7a6a] hover:bg-[#5b7a6a]/20"
                        >
                          {attraction}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="border-[#5b7a6a] bg-[#5b7a6a] text-white">
                <CardContent className="pt-5 pb-5 px-5 text-center space-y-3">
                  <h3 className="font-semibold text-lg">Plan Your Visit</h3>
                  <p className="text-sm text-white/80">
                    Get in touch to plan your trip to {place.name}
                  </p>
                  <Button
                    asChild
                    className="w-full bg-white text-[#5b7a6a] hover:bg-[#f8f6f3]"
                  >
                    <a
                      href={`https://wa.me/919876543210`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
