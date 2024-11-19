import { useState } from "react";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Range, getTrackBackground } from "react-range";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const STEP = 1;
  const MIN = 0;
  const MAX = 1000;

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const priceFilteredProducts = filteredProducts.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <div className="flex gap-6 p-6">
      {/* Sidebar */}
      <div className="w-64 shrink-0 space-y-6">
        {/* Browse By Section */}
        <div>
          <h3 className="font-semibold mb-3">Browse By Category</h3>
          <div className="flex flex-col gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className="justify-start"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Filter By</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 block mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="py-4">
                <Range
                  values={priceRange}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  onChange={(values) => setPriceRange([values[0], values[1]])}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className="w-full h-3 rounded-full bg-gray-200"
                      style={{
                        background: getTrackBackground({
                          values: priceRange,
                          colors: ["#e2e8f0", "#3b82f6", "#e2e8f0"],
                          min: MIN,
                          max: MAX,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      className="w-4 h-4 rounded-full bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {priceFilteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
