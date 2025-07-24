import {
  ArrowRight,
  Clock,
  MessageSquare,
  ShoppingCart,
  Star,
  ChefHat,
  Heart,
  Award,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import React from 'react';

type HomepageProps = {
  setCurrentPage: (page: string) => void;
};

export default function Homepage({ setCurrentPage }: HomepageProps) {
  const popularDishes = [
    {
      id: 'rajma-chawal',
      name: 'Rajma Chawal',
      description:
        'Traditional kidney bean curry served with steamed basmati rice',
      price: 120,
      image:
        'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      rating: 4.8,
      popular: true,
    },
    {
      id: 'dal-tadka',
      name: 'Dal Tadka Thali',
      description:
        'Yellow lentil curry with roti, rice, pickle, and salad',
      price: 100,
      image:
        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      rating: 4.7,
      popular: true,
    },
    {
      id: 'chole-bhature',
      name: 'Chole Bhature',
      description:
        'Spiced chickpea curry served with fluffy deep-fried bread',
      price: 140,
      image:
        'https://images.unsplash.com/photo-1626132647523-66ef2732c4d3?w=400&h=300&fit=crop',
      rating: 4.9,
      popular: true,
    },
    {
      id: 'paneer-butter-masala',
      name: 'Paneer Butter Masala',
      description: 'Creamy cottage cheese curry with naan and rice',
      price: 160,
      image:
        'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
      rating: 4.8,
      popular: true,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      comment:
        "Absolutely love the homemade taste! Reminds me of my mother's cooking. Fresh and delicious every time.",
      location: 'Mumbai',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      rating: 5,
      comment:
        'Best tiffin service in the city. Always on time and the quality is consistently amazing. Highly recommended!',
      location: 'Delhi',
    },
    {
      id: 3,
      name: 'Anita Gupta',
      rating: 5,
      comment:
        'Perfect for office lunch. Healthy, tasty, and affordable. The ordering process is so simple via WhatsApp.',
      location: 'Bangalore',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Browse Menu',
      description:
        'Explore our daily fresh menu with authentic home-style dishes',
      icon: ChefHat,
      color: 'bg-saffron',
    },
    {
      step: 2,
      title: 'Fill Your Details',
      description:
        'Add your contact information and delivery preferences',
      icon: MessageSquare,
      color: 'bg-saffron-light',
    },
    {
      step: 3,
      title: 'Send Order on WhatsApp',
      description:
        'Complete your order through our convenient WhatsApp system',
      icon: MessageSquare,
      color: 'bg-saffron-dark',
    },
  ];

  return (
    <div className="p-4 space-y-12">
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold">
          Experience authentic Indian home cooking with our freshly prepared
          tiffin meals.
        </h1>
        <p className="text-muted-foreground">
          Made with love, delivered with care — just like home.
        </p>
        <div className="flex justify-center mt-4 gap-6">
          <div>
            <p className="text-xl font-bold">500+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <p className="text-xl font-bold">4.8⭐</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div>
            <p className="text-xl font-bold">100%</p>
            <p className="text-sm text-muted-foreground">Fresh Daily</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Simple 3-step process to get fresh, homemade meals delivered to your
          doorstep
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <Card key={step.step} className={`border ${step.color}`}>
              <CardHeader>
                <step.icon className="w-6 h-6" />
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Fresh, authentic flavors prepared daily with traditional recipes and
          the finest ingredients
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDishes.map((dish) => (
            <Card key={dish.id} className="hover:shadow-lg">
              <ImageWithFallback
                src={dish.image}
                alt={dish.name}
                className="w-full h-40 object-cover rounded-t"
              />
              <CardHeader>
                <CardTitle>{dish.name}</CardTitle>
                <CardDescription>{dish.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <p>₹{dish.price}</p>
                <span className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4" />
                  {dish.rating}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">
          Real reviews from people who love our authentic home-style cooking
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-muted p-4">
              <CardContent>
                <p className="italic text-sm">"{testimonial.comment}"</p>
                <div className="mt-2 font-semibold text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">
          Join hundreds of satisfied customers who trust us for their daily
          meals.
        </h2>
        <p className="text-muted-foreground">
          Fresh, healthy, and delicious food — just like home.
        </p>
        <Button
          size="lg"
          className="bg-saffron hover:bg-saffron-dark transition"
          onClick={() => setCurrentPage('order')}
        >
          Order Now on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  );
}
