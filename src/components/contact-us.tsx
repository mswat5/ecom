import React from "react";

const ContactPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* About Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-8">
          ALL ABOUT JNPMOBILENACCESSORIES
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Our company was founded by like-minded individuals, a group of
          professionals dedicated to building innovative, smart and easy online
          shopping solutions. At jnpmobilenaccessories, we guarantee that every
          single purchase you make will be a seamless process from start to
          finish. Take a look at our site, and feel free to get in touch with
          any questions or concerns.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-8">CONTACT US</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Shop No.19/8, Infront of Caratlane, Agrasen Chowk, Nehru Nagar
              West, Bhilai (C.G.)
            </p>
            <p className="text-gray-600">
              <a href="mailto:jnppvt@gmail.com" className="hover:text-gray-900">
                jnppvt@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              <a href="tel:+917999832557" className="hover:text-gray-900">
                +91 79998 32557
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                  aria-label="Name"
                />
                <span className="text-xs text-gray-500">Name *</span>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                  aria-label="Email"
                />
                <span className="text-xs text-gray-500">Email *</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded"
                  aria-label="Phone"
                />
                <span className="text-xs text-gray-500">Phone</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full p-2 border border-gray-300 rounded"
                  aria-label="Address"
                />
                <span className="text-xs text-gray-500">Address</span>
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Type the subject"
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Subject"
              />
              <span className="text-xs text-gray-500">Subject</span>
            </div>

            <div>
              <textarea
                placeholder="Type your message here..."
                rows={4}
                className="w-full p-2 border border-gray-300 rounded resize-none"
                aria-label="Message"
              />
              <span className="text-xs text-gray-500">Message</span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
