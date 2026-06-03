import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description:
    'Browse our gallery of stunning photographs from Poomala, Kerala. See the beauty of the Western Ghats, serene dams, and lush tropical forests.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Photo Gallery',
    description: 'Stunning photographs from Poomala, Kerala',
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: '/IMG-20251101-WA0013.jpg',
        width: 1200,
        height: 630,
        alt: 'Poomala photo gallery',
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
