import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const partners = [
  { name: "Россия" },
  { name: "Казахстан" },
  { name: "Беларусь" },
  { name: "Узбекистан" },
  { name: "Армения" },
  { name: "Азербайджан" },
  { name: "Кыргызстан" },
  { name: "Таджикистан" },
]

export function LogoCloud() {
  return (
    <div id="cultures" className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Объединяем молодёжь разных народов и культур
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            Участники движения из стран СНГ и всего мира
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 items-center justify-items-center transition-all duration-300 group-hover:blur-[2.5px] group-hover:opacity-50">
              {partners.map((partner) => (
                <div key={partner.name} className="text-white font-semibold text-xl flex items-center gap-2">
                  <Icon name="Globe" size={20} className="text-indigo-400" />
                  {partner.name}
                </div>
              ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-5 py-2.5 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 rounded-full text-sm text-zinc-300 flex items-center gap-2">
                Все страны-участники
                <span aria-hidden="true">&gt;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}