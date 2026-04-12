import { motion } from 'framer-motion'

export default function MCPSlide() {
  const steps = [
    { num: "01", title: "Designer baut Logic in Figma", desc: "Erstellt UI-Muster mit Variables & Auto-Layout" },
    { num: "02", title: "Figma MCP Server", desc: "Exponiert die Figma-Datei als Code-lesbare Struktur" },
    { num: "03", title: "KI Agent (Cursor/Claude)", desc: "Liest die Design-Intent direkt aus via API" },
    { num: "04", title: "Generierter Production-Code", desc: "React + Tailwind mit W3C Tokens (`--color-brand`)" }
  ]

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white overflow-y-auto lg:overflow-hidden relative px-6 lg:px-16">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12 lg:mt-0">
        
        {/* Left: Content */}
        <div className="lg:col-span-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Model Context Protocol</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 mt-2">Das Ende des Handoffs</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              Das Jahr 2025 markiert das Ende des klassischen Developer Handoffs. Design-Systeme sind nun direkt an KI-IDEs angeschlossen. Kein manuelles "Pixel vergleichen" mehr.
            </p>
          </motion.div>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex gap-4 items-start p-4 hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/10"
              >
                <div className="text-xs font-mono text-fhgr-petrol-light mt-1 w-6">{step.num}</div>
                <div>
                  <div className="font-bold text-white mb-1">{step.title}</div>
                  <div className="text-sm text-white/40">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Graphic */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-8 bg-gradient-to-tr from-black to-[#131E2B] border border-white/10 flex flex-col items-center justify-center min-h-[400px] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="w-full flex items-center justify-between relative z-10 px-8">
              {/* Figma Side */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4">
                  <svg viewBox="0 0 38 57" fill="none" className="w-10 h-10">
                    <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19C14.7467 19 19 23.2533 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M19 19V38H28.5C33.7467 38 38 33.7467 38 28.5C38 23.2533 33.7467 19 28.5 19H19Z" fill="#A259FF"/>
                  </svg>
                </div>
                <div className="text-xs font-mono text-white/50">Figma UI</div>
              </div>

              {/* MCP Broker */}
              <div className="flex-1 flex px-4 translate-y-[-24px]">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-fhgr-petrol to-transparent relative flex justify-center">
                  <motion.div 
                    animate={{ x: [-100, 100] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-[2px] bg-white shadow-[0_0_8px_white]"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 px-3 py-1 bg-fhgr-dark border border-fhgr-petrol/50 text-fhgr-petrol-light text-[10px] font-mono rounded-full uppercase tracking-widest whitespace-nowrap">
                    MCP Server Bridge
                  </div>
                </div>
              </div>

              {/* Claude / Cursor Side */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <div className="text-xs font-mono text-white/50">Cursor + Claude</div>
              </div>
            </div>

            <div className="mt-12 w-full p-4 bg-black/50 border border-white/10 rounded-xl">
              <div className="text-xs font-mono text-white/40 mb-2">Prompt an Claude:</div>
              <div className="text-sm text-fhgr-beige font-semibold">
                "@figma /dashboard/card – Generiere diese Komponente als React mit Tailwind und unserem Design-System."
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </div>
  )
}
