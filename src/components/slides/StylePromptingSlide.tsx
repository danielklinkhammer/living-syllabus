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

        {/* Right: Abstract Visualization of standard UI pulling to the centre */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-[#0A1628] border border-white/10 flex items-center justify-center shadow-2xl"
          >
            {/* Background concentric circles implying gravity */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="w-[80%] h-[80%] rounded-full border border-orange-500/20 animate-pulse"></div>
              <div className="w-[60%] h-[60%] rounded-full border border-orange-500/30 absolute animate-pulse delay-75"></div>
              <div className="w-[40%] h-[40%] rounded-full border border-orange-500/50 absolute animate-pulse delay-150"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="text-center mb-2">
                <Target className="w-8 h-8 text-orange-400 mx-auto mb-3 opacity-80" />
                <div className="text-xs font-mono text-orange-300/80 uppercase tracking-widest">SaaS Gravity Well</div>
              </div>
              
              {/* Stack of basic UI cards looking generic */}
              <div className="relative w-64 h-48">
                <div className="absolute inset-0 bg-white shadow-xl rounded-lg border border-gray-200 transform -rotate-6 flex flex-col p-4 opacity-50">
                  <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
                  <div className="flex-1 space-y-2">
                     <div className="h-2 bg-gray-100 rounded w-full"></div>
                     <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                     <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                  </div>
                  <div className="h-8 bg-blue-500 rounded-md w-full mt-4"></div>
                </div>
                
                <div className="absolute inset-0 bg-white shadow-xl rounded-lg border border-gray-200 transform rotate-3 flex flex-col p-4 z-10">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center"><Sparkles className="w-3 h-3" /></div>
                     <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex-1 space-y-2">
                     <div className="h-2 bg-gray-100 rounded w-full"></div>
                     <div className="h-2 bg-gray-100 rounded w-full"></div>
                     <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  </div>
                  <div className="mt-4 flex gap-2">
                     <div className="h-8 bg-gray-100 rounded-md w-1/2"></div>
                     <div className="h-8 bg-blue-600 rounded-md w-1/2 shadow-inner shadow-white/20"></div>
                  </div>
                </div>
              </div>
              
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  )
}
