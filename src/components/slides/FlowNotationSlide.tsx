import { motion } from 'framer-motion'
import Card from '../ui/Card'
import HeroGraphic from '../ui/HeroGraphic'

export default function FlowNotationSlide() {
  const symbols = [
    { name: "Start / Ende", shape: "Oval", desc: "Einstiegs- oder Ausstiegspunkt (z.B. App öffnen)", draw: "rounded-full" },
    { name: "Aktion", shape: "Rechteck", desc: "Ein Schritt, den User oder System macht (z.B. In den Warenkorb)", draw: "rounded-md" },
    { name: "Entscheidung", shape: "Raute", desc: "Ja/Nein-Verzweigung (z.B. Eingeloggt?)", draw: "rotate-45 rounded-sm" },
    { name: "Daten", shape: "Parallelogramm", desc: "Input/Output (z.B. Formular, API-Antwort)", draw: "-skew-x-12 rounded-sm" }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left: Content */}
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}}>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Die Grammatik der Logik</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Flowchart Notation</h2>
          <p className="text-lg text-white/50 leading-relaxed mb-8">
            Bevor wir KI-Tools nutzen, müssen wir die universelle Sprache der Prozess-Architektur sprechen. Diese 4 Symbole strukturieren jede App-Logik der Welt.
          </p>

          <div className="space-y-4">
            {symbols.map((sym, i) => (
              <Card key={i} delay={0.1 * i} variant="glass" className="!p-4 bg-white/5">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 flex items-center justify-center shrink-0 border border-white/10 bg-black/40 rounded-lg">
                    <div className={`w-8 h-8 border-[3px] border-fhgr-petrol-light bg-fhgr-petrol/20 ${sym.draw}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{sym.name}</h3>
                    <div className="text-xs font-mono text-fhgr-petrol-light mb-1">{sym.shape}</div>
                    <p className="text-sm text-white/50">{sym.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Right: Graphic */}
        <div className="flex items-center justify-center lg:mt-0 mt-8 w-full max-w-md mx-auto">
          <HeroGraphic delay={0.2} className="!p-8 bg-[#1A1A1A] w-full flex-col items-center gap-6 relative">
            <div className="absolute top-0 right-0 py-2 px-4 bg-fhgr-petrol/20 text-fhgr-petrol-light font-mono text-[10px] rounded-bl-xl border-b border-l border-fhgr-petrol/30 z-10">BEISPIEL-FLOW</div>
            
            {/* Start */}
            <div className="px-6 py-2 border-2 border-indigo-400 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">Open App</div>
            
            <div className="w-0.5 h-6 bg-white/30" />
            
            {/* Entscheidung */}
            <div className="w-24 h-24 rotate-45 border-2 border-orange-400 bg-orange-500/20 text-orange-300 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <span className="-rotate-45 text-xs font-bold text-center leading-tight">Logged<br/>In?</span>
            </div>
            
            <div className="w-full flex justify-between relative mt-2">
              <div className="w-1/2 flex flex-col items-center">
                <div className="text-[10px] text-white/50 mb-1 z-10 bg-[#1A1A1A] px-2 -translate-y-6 -ml-16">Yes</div>
                <div className="w-0.5 h-6 bg-white/30 -mt-6" />
                <div className="w-32 px-4 py-3 border-2 border-white/40 bg-white/5 text-white rounded text-sm text-center">Dashboard</div>
              </div>
              <div className="w-1/2 flex flex-col items-center">
                <div className="text-[10px] text-white/50 mb-1 z-10 bg-[#1A1A1A] px-2 -translate-y-6 ml-16">No</div>
                <div className="w-0.5 h-6 bg-white/30 -mt-6" />
                <div className="w-32 px-4 py-3 border-2 border-white/40 bg-white/5 text-white rounded text-sm text-center">Login Screen</div>
              </div>

              {/* Connecting Lines (Horizontal) */}
              <div className="absolute top-[-26px] left-[25%] right-[25%] h-0.5 bg-white/30 -z-0" />
            </div>
          </HeroGraphic>
        </div>

      </div>
    </div>
  )
}
