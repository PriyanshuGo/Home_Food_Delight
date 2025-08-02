"use client";

import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


function PopularDishes() {
    const router = useRouter();

    const popularDishes = [
        {
            id: 'rajma-chawal',
            name: 'Rajma Chawal',
            description: 'Traditional kidney bean curry served with steamed basmati rice',
            price: 120,
            image: '/menuItems/FishFry.webp',
            rating: 4.8,
            popular: true
        },
        {
            id: 'dal-tadka',
            name: 'Dal Tadka Thali',
            description: 'Yellow lentil curry with roti, rice, pickle, and salad',
            price: 100,
            image: '/menuItems/FishFry.webp',
            rating: 4.7,
            popular: true
        },
        {
            id: 'chole-bhature',
            name: 'Chole Bhature',
            description: 'Spiced chickpea curry served with fluffy deep-fried bread',
            price: 140,
            image: '/menuItems/FishFry.webp',
            rating: 4.9,
            popular: true
        },
        {
            id: 'paneer-butter-masala',
            name: 'Paneer Butter Masala',
            description: 'Creamy cottage cheese curry with naan and rice',
            price: 160,
            image: '/menuItems/FishFry.webp',
            rating: 4.8,
            popular: true
        }
    ];
    return (
        <div>
            <section className="py-16 bg-warm-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">
                            Today&apos;s Popular Dishes
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
                                        <Image
                                            src={dish.image}
                                            alt={dish.name}
                                            width={400}
                                            height={300}
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
                                            onClick={() => router.push(('/menu'))}
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
                            onClick={() => router.push(('/menu'))}
                        >
                            View Full Menu
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PopularDishes
