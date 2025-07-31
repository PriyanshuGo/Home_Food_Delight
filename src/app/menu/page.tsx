"use client";
import { useState } from 'react';
import { Plus, Star, Clock, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { menuItems } from '@/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '@/redux/cartSlice';
import { ProductItem, Category } from '@/types/product'
import { CartItem } from '@/types/product';
import { RootState } from '@/redux/store'; 


const MenuPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },                    // General dining
    { id: 'chefs-special', name: `CHEF'S SPECIAL`, icon: '👨‍🍳' },     // Chef hat icon
    { id: 'combos', name: 'COMBOS', icon: '🍱' },                    // Bento box (combo meals)
    { id: 'rocking-rolls', name: `ROCKING ROLLS`, icon: '🌯' },      // Burrito/Wrap (rolls)
    { id: 'main-course', name: `MAIN COURSE`, icon: '🍛' },          // Curry rice plate
    { id: 'chinese', name: `CHINESE`, icon: '🥢' },                  // Chopsticks
    { id: 'economy-meals', name: `ECONOMY MEALS`, icon: '💰' },      // Money bag for budget meals
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                // value={/* searchTerm */}
                // onChange={/* setSearchTerm */}
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
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-warm-lg transition-all duration-300 border-0 bg-white flex flex-col justify-between"
                >
                  {/* Image Section */}
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {item.popular && (
                        <Badge className="bg-saffron text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      {item.veg && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <Leaf className="h-3 w-3 mr-1" />
                          Veg
                        </Badge>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-saffron fill-current" />
                        <span className="text-xs font-medium">{item.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Header */}
                  <CardHeader>
                    <CardTitle className="text-lg text-brown">{item.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-saffron">₹{item.price}</span>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{item.preparationTime}</span>
                      </div>
                    </div>

                    {quantity > 0 ? (
                      <div className='flex items-center justify-between'>
                        <div>
                          <Button
                            variant="default"
                            className="bg-saffron hover:bg-saffron-dark text-white"
                            onClick={() => handleUpdateQuantity(item.id, quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="mx-2">{quantity}</span>
                          <Button
                            variant="default"
                            className="bg-saffron hover:bg-saffron-dark text-white"
                            onClick={() => handleUpdateQuantity(item.id, quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="default"
                          className="bg-saffron hover:bg-saffron-dark text-white"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove from Cart
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"

                        className="w-full bg-saffron hover:bg-saffron-dark text-white"
                        onClick={() => handleAddToCart(item)}
                      >
                        <Plus className="h-4 w-4 mr-2" />

                        Add to Cart
                      </Button>
                    )}
                  </CardContent>
                </Card>
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