import { motion } from "framer-motion"
import { ChevronRight, Plus } from "lucide-react"

const IMG_1 = "https://cdn.poehali.dev/projects/7dea4cc6-7ff4-43d8-b4c8-9c64f2c74b32/files/5df6fdca-886b-40fe-8330-da8a43e5f470.jpg"
const IMG_2 = "https://cdn.poehali.dev/projects/7dea4cc6-7ff4-43d8-b4c8-9c64f2c74b32/files/05a61819-8a9a-4ec8-b5d5-9f85c3309338.jpg"
const IMG_3 = "https://cdn.poehali.dev/projects/7dea4cc6-7ff4-43d8-b4c8-9c64f2c74b32/files/44b6b205-a3c2-4caa-84dc-f08d0b48018c.jpg"

const featureCards = [
  {
    title: "Единство в многообразии",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
        <img src={IMG_1} alt="Молодёжь разных народов" className="w-full h-full object-cover" />
      </div>
    ),
  },
  {
    title: "Культурные фестивали",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img src={IMG_2} alt="Фестиваль народов" className="w-full h-full object-cover" />
      </div>
    ),
  },
  {
    title: "Волонтёрство и добро",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img src={IMG_3} alt="Волонтёры разных народов" className="w-full h-full object-cover" />
      </div>
    ),
  },
]

export function FeatureCardsSection() {
  return (
    <div id="news" className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Вместе мы сильнее
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                Движение «Молодёжь за дружбу народов» объединяет молодых людей разных культур
                и национальностей вокруг общих ценностей: мира, взаимоуважения и созидания.{" "}
                <a href="#about" className="text-white inline-flex items-center gap-1 hover:underline">
                  Узнать больше <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 hover:border-indigo-800 transition-colors cursor-pointer group overflow-hidden relative flex flex-col justify-end"
                style={{
                  aspectRatio: "336 / 360",
                  borderRadius: "30px",
                  height: "360px",
                  isolation: "isolate",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full flex"
                  style={{
                    maskImage: "linear-gradient(#000 70%, transparent 90%)",
                    WebkitMaskImage: "linear-gradient(#000 70%, transparent 90%)",
                  }}
                >
                  {card.illustration}
                </div>
                <div
                  className="relative z-10 flex items-center justify-between w-full"
                  style={{ padding: "0 24px 40px", gap: "16px" }}
                >
                  <h3 className="text-white font-medium text-lg leading-tight">{card.title}</h3>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-indigo-500 group-hover:text-indigo-300 transition-colors flex-shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
