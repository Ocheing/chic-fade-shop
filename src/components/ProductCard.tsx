import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <motion.div
        className="group cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="relative overflow-hidden bg-secondary aspect-[4/5] rounded-sm mb-4">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
          {category && (
            <span className="absolute top-4 left-4 bg-background px-3 py-1 text-xs font-medium uppercase tracking-wide">
              {category}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-sm group-hover:text-muted-foreground transition-colors">
            {name}
          </h3>
          <p className="text-sm font-light">${price}</p>
        </div>
      </motion.div>
    </Link>
  );
};
