"use client";
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useRouter } from 'next/navigation';

function HeroPage() {
    const router = useRouter();
    return (
        <div>
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
                            “We don’t reheat food — we cook it fresh when you order. Order early, and enjoy meals that feel like home.”
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="bg-saffron hover:bg-saffron-dark text-white px-8 py-3 text-lg shadow-warm-lg"
                                onClick={() => router.push(('/menu'))}
                            >
                                View Today&apos;s Menu
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4 text-saffron" />
                                <span>Order now</span>
                            </div>
                        </div>

                        <div className="flex justify-center items-center space-x-8 pt-8">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-saffron">100+</p>
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
        </div>
    )
}

export default HeroPage
