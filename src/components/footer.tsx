import Link from 'next/link';
import { TreePine, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { siteConfig, navLinks, places } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] text-[#e8e4df]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <TreePine className="h-6 w-6 text-[#5b7a6a]" />
              <span className="text-xl font-semibold text-white">
                VisitPoomala
              </span>
            </Link>
            <p className="text-sm text-[#8a8580] leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8a8580] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Destinations
            </h3>
            <ul className="space-y-2.5">
              {places.map((place) => (
                <li key={place.slug}>
                  <Link
                    href={`/places/${place.slug}`}
                    className="text-sm text-[#8a8580] hover:text-white transition-colors"
                  >
                    {place.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#5b7a6a] mt-0.5 shrink-0" />
                <span className="text-sm text-[#8a8580]">
                  Poomala, Thrissur District, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#5b7a6a] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#8a8580] hover:text-white transition-colors"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#5b7a6a] shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-[#8a8580] hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3d3a36] mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8a8580]">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8580] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8580] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8580] hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
