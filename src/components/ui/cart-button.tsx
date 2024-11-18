import { ShoppingCart } from 'lucide-react';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';

export function CartButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => navigate('/cart')}
    >
      <ShoppingCart className="h-4 w-4" />
    </Button>
  );
}