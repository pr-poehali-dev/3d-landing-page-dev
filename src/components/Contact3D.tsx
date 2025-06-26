import { useState } from "react";

const Contact3D = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here would be the actual form submission logic
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                КОНТАКТЫ
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Готовы воплотить вашу идею в 3D? Свяжитесь с нами для обсуждения
              проекта
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Обсудить проект
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors duration-300"
                    required
                  >
                    <option value="">Тип проекта</option>
                    <option value="3d-modeling">3D Моделирование</option>
                    <option value="visualization">Визуализация</option>
                    <option value="animation">Анимация</option>
                    <option value="ar-vr">AR/VR</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Отправить заявку
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl mr-4">
                    📧
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-purple-400">hello@3dstudio.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-xl mr-4">
                    📱
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Телефон
                    </h4>
                    <p className="text-purple-400">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-xl mr-4">
                    🏢
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Офис</h4>
                    <p className="text-purple-400">Москва, ул. Тверская, 1</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Соцсети
                </h4>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                    📘
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                    📷
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                    🐦
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact3D;
