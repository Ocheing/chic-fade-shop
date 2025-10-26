import { PageTransition } from '@/components/PageTransition';
import { ProductCard } from '@/components/ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const clothingProducts = [
  { id: 13, name: 'Cotton Shirt', price: 129, image: product1, category: 'clothing' },
  { id: 14, name: 'Denim Jacket', price: 279, image: product2, category: 'clothing' },
  { id: 15, name: 'Evening Gown', price: 899, image: product3, category: 'clothing' },
  { id: 16, name: 'Knit Cardigan', price: 249, image: product4, category: 'clothing' },
];

const Clothing = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Clothing</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Timeless pieces crafted with exceptional quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clothingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Clothing;
