import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  // Твои данные — уже мобильные‑дружественные
  const referralLink = "https://go.onelink.me/Jlks/e055cc89";
  const promoCode = "REFIMZBI";

  const [copied, setCopied] = useState(false);
  const copyPromo = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const features = [
    { emoji: "🚗", title: "Удобно", text: "Машины рядом, 24/7." },
    { emoji: "🎁", title: "Бонусы", text: `Введи промокод ${promoCode} при регистрации.` },
    { emoji: "📱", title: "Просто", text: "Всё в приложении Делимобиль." },
  ];

  return (
    // Мобильный отступ снизу, чтобы не перекрыть кнопкой (sticky CTA)
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex flex-col items-center pb-24 md:pb-0">
      {/* Шапка + главный текст */}
      <header className="w-full max-w-screen-lg px-4 sm:px-6 pt-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800"
        >
          Поезжай с Делимобилем со скидкой
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-700"
        >
          Регистрируйся по моей ссылке и введи промокод <span className="font-semibold">{promoCode}</span> — получи бонусные баллы на первые поездки!
        </motion.p>

        {/* Верхняя кнопка (для десктопа и планшета) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="hidden md:block mt-6"
        >
          <a href={referralLink} target="_blank" rel="noopener noreferrer" aria-label="Открыть приложение Делимобиль по моей ссылке">
            <button className="px-6 py-4 rounded-2xl shadow-lg bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white text-lg">
              Получить бонус 🚗
            </button>
          </a>
        </motion.div>
      </header>

      {/* Карточки преимуществ */}
      <section className="w-full max-w-screen-lg px-4 sm:px-6 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="rounded-2xl shadow-md bg-white/90 backdrop-blur p-5 sm:p-6 text-center"
            >
              <div className="text-4xl mb-2">{f.emoji}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{f.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Блок с промокодом */}
      <section className="w-full max-w-md px-4 sm:px-6 mt-6">
        <div className="rounded-2xl shadow-md bg-white/90 backdrop-blur p-4 sm:p-6 text-center">
          <div className="text-gray-700 text-sm">Промокод:</div>
          <div className="mt-2 flex items-center justify-center gap-2">
            <code className="text-lg sm:text-xl font-bold tracking-widest bg-gray-100 px-3 py-1 rounded">{promoCode}</code>
            <button
              onClick={copyPromo}
              className="text-sm sm:text-base px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 active:scale-95"
              aria-label="Скопировать промокод"
            >
              {copied ? "Скопировано" : "Скопировать"}
            </button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="w-full max-w-screen-lg px-4 sm:px-6 text-center text-xs sm:text-sm text-gray-500 mt-8 mb-4">
        Ссылка ведёт в приложение Делимобиль. Промокод действует при регистрации новым пользователям. ✌️
      </footer>

      {/* Мобильная фикс‑кнопка CTA (не мешает контенту благодаря pb-24 у контейнера) */}
      <div className="md:hidden fixed bottom-4 inset-x-4">
        <a href={referralLink} target="_blank" rel="noopener noreferrer" aria-label="Открыть приложение Делимобиль по моей ссылке">
          <button className="w-full py-4 rounded-2xl shadow-xl bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white text-base font-medium">
            Открыть и получить бонус 🚗
          </button>
        </a>
      </div>
    </div>
  );
}
feat: mobile-first responsive UI}
