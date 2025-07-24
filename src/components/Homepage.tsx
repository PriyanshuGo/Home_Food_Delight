import { ArrowRight, Clock, MessageSquare, ShoppingCart, Star, ChefHat, Heart, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Homepage({ setCurrentPage }) {
  const popularDishes = [
    {
      id: 'rajma-chawal',
      name: 'Rajma Chawal',
      description: 'Traditional kidney bean curry served with steamed basmati rice',
      price: 120,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      rating: 4.8,
      popular: true
    },
    {
      id: 'dal-tadka',
      name: 'Dal Tadka Thali',
      description: 'Yellow lentil curry with roti, rice, pickle, and salad',
      price: 100,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      rating: 4.7,
      popular: true
    },
    {
      id: 'chole-bhature',
      name: 'Chole Bhature',
      description: 'Spiced chickpea curry served with fluffy deep-fried bread',
      price: 140,
      image: 'https://images.unsplash.com/photo-1626132647523-66ef2732c4d3?w=400&h=300&fit=crop',
      rating: 4.9,
      popular: true
    },
    {
      id: 'paneer-butter-masala',
      name: 'Paneer Butter Masala',
      description: 'Creamy cottage cheese curry with naan and rice',
      price: 160,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
      rating: 4.8,
      popular: true
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Absolutely love the homemade taste! Reminds me of my mother\'s cooking. Fresh and delicious every time.',
      location: 'Mumbai'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      rating: 5,
      comment: 'Best tiffin service in the city. Always on time and the quality is consistently amazing. Highly recommended!',
      location: 'Delhi'
    },
    {
      id: 3,
      name: 'Anita Gupta',
      rating: 5,
      comment: 'Perfect for office lunch. Healthy, tasty, and affordable. The ordering process is so simple via WhatsApp.',
      location: 'Bangalore'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Browse Menu',
      description: 'Explore our daily fresh menu with authentic home-style dishes',
      icon: ChefHat,
      color: 'bg-saffron'
    },
    {
      step: 2,
      title: 'Fill Your Details',
      description: 'Add your contact information and delivery preferences',
      icon: MessageSquare,
      color: 'bg-saffron-light'
    },
    {
      step: 3,
      title: 'Send Order on WhatsApp',
      description: 'Complete your order through our convenient WhatsApp system',
      icon: MessageSquare,
      color: 'bg-saffron-dark'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-beige to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-saffron text-saffron bg-white/80">
              ⭐ Authentic Home-Style Cooking Since 2020
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-brown leading-tight">
              Taste of <span className="text-saffron">Home</span>,<br />
              Delivered Fresh Daily
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience authentic Indian home cooking with our freshly prepared tiffin meals. 
              Made with love, delivered with care - just like home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-saffron hover:bg-saffron-dark text-white px-8 py-3 text-lg shadow-warm-lg"
                onClick={() => setCurrentPage('menu')}
              >
                View Today's Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-saffron" />
                <span>Order before 10:00 AM</span>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-8 pt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-saffron">500+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-saffron">4.8⭐</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-saffron">100%</p>
                <p className="text-sm text-muted-foreground">Fresh Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step process to get fresh, homemade meals delivered to your doorstep
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="text-center space-y-4">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto shadow-warm`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-brown">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 transform translate-x-12">
                      <ArrowRight className="h-6 w-6 text-saffron" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 bg-warm-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">
              Today's Popular Dishes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fresh, authentic flavors prepared daily with traditional recipes and the finest ingredients
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-warm-lg transition-all duration-300 border-0 bg-white">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {dish.popular && (
                    <Badge className="absolute top-3 left-3 bg-saffron text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-saffron fill-current" />
                      <span className="text-xs font-medium">{dish.rating}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-brown">{dish.name}</CardTitle>
                  <CardDescription className="text-sm">{dish.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-saffron">₹{dish.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-saffron hover:bg-saffron-dark text-white"
                      onClick={() => setCurrentPage('menu')}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-saffron text-saffron hover:bg-saffron hover:text-white"
              onClick={() => setCurrentPage('menu')}
            >
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real reviews from people who love our authentic home-style cooking
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-warm bg-warm-beige/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-saffron fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.comment}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-brown">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Award className="h-16 w-16 text-white mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Experience Authentic Home Cooking?
            </h2>
            <p className="text-lg text-white/90">
              Join hundreds of satisfied customers who trust us for their daily meals. 
              Fresh, healthy, and delicious food - just like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-saffron hover:bg-white/90 px-8 py-3"
                onClick={() => setCurrentPage('menu')}
              >
                Order Now
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-saffron px-8 py-3"
              >
                Call Us: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}