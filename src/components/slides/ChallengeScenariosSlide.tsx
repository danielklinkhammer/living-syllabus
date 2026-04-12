import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function ChallengeScenariosSlide() {
  const scenarios = [
    { 
      title: "Smart Home Energy", 
      desc: "Solarertrag, Netzbezug, Batterie-Füllstand, Kosten-Prognose.",
      icon: "☀️" 
    },
    { 
      title: "E-Commerce Growth", 
      desc: "Live-Umsatz, Inventory Status, Checkout-Dropoffs, CAC.",
      icon: "🛒" 
    },
    { 
      title: "Health & Recovery", 
      desc: "Herzfrequenz-Varianzen, Schlaf-Phasen Analyse, Schritte, Kalorien.",
      icon: "🧬" 
    },
    { 
      title: "Agentic Monitor", 
      desc: "Active AI Agents, Server-Load, API-Kosten, Fehlerraten.",
      icon: "🤖" 
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-5xl w-full mx-auto relative z-10 text-center">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-fhgr-petrol to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg mb-6 shadow-fhgr-petrol/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge C · Part 1</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Die Aufgabenstellung</h2>
          <div className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-12 space-y-4">
            <p>
              <strong>Zielsetzung:</strong> Die methodische Konstruktion und visuelle Antithese von drei unabhängigen Design-Systemen für komplexe Daten-Dashboards.
            </p>
            <p className="text-base text-white/50">
              Der Fokus liegt nicht auf der passiven Kolorierung einzelner Screens, sondern auf der Definition von generativen Regeln, die es kontextsensitiven KI-Agenten erlauben, funktionale Layouts in voneinander abweichenden visuellen Sphären aufzubauen.
            </p>
          </div>
        </motion.div>

        <div className="text-sm font-semibold tracking-widest uppercase text-white/30 mb-4">Wählen Sie Ihr Anwendungsszenario:</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left w-full">
          {scenarios.map((s, idx) => (
            <Card 
              key={idx}
              delay={0.1 * idx}
              variant="glass"
              className="!p-6 hover:border-fhgr-petrol/50 hover:bg-white/10 transition-colors cursor-crosshair group flex flex-col text-left"
            >
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all text-left w-full">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white text-left w-full">{s.title}</h3>
              <p className="text-sm text-white/50 text-left w-full">{s.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
