import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link to={`/product/${product.id}`} className="w-full">
        <CardContent className="p-0">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-sm">{product.name}</h3>
            <p className="text-sm text-muted-foreground">${product.price}</p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
