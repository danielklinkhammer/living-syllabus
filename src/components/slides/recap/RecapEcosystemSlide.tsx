import { motion } from 'framer-motion'
import Card from '../../ui/Card'

export default function RecapEcosystemSlide() {
  const layers = [
    { name: "Agentic Layer", desc: "Autonome Loops, Decision Making mit Tools", tech: "Windsurf, Lovable, n8n" },
    { name: "Interface / Builder", desc: "UI Generierung, Custom GPTs", tech: "ChatGPT UI, v0.dev, Fima Make" },
    { name: "Wrapper / Context", desc: "Context Ingestion, RAG, System Prompts", tech: "MCP, LangChain, NotebookLM" },
    { name: "Foundation Model", desc: "LRMs (DeepSeek) & SLMs (Mistral)", tech: "GPT-4o, Claude 3.5, Gemini" }
  ]

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-hidden relative">
      
      <div className="max-w-6xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-12">
        
        {/* Left: Content */}
        <div className="col-span-1 lg:col-span-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Sitzung 2 · Recap</div>
            <h2 className="text-4xl font-bold mb-6 mt-2">Das Ökosystem 2026</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              "Modell" ist nicht gleichbedeutend mit "Applikation". Hinter jeder KI-Anwendung liegt eine strukturierte Architekturschicht. Wir haben verstanden, wie Software heute gebaut wird.
            </p>
          </motion.div>

          <div className="space-y-4 pt-4">
            <Card delay={0.1} className="!p-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <div>
                  <div className="font-semibold mb-1">KI als Agent</div>
                  <div className="text-sm text-white/40">LLMs sind passiv (frage/antworte). Ein Agent hingegen ist autonom: Er wählt Tools aus, generiert Code und führt ihn aus (wie in Lovable).</div>
                </div>
              </div>
            </Card>

            <Card delay={0.2} className="!p-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </div>
                <div>
                  <div className="font-semibold mb-1">RAG vs. Long Context</div>
                  <div className="text-sm text-white/40">Wissens-Integration erfolgt heutzutage entweder durch semantische Suche (RAG) auf Datenbanken oder durch riesige 2M+ Token Context Windows (NotebookLM-Ansatz).</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right: Architecture Stack */}
        <div className="col-span-1 lg:col-span-6 relative mt-8 lg:mt-0">
          
          <div className="absolute inset-0 bg-gradient-to-t from-fhgr-petrol/20 to-transparent blur-[80px] -z-10" />
          
          <div className="flex flex-col gap-3">
            {layers.map((layer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className={`p-5 rounded-xl border flex flex-col items-center justify-center text-center relative
                  ${idx === 0 ? 'bg-fhgr-petrol/[0.15] border-fhgr-petrol/40 shadow-[0_0_30px_rgba(131,197,190,0.1)]' : 'bg-black/40 border-white/10'}`}
              >
                {/* Connecting lines between layers */}
                {idx !== layers.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-white/10" />
                )}
                
                <div className="text-xs font-mono text-fhgr-petrol-light uppercase tracking-widest mb-1.5">{layer.name}</div>
                <div className="font-medium text-white mb-1.5">{layer.desc}</div>
                <div className="text-xs text-white/30 font-mono">{layer.tech}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
          >
            <div className="text-xs font-mono text-white/30 rotate-90 whitespace-nowrap mb-8 uppercase tracking-widest">Abstraktions-Level</div>
            <div className="w-px h-24 bg-gradient-to-t from-fhgr-petrol to-transparent" />
          </motion.div>

        </div>
      </div>
    </div>
  )
}
