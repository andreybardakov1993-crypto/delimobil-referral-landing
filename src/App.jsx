import { motion } from 'framer-motion'

export default function App() {
  const referralLink = "https://go.onelink.me/Jlks/e055cc89"; // ваша реферальная ссылка
  const promoCode = "REFIMZBI"; // ваш промокод

  const features = [
    { emoji: "🚗", title: "Удобный каршеринг", text: "Машины рядом, доступны 24/7." },
    { emoji: "🎁", title: "Бонусы на старте", text: `Регистрируйся по ссылке и введи промокод ${promoCode}.` },
    { emoji: "📱", title: "Всё в приложении", text: "Быстрый старт, оплата и поддержка." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
      >
        Поезжай с Делимобилем со скидкой
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl"
      >
        Зарегистрируйся по моей ссылке и введи промокод <span className="font-bold">{promoCode}</span>, чтобы получить бонусные баллы!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35 }}
        className="mb-10"
      >
        <a href={referralLink} target="_blank" rel="noopener noreferrer" className="inline-block">
          <button className="text-lg px-6 py-4 rounded-2xl shadow-lg bg-orange-500 hover:bg-orange-600 active:scale-[0.99] text-white transition">
            Получить бонус 🚗
          </button>
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.12 }}
          >
            <div className="rounded-2xl shadow-md hover:shadow-xl transition bg-white p-6 text-center">
              <div className="text-4xl mb-3">{f.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <footer className="mt-12 text-sm text-gray-600 text-center">
        <p>
          Ссылка ведёт в приложение Делимобиль. Промокод: <span className="font-medium">{promoCode}</span>.
        </p>
      </footer>
    </div>
  )
}
