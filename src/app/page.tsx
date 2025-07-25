'use client';

import React from 'react';
import { Provider } from 'react-redux';
import {store} from '@/redux/store';
import Homepage from '@/pages/Homepage';
import Navigation from '@/components/navbar/Navigation';

export default function Home() {

  return (
    <Provider store={store}>
      {/* Alert Banner */}
      <div className="bg-saffron text-white py-2 px-4 text-center">
        <p className="text-sm">
          🍽️ “Freshly Prepared. Google-Certified Chefs. Real Home Food — Made Just for You.”
        </p>
      </div>
      {/* Navigation */}
      <Navigation />

      <Homepage />
    </Provider>

  );
}
