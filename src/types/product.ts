// src/types/product.ts

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  veg: boolean;
  popular: boolean;
  preparationTime: string;
}

export interface CartItem extends ProductItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}