// CartHydrator.tsx
'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCartFromStorage } from '@/redux/cartSlice';
import { RootState } from '@/redux/store';

export function CartHydrator({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const data = localStorage.getItem('cartItems');
      if (data) {
        dispatch(loadCartFromStorage(JSON.parse(data)));
      }
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
    }
  }, []);

  // Persist to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
    }
  }, [cartItems]);

  return <>{children}</>;
}
