import { motion } from 'framer-motion'
import Card from '../../ui/Card'
import HeroGraphic from '../../ui/HeroGraphic'

export default function RecapPromptingSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-16 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fhgr-petrol/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 py-12">
        
        {/* Left Side: Text */}
        <div className="col-span-1 lg:col-span-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Sitzung 2 · Recap</div>
            <h2 className="text-4xl font-bold mb-6 mt-2">Visuelle Intelligenz & Prompting</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              Von der bloßen Texteingabe zur systematischen Steuerung von Modellen. Wie wir durch strukturierte Workflows und Application Definition Files konstante Ergebnisse erzielen.
            </p>
          </motion.div>

          <div className="space-y-4 pt-4">
            <Card delay={0.1} className="!p-6">
              <div className="text-fhgr-beige font-semibold mb-2">Application Definition Files</div>
              <p className="text-sm text-white/40 mb-3">Narrative Doku (.md) vs Technisch skalierbar (.json). Die `.cursorrules` dienen als permanenter Kontext für Copilot Agenten.</p>
              <div className="text-xs font-mono text-fhgr-petrol bg-black/50 p-3 rounded border border-white/5 whitespace-pre">
                {`"rules": [
  "Use Tailwind CSS for styling",
  "Favor functional components",
  "Design system: FHGR tokens"
]`}
              </div>
            </Card>
            
            <Card delay={0.2} className="!p-6">
              <div className="text-fhgr-beige font-semibold mb-2">Model Bias im Visuellen</div>
              <p className="text-sm text-white/40">
                Gemini tendiert stark zu Material Design. GPT-4o generiert den generischen "Modern Web" Stil (Soft Shadows, abgerundet). Wer out-of-the-box nutzt, sieht aus wie alle anderen!
              </p>
            </Card>
          </div>
        </div>

        {/* Right Side: Visual Workflow */}
        <div className="col-span-1 lg:col-span-7 mt-8 lg:mt-0">
          <HeroGraphic delay={0.2} className="!p-8 h-full justify-start">
            <div className="text-center mb-8 w-full">
              <div className="text-xl font-bold text-white">Der "Nanobanana" Workflow</div>
              <p className="text-sm text-white/40 mt-1">Image Prompting mit Reasoning Modellen</p>
            </div>

            <div className="flex flex-col gap-4 relative w-full">
              {/* Vertical line connecting steps */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-fhgr-petrol/20" />

              <div className="flex items-center gap-6 relative z-10 w-full">
                <div className="w-12 h-12 rounded-full bg-fhgr-petrol text-white flex items-center justify-center font-bold shadow-[0_0_15px_rgba(131,197,190,0.3)] shrink-0">1</div>
                <div className="flex-1 p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-semibold text-fhgr-petrol-light mb-1">Reasoning (DeepSeek / o1)</div>
                  <div className="text-sm text-white/50">"Ich brauche ein Layout für X. Mache mir einen detaillierten Image-Prompt für die Struktur."</div>
                </div>
              </div>

              <div className="flex items-center gap-6 relative z-10 w-full">
                <div className="w-12 h-12 rounded-full bg-fhgr-petrol text-white flex items-center justify-center font-bold shadow-[0_0_15px_rgba(131,197,190,0.3)] shrink-0">2</div>
                <div className="flex-1 p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-semibold text-fhgr-petrol-light mb-1">Detailed Prompt</div>
                  <div className="text-sm text-white/50">Das Modell übersetzt die UX-Logik in hochpräzise visuelle Trigger-Wörter.</div>
                </div>
              </div>

              <div className="flex items-center gap-6 relative z-10 w-full">
                <div className="w-12 h-12 rounded-full bg-fhgr-petrol text-white flex items-center justify-center font-bold shadow-[0_0_15px_rgba(131,197,190,0.3)] shrink-0">3</div>
                <div className="flex-1 p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-semibold text-fhgr-petrol-light mb-1">Execution (Imagen 3 / Midjourney)</div>
                  <div className="text-sm text-white/50">Pixelerzeugung als visuelles MVP, *bevor* Code geschrieben wird.</div>
                </div>
              </div>
            </div>
            
          </HeroGraphic>
        </div>

      </div>
    </div>
  )
}
