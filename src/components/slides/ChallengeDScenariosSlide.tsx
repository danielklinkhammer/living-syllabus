import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'

const scenarios = [
  {
    title: "A) Telemedizin Triage",
    desc: "Symptom-Erfassung und KI-gesteuerte Arztbuchung.",
    flow: "Symptom-Bot → KI trianguliert → Check Arzt-Verfügbarkeit (API) → Versichertenkarte scannen → Buchung.",
    challenge: "Kommunikation zwischen Chatbot, Arzt-Kalender-API und externem Payment/KV-Service.",
    unhappy: "Arzt-API offline. Symptome deuten auf Notarzt (Abbruch).",
    color: "from-blue-500/10 to-blue-900/20",
    border: "border-blue-500/30",
    icon: "🩺"
  },
  {
    title: "B) AI Automated Returns",
    desc: "E-Commerce Retouren-Portal mit KI-Bilderkennung.",
    flow: "Kunde markiert Defekt → Foto-Upload → KI Computer-Vision prüft → Auto-Refund (Stripe) → DHL Label.",
    challenge: "Asynchrone Workflows, Branching ('Auto-Refund' vs. 'Manuelle Prüfung') und Third-Party Label-API.",
    unhappy: "Stripe Refund abgelehnt. KI kann Foto nicht lesen.",
    color: "from-orange-500/10 to-orange-900/20",
    border: "border-orange-500/30",
    icon: "📦"
  },
  {
    title: "C) B2B Procurement",
    desc: "Interner Hardware-Shop mit Freigabe-Logik.",
    flow: "Mitarbeiter wählt Mac → ERP-Check Budget → Autom. Slack-Notification an Manager → IT Ticket generiert.",
    challenge: "Multi-Actor Workflow! Der Flow verlässt die App und geht ins ERP und via Slack zum Vorgesetzten.",
    unhappy: "Manager ignoriert Slack-Nachricht > 48h. Hardware out of stock.",
    color: "from-fhgr-petrol/10 to-fhgr-petrol-light/20",
    border: "border-fhgr-petrol/30",
    icon: "💻"
  },
  {
    title: "D) Shared Expense Resolver",
    desc: "Kaskadierendes In-App Payment für Restaurant-Rechnungen.",
    flow: "Kassenbon Scan (OCR) → Gericht-Zuweisung an 4 Freunde → Push-Notification → In-App Bezahlung verarbeiten.",
    challenge: "Komplexe Status-Speicherung von 5 Usern gleichzeitig. Verschachteltes State-Management.",
    unhappy: "Gescannter Bon unleserlich. Ein Freund hat die App nicht.",
    color: "from-purple-500/10 to-purple-900/20",
    border: "border-purple-500/30",
    icon: "🧾"
  }
]

export default function ChallengeDScenariosSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full overflow-hidden">
        
        {/* Header Fixed */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8 flex-shrink-0">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D · Phase 2</div>
          <h2 className="text-4xl font-bold tracking-tight mb-2">High-Complexity Use Cases</h2>
          <p className="text-white/50 text-lg max-w-3xl">
            Wählt eines dieser 4 stark systemischen Szenarien für euer Team aus. <br/>
            Anstatt simpler Buttons modelliert ihr hier das Zusammenspiel von APIs, Third-Party Tools, Datenbanken und multiplen Usern.
          </p>
        </motion.div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-12 pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            {scenarios.map((scenario, i) => (
              <Card 
                key={i}
                delay={i * 0.05 + 0.1}
                variant="glass"
                className={`!p-6 hover:scale-[1.01] transition-transform cursor-default flex flex-col h-full text-left border ${scenario.border} bg-gradient-to-br ${scenario.color}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{scenario.icon}</div>
                  <div>
                    <h3 className="font-bold text-white text-xl leading-tight mb-1">{scenario.title}</h3>
                    <p className="text-white/70 text-sm">{scenario.desc}</p>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col gap-4 mt-2">
                  <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-white/40 mb-2">Service Logic Flow</span>
                    <span className="text-sm text-white/90 leading-relaxed font-medium">{scenario.flow}</span>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-fhgr-accent" />
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-fhgr-accent mb-2 pl-2">System-Architectural Challenge</span>
                    <span className="text-sm text-white/80 leading-relaxed font-medium pl-2">{scenario.challenge}</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-white/10">
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-red-400 mb-1">🔥 Edge Cases / Unhappy Paths</span>
                    <span className="text-xs text-white/60 leading-relaxed italic">{scenario.unhappy}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </SlideLayout>
  )
}
