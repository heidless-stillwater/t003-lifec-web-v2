import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { AIProTip } from '@/components/ai-pro-tip';

const pricingTiers = [
  {
    title: 'Discovery Session',
    price: '$99',
    period: 'one-time',
    description: 'A perfect starting point to gain clarity and see if coaching is right for you.',
    features: [
      'One 60-minute session',
      'Goal clarity exercise',
      'Actionable first steps',
      'Personalized session summary',
    ],
    cta: 'Book a Session',
    link: '/contact',
    popular: false,
  },
  {
    title: 'Momentum Package',
    price: '$450',
    period: '/month',
    description: 'Build momentum and make consistent progress towards your most important goals.',
    features: [
      'Four 60-minute sessions per month',
      'Unlimited email support',
      'Personalized development plan',
      'Resource library access',
    ],
    cta: 'Get Started',
    link: '/contact',
    popular: true,
  },
  {
    title: 'Transformation Program',
    price: '$1200',
    period: '/3 months',
    description: 'A deep-dive program for those committed to profound and lasting life changes.',
    features: [
      'Twelve 60-minute sessions',
      'Unlimited email & text support',
      'In-depth values assessment',
      'Bi-weekly progress reviews',
    ],
    cta: 'Begin Transformation',
    link: '/contact',
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
          Invest in Yourself
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Choose the plan that best fits your journey. We are committed to providing value and delivering results.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 items-stretch">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.title}
            className={`flex flex-col rounded-lg shadow-lg transition-all duration-300 ${tier.popular ? 'border-primary border-2 shadow-primary/20 -translate-y-4' : 'hover:shadow-xl hover:-translate-y-2'}`}
          >
            {tier.popular && (
              <div className="py-2 px-4 bg-primary text-primary-foreground text-center text-sm font-bold rounded-t-md">
                Most Popular
              </div>
            )}
            <CardHeader className="p-6">
              <CardTitle className="font-headline text-2xl">{tier.title}</CardTitle>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <CardDescription className="mt-4">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-6 mt-auto">
              <Button asChild size="lg" className={`w-full ${tier.popular ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}>
                <Link href={tier.link}>{tier.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-24 max-w-4xl mx-auto">
        <AIProTip context="making a decision about investing in personal growth and coaching" />
      </div>
    </div>
  );
}
