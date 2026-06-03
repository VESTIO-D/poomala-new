'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#5b7a6a] text-white shadow-warm-lg transition-all duration-300 hover:bg-[#4d6b5c] hover:shadow-warm-lg hover:animate-gentle-pulse focus:outline-none focus:ring-2 focus:ring-[#5b7a6a] focus:ring-offset-2 focus:ring-offset-[#f8f6f3]"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
