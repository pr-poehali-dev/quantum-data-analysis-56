export function CTASection() {
  return (
    <section id="join" className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight mb-3">
              Стань частью движения сегодня
            </h2>
            <p className="text-zinc-400 text-lg">
              Присоединяйся к тысячам молодых людей, которые выбрали дружбу.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="px-5 py-2.5 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Написать нам
            </button>
            <button className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors text-sm">
              Вступить в движение
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
