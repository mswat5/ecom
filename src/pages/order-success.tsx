import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export function OrderSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="container max-w-md mx-auto py-16 text-center">
      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
      <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
      <p className="text-muted-foreground mb-8">
        Thank you for your purchase. Your order has been confirmed.
      </p>
      <Button onClick={() => navigate("/shop/products")}>
        Continue Shopping
      </Button>
    </div>
  );
}
