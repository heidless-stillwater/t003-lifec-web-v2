import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Briefcase, Users, Star } from 'lucide-react';
import Image from 'next/image';
import { AIProTip } from '@/components/ai-pro-tip';

export default function Home() {
  const services = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Personal Growth',
      description: 'Embark on a transformative journey to discover your true potential and live a more fulfilling life.',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: 'Career Transition',
      description: 'Navigate your career path with confidence. We help you find a profession that aligns with your passions.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Relationship Coaching',
      description: 'Build stronger, healthier relationships. Learn to communicate effectively and connect on a deeper level.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/50">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Inspirational background"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-20"
          data-ai-hint="calm landscape"
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold tracking-tight text-foreground">
            Unlock Your Full Potential
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Today is your best day to start a new chapter. Let us guide you on your path to success and happiness.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Start Here</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Coaching Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a range of personalized coaching services to help you achieve your goals.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col text-center items-center transition-transform transform hover:-translate-y-2 duration-300">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="link" className="text-accent hover:text-accent/80">
                      <Link href="/pricing">Learn More &rarr;</Link>
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</h2>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="font-bold">Incredible Transformation</p>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg italic text-foreground">
                    "Working with Best Day Coaching has been a life-changing experience. I've gained so much clarity and confidence. I couldn't be more grateful!"
                  </blockquote>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold text-muted-foreground">- Alex Johnson</p>
                </CardFooter>
              </Card>
              <Button asChild variant="outline">
                <Link href="/testimonials">Read More Testimonials</Link>
              </Button>
            </div>
            <div className="space-y-4">
              <AIProTip context="starting a self-improvement journey" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
