'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { siteConfig } from '@/lib/data';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          from_email: formData.email,
          message: formData.message,
        },
        siteConfig.emailjs.publicKey
      );

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-72 sm:h-80 flex items-center justify-center">
        <Image
          src="/IMG-20251101-WA0007.jpg"
          alt="Tropical forest trails and streams near Poomala"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2d2a26]/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
            We would love to hear from you. Get in touch to plan your Poomala experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-[#e8e4df] bg-white">
                <CardContent className="pt-6 pb-6 px-6">
                  <h2 className="text-2xl font-semibold text-[#2d2a26] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-[#8a8580] text-sm mb-6">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-[#2d2a26]">
                          Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className="border-[#e8e4df] focus:border-[#5b7a6a] focus:ring-[#5b7a6a]/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-[#2d2a26]">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="border-[#e8e4df] focus:border-[#5b7a6a] focus:ring-[#5b7a6a]/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-[#2d2a26]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="border-[#e8e4df] focus:border-[#5b7a6a] focus:ring-[#5b7a6a]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-[#2d2a26]">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your travel plans..."
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className="border-[#e8e4df] focus:border-[#5b7a6a] focus:ring-[#5b7a6a]/20 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#5b7a6a] hover:bg-[#4d6b5c] text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="border-[#e8e4df] bg-white">
                <CardContent className="pt-5 pb-5 px-5 space-y-5">
                  <h3 className="font-semibold text-[#2d2a26] text-lg">
                    Get in Touch
                  </h3>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b7a6a]/10 shrink-0">
                      <Phone className="h-4 w-4 text-[#5b7a6a]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2d2a26]">WhatsApp</p>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#5b7a6a] hover:text-[#4d6b5c] transition-colors"
                      >
                        {siteConfig.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b7a6a]/10 shrink-0">
                      <Mail className="h-4 w-4 text-[#5b7a6a]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2d2a26]">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-[#5b7a6a] hover:text-[#4d6b5c] transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b7a6a]/10 shrink-0">
                      <MapPin className="h-4 w-4 text-[#5b7a6a]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2d2a26]">Location</p>
                      <p className="text-sm text-[#8a8580]">
                        Poomala, Thrissur District, Kerala, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#5b7a6a] bg-[#5b7a6a] text-white">
                <CardContent className="pt-5 pb-5 px-5 text-center space-y-3">
                  <h3 className="font-semibold text-lg">Quick Response</h3>
                  <p className="text-sm text-white/80">
                    For the fastest response, reach out via WhatsApp. We typically reply within an hour during business hours.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-white text-[#5b7a6a] hover:bg-[#f8f6f3]"
                  >
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#e8e4df] bg-white">
                <CardContent className="pt-5 pb-5 px-5">
                  <h3 className="font-semibold text-[#2d2a26] mb-3">
                    Planning Your Visit?
                  </h3>
                  <p className="text-sm text-[#8a8580] mb-3">
                    Check out our destination guides for detailed information.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#5b7a6a] text-[#5b7a6a] hover:bg-[#5b7a6a] hover:text-white"
                  >
                    <Link href="/places">Explore Places</Link>
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
