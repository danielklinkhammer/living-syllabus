import { motion } from 'framer-motion'
import { Sparkles, Bot, Blocks } from 'lucide-react'

export default function DashboardAIDesignSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 lg:mt-0 items-center">
        
        {/* Left: Content */}
        <div className="lg:col-span-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Next-Gen Interfaces</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Dashboards im KI-Zeitalter</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-6">
              Die Ära endloser, starrer Kachelwüsten endet. Moderne KI-Dashboards sind keine passiven Beobachtungsstationen mehr, sondern dynamische Agenten.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30 shrink-0 mt-1">
                  <Blocks className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Generative UI (GenUI)</div>
                  <div className="text-sm text-white/50 leading-relaxed">
                    Statt vordefinierter Ansichten ("Widgets") bauen Systeme die passende Visualisierung in Echtzeit zusammen, basierend auf dem aktuellen Kontext ("Zeig mir den Abfall der Server-Performance als Heatmap").
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 shrink-0 mt-1">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Intent-basiertes Surfacing</div>
                  <div className="text-sm text-white/50 leading-relaxed">
                    Der User muss nicht mehr eigenständig Anomalien im Grid suchen. Ein Hintergrund-Agent pusht die relevanten Datenströme nur dann in den Vordergrund, wenn menschliche Aufmerksamkeit (Intent) erforderlich ist.
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-fhgr-petrol/10 border border-fhgr-petrol/30 shrink-0 mt-1">
                  <Bot className="w-5 h-5 text-fhgr-petrol-light" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Copilot als Controller (Chat-as-UI)</div>
                  <div className="text-sm text-white/50 leading-relaxed">
                    Das Interface verschmilzt mit Conversational AI. Dashboards werden zu dynamischen Arbeitsflächen, auf denen der User per natürlicher Sprache Metriken abfragt und die KI direkte System-Eingriffe vornimmt.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Graphic */}
        <div className="lg:col-span-6 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full relative"
          >
            {/* The Dynamic Evolution UI Mockup */}
            <div className="bg-[#0A1628] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
               {/* Background glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-fhgr-petrol/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

               {/* Mockup Header */}
               <div className="flex items-center justify-between mb-4">
                  <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-purple-300 flex items-center gap-2">
                     <Sparkles className="w-3 h-3 text-purple-400" /> UI Generated
                  </div>
               </div>

               {/* Interaction Zone: Chat Input Morphing into Widget */}
               <div className="space-y-4">
                 
                 {/* User Prompt */}
                 <div className="flex justify-end">
                    <div className="bg-white/10 border border-white/20 rounded-2xl rounded-tr-sm px-4 py-3 text-xs text-white max-w-[80%]">
                      "Warum ist der Traffic heute so gering?"
                    </div>
                 </div>

                 {/* GenUI Answer & Generated Widget */}
                 <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-2 items-center">
                       <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center border border-white/20">
                          <Bot className="w-3 h-3 text-white" />
                       </div>
                       <span className="text-[10px] font-mono uppercase text-white/30 tracking-widest">Dashboard Agent</span>
                    </div>

                    <div className="bg-[#131E30] border border-fhgr-petrol/30 rounded-xl p-4 w-full relative shadow-lg">
                       <p className="text-xs text-white/70 mb-4 leading-relaxed">
                         Mir ist eine signifikante Anomalie um 14:00 Uhr aufgefallen. Der Ausfall der Datenbank-Nodes hat die globale Latenz beeinflusst. Ich habe dir ein temporäres Monitoring-Widget generiert:
                       </p>

                       {/* The Generated Widget */}
                       <div className="bg-[#0A111C] border border-white/5 rounded-lg p-3">
                          <div className="flex justify-between items-end mb-4">
                             <div>
                                <div className="text-[10px] font-mono text-orange-400 uppercase tracking-widest">Global Latency</div>
                                <div className="text-2xl font-bold text-white mt-1">840ms</div>
                             </div>
                             <div className="text-[10px] text-red-400 font-mono">+ 400%</div>
                          </div>
                          <div className="h-10 flex items-end gap-[2px]">
                             {[10, 15, 12, 18, 14, 20, 25, 90, 85, 75, 40, 20].map((h, i) => (
                               <div key={i} className={`flex-1 rounded-sm ${i >= 7 && i <= 9 ? 'bg-orange-500/80 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-white/20'}`} style={{ height: `${h}%` }}></div>
                             ))}
                          </div>
                       </div>

                       <div className="mt-3 flex gap-2">
                          <button className="px-3 py-1.5 bg-fhgr-petrol text-white text-[10px] uppercase font-bold rounded flex-1 tracking-wider text-center">Pin an Home</button>
                          <button className="px-3 py-1.5 bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold rounded flex-1 tracking-wider text-center hover:bg-white/10">Details</button>
                       </div>
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
