export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  features: string[];
  specs: {
    [key: string]: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}