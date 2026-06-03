import type { Metadata } from 'next';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the VisitPoomala team. Plan your visit to Poomala, Thrissur, Kerala. Contact us via WhatsApp, email, or our contact form.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us',
    description:
      'Get in touch with the VisitPoomala team. Plan your visit to Poomala, Kerala.',
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: '/IMG-20251101-WA0013.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact VisitPoomala',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
