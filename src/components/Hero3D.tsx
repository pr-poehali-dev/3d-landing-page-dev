const Hero3D = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{ perspective: "1000px" }}
    >
      {/* Static 3D background elements */}
      <div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"
          style={{
            transform: "translate3d(0, 0, 50px) rotateX(30deg) rotateY(45deg)",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-3xl"
          style={{
            transform:
              "translate3d(0, 0, -30px) rotateX(-20deg) rotateY(-60deg)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div
          className="max-w-4xl mx-auto text-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            style={{
              transform:
                "perspective(1000px) rotateX(15deg) rotateY(5deg) translate3d(0, 0, 30px)",
            }}
          >
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              3D ДИЗАЙН
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ transform: "translate3d(0, 0, 20px)" }}
          >
            Создаём невероятные 3D-визуализации и интерактивные решения, которые
            выводят ваш бренд на новый уровень
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-2xl shadow-purple-500/25"
              style={{
                transform:
                  "perspective(1000px) rotateX(10deg) rotateY(-5deg) translate3d(0, 0, 40px)",
              }}
            >
              <span className="relative z-10">Начать проект</span>
            </button>

            <button
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full"
              style={{ transform: "translate3d(0, 0, 25px)" }}
            >
              Смотреть портфолио
            </button>
          </div>
        </div>
      </div>

      {/* Настоящие 3D геометрические фигуры */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 3D Кубы */}
        <div
          className="absolute top-20 left-16"
          style={{ perspective: "800px" }}
        >
          <div className="cube-3d shape-purple">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>

        <div
          className="absolute top-1/2 right-20"
          style={{ perspective: "800px" }}
        >
          <div className="cube-3d small shape-pink">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>

        {/* 3D Сферы */}
        <div className="absolute top-1/3 right-32">
          <div className="sphere-3d shape-blue"></div>
        </div>

        <div className="absolute bottom-32 left-20">
          <div className="sphere-3d large shape-green"></div>
        </div>

        {/* 3D Пирамиды */}
        <div
          className="absolute bottom-20 right-16"
          style={{ perspective: "800px" }}
        >
          <div className="pyramid-3d shape-pink">
            <div className="face base"></div>
            <div className="face side1 border-pink-500"></div>
            <div className="face side2 border-purple-500"></div>
            <div className="face side3 border-blue-500"></div>
            <div className="face side4 border-pink-400"></div>
          </div>
        </div>

        {/* 3D Октаэдры */}
        <div
          className="absolute top-1/4 left-1/2"
          style={{ perspective: "800px" }}
        >
          <div className="octahedron-3d shape-purple">
            <div className="face top1 border-b-purple-500"></div>
            <div className="face top2 border-b-pink-500"></div>
            <div className="face top3 border-b-blue-500"></div>
            <div className="face top4 border-b-purple-400"></div>
            <div className="face bottom1 border-t-purple-500"></div>
            <div className="face bottom2 border-t-pink-500"></div>
            <div className="face bottom3 border-t-blue-500"></div>
            <div className="face bottom4 border-t-purple-400"></div>
          </div>
        </div>

        <div
          className="absolute bottom-1/3 right-1/3"
          style={{ perspective: "800px" }}
        >
          <div className="octahedron-3d shape-blue">
            <div className="face top1 border-b-blue-500"></div>
            <div className="face top2 border-b-purple-500"></div>
            <div className="face top3 border-b-pink-500"></div>
            <div className="face top4 border-b-blue-400"></div>
            <div className="face bottom1 border-t-blue-500"></div>
            <div className="face bottom2 border-t-purple-500"></div>
            <div className="face bottom3 border-t-pink-500"></div>
            <div className="face bottom4 border-t-blue-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
