import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { loadScript } from "@/lib/utils";

export function CheckoutPage() {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();

  const total = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  useEffect(() => {
    if (state.items.length === 0) {
      navigate("/products");
    }
  }, [state.items.length, navigate]);

  const handlePayment = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: "rzp_test_NyLPzsLZcimQeS",
      amount: total * 100,
      currency: "INR",
      name: "JNPMOBILENACCESSORIES",
      description: "Purchase Description",
      handler: function (response: any) {
        console.log("Payment successful", response);
        clearCart();
        navigate("/order-success");
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
      },
      theme: {
        color: "#000000",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="container max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          {state.items.map((item) => (
            <div key={item.product.id} className="flex gap-4">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Quantity: {item.quantity}
                </p>
                <p className="font-medium">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <Separator />

          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Payment Method</h2>

          <Button className="w-full" onClick={handlePayment}>
            Pay ₹{total.toFixed(2)}
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate(-1)}
          >
            Back to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
