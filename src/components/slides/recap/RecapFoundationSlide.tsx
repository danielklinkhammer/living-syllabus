import { motion } from 'framer-motion'
import Card from '../../ui/Card'

export default function RecapFoundationSlide() {
  const models = [
    { name: "Google Gemini", type: "Multimodal LLM", use: "Text & Logic" },
    { name: "Midjourney / Nanobanana", type: "Generative Image", use: "Visual Prototyping" },
    { name: "Veo 3.1", type: "Video Gen", use: "Motion & Ads" },
    { name: "NotebookLM / ElevenLabs", type: "Audio / Voice", use: "Synthese & Podcasts" }
  ]

  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#060F1A] text-white px-16">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 max-w-4xl"
      >
        <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Sitzung 1 · Recap</div>
        <h2 className="text-4xl font-bold mb-4">Maschinen-Fundamente</h2>
        <p className="text-lg text-white/50 leading-relaxed">
          Die Konzepte hinter "künstlicher" Intelligenz. Von einfachen Token-Wahrscheinlichkeiten bis hin zu den multimodalen Modellen, die unseren Workflow prägen.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-6xl">
        
        {/* Left Column */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
          <Card variant="glass" delay={0.1}>
            <div className="text-xl font-bold mb-2">Token-Ökonomie</div>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              LLMs rechnen nicht mit Wörtern, sondern mit Tokens (ca. 750 Wörter pro 1000 Tokens im Englischen). Der Kern von LLMs ist schlichte Wahrscheinlichkeitsvorhersage, ähnlich einem Empfehlungs-System wie Spotify.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-xs font-mono text-fhgr-petrol-light bg-black/30 p-3 rounded-lg border border-white/5">
              <span>Input Tokens</span>
              <span className="hidden md:block">→</span>
              <span>Vector Embeddings</span>
              <span className="hidden md:block">→</span>
              <span>Output Probability</span>
            </div>
          </Card>

          <Card variant="dark" delay={0.2}>
            <div className="text-xl font-bold mb-2">Schwache vs. Starke KI</div>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex-1 p-3 bg-black/40 rounded-xl">
                <div className="text-white/80 font-medium mb-1">ChatGPT</div>
                <div className="text-xs text-fhgr-petrol">Schwache KI</div>
                <div className="text-xs text-white/40 mt-2">Hoch spezialisiert, reaktiv, stochastisch.</div>
              </div>
              <div className="flex-1 p-3 bg-black/40 rounded-xl">
                <div className="text-white/80 font-medium mb-1">HAL 9000</div>
                <div className="text-xs text-fhgr-accent">Starke KI (AGI)</div>
                <div className="text-xs text-white/40 mt-2">Autonom, zielorientiert, abstraktes Denken.</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
          <Card variant="primary" delay={0.3} className="h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xl font-bold text-white">Generative Landschaft</div>
                  <p className="text-sm text-white/60 mt-1">Die Tools hinter "Challenge A" (Tourismus Chur)</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-fhgr-petrol/20 flex items-center justify-center text-fhgr-petrol-light shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/></svg>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 content-start">
                {models.map((model, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/20 border border-white/5 hover:bg-black/40 transition-colors">
                    <div className="text-fhgr-petrol-light text-[10px] font-mono tracking-widest uppercase mb-1">{model.type}</div>
                    <div className="font-semibold text-sm text-white mb-1">{model.name}</div>
                    <div className="text-xs text-white/40">{model.use}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-5 border-t border-white/10 text-sm text-white/50 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
                <span>Alle diese Modelle wurden in Challenge A für das multimediale Chur-Dashboard nahtlos verkettet.</span>
                <span className="text-fhgr-petrol-light whitespace-nowrap font-bold">Multi-Modalität ✓</span>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
}
