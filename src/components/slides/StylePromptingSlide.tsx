import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function StylePromptingSlide() {
  const archetypes = [
    { name: "Swiss Minimalism", prompt: "Rational, grid-strict, high white-space, monochrome..." },
    { name: "Neobrutalism", prompt: "Raw, stark black outlines, anti-polished, visible structure..." },
    { name: "Glassmorphism 2.0", prompt: "Frosted glass panels, subtle transparency, floating layers..." },
    { name: "Retro-Terminal", prompt: "Monospace font, phosphor green on black, CRT scanlines..." }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-6 lg:px-16 overflow-y-auto lg:overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 gap-12 mt-12 lg:mt-0">
        
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center max-w-3xl mx-auto">
          <div className="text-orange-400/80 text-xs font-mono uppercase tracking-widest mb-3">Sitzung 3 · Das LLM-Bias</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2 tracking-tight">Aesthetic Fixation</h2>
          <p className="text-lg text-white/50 leading-relaxed mb-8">
            LLMs optimieren auf den "Mittelwert" des Internets. Wenn wir der KI keine strenge Richtung vorgeben, flacht alles zu einem austauschbaren <span className="text-orange-300">SaaS-Clean-Look</span> ab. Divergenz ist ein Akt des bewussten Widerstands gegen die KI!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-4 flex flex-col gap-4">
             <Card 
               delay={0.1}
               variant="primary"
               className="!p-6 border-orange-500/20 bg-orange-500/10"
             >
               <h3 className="font-bold text-orange-400 mb-2">Negative Prompting</h3>
               <p className="text-sm text-white/60 mb-4">Sag der KI explizit, was sie NICHT tun soll, um den Average-Bias zu brechen.</p>
               <div className="text-xs font-mono bg-black/50 p-3 rounded text-orange-300">
                 "No drop shadows, no generic SaaS patterns, not corporate, no rounded corners"
               </div>
             </Card>

             <Card 
               delay={0.2}
               variant="glass"
               className="!p-6"
             >
               <h3 className="font-bold text-white mb-2">Atmospheric Prompting</h3>
               <p className="text-sm text-white/60">
                 Statt Pixelwerte zu diktieren, navigieren wir den "Latent Space" über atmosphärische Begriffe und Metaphern.
               </p>
             </Card>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {archetypes.map((arch, idx) => (
              <Card 
                key={idx}
                delay={0.1 + (0.1 * idx)}
                variant="default"
                className="!p-6 group cursor-default"
              >
                <div className="flex flex-col h-full">
                  <h4 className="font-bold text-fhgr-beige mb-3">{arch.name}</h4>
                  <div className="text-xs font-mono text-white/40 italic p-3 bg-black/30 rounded border border-white/5 flex-1">"{arch.prompt}"</div>
                </div>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}
