import React from "react";

const ShoppingStorePolicies = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12 text-gray-800">
      {/* Shipping Policy Section */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-center">SHIPPING POLICY</h1>
        <h2 className="text-xl font-medium text-center text-gray-600">
          How It Works
        </h2>
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <span className="font-semibold">Processing Time:</span> Orders are
            typically processed within <span className="italic">[number]</span>{" "}
            business days.
          </li>
          <li>
            <span className="font-semibold">Shipping Options:</span> We offer
            various shipping options. Please review our shipping page for more
            details.
          </li>
          <li>
            <span className="font-semibold">Order Tracking:</span> You will
            receive a tracking number once your order has been shipped.
          </li>
        </ul>
      </section>

      {/* Returns and Refunds Section */}
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-center">RETURNS AND REFUNDS</h1>
        <h2 className="text-xl font-medium text-center text-gray-600">
          Everything You Need to Know
        </h2>
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <span className="font-semibold">Return Policy:</span> If you are not
            satisfied with your purchase, you may return it within{" "}
            <span className="italic">[number]</span> days of receipt. Please
            refer to our Returns & Exchanges page for detailed instructions.
          </li>
          <li>
            <span className="font-semibold">Exchanges:</span> We offer exchanges
            for defective or damaged items. Contact our customer service team
            for assistance.
          </li>
        </ul>
      </section>
      <section className="space-y-6">
        <h1 className="text-3xl font-bold text-center">OUR PRIVACY POLICY</h1>
        <h2 className="text-xl font-medium text-center text-gray-600">
          Your Data is Secure
        </h2>
        <div className="space-y-4 flex flex-col items-center justify-center">
          <span className="text-center">
            This is your Privacy Policy section. It’s a great place to inform
            your customers about how you use, store, and protect their personal
            information. Add details such as how you use third-party banking to
            verify payment, or about the way you collect customers’ data and use
            it once their purchase has been completed.
          </span>
          <span className="text-center">
            Your user’s privacy is of the highest importance to your business,
            so take the time to write an accurate and detailed policy. Use
            straightforward language, so they can shop with confidence, time and
            time again!
          </span>
        </div>
      </section>
    </div>
  );
};

export default ShoppingStorePolicies;
