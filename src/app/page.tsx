import HeroPage from '@/components/HeroPage';
import OrderProcess from '@/components/OrderProcess';
import PopularDishes from '@/components/PopularDishes';
import CustomerReviews from '@/components/CustomerReviews';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Homepage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <HeroPage />

      {/* How It Works */}
      <OrderProcess />

      {/* Popular Dishes */}
      <PopularDishes />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}