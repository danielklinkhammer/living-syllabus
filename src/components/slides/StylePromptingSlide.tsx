import { motion } from 'framer-motion'
import { Sparkles, BrainCircuit, Target, AlertTriangle, ShieldX } from 'lucide-react'

export default function StylePromptingSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12 lg:mt-0 pb-12">
        
        {/* Left: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-orange-400 text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Design System Bias
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Aesthetic Fixation</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              LLMs optimieren auf den statistischen "Mittelwert" des Internets. Wenn wir der KI keine strenge visuelle Richtung vorgeben, flacht jeder generierte Screen sofort in einen generischen, austauschbaren <span className="text-orange-300 font-semibold">SaaS-Clean-Look</span> ab.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Diese unsichtbare <strong>Data Gravity</strong> sorgt dafür, dass fast alle KI-Modelle von Natur aus ähnliche Layouts, exakt gleiche Abstände und identische Schattierungen wählen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.1}}
              className="p-5 border border-white/10 bg-white/5 rounded-xl"
            >
              <BrainCircuit className="w-5 h-5 text-fhgr-petrol-light mb-3" />
              <h4 className="font-bold text-white mb-2">Der ML-Mittelwert</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Modelle suchen stets nach der Lösung mit der höchsten Konfidenz. Das ist im Design meist der harmlose, bewährte Standard-Look ohne Ecken und Kanten.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.2}}
              className="p-5 border border-orange-500/20 bg-orange-500/5 rounded-xl"
            >
              <ShieldX className="w-5 h-5 text-orange-400 mb-3" />
              <h4 className="font-bold text-orange-400 mb-2">Die Konsequenz</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                Selbst unser "Living Syllabus" Interface sieht unverkennbar nach KI aus. Die Ästhetik stagniert. Echtes Design gegen den Algorithmus wird zum Akt des <em>bewussten Widerstands</em>.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right: The Fixation Funnel */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full flex flex-col md:flex-row items-center gap-6"
          >
            {/* The Inputs */}
            <div className="flex flex-col gap-4 w-full md:w-5/12">
               <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs font-mono text-white/70 relative">
                  Prompt 1: <span className="text-pink-400">"Mache es wild & verspielt!"</span>
                  <div className="hidden md:block absolute -right-6 top-1/2 w-6 border-t border-dashed border-white/20"></div>
               </div>
               <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs font-mono text-white/70 relative">
                  Prompt 2: <span className="text-yellow-400">"Maximal brutalistisch."</span>
                  <div className="hidden md:block absolute -right-6 top-1/2 w-6 border-t border-dashed border-white/20"></div>
               </div>
               <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs font-mono text-white/70 relative">
                  Prompt 3: <span className="text-blue-400">"Einfach Corporate."</span>
                  <div className="hidden md:block absolute -right-6 top-1/2 w-6 border-t border-dashed border-white/20"></div>
               </div>
            </div>

            {/* The Processing / Funnel logic */}
            <div className="flex items-center justify-center">
               <div className="bg-[#0A1628] border border-orange-500/30 rounded-xl p-4 flex flex-col items-center gap-2 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                 <BrainCircuit className="w-6 h-6 text-orange-400" />
                 <div className="text-[10px] font-bold tracking-widest uppercase text-orange-400">LLM Filter</div>
               </div>
            </div>

            {/* The Singular Output */}
            <div className="w-full md:w-5/12 relative">
               <div className="hidden md:block absolute -left-6 top-1/2 w-6 border-t border-dashed border-orange-500/50"></div>
               <div className="bg-white rounded-xl p-5 shadow-2xl border border-gray-200 w-full transform md:rotate-2">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Target className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <div className="h-3 w-20 bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 w-12 bg-gray-100 rounded"></div>
                    </div>
                 </div>
                 <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                 <div className="h-2 w-4/5 bg-gray-100 rounded mb-6"></div>
                 <div className="w-full h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="h-2 w-12 bg-white/50 rounded"></div>
                 </div>
               </div>
               <div className="text-center mt-4">
                 <div className="text-xs font-mono text-orange-400 uppercase tracking-widest font-bold">Generic SaaS Output</div>
                 <div className="text-[10px] text-white/40 mt-1">Struktur besiegt Stil</div>
               </div>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  )
}
