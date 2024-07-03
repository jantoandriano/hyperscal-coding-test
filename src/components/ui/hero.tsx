const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-fadeIn">Welcome to Our Landing Page</h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-200 animate-slideIn">We provide the best services for you.</p>
        <button className="mt-8 bg-white text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 animate-bounce">
          Get Started
        </button>
      </div>
    </div>
  );
};

Hero.displayName = "Hero"

export { Hero }