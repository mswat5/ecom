import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "@/lib/cart-context";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();
  const total = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (state.items.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Add some items to your cart to get started.
        </p>
        <Button asChild>
          <a href="/products">Continue Shopping</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {state.items.map((item) => (
              <TableRow key={item.product.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    {item.product.name}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          Math.max(0, item.quantity - 1)
                        )
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>${item.product.price}</TableCell>
                <TableCell>
                  ${(item.product.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} className="text-right font-bold">
                Total
              </TableCell>
              <TableCell className="font-bold" colSpan={2}>
                ${total.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden space-y-4">
        {state.items.map((item) => (
          <div
            key={item.product.id}
            className="border rounded-lg p-4 space-y-4"
          >
            <div className="flex gap-4">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="h-20 w-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-muted-foreground">${item.product.price}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive"
                onClick={() => removeItem(item.product.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() =>
                    updateQuantity(
                      item.product.id,
                      Math.max(0, item.quantity - 1)
                    )
                  }
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity + 1)
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="font-medium">
                Total: ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        <div className="border-t pt-4">
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <Button
          variant="outline"
          onClick={clearCart}
          className="w-full sm:w-auto"
        >
          Clear Cart
        </Button>
        <Button
          size="lg"
          onClick={() => navigate("/checkout")}
          className="w-full sm:w-auto"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
