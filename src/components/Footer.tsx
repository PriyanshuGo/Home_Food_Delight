import { MapPin, Phone, Mail, Clock, ChefHat, Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import { Separator } from './ui/separator';

export default function Footer() {

    return (
        <footer className="bg-brown text-white mt-16 border-t border-saffron/20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center">
                                <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
                            </div>
                            <div>
                                <h3 className="text-lg text-white">Home Food Delight</h3>
                                <p className="text-sm text-white/70">Authentic Tiffin Service</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/80 leading-relaxed">
                            Bringing the taste of home to your doorstep with fresh, authentic Indian meals prepared daily with love and traditional recipes.
                        </p>
                        <div className="flex items-center space-x-2 text-white/70">
                            <Heart className="h-4 w-4 text-saffron" />
                            <span className="text-sm">Made with love since 2020</span>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg text-white">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-saffron mt-1 flex-shrink-0" />
                                <div className="text-sm text-white/80">
                                    <p>Flat No. 1, Tower B, Anandam Apartment,</p>
                                    <p>Dwarka Sector 28, New Delhi</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-saffron" />
                                <a href="tel:+919876543210" className="text-sm text-white/80 hover:text-white transition-colors">
                                    +91 88822 92184
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-saffron" />
                                <a href="mailto: homefooddelightdelhi@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors">
                                    homefooddelightdelhi@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="space-y-4">
                        <h3 className="text-lg text-white">Operating Hours</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <Clock className="h-4 w-4 text-saffron mt-1" />
                                <div className="text-sm text-white/80">
                                    <p className="text-white">Order Timing:</p>
                                    <p>6:00 AM - 10:00 AM</p>
                                    <p className="text-xs text-white/60">(Daily orders)</p>
                                </div>
                            </div>
                            <div className="text-sm text-white/80">
                                <p className="text-white">Working Days:</p>
                                <p>Monday - Sunday</p>
                                <p className="text-xs text-white/60">(No holidays for hunger!)</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links & Social */}
                    <div className="space-y-4">
                        <h3 className="text-lg text-white">Quick Links</h3>
                        <div className="space-y-2">
                            <a href="#menu" className="block text-sm text-white/80 hover:text-white transition-colors">
                                Today's Menu
                            </a>
                            <a href="#about" className="block text-sm text-white/80 hover:text-white transition-colors">
                                About Us
                            </a>
                            <a href="#pricing" className="block text-sm text-white/80 hover:text-white transition-colors">
                                Pricing
                            </a>
                            <a href="#contact" className="block text-sm text-white/80 hover:text-white transition-colors">
                                Contact
                            </a>
                            <a href="#faq" className="block text-sm text-white/80 hover:text-white transition-colors">
                                FAQ
                            </a>
                        </div>


                    </div>
                </div>

                <Separator className="my-8 bg-white/20" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-white/70">
                            &copy; 2025 Home Food Delight.
                        </p>
                        <p className="text-xs text-white/60 mt-1">
                            Made with ❤️ for food lovers everywhere
                        </p>
                    </div>

                    <div className="">
                        <h4 className="text-sm text-white mb-3">Follow Us</h4>
                        <div className="flex space-x-3">
                            <a
                                href="https://www.instagram.com/homefooddelightdelhi/" target="_blank"
                                className="w-8 h-8 bg-saffron/20 rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-4 w-4 text-white" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/home-food-delight/posts/?feedView=all" target="_blank"
                                className="w-8 h-8 bg-saffron/20 rounded-full flex items-center justify-center hover:bg-saffron transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-4 w-4 text-white" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Special Offers Banner */}
                <div className="mt-8 bg-saffron p-5 rounded-lg text-center shadow-md shadow-orange-600/50">
                    <p className="text-white/90 text-base font-semibold">
                        *Delivery Free within <span className="font-bold">3km</span> 🚚
                    </p>
                    <p className="text-white/70 text-sm mt-1 italic">
                        Hurry, offer valid for a limited time!
                    </p>
                </div>

            </div>
        </footer>
    );
}