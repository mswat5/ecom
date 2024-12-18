import aboutbg from "../assets/aboutbg.png";
const ShoppingAbout = () => {
  return (
    <div
      className="flex flex-col items-center justify-center relative min-h-[100vh] bg-center"
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center w-full max-w-[800px] min-h-screen px-4 md:px-8 text-center text-gray-600 bg-white">
        {/* <div className="bg-white w-[500px] mx-auto text-center my-8  p-8 rounded-lg border border-gray-400"> */}
        <span className="text-2xl font-bold mt-8 mb-2">OUR ORIGINS</span>
        <span className="text-xl font-semibold mb-6">About JNP</span>
        <span className="mb-8 px-4">
          Welcome to JNP, where innovation meets style! Established in 2021, JNP
          is a dynamic company dedicated to providing top-notch phone covers and
          accessories that blend functionality with flair. Our journey began
          with a simple yet ambitious goal: to enhance your mobile experience
          while reflecting your unique personality through stylish and durable
          phone accessories.
        </span>
        <span className="text-xl font-semibold mt-4 mb-4">Our Vision</span>
        <span className="mb-8 px-4">
          At JNP, we envision a world where every phone is a canvas for personal
          expression. We believe that your device should not only be a
          technological marvel but also a reflection of your individuality. Our
          carefully curated collection of phone covers and accessories is
          designed to complement your lifestyle, from sleek and sophisticated
          designs to bold and vibrant statements. ​
        </span>
        <span className="text-xl font-semibold mt-4 mb-4">
          Quality Assurance
        </span>
        <span className="mb-8 px-4">
          We take pride in the quality of our products. Each phone cover and
          accessory undergoes rigorous testing to ensure durability,
          functionality, and a perfect fit. We source the finest materials and
          employ advanced manufacturing techniques to deliver products that not
          only protect your phone but also elevate its aesthetic appeal. ​
        </span>
        <span className="text-xl font-semibold mt-4 mb-4">Fashion Forward</span>
        <span className="mb-8 px-4">
          Our team of designers is committed to staying ahead of the fashion
          curve, bringing you the latest styles, patterns, and textures. Whether
          you prefer classic elegance or cutting-edge trends, JNP has something
          for every taste. ​
        </span>
        <span className="text-xl font-semibold mt-4 mb-4">
          Customer-Centric Approach
        </span>
        <span className="mb-8 px-4">
          Our customers are at the heart of everything we do. We understand that
          your phone is more than just a device – it's an integral part of your
          daily life. That's why we strive to exceed your expectations by
          offering exceptional products and unparalleled customer service. Your
        </span>
        <span className="text-xl font-semibold mt-4 mb-4">
          Join the JNP Community
        </span>
        <span className="mb-8 px-4">
          Become a part of the JNP community and embark on a journey of style
          and functionality. Follow us on social media for the latest updates,
          promotions, and a glimpse behind the scenes. We love hearing from our
          customers, so feel free to share your JNP experience with us.
        </span>
        <span className="mb-8 px-4">
          Thank you for choosing JNP – where your phone accessories are as
          unique as you are. Feel free to adjust the language, tone, and content
          to better suit the specific characteristics and values of your
          fictional JNP company
        </span>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ShoppingAbout;
