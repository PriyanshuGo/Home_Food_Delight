import { Star, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
function CustomerReviews() {
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
    return (
        <div>
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
                                    <p className="text-gray-700 mb-4 leading-relaxed">&#34;{testimonial.comment}&#34;</p>
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
        </div>
    )
}

export default CustomerReviews
