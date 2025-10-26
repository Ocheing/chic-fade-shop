import { PageTransition } from '@/components/PageTransition';
import { ProductCard } from '@/components/ProductCard';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const accessoryProducts = [
  { id: 20, name: 'Leather Handbag', price: 599, image: product4, category: 'accessories' },
  { id: 21, name: 'Silk Scarf', price: 149, image: product5, category: 'accessories' },
  { id: 22, name: 'Gold Watch', price: 899, image: product6, category: 'accessories' },
];

const Accessories = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Accessories</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete your look with our refined accessories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessoryProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Accessories;
