"use client";

import { ArrowRight, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useRouter } from 'next/navigation';

function CTA() {
    const router = useRouter();

    return (
        <div>
            <section className="relative bg-white py-20">
                <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 to-warm-beige opacity-80 pointer-events-none" />

                <div className="relative container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <Award className="h-14 w-14 text-saffron mx-auto" />

                        <h2 className="text-4xl md:text-5xl font-extrabold text-brown leading-tight">
                            Your Daily Dose of <span className="text-saffron">Home-Cooked</span> Happiness 🍱
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Tired of oily takeout? Enjoy delicious, balanced meals made with love —
                            just like your mom would make. Delivered fresh, every day.
                        </p>

                        {/* Subtle pricing assurance */}
                        <p className="text-sm text-muted-foreground italic">
                            No hidden charges — you only pay for your meal + 50% of the delivery fee.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button
                                size="lg"
                                className="bg-saffron text-white hover:bg-saffron-dark px-8 py-3 text-lg font-semibold shadow-md"
                                onClick={() => router.push(('/menu'))}
                            >
                                View Today’s Menu
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <Button
                                size="lg"
                                variant="ghost"
                                className="border border-saffron text-saffron hover:bg-saffron hover:text-white px-8 py-3 text-lg"
                            >
                                Call Us: +91 88822 92184
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CTA
