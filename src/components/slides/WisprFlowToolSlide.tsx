import { motion } from 'framer-motion'
import { Mic, Wand2, AudioLines, ExternalLink } from 'lucide-react'
import SlideLayout from '../layout/SlideLayout'

export default function WisprFlowToolSlide() {
  return (
    <SlideLayout>
      <div className="w-full h-full flex flex-col justify-center">
        
        <div className="mb-10 text-center mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-4">
             <Mic className="w-4 h-4" /> Tool Spotlight
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-head tracking-tight leading-tight mb-4 text-white flex items-center justify-center gap-4">
            Input via <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Wispr Flow</span>
            <a href="https://www.wisprflow.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/50 hover:text-emerald-400">
              <ExternalLink className="w-4 h-4" />
            </a>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            Ein lokales Obsidian-Vault ist nur nützlich, wenn man es auch füttert. Wispr Flow revolutioniert die Informationserfassung: Es ist kein Diktiergerät, sondern ein "Intelligentes Voice Keyboard".
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 bg-black/20 border border-white/5 p-6 lg:p-8 rounded-3xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50" />

          {/* Left Column: UI Animation Concept */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.1 }}
            className="flex-1 w-full bg-[#1A1A1A] rounded-2xl border border-white/10 shadow-2xl p-6 relative overflow-hidden"
          >
             <div className="absolute top-[-20%] left-[-10%] w-[200px] h-[200px] bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
             
             <div className="flex flex-col gap-4">
               {/* Audio Input fake */}
               <div className="flex items-center gap-3 text-emerald-500/70">
                 <AudioLines className="w-6 h-6 animate-pulse" />
                 <span className="text-xs font-mono">Listening...</span>
               </div>
               
               <div className="bg-black/40 rounded-xl p-4 border border-white/5 text-sm text-white/40 italic">
                 "Also ähm, ich will festhalten dass der Kurs ziemlich cool war, mach mal ne Liste: erstens Markdown ist wichtig, äh zweitens Agenten sind krass, und drittens... was war's noch... ach ja, lokales Speichern rettet uns vor Notion."
               </div>

               <div className="flex justify-center -my-2 text-white/20">
                 <Wand2 className="w-5 h-5" />
               </div>

               {/* Output fake */}
               <div className="bg-[#2A2B31] rounded-xl p-4 border border-emerald-500/30 text-sm text-white/90 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                 <strong>Kursnotizen:</strong>
                 <ul className="list-disc pl-4 mt-2 space-y-1 text-white/70">
                   <li>Markdown ist die wichtigste Basis.</li>
                   <li>KI-Systemagenten bieten enormes Potenzial.</li>
                   <li>Lokales Speichern (File-over-App) verhindert Vendor-Lock-In durch Tools wie Notion.</li>
                 </ul>
               </div>
             </div>
          </motion.div>

          {/* Right Column: Explanations */}
          <div className="flex-[0.8] space-y-8 z-10 py-4">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
               <h4 className="text-white/80 font-bold text-lg mb-2">Automatisches Refactoring</h4>
               <p className="text-white/50 text-sm leading-relaxed">
                 Wispr Flow transkribiert nicht nur, sondern <em>editiert</em> den Sprechfluss in Echtzeit. "Ähms", Pausen und unklare Sätze werden direkt in sauberen Schreibstil (oder Bulletpoints) umgewandelt.
               </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
               <h4 className="text-white/80 font-bold text-lg mb-2">Das Overlay-Prinzip</h4>
               <p className="text-white/50 text-sm leading-relaxed">
                 Da es auf Systemebene läuft (wie ein Tastatur-Input), kannst du in Obsidian (oder E-Mails, Slack) stehen, den Hotkey drücken, sprechen, und der perfekte Text landet an deinem Cursor.
               </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
               <h4 className="text-white/80 font-bold text-lg mb-2">Die PIM-Pipeline</h4>
               <p className="text-white/50 text-sm leading-relaxed">
                 In Kombination mit Obsidian und Cursor/Claude entsteht ein verrückter Workflow: <strong>Du sprichst Gedanken ein → Wispr formatiert sie → Obsidian speichert sie als `.md` → Dein AI Agent wertet sie später aus.</strong>
               </p>
            </motion.div>
          </div>

        </div>
      </div>
    </SlideLayout>
  )
}
