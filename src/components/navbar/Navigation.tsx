'use client';

import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '@/redux/pageSlice';
import type { RootState } from '@/redux/store'; // ✅ Correctly typed RootState
import Link from 'next/link';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentPage = useSelector((state: RootState) => state.page.currentPage);
  const dispatch = useDispatch();

  const handleNavClick = (pageId: string) => {
    dispatch(setCurrentPage(pageId));
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', link: '/rootClient/home' },
    { id: 'menu', label: 'Menu', link: '/rootClient/menu' },
    { id: 'reviews', label: 'Reviews', link: '/rootClient/reviews' },
    { id: 'contact', label: 'Contact', link: '/rootClient/contact' },
  ];

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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-200 ${currentPage === item.id
                  ? 'text-saffron bg-warm-beige'
                  : 'text-brown hover:text-saffron hover:bg-warm-beige/50'
                  }`}
              >
                <Link href={item.link}>
                  {item.label}
                </Link>
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-saffron rounded-full" />
                )}
              </button>
            ))}
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-warm-beige bg-white">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${currentPage === item.id
                    ? 'text-saffron bg-warm-beige font-medium'
                    : 'text-brown hover:text-saffron hover:bg-warm-beige/50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
