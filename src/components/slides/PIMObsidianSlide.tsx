import { motion } from 'framer-motion'
import { FileText, Cpu, Waypoints, Zap, Target } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'

export default function PIMObsidianSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Text & Concepts */}
        <div className="flex-1 w-full space-y-8 relative z-10 py-8">
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fhgr-accent/10 border border-fhgr-accent/30 text-fhgr-accent text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(255,107,53,0.15)]"
          >
            <Target className="w-4 h-4" /> Tool of Choice: Obsidian
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold font-head tracking-tight leading-[1.1]"
          >
            Local Markdown <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fhgr-petrol via-[#A3E4D7] to-white/70">
              als Semantic Web
            </span>
          </motion.h2>

          <div className="space-y-6">
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="flex items-start gap-4"
            >
               <div className="mt-1 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 text-blue-400">
                  <FileText className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-1 text-white/90">File-over-App Prinzip</h3>
                 <p className="text-sm text-white/60 leading-relaxed">
                   Obsidian nutzt simple lokale <code>.md</code> Dateien. Das garantiert ultimative Langlebigkeit (Vendor Lock-in existiert nicht) und maschinelle Lesbarkeit für LLMs & Agenten.
                 </p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="flex items-start gap-4"
            >
               <div className="mt-1 w-12 h-12 rounded-xl bg-fhgr-petrol/10 flex items-center justify-center flex-shrink-0 border border-fhgr-petrol/30 text-fhgr-petrol-light">
                  <Waypoints className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-1 text-white/90">Semantik aus Plain Text</h3>
                 <p className="text-sm text-white/60 leading-relaxed">
                   Kein mühsames Pflegen von Metadaten wie im Web 3.0 (RDF/OWL). KI-Modelle inferieren aus simplem Text und <code>[[Wikilinks]]</code> vollautomatisch konzeptuelle Zusammenhänge.
                 </p>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="flex items-start gap-4"
            >
               <div className="mt-1 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 border border-orange-500/20 text-orange-400">
                  <Zap className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-1 text-white/90">Pattern Recognition</h3>
                 <p className="text-sm text-white/60 leading-relaxed">
                   Indem man der KI den Kontext aus dem eigenen Vault-Graph übergibt, fungiert sie als <strong>Inferenzmaschine</strong> – sie findet Brücken zwischen scheinbar unverbundenen Notizen.
                 </p>
               </div>
            </motion.div>

          </div>
        </div>

        {/* Right Column: Visual Demonstration */}
        <div className="flex-1 w-full h-[500px] lg:h-full relative flex items-center justify-center -mt-8 lg:mt-0">
           {/* Visual Diagram representing Markdown parsing into Neural Graph */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full max-w-md aspect-square"
           >
              {/* Outer decorative ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Source Nodes */}
                <div className="absolute left-[5%] top-[25%] flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-[#2A2B31] border border-white/20 flex items-center justify-center text-white/80 shadow-lg">
                    <FileText className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40">note_A.md</span>
                </div>

                <div className="absolute left-[5%] bottom-[25%] flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-[#2A2B31] border border-white/20 flex items-center justify-center text-white/80 shadow-lg">
                    <FileText className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-mono text-white/40">note_B.md</span>
                </div>

                {/* Processing Middle */}
                <motion.div 
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-fhgr-petrol via-blue-500 to-purple-600 p-[2px] z-10 shadow-[0_0_40px_rgba(131,197,190,0.4)]"
                >
                  <div className="w-full h-full bg-black/80 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                <div className="absolute top-[18%] text-[10px] font-mono uppercase tracking-[0.2em] text-fhgr-petrol-light mb-8">Inferenz-Schicht</div>

                {/* Connections via SVGs */}
                <svg className="absolute inset-0 w-full h-full -z-10" style={{ filter: 'drop-shadow(0 0 4px rgba(131,197,190,0.5))' }}>
                   <path d="M 64 300 Q 150 300 200 230" fill="none" stroke="url(#petrol-gradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_10s_linear_infinite]" />
                   <path d="M 64 160 Q 150 160 200 215" fill="none" stroke="url(#petrol-gradient)" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_10s_linear_infinite]" />
                   <path d="M 260 220 L 330 220" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.2" />
                   
                   <defs>
                     <linearGradient id="petrol-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2A2B31" />
                        <stop offset="100%" stopColor="#83C5BE" />
                     </linearGradient>
                   </defs>
                </svg>

                {/* Target Node */}
                <div className="absolute right-[5%] flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full bg-fhgr-accent/20 border-2 border-fhgr-accent/50 flex items-center justify-center text-fhgr-accent shadow-[0_0_30px_rgba(255,107,53,0.3)]">
                    <Waypoints className="w-10 h-10" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-fhgr-accent bg-fhgr-accent/10 px-2 py-0.5 rounded-full mt-2">Emergent Pattern</span>
                </div>

              </div>
           </motion.div>
        </div>

      </div>
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </SlideLayout>
  )
}
