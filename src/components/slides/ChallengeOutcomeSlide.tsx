import { motion } from 'framer-motion'
import { Grid3X3, FileText } from 'lucide-react'

export default function ChallengeOutcomeSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left: Intro */}
        <div className="lg:col-span-5">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge C · Part 2</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Das Outcome</h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Am Ende der Challenge gebt ihr ein zusammenhängendes Portfolio eurer <strong>Systemik-Fähigkeiten</strong> ab. Kein Einzelloop, sondern eine Matrix.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-fhgr-petrol/10 border border-fhgr-petrol/30 shrink-0 mt-1">
                  <Grid3X3 className="w-5 h-5 text-fhgr-petrol-light" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Die 3×3 Matrix</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Exakt 9 Screens in Figma. Drei Interface-Ansichten (bspw. Detail-Kachel, Sidebar, Hero-Widget) gezeichnet in euren drei ausgewählten Design-Stilen.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30 shrink-0 mt-1">
                  <FileText className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Die Stil-Dokumentation</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Eure schriftlichen Dokumentationen (z.B. Markdown-Files), die die Stile formalisieren. Sie garantieren, dass euer visueller Code von anderen (oder LLMs) eindeutig reproduziert werden kann.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: The 3x3 Visualization */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full relative"
          >
            {/* 3x3 Grid Wrapper */}
            <div className="bg-[#0A1628] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fhgr-petrol/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-white/40">Figma Delivery Matrix</span>
                <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-white/50 border border-white/10">3 Styles × 3 Views</span>
              </div>

              {/* Grid 3 cols (Styles) x 3 rows (Views) */}
              <div className="grid grid-cols-4 gap-2">
                
                {/* Headers */}
                <div className="col-span-1"></div>
                <div className="text-[10px] font-bold text-center text-white/50 tracking-wider">Style A<br/><span className="text-fhgr-petrol-light">Clean</span></div>
                <div className="text-[10px] font-bold text-center text-white/50 tracking-wider">Style B<br/><span className="text-purple-400">Brutal</span></div>
                <div className="text-[10px] font-bold text-center text-white/50 tracking-wider">Style C<br/><span className="text-orange-400">Spatial</span></div>

                {/* View 1 */}
                <div className="flex items-center justify-end pr-3 text-[10px] font-mono text-white/30">View 1</div>
                <div className="aspect-video bg-white/5 border border-white/10 rounded overflow-hidden flex items-center justify-center p-2"><div className="w-full h-full bg-fhgr-petrol/20 rounded-sm"></div></div>
                <div className="aspect-video bg-white/5 border-2 border-black rounded-none overflow-hidden flex items-center justify-center p-2"><div className="w-full h-full bg-purple-500/20 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div></div>
                <div className="aspect-video shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] bg-white/10 border border-white/20 rounded-xl overflow-hidden flex items-center justify-center p-2"><div className="w-full h-full bg-orange-400/20 rounded-lg backdrop-blur"></div></div>

                {/* View 2 */}
                <div className="flex items-center justify-end pr-3 text-[10px] font-mono text-white/30">View 2</div>
                <div className="aspect-video bg-white/5 border border-white/10 rounded overflow-hidden flex items-center justify-center p-2"><div className="w-full h-1/2 bg-fhgr-petrol/20 rounded-sm"></div></div>
                <div className="aspect-video bg-white/5 border-2 border-black rounded-none overflow-hidden flex items-center justify-center p-2"><div className="w-full h-1/2 bg-purple-500/20 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div></div>
                <div className="aspect-video shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] bg-white/10 border border-white/20 rounded-xl overflow-hidden flex items-center justify-center p-2"><div className="w-full h-1/2 bg-orange-400/20 rounded-lg backdrop-blur"></div></div>

                {/* View 3 */}
                <div className="flex items-center justify-end pr-3 text-[10px] font-mono text-white/30">View 3</div>
                <div className="aspect-square bg-white/5 border border-white/10 rounded overflow-hidden flex items-center justify-center p-2"><div className="w-3/4 h-3/4 rounded-full border-2 border-fhgr-petrol/30"></div></div>
                <div className="aspect-square bg-white/5 border-2 border-black rounded-none overflow-hidden flex items-center justify-center p-2"><div className="w-3/4 h-3/4 bg-purple-500/20 border border-black"></div></div>
                <div className="aspect-square shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] bg-white/10 border border-white/20 rounded-xl overflow-hidden flex items-center justify-center p-2"><div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-orange-500/20 to-orange-300/10 shadow-inner"></div></div>

              </div>

              {/* Documentation Floating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 xl:-left-8 bg-[#18181B] border border-[#27272A] p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex gap-3 items-center"
              >
                <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="pr-4">
                  <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mb-1">Documentation</div>
                  <div className="text-xs text-white font-medium">3x design_rules.md</div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
