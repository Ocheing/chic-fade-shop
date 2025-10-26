import { PageTransition } from '@/components/PageTransition';
import { ProductCard } from '@/components/ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import { Badge } from '@/components/ui/badge';

const saleProducts = [
  { id: 23, name: 'Summer Dress', price: 159, originalPrice: 299, image: product1, category: 'clothing' },
  { id: 24, name: 'Canvas Sneakers', price: 89, originalPrice: 149, image: product2, category: 'shoes' },
  { id: 25, name: 'Tote Bag', price: 199, originalPrice: 349, image: product3, category: 'accessories' },
  { id: 26, name: 'Linen Blazer', price: 279, originalPrice: 499, image: product4, category: 'clothing' },
];

const Sale = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Up to 50% Off</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Sale</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on our exclusive seasonal offers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Sale;
