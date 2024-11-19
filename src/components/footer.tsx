const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-bold tracking-wider text-black">
            JNPMOBILENACCESSORIES
          </h2>
          <a
            href="mailto:jnppvt@gmail.com"
            className="text-gray-600 transition-colors duration-200"
          >
            jnppvt@gmail.com
          </a>

          <div className="text-sm text-gray-400 text-center mt-4">
            ©2024 by jnpmobilenaccessories.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
