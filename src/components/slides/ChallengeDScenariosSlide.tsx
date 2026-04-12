import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'

const scenarios = [
  {
    title: "A) Health Care Onboarding",
    desc: "Dynamischer Symptom-Wizzard und AI-Arztvorschlag.",
    flow: "Basisdaten → Symptom-Check (Verzweigung) → Kalender-Auswahl → Terminzusammenfassung.",
    challenge: "Der Flow verzweigt sich komplex: Was passiert, wenn ein User chronische Krankheiten anklickt vs. Routine-Check?",
    unhappy: "Pflichtfeld übersprungen. Keine Ärzte im gewählten Zeitraum verfügbar.",
    color: "from-blue-500/10 to-blue-900/20",
    border: "border-blue-500/30",
    icon: "🩺"
  },
  {
    title: "B) E-Commerce Auto-Returns",
    desc: "Ein mehrstufiger Retouren-Prozess als User Journey.",
    flow: "Bestellhistorie → Artikel wählen → Fehlergrund Modal → Umtausch vs. Refund → Label generieren.",
    challenge: "Tiefe Informationsarchitektur: Verschachtelte Screens, Pop-Ups und dynamische Auswahl (Refund-Art beeinflusst Folgescreens).",
    unhappy: "Rücksende-Zeitraum ist abgelaufen. Foto-Upload schlägt fehl.",
    color: "from-orange-500/10 to-orange-900/20",
    border: "border-orange-500/30",
    icon: "📦"
  },
  {
    title: "C) B2B SaaS Setup",
    desc: "Workspace Einrichtung und Role-Management.",
    flow: "Pricing-Plan wählen → Workspace benennen → Teammitglieder inviten (Admins vs. Viewer) → Dashboard Start.",
    challenge: "Abbildung von komplexen Tabellen/Listen für Rechtemanagement während eines geführten Setup-Wizards.",
    unhappy: "E-Mail eines Eingeladenen existiert schon. Kreditkarte abgelehnt.",
    color: "from-fhgr-petrol/10 to-fhgr-petrol-light/20",
    border: "border-fhgr-petrol/30",
    icon: "💻"
  },
  {
    title: "D) Shared Expense Splitter",
    desc: "Gruppen-Ausgaben aufteilen und via App anfordern.",
    flow: "Kassenbon scannen → Items auflisten → Freunde markieren → Jedem Freund seinen Anteil visuell zuweisen → Request absenden.",
    challenge: "Das UI muss logisch abbilden, wie man z.B. 10 Pizzen auf 4 Leute verteilt. Schwer in Wireframes umzusetzen!",
    unhappy: "Bon ist unleserlich. Betrag lässt sich nicht sauber durch 3 teilen.",
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
          <h2 className="text-4xl font-bold tracking-tight mb-2">Die Flow-Szenarien</h2>
          <p className="text-white/50 text-lg max-w-3xl">
            Wählt eines dieser 4 stark Flow-lastigen Szenarien für euer Team aus. <br/>
            Anstelle linearer Dummys fordert jede dieser Ideen eine tiefe Informationsstruktur, verzweigte Pfade und saubere Wireframes.
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
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-white/40 mb-2">User Journey Flow</span>
                    <span className="text-sm text-white/90 leading-relaxed font-medium">{scenario.flow}</span>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-fhgr-accent" />
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-fhgr-accent mb-2 pl-2">UX & IA Challenge</span>
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
