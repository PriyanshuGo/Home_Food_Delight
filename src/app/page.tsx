'use client';

import React, { useState } from 'react';
import Homepage from '@/components/Homepage';
import Navigation from '@/components/navbar/Navigation';

export default function Home() {

  return (
    <div>
      {/* Alert Banner */}
      <div className="bg-saffron text-white py-2 px-4 text-center">
        <p className="text-sm">
          🍽️ “Freshly Prepared. Google-Certified Chefs. Real Home Food — Made Just for You.”
        </p>
      </div>
      {/* Navigation */}
      <Navigation />

      {/* <Homepage setCurrentPage={setCurrentPage} /> */}
    </div>
  );
}
