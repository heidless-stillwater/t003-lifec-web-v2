import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Briefcase, Users, BrainCircuit, Crown, Wand2 } from 'lucide-react';
import { AIProTip } from '@/components/ai-pro-tip';

const services = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Personal Growth',
    description: 'Unlock your true potential, build self-confidence, and create a life aligned with your deepest values. We help you identify and overcome personal barriers to achieve a more fulfilling existence.',
    link: '/pricing',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Career Transition',
    description: 'Navigate your professional journey with clarity and purpose. Whether you\'re changing careers, seeking a promotion, or starting a business, we provide the strategy and support you need to succeed.',
    link: '/pricing',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Relationship Coaching',
    description: 'Cultivate stronger, healthier, and more meaningful connections. Learn powerful communication skills and strategies to improve your relationships with partners, family, and colleagues.',
    link: '/pricing',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Mindfulness & Stress Management',
    description: 'Learn to manage stress, increase focus, and live in the present moment. Our mindfulness coaching provides practical techniques to bring calm and balance to your busy life.',
    link: '/pricing',
  },
  {
    icon: <Crown className="h-10 w-10 text-primary" />,
    title: 'Leadership Development',
    description: 'Elevate your leadership skills to inspire and motivate your team effectively. We focus on authentic leadership, emotional intelligence, and strategic thinking to help you become a more impactful leader.',
    link: '/pricing',
  },
  {
    icon: <Wand2 className="h-10 w-10 text-primary" />,
    title: 'Custom Coaching Program',
    description: 'Have a unique goal in mind? We offer fully customized coaching programs tailored to your specific needs and aspirations. Let\'s build the perfect plan for you together.',
    link: '/contact',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
            Our Coaching Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Tailored programs designed to empower you in every aspect of your life.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <CardHeader className="items-center text-center p-6 bg-card">
                {service.icon}
                <CardTitle className="mt-4 font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 bg-card border-t">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={service.link}>Discover More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-24">
            <AIProTip context="choosing the right life coaching service to achieve personal goals" />
        </div>
      </div>
    </div>
  );
}
