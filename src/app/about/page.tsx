import Image from 'next/image';
import { AIProTip } from '@/components/ai-pro-tip';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
          Our Philosophy: Your Best Day, Every Day
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We believe that everyone has the power to create a life they love. Our mission is to provide you with the tools, support, and guidance to unlock your full potential.
        </p>
      </header>

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <Image
                src="https://placehold.co/800x800.png"
                alt="Headshot of the lead coach"
                width={800}
                height={800}
                className="rounded-lg shadow-xl"
                data-ai-hint="professional headshot"
              />
            </CardContent>
          </Card>
          <div className="lg:hidden">
            <AIProTip context="building self-awareness and confidence" />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-headline font-bold text-foreground">Meet Your Coach</h2>
          <p className="text-muted-foreground">
            With over a decade of experience in personal development and leadership training, our certified life coach is dedicated to your growth. Having worked with hundreds of clients from all walks of life, from entrepreneurs and executives to artists and students, we have a proven track record of helping individuals navigate life's challenges and seize new opportunities.
          </p>
          <p className="text-muted-foreground">
            Our approach is holistic, compassionate, and results-oriented. We don't believe in one-size-fits-all solutions. Instead, we partner with you to understand your unique aspirations and obstacles, crafting a personalized coaching plan that empowers you to build momentum and create lasting change. We combine proven coaching methodologies with mindfulness practices and cutting-edge insights from neuroscience to help you not only achieve your goals but also enhance your overall well-being.
          </p>
          <h3 className="text-2xl font-headline font-bold text-foreground pt-4">Our Core Values</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Empathy:</strong> We listen to understand, creating a safe and non-judgmental space.</li>
            <li><strong>Authenticity:</strong> We encourage you to be your true self and live in alignment with your values.</li>
            <li><strong>Growth:</strong> We are committed to continuous learning and helping you push your boundaries.</li>
            <li><strong>Partnership:</strong> We work together with you, as a team, on your journey to success.</li>
          </ul>
          <div className="hidden lg:block pt-8">
            <AIProTip context="building self-awareness and confidence" />
          </div>
        </div>
      </div>
    </div>
  );
}
