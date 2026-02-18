const Loader = () => {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0B1C3F]">
      
      {/* Logo */}
      <img
        src="/logo.png"
        alt="GreatJ Tiles Logo"
        className="w-24 mb-6 animate-pulse"
      />

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-6 text-white tracking-widest text-sm uppercase">
        Loading Luxury...
      </p>
    </div>
  );
};

export default Loader;
