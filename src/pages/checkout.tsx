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
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 bg-card p-4 rounded-lg border"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  {" "}
                  {/* prevent text overflow */}
                  <h3 className="font-medium truncate">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Quantity: {item.quantity}
                  </p>
                  <p className="font-medium">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between text-lg font-bold bg-muted p-4 rounded-lg">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

            <div className="space-y-4">
              <Button className="w-full py-6 text-lg" onClick={handlePayment}>
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
      </div>
    </div>
  );
}
