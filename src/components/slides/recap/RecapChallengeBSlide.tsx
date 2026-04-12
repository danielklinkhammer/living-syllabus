import { motion } from 'framer-motion'
import Card from '../../ui/Card'

export default function RecapChallengeBSlide() {
  const pipeline = [
    { num: "1", title: "Ausgangsbasis", desc: "Produkt, Zielgruppe, Nutzen" },
    { num: "2", title: "JSON Struktur", desc: "Das inhaltliche Skelett (Text-only)" },
    { num: "3", title: "Visuelle Ideation", desc: "Text-to-Image für den Vibe" },
    { num: "4", title: "Konsolidierung", desc: "Master-Input Formular" },
    { num: "5", title: "Code Gen", desc: "Lovable, Figma Make, v0.dev" },
    { num: "6", title: "Ausarbeitung", desc: "Manuelles Finetuning" },
    { num: "7", title: "Reflexion", desc: "KI Doku & Learnings" }
  ]

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-hidden">
      <div className="max-w-6xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12">
        
        {/* Left: The Challenge */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge B · Recap</div>
            <h2 className="text-4xl font-bold mb-6 mt-2">Die 7-Phasen KI-Pipeline</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              "Baut nicht alles auf einmal." Das KI-gestützte Landingpage-Design trennt Inhalt, Vibe und Code-Generierung strikt in Phasen.
            </p>
          </motion.div>

          <div className="flex flex-col gap-2 pt-4">
            {pipeline.map((step, idx) => (
              <Card key={idx} variant="glass" delay={0.1 + idx * 0.05} className="!p-3">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded bg-fhgr-dark border border-fhgr-petrol/30 flex items-center justify-center text-xs font-mono text-fhgr-petrol-light">
                    {step.num}
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-semibold text-sm">{step.title}</span>
                    <span className="text-xs text-white/40">{step.desc}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right: Peer Evaluation */}
        <div className="flex flex-col justify-center">
          <Card variant="primary" delay={0.2} className="h-full">
            <div className="flex flex-col justify-center h-full">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              
              <div className="text-xl font-bold mb-2 relative z-10">Die Peer-Evaluation</div>
              <p className="text-sm text-white/50 mb-8 max-w-sm relative z-10">
                Am Ende der Pipeline evaluierten wir die Ergebnisse KI-gestützt im FigJam-Raum.
              </p>

              <div className="space-y-6 relative z-10">
                <div>
                  <div className="text-fhgr-petrol-light font-medium text-sm mb-1">Visual Auditing</div>
                  <p className="text-xs text-white/40">Nutzen von Vision-Language Models (VLM) wie GPT-4o zur systematischen Prüfung von UI-Patterns und Nielsen-Heuristiken direkt auf Screenshots.</p>
                </div>

                <div>
                  <div className="text-fhgr-petrol-light font-medium text-sm mb-1">KI als UX-Kritiker</div>
                  <div className="bg-black/40 p-4 rounded-xl border border-white/5 mt-2">
                    <ul className="space-y-2 text-xs text-white/50 font-mono">
                      <li className="flex items-center gap-2"><span>[✓]</span> Clarity of Headline (Value Prop)</li>
                      <li className="flex items-center gap-2"><span>[✓]</span> CTA Prominence (Contrast check)</li>
                      <li className="flex items-center gap-2"><span>[✓]</span> Visual Hierarchy Prediction</li>
                      <li className="flex items-center gap-2"><span>[✓]</span> Overload / Cognitive friction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
}
