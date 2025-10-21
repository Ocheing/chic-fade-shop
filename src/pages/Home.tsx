import { PageTransition } from '@/components/PageTransition';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import heroImage from '@/assets/hero-fashion.jpg';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const featuredProducts = [
  { id: 1, name: 'Tailored Beige Blazer', price: 385, image: product1, category: 'New' },
  { id: 2, name: 'Silk Slip Dress', price: 295, image: product2, category: 'New' },
  { id: 3, name: 'Leather Structured Bag', price: 495, image: product3 },
  { id: 4, name: 'Cashmere Sweater', price: 325, image: product4 },
  { id: 5, name: 'Designer Sunglasses', price: 245, image: product5 },
  { id: 6, name: 'Premium Sneakers', price: 195, image: product6 },
];

const categories = [
  { name: 'Ready-to-Wear', link: '/products?category=rtw' },
  { name: 'Accessories', link: '/products?category=accessories' },
  { name: 'Shoes', link: '/products?category=shoes' },
];

const Home = () => {
  const { ref: featuredRef, isInView: featuredInView } = useInView();
  const { ref: categoriesRef, isInView: categoriesInView } = useInView();

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fashion Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/10" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
            Timeless Elegance
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover our curated collection of contemporary fashion
          </p>
          <Link to="/products">
            <Button size="lg" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Shop Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={featuredRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground text-lg">Handpicked pieces for the season</p>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section ref={categoriesRef} className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              categoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">Explore our curated selections</p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
              categoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative h-80 overflow-hidden rounded-sm bg-muted hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="font-serif text-2xl font-bold mb-2">{category.name}</h3>
                  <span className="text-sm font-medium group-hover:underline">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Be the first to know about new arrivals and exclusive offers
        </p>
        <Link to="/products">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </section>
    </PageTransition>
  );
};

export default Home;
