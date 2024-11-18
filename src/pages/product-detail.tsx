import { useParams } from 'react-router-dom';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useCart } from '@/lib/cart-context';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addItem(product);
    toast.success('Added to cart');
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />
      </div>
      
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold mt-2">${product.price}</p>
        </div>

        <p className="text-muted-foreground">{product.description}</p>

        <div>
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-1">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Specifications</h3>
          <dl className="space-y-1">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2">
                <dt className="text-muted-foreground">{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Button size="lg" className="w-full" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}