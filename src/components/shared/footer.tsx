import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="w-full border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              Helping you find clarity and achieve your goals, one day at a time.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary">About</Link></li>
              <li><Link href="/services" className="text-sm hover:text-primary">Services</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-primary">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">123 Wellness Lane, Harmony City, 45678</li>
              <li className="flex items-center">
                <a href="mailto:contact@bestdaycoaching.com" className="hover:text-primary">
                  contact@bestdaycoaching.com
                </a>
              </li>
              <li className="flex items-center">
                <a href="tel:+1-555-123-4567" className="hover:text-primary">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-semibold">Follow Us</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Best Day Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
