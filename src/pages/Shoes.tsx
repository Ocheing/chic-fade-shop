import { PageTransition } from '@/components/PageTransition';
import { ProductCard } from '@/components/ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const shoeProducts = [
  { id: 17, name: 'Leather Loafers', price: 349, image: product1, category: 'shoes' },
  { id: 18, name: 'Suede Boots', price: 449, image: product2, category: 'shoes' },
  { id: 19, name: 'Classic Pumps', price: 299, image: product3, category: 'shoes' },
];

const Shoes = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Shoes</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Step into elegance with our curated footwear collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shoeProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Shoes;
