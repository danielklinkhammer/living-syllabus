import { motion } from 'framer-motion'
import Card from '../../ui/Card'

export default function RecapWelcomeSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#060F1A] text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fhgr-petrol/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-12 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-fhgr-petrol/30 bg-fhgr-petrol/10 text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-6">
            Designing for and with AI · Block 2
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Vom Gestalten <span className="font-serif italic text-fhgr-petrol-light">mit</span> KI <br />
            zum Gestalten <span className="font-serif italic text-fhgr-petrol-light">für</span> KI
          </h1>

          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Der pädagogische Bogen schliesst sich: In Block 1 war die KI unser kreatives Werkzeug. Nun vollziehen wir den Paradigmenwechsel und konzipieren Interfaces, die aktiv von und für KI-Systeme genutzt werden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <Card variant="glass" delay={0.2} className="!p-8">
            <div className="text-fhgr-beige font-mono text-sm uppercase tracking-widest mb-2">Rückblick: Block 1</div>
            <div className="text-3xl font-serif italic text-white mb-4">With AI</div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Prompting als Methodik. Die KI als kreativer Partner für Ideation, visuelles Design und funktionales Prototyping. Wir haben Modelle und Interfaces passiv als Werkzeug genutzt.
            </p>
            <ul className="space-y-2 text-sm text-white/40">
              <li className="flex items-center gap-2"><span className="text-fhgr-petrol">✓</span> Generative Modelle</li>
              <li className="flex items-center gap-2"><span className="text-fhgr-petrol">✓</span> Prompt Engineering</li>
              <li className="flex items-center gap-2"><span className="text-fhgr-petrol">✓</span> Live-Previews & Prototypes</li>
            </ul>
          </Card>

          <Card variant="primary" delay={0.4} className="!p-8 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-fhgr-petrol/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="text-fhgr-petrol-light font-mono text-sm uppercase tracking-widest mb-2">Willkommen in: Block 2</div>
              <div className="text-3xl font-serif italic text-white mb-4">For AI</div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Agentic Workflows. Wir entwerfen die architektonischen Systeme, Design-Prinzipien und UI-Patterns, die erforderlich sind, damit KIs verlässlich integriert und gesteuert werden können.
              </p>
              <ul className="space-y-2 text-sm text-white/50">
                <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light">→</span> Systemic Design</li>
                <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light">→</span> Agentic UI Patterns</li>
                <li className="flex items-center gap-2"><span className="text-fhgr-petrol-light">→</span> Information Architecture</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
