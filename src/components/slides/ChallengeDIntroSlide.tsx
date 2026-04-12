import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Network, GitMerge, FileCode2 } from 'lucide-react'

export default function ChallengeDIntroSlide() {
  const steps = [
    { 
      title: "Service Blueprint", 
      desc: "Ihr modelliert den Ablauf eures Use Cases als Mermaid.js Sequenz-Diagramm oder in Whimsical. Fokus: Welche Akteure (Client, Server, API) agieren wann miteinander?",
      icon: <Network className="w-8 h-8 text-fhgr-petrol" />
    },
    { 
      title: "Edge Cases (Unhappy Path)", 
      desc: "Ihr identifiziert mindestens 3 kritische Brüche im System (z.B. API Offline, Timeout, User hat keine Rechte) und definiert visuell, wie die App darauf reagiert.",
      icon: <GitMerge className="w-8 h-8 text-red-400" />
    },
    { 
      title: "Sitemap & Wireframes", 
      desc: "Mit Relume.io wandelt ihr die konzipierte Logik in eine Sitemap und grundlegende Wireframes um. Dies bildet das Fundament für den späteren Bau.",
      icon: <FileCode2 className="w-8 h-8 text-orange-400" />
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-fhgr-petrol to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 shadow-fhgr-petrol/20">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Part 1</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Die Aufgabenstellung</h2>
          <div className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-12 space-y-4">
            <p>
              <strong>Das Ziel:</strong> Ihr gestaltet keinen UI-Klickdummy, sondern entwerft eine maschinenlesbare <strong>Prozess-Architektur</strong>!
            </p>
            <p className="text-base text-white/50">
              Ihr wählt eines von vier hochkomplexen Service-Logik Szenarien. Anstatt gleich Figma zu öffnen, plant ihr die "Backstage"-Logik: Wie interagiert die App mit Datenbanken, Drittanbieter-Services und APIs? Erst wenn die Logik (Service Blueprint) steht, generiert ihr die Struktur (Sitemap).
            </p>
          </div>
        </motion.div>

        <div className="text-sm font-semibold tracking-widest uppercase text-white/30 mb-6">Der Kern der Aufgabe:</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full">
          {steps.map((s, idx) => (
            <Card 
              key={idx}
              delay={0.1 * idx}
              variant="glass"
              className="!p-6 flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
