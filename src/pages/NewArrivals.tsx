import { PageTransition } from '@/components/PageTransition';
import { ProductCard } from '@/components/ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const newProducts = [
  { id: 7, name: 'Silk Blouse', price: 189, image: product1, category: 'clothing' },
  { id: 8, name: 'Leather Jacket', price: 599, image: product2, category: 'clothing' },
  { id: 9, name: 'Wool Coat', price: 799, image: product3, category: 'clothing' },
  { id: 10, name: 'Cashmere Sweater', price: 349, image: product4, category: 'clothing' },
  { id: 11, name: 'Designer Dress', price: 459, image: product5, category: 'clothing' },
  { id: 12, name: 'Tailored Blazer', price: 499, image: product6, category: 'clothing' },
];

const NewArrivals = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">New Arrivals</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our latest collection of luxury fashion pieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NewArrivals;
