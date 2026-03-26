import { useState } from "react"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: "Новости", href: "#news" },
    { label: "События", href: "#events" },
    { label: "Истории", href: "#stories" },
    { label: "Культуры", href: "#cultures" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Globe" size={20} className="text-indigo-400" />
            <span className="text-white font-semibold text-base">Дружба Народов</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#join"
              className="text-sm text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md transition-colors font-medium"
            >
              Присоединиться
            </a>
            <button
              className="md:hidden text-zinc-400 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#09090B] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
