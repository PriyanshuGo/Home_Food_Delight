"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { Plus, Star, Clock, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { menuItems } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '@/redux/cartSlice';
import { ProductItem, Category } from '@/types/product'
import { CartItem } from '@/types/product';
import { RootState } from '@/redux/store';
import { debounce } from "@/hooks/useDebounceHook";
import Image from 'next/image';
import MenuCard from '@/components/MenuCard';


const MenuPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [filteredItems, setFilteredItems] = useState<ProductItem[]>(menuItems);


  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories: Category[] = [
    { id: 'all', name: 'All Items', icon: '🍽️' },                    // General dining
    { id: 'combos', name: 'COMBOS', icon: '🍱' },                    // Bento box (combo meals)
    { id: 'rocking-rolls', name: `ROCKING ROLLS`, icon: '🌯' },      // Burrito/Wrap (rolls)
    { id: 'main-course', name: `MAIN COURSE`, icon: '🍛' },          // Curry rice plate
    { id: 'chinese', name: `CHINESE`, icon: '🥢' },                  // Chopsticks
    { id: 'chefs-special', name: `CHEF'S SPECIAL`, icon: '👨‍🍳' },     // Chef hat icon
    { id: 'economy-meals', name: `ECONOMY MEALS`, icon: '💰' },      // Money bag for budget meals
  ];

  const filterByCategory = (category: string): void => {
    const results: ProductItem[] = menuItems.filter((item: ProductItem) => {
      if (category === 'all') {
        return item;
      } else {
        return item.category === category
      }
    });
    setFilteredItems(results);
  }

  const handleSearch = (query: string): void => {
    const trimmedQuery = query.trim();
    const results = menuItems.filter((item: ProductItem) => item.name.toLowerCase().includes(trimmedQuery.toLowerCase()));
    setFilteredItems(results);
  }
  const debouncedHandleSearch = useCallback(debounce(handleSearch, 500), []);

  useEffect(() => {
    if (searchTerm.trim()) {
      debouncedHandleSearch(searchTerm);
      setActiveCategory("");
      console.log("Search term:", searchTerm);
    }
  }, [searchTerm]);


  useEffect(() => {
    if (activeCategory !== "") {
      filterByCategory(activeCategory);
    }
  }, [activeCategory]);

  const handleAddToCart = (item: ProductItem): void => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  }
  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <div className="min-h-screen bg-warm-white py-8">
        <div className="container mx-auto px-4">

          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brown mb-4">
              Today&apos;s Fresh Menu
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Authentic home-style cooking prepared fresh daily with traditional recipes
            </p>
          </div>

          {/* Search and Category Filter Section */}
          <div className="mb-8 space-y-4">
            <div className="max-w-md mx-auto">
              <Input
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
                onClick={() => {
                  if (searchTerm) {
                    handleSearch(searchTerm);
                    setActiveCategory("");
                  }
                }}
                className="w-full"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category: Category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 ${activeCategory === category.id
                    ? 'bg-saffron hover:bg-saffron-dark text-white'
                    : 'border-saffron text-saffron hover:bg-saffron hover:text-white'
                    }`}                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-8">

            {filteredItems.map((item: ProductItem) => {
              const cartItem = cartItems.find((ci: CartItem) => ci.id === item.id);
              const quantity = cartItem ? cartItem.quantity : 0;
              return (
                <MenuCard
                  key={item.id}
                  item={item}
                  quantity={quantity}
                  onAddToCart={handleAddToCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              )
            })}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-brown mb-2">No dishes found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Floating Cart Button */}
          {/* {cartItems.length > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
            <Button
              size="lg"
              className="bg-saffron hover:bg-saffron-dark text-white px-6 py-3 rounded-full shadow-warm-lg"
              onClick={() => setShowOrderModal(true)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              View Cart ({} items)
            </Button>
          </div>
        )} */}

        </div>
      </div>
    </div>
  );
};

export default MenuPage;