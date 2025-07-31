import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AIProTip } from '@/components/ai-pro-tip';

const testimonials = [
  {
    name: 'Alex Johnson',
    title: 'Software Engineer',
    quote: "Working with Best Day Coaching has been a life-changing experience. I've gained so much clarity on my career path and the confidence to pursue my dreams. I couldn't be more grateful!",
    rating: 5,
    avatar: 'https://placehold.co/100x100.png'
  },
  {
    name: 'Maria Garcia',
    title: 'Entrepreneur',
    quote: "The mindfulness techniques I learned have drastically reduced my stress levels. I'm more present with my family and more focused at work. It's been an incredible transformation.",
    rating: 5,
    avatar: 'https://placehold.co/101x101.png'
  },
  {
    name: 'David Chen',
    title: 'Creative Director',
    quote: "I was feeling stuck and uninspired. The leadership coaching helped me rediscover my passion and lead my team with renewed energy and vision. Highly recommended!",
    rating: 5,
    avatar: 'https://placehold.co/102x102.png'
  },
  {
    name: 'Sarah Lee',
    title: 'Marketing Manager',
    quote: 'The relationship coaching provided practical tools that my partner and I use every day. Our communication has never been better.',
    rating: 5,
    avatar: 'https://placehold.co/103x103.png'
  },
  {
    name: 'Tom Roberts',
    title: 'Freelance Writer',
    quote: "I finally finished my novel! The personal growth sessions helped me overcome my procrastination and self-doubt. It was the accountability I needed.",
    rating: 4,
    avatar: 'https://placehold.co/104x104.png'
  },
  {
    name: 'Emily White',
    title: 'Student',
    quote: "As a student, I felt overwhelmed. Coaching helped me with time management and setting realistic goals. I feel much more in control of my life now.",
    rating: 5,
    avatar: 'https://placehold.co/105x105.png'
  }
];

export default function TestimonialsPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
            What Our Clients Say
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Real stories from real people who have transformed their lives with our help.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col bg-card rounded-lg shadow-lg overflow-hidden">
              <CardContent className="p-6 flex-grow">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base italic text-foreground border-l-4 border-primary pl-4">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="p-6 bg-card border-t flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                  <AvatarFallback><User /></AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
            <AIProTip context="understanding the benefits and impact of life coaching from others' experiences" />
        </div>
      </div>
    </div>
  );
}
