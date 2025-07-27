import { ArrowRight, MessageSquare, ChefHat, } from 'lucide-react';

function OrderProcess() {
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
        <div>
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
        </div>
    )
}

export default OrderProcess
