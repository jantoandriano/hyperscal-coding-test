const Hero = () => {
    return (
      <div className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Our Landing Page
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8">
          We provide the best services for you.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
          Get Started
        </button>
      </div>
    );
  };
  
  Hero.displayName = "Hero"

  export { Hero }