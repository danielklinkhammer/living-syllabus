import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Sparkles, Palette, FileCode2, Download } from 'lucide-react'

export default function ChallengeWorkflowSlide() {
  const steps = [
    {
      num: "Phase 1", 
      title: "Visuelle Konzepte erstellen", 
      icon: <Palette className="w-4 h-4 text-white/50" />,
      desc: "Nutzt ImageFX oder Midjourney, um drei grundverschiedene Design-Welten (z.B. Clean vs. Dark Mode vs. Retro) für euer Dashboard zu skizzieren."
    },
    {
      num: "Phase 2", 
      title: "Design-Regeln dokumentieren", 
      icon: <FileCode2 className="w-4 h-4 text-white/50" />,
      desc: "Analysiert eure erstellten Referenzen (gerne mit Hilfe eines LLMs wie Gemini/ChatGPT) und dokumentiert die Design-Regeln, Farben und UI-Elemente systematisch in Textform (z.B. als `design.md` oder in Stichpunkten)."
    },
    {
      num: "Phase 3", 
      title: "Design manuell manipulieren & KI-Build", 
      icon: <Sparkles className="w-4 h-4 text-fhgr-petrol" />,
      desc: "Gebt euer Manifest als Prompt an Figma Make oder Google Stitch. Wichtig: Schaut euch die `design.md` genau an und manipuliert gezielt Werte (z.B. Spacer, Corner-Radius), um zu sehen, wie Stitch darauf reagiert!"
    },
     {
      num: "Phase 4", 
      title: "Figma Konsolidierung", 
      icon: <Download className="w-4 h-4 text-white/50" />,
      desc: "Exportiert alle drei fertigen Dashboard-Varianten in eine einzige Figma-Datei, bereinigt KI-Fehler und bereitet sie als Präsentationsmatrix auf."
    }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto custom-scrollbar relative">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 lg:mt-0 pt-8 pb-12">
        
        {/* Left: Content */}
        <div className="lg:col-span-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge C · Part 2</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Methodik & KI-Pipeline</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6 max-w-4xl">
              Wir bauen die Dashboards nicht mühsam per Hand von Grund auf. Stattdessen nutzen wir KI als Assistenten – orchestrieren den Aufbau aber durch strikte Regeln, um Zufall durch Präzision zu ersetzen.
            </p>
          </motion.div>
        </div>

        {/* The Pipeline */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
           {steps.map((step, idx) => (
             <Card 
               key={idx}
               delay={0.1 * idx}
               variant="glass"
               className={`!p-5 relative overflow-hidden flex flex-col justify-start h-full ${idx === 2 ? 'border-fhgr-petrol/40 bg-fhgr-petrol/5' : ''}`}
             >
               {idx === 2 && <div className="absolute top-0 right-0 w-32 h-32 bg-fhgr-petrol/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />}
               
               <div className="flex justify-between items-start mb-3">
                 <div className={`text-xs font-mono font-bold px-2 py-1 rounded bg-black/40 border border-white/5 ${idx === 2 ? 'text-fhgr-petrol-light' : 'text-white/50'}`}>
                   {step.num}
                 </div>
                 <div className="p-2 bg-black/30 rounded-lg border border-white/5">
                   {step.icon}
                 </div>
               </div>
               
               <div className="font-bold text-white text-base mb-2 tracking-tight">{step.title}</div>
               <div className="text-xs text-white/50 leading-relaxed">{step.desc}</div>
             </Card>
           ))}
           
           {/* Unified Tool Matrix below Pipeline */}
           <div className="col-span-full mt-2">
            <div className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">Zugelassenes Toolkit</div>
            <div className="flex flex-wrap gap-2">
               <div className="px-3 py-1.5 border border-white/10 bg-white/5 rounded-lg flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> ImageFX
               </div>
               <div className="px-3 py-1.5 border border-white/10 bg-white/5 rounded-lg flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Gemini
               </div>
               <div className="px-3 py-1.5 border border-fhgr-petrol/40 bg-fhgr-petrol/10 rounded-lg flex items-center gap-2 text-xs text-fhgr-petrol-light font-bold shadow-[0_0_15px_rgba(25,188,155,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Figma Make 
               </div>
               <div className="px-3 py-1.5 border border-fhgr-petrol/40 bg-fhgr-petrol/10 rounded-lg flex items-center gap-2 text-xs text-fhgr-petrol-light font-bold shadow-[0_0_15px_rgba(25,188,155,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Google Stitch 
               </div>
            </div>
          </div>
        </div>

        {/* Right: Embedded Google Stitch Screenshot */}
        <div className="lg:col-span-5 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            <div className="absolute top-0 inset-x-0 h-10 bg-black/60 backdrop-blur-md flex items-center px-4 gap-3 z-10 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-[10px] font-mono text-white/50 tracking-wider">Example: Google Stitch (Brutalist UI)</div>
            </div>
            <img 
              src="/images/stitch-brutalist.jpg" 
              alt="Google Stitch Brutalist Design System" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
               <Sparkles className="w-3 h-3 text-fhgr-petrol-light" />
               <span className="text-[10px] font-mono text-fhgr-petrol-light">Prompt: "Ich möchte ein brutalist design..."</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
