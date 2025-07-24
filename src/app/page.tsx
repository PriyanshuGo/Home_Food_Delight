'use client';
import React, { useState } from 'react';
import Homepage from '@/components/Homepage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Alert Banner */}
      <div className="bg-saffron text-white py-2 px-4 text-center">
        <p className="text-sm">
          🍽️ Fresh meals made daily. Please place your order before 10:00 AM for lunch delivery.
        </p>
      </div>
      {/* Main Content */}
      <main>
        <Homepage setCurrentPage={setCurrentPage} />
      </main>
    </div>
  );
}
