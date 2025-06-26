const Portfolio3D = () => {
  const portfolioItems = [
    {
      title: "Архитектурная визуализация",
      description: "Современный жилой комплекс",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "Архитектура",
    },
    {
      title: "Продуктовый дизайн",
      description: "3D-визуализация электроники",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop",
      category: "Продукт",
    },
    {
      title: "Персонажная анимация",
      description: "Стилизованный 3D-персонаж",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
      category: "Анимация",
    },
    {
      title: "Интерьерная визуализация",
      description: "Современная гостиная",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      category: "Интерьер",
    },
    {
      title: "Игровые ассеты",
      description: "3D-модели для игровой индустрии",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      category: "Игры",
    },
    {
      title: "Промышленный дизайн",
      description: "Техническая визуализация",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      category: "Промышленность",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              ПОРТФОЛИО
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Наши работы говорят сами за себя — каждый проект создан с вниманием
            к деталям
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          style={{ transformStyle: "preserve-3d" }}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/25"
              style={{
                transform: `perspective(1000px) rotateX(${10 + (index % 3) * 5}deg) rotateY(${-10 + (index % 2) * 20}deg) translate3d(0, 0, ${20 + (index % 3) * 15}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                  style={{ transform: "translate3d(0, 0, 10px)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full"
                  style={{ transform: "translate3d(0, 0, 20px)" }}
                >
                  {item.category}
                </div>
              </div>

              <div
                className="p-6"
                style={{ transform: "translate3d(0, 0, 15px)" }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Static 3D overlay button */}
              <div
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                style={{
                  transform: "translateX(-50%) translate3d(0, 0, 25px)",
                }}
              >
                <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-xl"
            style={{
              transform:
                "perspective(1000px) rotateX(10deg) translate3d(0, 0, 30px)",
            }}
          >
            Смотреть все работы
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio3D;
