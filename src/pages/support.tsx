import supportpic from "../assets/supportpic.jpg";

const ShoppingSupport = () => {
  return (
    <div>
      <img src={supportpic} alt="support" />
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-3xl p-8 bg-white ">
          <h1 className="text-4xl font-bold text-center mb-4">
            CONTACT SUPPORT
          </h1>
          <p className="text-center text-gray-600 mb-8">How Can We Help?</p>
          <form className="space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black px-2 py-1"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black px-2 py-1"
                />
              </div>
            </div>

            {/* Issue Selection */}
            <div>
              <label className="block text-gray-700">Choose an Issue</label>
              <select className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black px-2 py-1">
                <option value="" disabled selected>
                  Select an issue
                </option>
                <option>Technical Support</option>
                <option>Billing</option>
                <option>Other</option>
              </select>
            </div>

            {/* Text Area */}
            <div>
              <label className="block text-gray-700">
                Let us know what you need help with...
              </label>
              <textarea
                placeholder="Describe your issue"
                rows={4}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-black px-2 py-1 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none"
              >
                Get in Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShoppingSupport;
