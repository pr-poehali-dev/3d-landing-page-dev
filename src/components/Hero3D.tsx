import { useState, useEffect } from "react";

const Hero3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 transform-gpu"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            }}
          >
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              3D ДИЗАЙН
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Создаём невероятные 3D-визуализации и интерактивные решения, которые
            выводят ваш бренд на новый уровень
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg) scale(1)`,
              }}
            >
              <span className="relative z-10">Начать проект</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300">
              Смотреть портфолио
            </button>
          </div>
        </div>
      </div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-80 animate-spin-slow"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 30}deg) rotateY(${mousePosition.x * 30}deg)`,
          }}
        />
        <div
          className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 animate-bounce-slow"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -20}deg) rotateY(${mousePosition.x * -20}deg)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 transform rotate-45 opacity-70 animate-pulse"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg) rotate(45deg)`,
          }}
        />
      </div>
    </section>
  );
};

export default Hero3D;
