import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Thermometer, TreePine, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Poomala Region',
  description:
    'Learn about Poomala, a picturesque region in Thrissur district, Kerala. Discover its geography, culture, climate, and what makes it one of Kerala\'s most enchanting hidden destinations.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Poomala Region',
    description:
      'Learn about Poomala, a picturesque region in Thrissur district, Kerala.',
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: '/IMG-20251101-WA0013.jpg',
        width: 1200,
        height: 630,
        alt: 'About Poomala region',
      },
    ],
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Poomala',
    description:
      'Learn about Poomala, a picturesque region in Thrissur district, Kerala known for its dam, waterfalls, and hill viewpoints.',
    url: `${siteConfig.url}/about`,
    mainEntity: {
      '@type': 'Place',
      name: 'Poomala',
      description:
        'A picturesque region in Thrissur district, Kerala, India, known for the Poomala Dam, Vattayi Waterfalls, and Cheppara Viewpoint.',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 10.5874,
        longitude: 76.2412,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Poomala',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero Banner */}
      <section className="relative h-72 sm:h-80 flex items-center justify-center">
        <Image
          src="/IMG-20251101-WA0014.jpg"
          alt="Misty morning views from the hills of Poomala"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2d2a26]/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            About Poomala
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
            A hidden paradise in the heart of God&apos;s Own Country
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-semibold text-[#2d2a26] tracking-tight">
              The Land of Serene Beauty
            </h2>
            <p className="text-[#8a8580] leading-relaxed">
              Poomala is a picturesque region nestled in the rolling hills of Thrissur district in Kerala, India. Far from the bustling tourist circuits that draw millions to Kerala&apos;s beaches and backwaters, Poomala offers a quieter, more intimate experience of this enchanting state. The region takes its name from the Poomala Dam, a serene reservoir that has become the centrepiece of the area&apos;s growing reputation as a destination for those seeking authentic natural beauty and cultural immersion.
            </p>
            <p className="text-[#8a8580] leading-relaxed">
              Situated approximately 30 kilometres from Thrissur city, Poomala sits at the foothills of the Western Ghats — a UNESCO World Heritage Site and one of the eight &quot;hottest hotspots&quot; of biological diversity in the world. This proximity to the Ghats blesses the region with a remarkable landscape of undulating hills, dense forests, cascading waterfalls, and meandering streams. The elevation provides a slightly cooler climate than the coastal areas, making it a pleasant retreat throughout the year.
            </p>
          </div>

          {/* Geography & Nature */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-[#e8e4df] bg-white text-center">
              <CardContent className="pt-5 pb-5 px-5">
                <MapPin className="h-8 w-8 text-[#5b7a6a] mx-auto mb-3" />
                <h3 className="font-semibold text-[#2d2a26] mb-2">Location</h3>
                <p className="text-sm text-[#8a8580]">
                  Thrissur District, Central Kerala, at the foothills of the Western Ghats, approximately 30 km from Thrissur city.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#e8e4df] bg-white text-center">
              <CardContent className="pt-5 pb-5 px-5">
                <Thermometer className="h-8 w-8 text-[#5b7a6a] mx-auto mb-3" />
                <h3 className="font-semibold text-[#2d2a26] mb-2">Climate</h3>
                <p className="text-sm text-[#8a8580]">
                  Tropical climate with pleasant temperatures. Monsoon from June to August. Best visited September to March for outdoor activities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#e8e4df] bg-white text-center">
              <CardContent className="pt-5 pb-5 px-5">
                <TreePine className="h-8 w-8 text-[#5b7a6a] mx-auto mb-3" />
                <h3 className="font-semibold text-[#2d2a26] mb-2">Biodiversity</h3>
                <p className="text-sm text-[#8a8580]">
                  Rich flora and fauna including exotic birds, rare butterflies, medicinal plants, and tropical evergreen forests.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Culture & History */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-semibold text-[#2d2a26] tracking-tight">
              Culture and Heritage
            </h2>
            <p className="text-[#8a8580] leading-relaxed">
              The Poomala region is steeped in the cultural traditions of Kerala. The local population, predominantly engaged in agriculture, has preserved a way of life that is deeply connected to the land and the seasons. Rubber plantations, coconut groves, and spice gardens form the economic backbone of the area, and visitors can witness traditional farming practices that have been passed down through generations.
            </p>
            <p className="text-[#8a8580] leading-relaxed">
              The region&apos;s cultural calendar is marked by vibrant temple festivals, the most famous being the Thrissur Pooram held in the nearby city. During these festivals, the entire community comes together in celebration, with decorated elephants, traditional percussion ensembles like Chenda and Panchavadyam, and elaborate fireworks displays. The local cuisine, featuring dishes like Sadhya, Malabar biryani, and an array of seafood preparations, reflects the rich culinary heritage of Kerala.
            </p>
            <p className="text-[#8a8580] leading-relaxed">
              Ayurveda, the ancient Indian system of medicine, has deep roots in this region. Several authentic Ayurvedic centres near Poomala offer traditional treatments and wellness programmes, drawing on centuries of knowledge about the medicinal plants that grow abundantly in the Western Ghats. Visitors can experience authentic Ayurvedic massages, herbal treatments, and yoga sessions in serene, natural settings.
            </p>
          </div>

          {/* Map Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#2d2a26] tracking-tight mb-6">
              Find Us
            </h2>
            <div className="rounded-xl overflow-hidden border border-[#e8e4df] bg-white">
              <div className="aspect-[16/9] bg-[#e8e4df] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-[#5b7a6a] mx-auto mb-3" />
                  <p className="text-[#8a8580]">
                    Poomala, Thrissur District, Kerala, India
                  </p>
                  <p className="text-sm text-[#8a8580] mt-1">
                    10.5874&deg; N, 76.2412&deg; E
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#2d2a26] mb-3">
              Ready to Experience Poomala?
            </h2>
            <p className="text-[#8a8580] mb-6">
              Plan your visit and discover the magic of Kerala&apos;s hidden gem.
            </p>
            <Button
              asChild
              className="bg-[#5b7a6a] hover:bg-[#4d6b5c] text-white"
            >
              <Link href="/places">
                Explore Places
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
