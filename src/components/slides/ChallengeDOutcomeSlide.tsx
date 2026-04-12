import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { FileDown, FileJson, Layers } from 'lucide-react'

export default function ChallengeDOutcomeSlide() {
  const deliverables = [
    {
      title: "1. Der Service Blueprint",
      desc: "Die logische App-Architektur. Ein ausführliches Diagramm, das exakt beschreibt, wann der Frontstage-User mit Backend-APIs, Datenbanken und Third-Party Services kommuniziert.",
      format: "Whimsical Flowchart oder Mermaid.js Code (in einem Markdown-Dokument)",
      icon: <FileJson className="w-6 h-6 text-indigo-400" />,
      color: "from-indigo-500/10 to-transparent",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "2. Die Interface-Sitemap",
      desc: "Die Struktur des Frontends. Basierend auf eurem Service Blueprint generiert ihr in Relume.io die dazu passenden App-Screens (Wireframes) und vernetzt diese zu einem Flow.",
      format: "Relume.io Share-Link oder Figma-Copy",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/10 to-transparent",
      borderColor: "border-purple-500/30"
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-lg mb-6">
             <FileDown className="w-8 h-8 text-fhgr-accent" />
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Part 3</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Outcome & Deliverables</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
            Am Ende dieser Challenge präsentiert ihr zwei miteinander verbundene System-Artefakte, die beweisen, dass eure System-Logik wasserdicht ist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {deliverables.map((item, idx) => (
            <Card 
              key={idx}
              delay={0.1 * idx}
              variant="glass"
              className={`!p-8 relative overflow-hidden border ${item.borderColor} bg-gradient-to-br ${item.color} group`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed mb-6 font-medium text-sm">
                {item.desc}
              </p>
              <div className="bg-black/30 rounded-lg p-4 border border-white/5">
                <span className="block text-[10px] uppercase font-mono tracking-widest text-white/40 mb-2">Abgabeformat</span>
                <span className="text-sm font-semibold text-white/90">{item.format}</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
