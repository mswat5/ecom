import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "Crystal Clear iPhone Case",
    price: 29.99,
    description: "Premium transparent case with shock-absorption technology",
    category: "Cases",
    image: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?w=500",
    features: [
      "Military-grade drop protection",
      "Anti-yellowing technology",
      "Wireless charging compatible",
    ],
    specs: {
      material: "TPU + PC",
      compatibility: "iPhone 13/14/15 Series",
      thickness: "2mm",
    },
  },
  {
    id: "2",
    name: "Fast Wireless Charger",
    price: 39.99,
    description: "15W Qi-certified wireless charging pad",
    category: "Chargers",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500",
    features: [
      "15W fast charging",
      "LED charging indicator",
      "Over-temperature protection",
    ],
    specs: {
      input: "USB-C",
      output: "15W max",
      dimensions: "100 x 100 x 10mm",
    },
  },
  {
    id: "3",
    name: "Premium Glass Screen Protector",
    price: 19.99,
    description: "9H hardness tempered glass with oleophobic coating",
    category: "Screen Protectors",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
    features: [
      "9H hardness protection",
      "Anti-fingerprint coating",
      "Easy installation kit included",
    ],
    specs: {
      thickness: "0.33mm",
      hardness: "9H",
      transparency: "99.9%",
    },
  },
  {
    id: "4",
    name: "Premium Glass Screen Protector",
    price: 19.99,
    description: "9H hardness tempered glass with oleophobic coating",
    category: "Screen Protectors",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
    features: [
      "9H hardness protection",
      "Anti-fingerprint coating",
      "Easy installation kit included",
    ],
    specs: {
      thickness: "0.33mm",
      hardness: "9H",
      transparency: "99.9%",
    },
  },
  {
    id: "5",
    name: "Premium Glass Screen Protector",
    price: 19.99,
    description: "9H hardness tempered glass with oleophobic coating",
    category: "Screen Protectors",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
    features: [
      "9H hardness protection",
      "Anti-fingerprint coating",
      "Easy installation kit included",
    ],
    specs: {
      thickness: "0.33mm",
      hardness: "9H",
      transparency: "99.9%",
    },
  },
];

export const categories = [
  "All",
  "Cases",
  "Chargers",
  "Screen Protectors",
  "Cables",
  "Power Banks",
];
