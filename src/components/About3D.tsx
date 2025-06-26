const About3D = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              О НАС
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы специализируемся на создании впечатляющих 3D-решений, которые
            захватывают внимание и остаются в памяти
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Service Card 1 */}
          <div
            className="group relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-purple-500/20"
            style={{
              transform:
                "perspective(1000px) rotateX(10deg) rotateY(-15deg) translate3d(0, 0, 30px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative z-10">
              <div
                className="flex items-center justify-center mb-6"
                style={{ perspective: "600px" }}
              >
                <div className="cube-3d small shape-purple">
                  <div className="face front"></div>
                  <div className="face back"></div>
                  <div className="face right"></div>
                  <div className="face left"></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                3D Моделирование
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Создаём детализированные 3D-модели продуктов, архитектурных
                объектов и персонажей
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div
            className="group relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-purple-500/20"
            style={{
              transform:
                "perspective(1000px) rotateX(10deg) translate3d(0, 0, 50px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative z-10">
              <div
                className="flex items-center justify-center mb-6"
                style={{ perspective: "600px" }}
              >
                <div className="sphere-3d shape-blue"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Визуализация
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Фотореалистичные рендеры и анимации, которые оживляют ваши идеи
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div
            className="group relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-purple-500/20"
            style={{
              transform:
                "perspective(1000px) rotateX(10deg) rotateY(15deg) translate3d(0, 0, 30px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative z-10">
              <div
                className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center text-2xl"
                style={{
                  transform:
                    "rotateX(45deg) rotateY(-30deg) translate3d(0, 0, 30px)",
                }}
              >
                🚀
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Интерактив</h3>
              <p className="text-gray-300 leading-relaxed">
                Интерактивные 3D-презентации и AR/VR решения для веба и
                мобильных устройств
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3D;
