import { PageTransition } from '@/components/PageTransition';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const allProducts = [
  { id: 1, name: 'Tailored Beige Blazer', price: 385, image: product1, category: 'New' },
  { id: 2, name: 'Silk Slip Dress', price: 295, image: product2, category: 'New' },
  { id: 3, name: 'Leather Structured Bag', price: 495, image: product3 },
  { id: 4, name: 'Cashmere Sweater', price: 325, image: product4 },
  { id: 5, name: 'Designer Sunglasses', price: 245, image: product5 },
  { id: 6, name: 'Premium Sneakers', price: 195, image: product6 },
  { id: 7, name: 'Wool Blend Coat', price: 545, image: product1 },
  { id: 8, name: 'Linen Summer Dress', price: 225, image: product2 },
  { id: 9, name: 'Crossbody Bag', price: 395, image: product3 },
];

const Products = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground text-lg">Discover our complete collection</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="ghost" size="sm">Clothing</Button>
            <Button variant="ghost" size="sm">Accessories</Button>
            <Button variant="ghost" size="sm">Shoes</Button>
            <Button variant="ghost" size="sm">New Arrivals</Button>
          </div>
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Products;
