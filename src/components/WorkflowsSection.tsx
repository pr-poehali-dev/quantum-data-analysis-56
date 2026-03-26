import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Heart, BookOpen, Music, Camera, Globe, Users, Leaf } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "Культура и традиции",
    title: "Узнайте о народных традициях и обычаях",
    icon: ArrowRight,
    mockup: "culture",
  },
  {
    id: 2,
    category: "Образование",
    title: "Языковые курсы и образовательные программы",
    icon: ArrowRight,
    mockup: "education",
  },
  {
    id: 3,
    category: "Мобильное приложение",
    title: "Следите за новостями откуда угодно",
    icon: ArrowRight,
    mockup: "mobile",
  },
  {
    id: 4,
    category: "Музыка народов",
    title: "Откройте музыкальные традиции мира",
    icon: ArrowRight,
    mockup: "music",
  },
  {
    id: 5,
    category: "Фотогалерея",
    title: "Фото с событий движения по всему миру",
    icon: ArrowRight,
    mockup: "gallery",
  },
  {
    id: 6,
    category: "Волонтёрство",
    title: "Делай добро вместе с людьми разных культур",
    icon: ArrowRight,
    mockup: "volunteer",
  },
  {
    id: 7,
    category: "Экология и природа",
    title: "Экологические инициативы молодёжи",
    icon: ArrowRight,
    mockup: "ecology",
  },
]

function CultureMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <Globe className="w-3.5 h-3.5" />
        <span>Культуры народов</span>
      </div>
      <p className="text-sm text-zinc-300">Традиции и обычаи разных народов мира</p>
      <div className="mt-2 flex flex-col gap-2">
        {["Русские традиции", "Казахские обычаи", "Армянская культура"].map((item) => (
          <div key={item} className="flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
            <span className="text-xs text-zinc-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EducationMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <BookOpen className="w-3.5 h-3.5" />
        <span>Образование</span>
      </div>
      <div className="mt-2 space-y-2">
        {["Казахский язык — Начальный", "Русская литература", "История народов СНГ"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="text-zinc-600">→</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-56 bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-800 rounded-full" />
        <div className="mt-6 px-3">
          <div className="text-[10px] text-zinc-400 mb-2">Новости</div>
          <div className="space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 bg-zinc-800/50 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MusicMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-24 h-24 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 flex items-center justify-center">
        <Music className="w-12 h-12 text-indigo-400" strokeWidth={1.5} />
      </div>
    </div>
  )
}

function GalleryMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center">
            <Camera className="w-5 h-5 text-zinc-500" />
          </div>
        ))}
      </div>
    </div>
  )
}

function VolunteerMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <Heart className="w-16 h-16 text-rose-400" strokeWidth={1.5} />
      </div>
    </div>
  )
}

function EcologyMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-emerald-900/30 rounded-lg px-4 py-3 border border-emerald-700/30 flex items-center gap-2">
        <Leaf className="w-6 h-6 text-emerald-400" />
        <span className="text-sm text-emerald-300">Зелёные инициативы</span>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "culture": return <CultureMockup />
    case "education": return <EducationMockup />
    case "mobile": return <MobileMockup />
    case "music": return <MusicMockup />
    case "gallery": return <GalleryMockup />
    case "volunteer": return <VolunteerMockup />
    case "ecology": return <EcologyMockup />
    default: return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => setScrollPosition(Math.max(0, scrollPosition - 1))
  const scrollRight = () => setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))

  return (
    <section className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-sm text-zinc-400">Направления и рубрики</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Дружба через
              <br />
              общие ценности
            </h2>
          </div>

          <div className="lg:max-w-xs">
            <p className="text-zinc-400 leading-relaxed mb-6">
              От культуры и музыки до экологии и волонтёрства — найди своё направление
              в движении молодёжной дружбы народов.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                disabled={scrollPosition === 0}
                className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                disabled={scrollPosition >= carouselCards.length - 4}
                className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${scrollPosition * 280}px)` }}
          >
            {carouselCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-64 h-72 bg-zinc-900/50 border border-zinc-800 hover:border-indigo-700 transition-colors rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="h-40 border-b border-zinc-800 overflow-hidden">
                  <CardMockup type={card.mockup} />
                </div>
                <div className="p-4">
                  <p className="text-xs text-zinc-500 mb-2">{card.category}</p>
                  <h3 className="text-zinc-200 text-sm font-medium leading-snug">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 border-t border-zinc-800 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: "50 000+", label: "Участников движения" },
            { icon: Globe, value: "30+", label: "Стран-участников" },
            { icon: Heart, value: "500+", label: "Мероприятий в год" },
            { icon: BookOpen, value: "15+", label: "Языковых программ" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <stat.icon className="w-5 h-5 text-indigo-400" />
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
