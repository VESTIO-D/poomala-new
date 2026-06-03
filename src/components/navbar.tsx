'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TreePine, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f8f6f3]/95 backdrop-blur-md shadow-warm border-b border-[#e8e4df]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            aria-label="VisitPoomala Home"
          >
            <TreePine className="h-6 w-6 text-[#5b7a6a]" />
            <span
              className={`text-xl font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-[#2d2a26]' : 'text-white'
              }`}
            >
              VisitPoomala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.href)
                    ? scrolled
                      ? 'text-[#5b7a6a]'
                      : 'text-white'
                    : scrolled
                      ? 'text-[#8a8580] hover:text-[#2d2a26]'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#5b7a6a] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`${scrolled ? 'text-[#2d2a26]' : 'text-white'}`}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-[#f8f6f3] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e4df]">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <TreePine className="h-5 w-5 text-[#5b7a6a]" />
                  <span className="text-lg font-semibold text-[#2d2a26]">
                    VisitPoomala
                  </span>
                </Link>
              </div>
              <nav className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-6 py-3 text-sm font-medium transition-colors border-l-2 ${
                      isActive(link.href)
                        ? 'text-[#5b7a6a] border-[#5b7a6a] bg-[#5b7a6a]/5'
                        : 'text-[#8a8580] border-transparent hover:text-[#2d2a26] hover:bg-[#5b7a6a]/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
