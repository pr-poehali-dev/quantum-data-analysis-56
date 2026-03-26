export function Footer() {
  const footerLinks = {
    "Рубрики": ["Новости", "События", "Истории участников", "Культуры народов", "Образование", "Волонтёрство", "Экология"],
    "Движение": ["О нас", "Миссия", "Команда", "Партнёры", "Стать партнёром", "Документы", "Отчёты"],
    "Участие": ["Вступить", "Обменные программы", "Форумы", "Летние лагеря", "Волонтёрство", "Стажировки"],
    "Контакты": ["Написать нам", "Сообщество", "ВКонтакте", "Telegram", "YouTube"],
  }

  return (
    <footer id="contacts" className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" className="text-indigo-400">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="none" />
                <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.3" />
                <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="3" opacity="0.5" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="3" opacity="0.5" />
              </svg>
              <span className="text-white font-semibold text-sm">Дружба Народов</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Молодёжное движение за мир, единство и взаимопонимание народов
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Молодёжь за дружбу народов. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
