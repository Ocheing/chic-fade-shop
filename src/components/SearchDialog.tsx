import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const allProducts = [
  { id: 1, name: 'Silk Blouse', price: 189, image: product1, category: 'clothing' },
  { id: 2, name: 'Leather Jacket', price: 599, image: product2, category: 'clothing' },
  { id: 3, name: 'Designer Handbag', price: 799, image: product3, category: 'accessories' },
  { id: 4, name: 'Suede Boots', price: 449, image: product4, category: 'shoes' },
  { id: 5, name: 'Cashmere Sweater', price: 349, category: 'clothing' },
  { id: 6, name: 'Wool Coat', price: 899, category: 'clothing' },
  { id: 7, name: 'Leather Loafers', price: 349, category: 'shoes' },
  { id: 8, name: 'Gold Watch', price: 899, category: 'accessories' },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState('');

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Search Products</DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
            autoFocus
          />
        </div>

        <div className="flex-1 overflow-y-auto mt-4 space-y-2">
          {query === '' ? (
            <p className="text-center text-muted-foreground py-8">
              Start typing to search for products
            </p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No products found matching "{query}"
            </p>
          ) : (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={() => {
                  onOpenChange(false);
                  setQuery('');
                }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
              >
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
                </div>
                <span className="font-semibold">${product.price}</span>
              </Link>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
