import { motion } from 'framer-motion'
import { FolderTree, Network, BrainCircuit, Lightbulb } from 'lucide-react'
import Card from '../ui/Card'

export default function PIMConceptSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative pb-10 lg:pb-0">
      
      {/* Background Ornaments */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-fhgr-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-fhgr-petrol/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full z-10 pt-10 lg:pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fhgr-petrol/10 border border-fhgr-petrol/30 text-fhgr-petrol-light text-sm font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(131,197,190,0.15)]">
            <BrainCircuit className="w-4 h-4" /> Personal Intelligence Modeling
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4">
            Das AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-fhgr-petrol to-fhgr-accent">Second Brain</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Wie wir Wissen für uns und unsere intelligenten Agenten so strukturieren, dass das System über Domänengrenzen hinweg selbstständig neue Muster erkennt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Altes System */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="relative group"
          >
            <Card variant="glass" className="h-full border border-red-500/20 bg-red-950/10">
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-500/10 rounded-xl text-red-400">
                     <FolderTree className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white/90">Hierarchisch (Ordner)</h3>
                </div>
                <ul className="space-y-3 mt-2 text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-0.5">✕</span> Menschliches Denken ist nicht starr und linear.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-0.5">✕</span> Notizen sterben in isolierten Verzeichnissen.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-0.5">✕</span> Keine cross-disziplinäre Mustererkennung.
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Neues System */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="relative group"
          >
            <Card variant="glass" className="h-full border border-fhgr-petrol/30 bg-fhgr-petrol/5 shadow-[0_0_30px_rgba(131,197,190,0.1)]">
              <div className="flex flex-col h-full gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-fhgr-petrol/20 rounded-xl text-fhgr-petrol-light shadow-[0_0_15px_rgba(131,197,190,0.3)]">
                     <Network className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white/90">Assoziativ (Graph)</h3>
                </div>
                <ul className="space-y-3 mt-2 text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-fhgr-petrol-light font-bold mt-0.5">✓</span> Zettelkasten-Prinzip: Verlinkte Konzepte statt Ordner.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fhgr-petrol-light font-bold mt-0.5">✓</span> <strong className="text-white">Trails of Association</strong> (Memex-Theorie).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-fhgr-petrol-light font-bold mt-0.5">✓</span> LLMs können Semantik aus Verlinkungen inferieren.
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

        </div>

        {/* Die Exokortex Theorie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-black/40 border border-white/5 p-6 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-fhgr-accent" />
          <div className="flex flex-col md:flex-row gap-6 items-center">
             <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fhgr-accent/10 flex items-center justify-center border border-fhgr-accent/20 text-fhgr-accent shadow-[0_0_20px_rgba(255,107,53,0.2)]">
                <Lightbulb className="w-8 h-8" />
             </div>
             <div>
                <h4 className="text-lg font-bold mb-2">Die "Exokortex" Theorie</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Die Frage ist nicht <em>"Wie nutze ich KI für meine Notizen?"</em> sondern: <strong>"Wie entsteht Intelligenz an der Grenze zwischen Mensch, Struktur und Maschine?"</strong> <br/>
                  Wenn wir unser Wissen in maschinenlesbaren, assoziativen Einheiten (Atomic Notes) auslagern, können KI-Agenten über den gesamten Kontext-Graphen blicken und Zusammenhänge inferieren, die die Grenzen unseres Arbeitsgedächtnisses sprengen.
                </p>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
