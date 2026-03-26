import type React from "react"
import { motion } from "framer-motion"
import {
  Inbox,
  Globe,
  Users,
  Calendar,
  LayoutGrid,
  Heart,
  BookOpen,
  Map,
  FileText,
  ChevronDown,
  ChevronRight,
  Search,
  Plus,
  MoreHorizontal,
  Leaf,
  Settings,
  HelpCircle,
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: { opacity: 0, x: 100, y: -80 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full bg-zinc-900/80 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        <div className="p-3 border-b border-zinc-800/50">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Globe className="w-5 h-5 text-indigo-400" />
            <span className="text-white font-semibold text-sm">Дружба Народов</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
          </div>
        </div>

        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-500 text-xs">
            <Search className="w-3.5 h-3.5" />
            <span>Поиск...</span>
            <span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        <div className="px-3 space-y-0.5">
          <NavItem icon={Inbox} label="Новости" badge={5} active />
          <NavItem icon={Calendar} label="События" />
        </div>

        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
            Разделы
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Users} label="Истории участников" hasSubmenu />
            <NavItem icon={Globe} label="Культуры народов" hasSubmenu />
            <NavItem icon={LayoutGrid} label="Фотогалерея" hasSubmenu />
            <NavItem icon={Heart} label="Волонтёрство" hasSubmenu />
          </div>
        </div>

        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
            Избранное
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={BookOpen} label="Языковые курсы" color="text-indigo-400" />
            <NavItem icon={Map} label="Карта событий" color="text-orange-400" />
            <NavItem icon={FileText} label="Отчёт 2025" color="text-emerald-400" />
          </div>
        </div>

        <div className="mt-5 px-3 flex-1">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
            Направления
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Leaf} label="Экология" hasSubmenu />
            <NavItem icon={Settings} label="Образование" hasSubmenu />
          </div>
        </div>

        <div className="p-3 border-t border-zinc-800/50">
          <NavItem icon={HelpCircle} label="Помощь" />
        </div>
      </motion.div>

      {/* News List */}
      <motion.div
        className="w-[320px] h-full bg-zinc-900/40 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Последние новости</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <InboxItem
            id="НОВ-01"
            title="Фестиваль народов мира откроется в мае"
            subtitle="Редакция опубликовала"
            time="2ч"
            avatar="https://i.pravatar.cc/32?img=1"
            status="new"
            active
          />
          <InboxItem
            id="СОБ"
            title="Молодёжный форум СНГ 2026"
            subtitle="Регистрация открыта"
            time="1д"
            avatar="https://i.pravatar.cc/32?img=2"
            status="event"
            isProject
          />
          <InboxItem
            id="НОВ-02"
            title="Волонтёры из 10 стран высадили лес"
            subtitle="Репортаж с места событий"
            time="2д"
            avatar="https://i.pravatar.cc/32?img=3"
            status="story"
          />
          <InboxItem
            id="КУЛ-01"
            title="Традиции казахской свадьбы"
            subtitle="Культурный раздел"
            time="4ч"
            avatar="https://i.pravatar.cc/32?img=4"
            status="culture"
          />
          <InboxItem
            id="НОВ-03"
            title="Языковые курсы для молодёжи"
            subtitle="Бесплатная запись"
            time="1н"
            avatar="https://i.pravatar.cc/32?img=5"
            status="education"
          />
          <InboxItem
            title="Летний лагерь единства — 2026"
            subtitle="Набор участников"
            avatar="https://i.pravatar.cc/32?img=6"
            status="event"
            isProject
          />
          <InboxItem
            id="ВОЛ-01"
            title="Волонтёрский марафон — Москва"
            subtitle="15 мая 2026"
            time="1н"
            avatar="https://i.pravatar.cc/32?img=7"
            status="volunteer"
          />
          <InboxItem
            title="Конкурс молодёжного творчества"
            subtitle="Приём работ до 1 апреля"
            avatar="https://i.pravatar.cc/32?img=8"
            status="culture"
            isProject
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full bg-zinc-950 flex flex-col overflow-hidden" variants={panelVariants}>
        <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Новости</span>
            <span className="text-zinc-600">›</span>
            <span className="text-indigo-400">Фестивали</span>
            <span className="text-zinc-600">›</span>
            <span className="text-zinc-300">НОВ-01</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </div>

        <div className="flex-1 p-5 overflow-auto">
          <h2 className="text-white text-xl font-semibold mb-5">Фестиваль народов мира откроется в мае</h2>

          <div className="bg-zinc-900/80 rounded-lg p-4 text-sm mb-5 border border-zinc-800/50 text-zinc-400 leading-relaxed">
            Ежегодный Фестиваль народов мира пройдёт в Москве 15–20 мая 2026 года. В этом году
            ожидается участие делегаций из более чем <span className="text-indigo-300">30 стран</span>.
            Гостей ждут концерты, мастер-классы по народным ремёслам, дегустация национальных блюд
            и культурные выставки.
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Фестиваль", "Культура", "Москва", "Май 2026"].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-indigo-900/40 text-indigo-300 border border-indigo-800/40">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Страны", value: "30+" },
              { label: "Участников", value: "5 000" },
              { label: "Дней", value: "6" },
            ].map((stat) => (
              <div key={stat.label} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 text-center">
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 py-3 border-t border-zinc-800/50 flex items-center gap-2">
          <div className="flex-1 bg-zinc-900/50 rounded-lg px-3 py-2 text-xs text-zinc-600 border border-zinc-800">
            Добавить комментарий...
          </div>
          <ChevronRight className="w-4 h-4 text-zinc-600" />
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
        active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
      }`}
    >
      <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${color || ""}`} />
      <span className="flex-1 truncate">{label}</span>
      {badge && (
        <span className="bg-indigo-600 text-white text-[9px] px-1.5 py-0.5 rounded-full font-medium">{badge}</span>
      )}
      {hasSubmenu && <ChevronRight className="w-3 h-3 text-zinc-600 flex-shrink-0" />}
    </div>
  )
}

function InboxItem({
  id,
  title,
  subtitle,
  time,
  avatar,
  status,
  active,
  isProject,
}: {
  id?: string
  title: string
  subtitle: string
  time?: string
  avatar: string
  status: string
  active?: boolean
  isProject?: boolean
}) {
  const statusColors: Record<string, string> = {
    new: "bg-indigo-500",
    event: "bg-emerald-500",
    story: "bg-purple-500",
    culture: "bg-orange-500",
    education: "bg-blue-500",
    volunteer: "bg-rose-500",
  }

  return (
    <div
      className={`px-4 py-3 border-b border-zinc-800/50 cursor-pointer transition-colors ${
        active ? "bg-zinc-800/50" : "hover:bg-zinc-800/30"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <img src={avatar} alt="" className="w-7 h-7 rounded-full" />
          {status && (
            <div
              className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-zinc-900 ${
                statusColors[status] || "bg-zinc-500"
              }`}
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {id && <span className="text-[10px] text-zinc-600 font-mono">{id}</span>}
            {isProject && <span className="text-[10px] bg-zinc-800 text-zinc-500 px-1 rounded">Проект</span>}
          </div>
          <p className="text-xs text-zinc-300 font-medium truncate">{title}</p>
          <p className="text-[10px] text-zinc-600 truncate">{subtitle}</p>
        </div>
        {time && <span className="text-[10px] text-zinc-600 flex-shrink-0">{time}</span>}
      </div>
    </div>
  )
}
