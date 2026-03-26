import { motion } from "framer-motion"
import { ChevronRight, Check } from "lucide-react"

const stories = [
  { name: "Алия Сейткали", country: "Казахстан", isActive: true, selected: true, icon: "◇" },
  { name: "Мария Иванова", country: "Россия", isActive: true, selected: false, icon: "◉" },
  { name: "Нодир Рашидов", country: "Узбекистан", isActive: true, selected: false, icon: "◈" },
  { name: "Тамара Акопян", country: "Армения", isActive: false, selected: false, icon: "○" },
  { name: "Дмитрий Ковалёв", country: "Беларусь", isActive: true, selected: false, icon: "◎" },
  { name: "Лейла Гасанова", country: "Азербайджан", isActive: false, selected: false, icon: "○" },
]

export function AISection() {
  return (
    <div id="stories" className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-zinc-400 text-sm">Истории участников</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Голоса молодёжи со всего мира
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Реальные истории.</span> Молодые люди из разных
            стран рассказывают о том, как дружба с людьми других культур изменила их жизнь.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors text-sm flex items-center gap-2 mb-16"
          >
            Все истории
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* Stories list mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    border: "1px solid rgba(66, 66, 66, 0.5)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255, 255, 255, 0.04), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />
                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Выберите участника...</span>
                </div>

                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {stories.map((story, index) => (
                    <div
                      key={story.name}
                      style={
                        story.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.14), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : {
                              opacity: 1 - index * 0.15,
                              height: "42px",
                            }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{ paddingLeft: "24px", paddingRight: "24px", gap: "12px" }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-zinc-400 text-lg">{story.icon}</span>
                          <span className={story.selected ? "text-white font-medium" : "text-zinc-300"}>
                            {story.name}
                          </span>
                          {story.isActive && (
                            <span className="text-xs bg-indigo-900/50 text-indigo-300 px-2 py-0.5 rounded">
                              {story.country}
                            </span>
                          )}
                        </div>
                        {story.selected && <Check className="w-4 h-4 text-indigo-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Обменные программы</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Молодёжные обмены позволяют познакомиться с культурой другого народа изнутри.
                  Участники живут в семьях, учатся вместе и строят дружбу на всю жизнь.
                </p>
                <div className="flex flex-col gap-3">
                  {["Летние лагеря единства", "Студенческие обмены", "Культурные стажировки"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-900/50 border border-indigo-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span className="text-zinc-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Диалог культур</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Онлайн-форумы, круглые столы и дебаты — пространства, где молодёжь обсуждает
                  важные вопросы и находит общий язык поверх границ.
                </p>
                <div className="flex flex-col gap-3">
                  {["Международные форумы", "Онлайн-дискуссии", "Совместные проекты"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-indigo-900/50 border border-indigo-700 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-indigo-400" />
                      </div>
                      <span className="text-zinc-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
