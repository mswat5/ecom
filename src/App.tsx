import { Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { CartProvider } from "./lib/cart-context";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";
import Cart from "./pages/cart";
import About from "./pages/about";
import ShoppingLayout from "./pages/layout/layout";
import ShoppingContact from "./pages/contact";
import ShoppingStorePolicies from "./pages/store-policies";
import ShoppingSupport from "./pages/support";
import ShoppingGroups from "./pages/groups";
import ShoppingMembers from "./pages/members";
import ShoppingEvents from "./pages/events";
import ShoppingProgramList from "./pages/program-list";
import { CheckoutPage } from "./pages/checkout";
import { OrderSuccessPage } from "./pages/order-success";

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route path="/shop" element={<ShoppingLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="store-policies" element={<ShoppingStorePolicies />} />
            <Route path="contact" element={<ShoppingContact />} />
            <Route path="support" element={<ShoppingSupport />} />
            <Route path="groups" element={<ShoppingGroups />} />
            <Route path="members" element={<ShoppingMembers />} />
            <Route path="events" element={<ShoppingEvents />} />
            <Route path="program-list" element={<ShoppingProgramList />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="order-success" element={<OrderSuccessPage />} />
          </Route>
          {/* <Route path="" element={<Navigate to="/shop/home" />} /> */}
        </Routes>
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;
