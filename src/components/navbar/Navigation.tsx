'use client';

import { ShoppingBag, Menu, X, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import React from 'react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg border-b border-saffron/20 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
              <ChefHat className="h-6 w-6 text-black" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-brown">Home Food Delight</h1>
              <p className="text-xs text-saffron">Authentic Tiffin Service</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="relative px-3 py-2 rounded-lg transition-all duration-200 text-brown hover:text-saffron hover:bg-warm-beige/50">
              Home
            </button>
            <button className="relative px-3 py-2 rounded-lg transition-all duration-200 text-brown hover:text-saffron hover:bg-warm-beige/50">
              Menu
            </button>
            <button className="relative px-3 py-2 rounded-lg transition-all duration-200 text-brown hover:text-saffron hover:bg-warm-beige/50">
              Reviews
            </button>
            <button className="relative px-3 py-2 rounded-lg transition-all duration-200 text-brown hover:text-saffron hover:bg-warm-beige/50">
              Contact
            </button>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="relative border-saffron text-saffron hover:bg-saffron hover:text-white"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Cart</span>
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-saffron"
              >
                3
              </Badge>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-brown"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden border-t border-warm-beige bg-white">
          <div className="py-4 space-y-2">
            <button className="block w-full text-left px-4 py-3 rounded-lg text-brown hover:text-saffron hover:bg-warm-beige/50">
              Home
            </button>
            <button className="block w-full text-left px-4 py-3 rounded-lg text-brown hover:text-saffron hover:bg-warm-beige/50">
              Menu
            </button>
            <button className="block w-full text-left px-4 py-3 rounded-lg text-brown hover:text-saffron hover:bg-warm-beige/50">
              Reviews
            </button>
            <button className="block w-full text-left px-4 py-3 rounded-lg text-brown hover:text-saffron hover:bg-warm-beige/50">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
