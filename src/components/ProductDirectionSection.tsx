import { ChevronRight, Check } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section id="events" className="relative py-40 px-6 md:px-12 lg:px-24">
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-zinc-400 text-sm">Календарь событий и мероприятий</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Ближайшие события движения
        </h2>

        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Присоединяйтесь к событиям рядом с вами.</span>{" "}
          Фестивали, форумы, волонтёрские акции и культурные обмены — всё в одном календаре.
        </p>

        {/* Timeline */}
        <div
          className="relative w-full mb-16"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            <div className="relative h-[400px]">
              <div
                className="absolute w-[1px] bg-zinc-600/50"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(113, 113, 122, 0.5) 4px, rgba(113, 113, 122, 0.5) 8px)",
                }}
              />

              <div className="absolute top-0 left-0 right-0 flex items-end">
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-zinc-600/60"
                      style={{
                        width: "1px",
                        height: i % 7 === 0 ? "16px" : "8px",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute text-zinc-500 text-sm" style={{ left: "8%", top: "80px" }}>МАЙ</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "18%", top: "55px" }}>ИЮНЬ</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "32%", top: "35px" }}>ИЮЛЬ</div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "48%", top: "15px" }}>АВГ</div>
              <div
                className="absolute px-3 py-1 rounded-md bg-indigo-900/80 text-indigo-300 text-sm font-medium"
                style={{ left: "58%", top: "-10px" }}
              >
                СЕН 2026
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "70%", top: "-5px" }}>ОКТ</div>
              <div className="absolute text-zinc-500/50 text-sm" style={{ left: "88%", top: "-25px" }}>НОЯ</div>

              {/* Фестиваль народов */}
              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-indigo-700/50 px-4 py-3 flex items-center gap-3"
                style={{ left: "5%", top: "100px", width: "45%", height: "48px" }}
              >
                <div className="w-4 h-4 rotate-45 bg-indigo-500/60" />
                <span className="text-zinc-300 text-sm font-medium">Фестиваль народов мира — Москва</span>
                <div
                  className="absolute w-5 h-5 rotate-45 border-2 border-emerald-500 bg-transparent"
                  style={{ right: "15%", top: "50%", transform: "translateY(-50%) rotate(45deg)" }}
                />
              </div>

              {/* Форум молодёжи */}
              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center gap-3"
                style={{ left: "15%", top: "155px", width: "30%", height: "44px" }}
              >
                <div className="w-3 h-3 rotate-45 bg-zinc-600/60" />
                <span className="text-zinc-500 text-sm">Форум молодёжи СНГ</span>
              </div>

              {/* Волонтёрский марафон */}
              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-zinc-700/50 px-4 py-3 flex items-center justify-between"
                style={{ left: "48%", top: "155px", width: "42%", height: "48px" }}
              >
                <span className="text-zinc-400 text-sm">Волонтёрский марафон</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-emerald-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-emerald-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-emerald-500/60" />
                </div>
              </div>

              {/* Культурный обмен */}
              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center justify-between"
                style={{ left: "35%", top: "240px", width: "30%", height: "48px" }}
              >
                <span className="text-zinc-400 text-sm">Культурный обмен</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-zinc-500/60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Ближайшие мероприятия</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Следите за расписанием событий и регистрируйтесь на участие в фестивалях,
              форумах и волонтёрских акциях в вашем регионе.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Предстоящие события</h4>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Фестиваль народов мира", date: "15 мая 2026", status: "Регистрация открыта", color: "bg-emerald-500" },
                  { name: "Форум молодёжи СНГ", date: "20 июня 2026", status: "Скоро", color: "bg-yellow-500" },
                  { name: "Волонтёрский марафон", date: "10 сентября 2026", status: "Планируется", color: "bg-zinc-500" },
                ].map((event) => (
                  <div key={event.name} className="flex items-center gap-3 py-2 border-b border-zinc-800 last:border-0">
                    <div className={`w-2 h-2 rounded-full ${event.color} flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-zinc-300 text-sm font-medium truncate">{event.name}</p>
                      <p className="text-zinc-600 text-xs">{event.date}</p>
                    </div>
                    <span className="text-xs text-zinc-500 flex-shrink-0">{event.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Как стать участником</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Присоединиться к движению может каждый молодой человек в возрасте от 14 до 35 лет,
              разделяющий ценности мира, дружбы и взаимоуважения.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { step: "01", title: "Заполните анкету", desc: "Расскажите о себе и своих интересах" },
                { step: "02", title: "Выберите направление", desc: "Культура, волонтёрство, образование" },
                { step: "03", title: "Участвуйте!", desc: "Посещайте события и знакомьтесь с людьми" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-indigo-500 font-mono text-sm font-bold flex-shrink-0 mt-0.5">{item.step}</span>
                  <div>
                    <p className="text-zinc-200 text-sm font-medium">{item.title}</p>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-zinc-500 text-sm">Участие бесплатно для всех молодых людей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
