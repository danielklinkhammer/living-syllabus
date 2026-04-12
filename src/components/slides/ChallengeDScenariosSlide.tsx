import { motion } from 'framer-motion'
import SlideLayout from '../layout/SlideLayout'
import Card from '../ui/Card'

const scenarios = [
  {
    title: "1. AI T-Shirt Squad",
    desc: "E-Commerce Konfigurator mit KI-Generierung.",
    flow: "Motiv Upload vs. AI-Prompt → Drucktechnik → Preview → Checkout.",
    challenge: "Parallele Workflows UI und Zustandsspeicherung des Designs.",
    unhappy: "Bild zu klein. Prompt verstößt gegen Policy.",
    color: "from-blue-500/10 to-blue-900/20",
    border: "border-blue-500/30",
    icon: "👕"
  },
  {
    title: "2. SmartGarden IoT",
    desc: "Hardware-Onboarding für Bodenfeuchtigkeits-Sensoren.",
    flow: "Gerät pairen → Raum zuweisen → If-This-Then-That Automation einstellen.",
    challenge: "Tiefe Informationsarchitektur, saubere Trennung von Setup & Dashboard.",
    unhappy: "Bluetooth-Timeout. Hardware verliert Verbindung.",
    color: "from-green-500/10 to-green-900/20",
    border: "border-green-500/30",
    icon: "🌱"
  },
  {
    title: "3. Fintech Splitter",
    desc: "Ausgaben im Freundeskreis intelligent aufteilen.",
    flow: "Quittung fotografieren (OCR) → Beträge Personen zuweisen -> Requests senden.",
    challenge: "Komplexes Interface zur Zuweisung von Teilbeträgen an x User.",
    unhappy: "Quittung unleserlich. Kontakt hat kein Konto.",
    color: "from-fhgr-petrol/10 to-fhgr-petrol-light/20",
    border: "border-fhgr-petrol/30",
    icon: "💸"
  },
  {
    title: "4. Health Assessment",
    desc: "Branching-Wizard & Paywall für eine Fitness-App.",
    flow: "Alter/Ziele → Vorverletzungen (Branching!) → Plan-Generierung → Registrierung.",
    challenge: "Verzweigter Entscheidungsbaum (Decision Tree) basierend auf Eingaben.",
    unhappy: "Tab-Close auf Seite 4. E-Mail existiert am Ende bereits.",
    color: "from-red-500/10 to-red-900/20",
    border: "border-red-500/30",
    icon: "❤️‍🩹"
  },
  {
    title: "5. Time-Zone Sync",
    desc: "Terminfindungstools für globale Remote-Teams.",
    flow: "Team hinzufügen → AI Slot-Vorschläge → Konflikte lösen → Invite senden.",
    challenge: "Darstellung komplexer Matrix-Daten in einem simplen Interface.",
    unhappy: "Kein gemeinsamer Slot möglich. Teilnehmer-Kalender blockiert.",
    color: "from-purple-500/10 to-purple-900/20",
    border: "border-purple-500/30",
    icon: "🌍"
  },
  {
    title: "6. Weekly Meal Plan",
    desc: "Vom virtuellen Kühlschrank zur Einkaufsliste.",
    flow: "Inventar/Allergien → Wochenplan → Gerichte tauschen → Groceries To-Cart.",
    challenge: "Synchronisation zwischen Rezept-View, Wochen-Board und Cart.",
    unhappy: "KI ignoriert abgewählte Allergie. Shop-API offline.",
    color: "from-yellow-500/10 to-yellow-900/20",
    border: "border-yellow-500/30",
    icon: "🥑"
  },
  {
    title: "7. SaaS Retention",
    desc: "Kündigungsprozess mit Anti-Churn Mechanismen.",
    flow: "Kündigen klicken → Umfrage (Offboarding) → AI Rabatt-Angebot -> Checkout.",
    challenge: "Reibungsloser Flow, der Dark-Patterns verhindert aber Kunden rettet.",
    unhappy: "Rabattcode abgelaufen. Abo wurde via Drittanbieter gebucht.",
    color: "from-orange-500/10 to-orange-900/20",
    border: "border-orange-500/30",
    icon: "📉"
  },
  {
    title: "8. Music Studio AI",
    desc: "Prompt-to-Audio Interface mit Stem-Separation.",
    flow: "Style prompten → AI liefert Varianten → Auswählen → Stems editieren → Export.",
    challenge: "Lineares Timeline-/Layer-Interface in einer Web-App abbilden.",
    unhappy: "Generation dauert >3 Min (Timeout). Export schlägt wg. RAM fehl.",
    color: "from-teal-500/10 to-teal-900/20",
    border: "border-teal-500/30",
    icon: "🎹"
  }
]

export default function ChallengeDScenariosSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full overflow-hidden">
        
        {/* Header Fixed */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="mb-8 flex-shrink-0">
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Challenge D.1 · Phase 1</div>
          <h2 className="text-4xl font-bold tracking-tight mb-2">Wähle dein Use-Case Szenario</h2>
          <p className="text-white/50 text-lg max-w-3xl">
            Für die Konstruktion der Informationsarchitektur und der App-Logik benötigt ihr ein Fundament. <br/>
            Wählt eines dieser 8 komplexen Szenarien für euer Team aus. Es wird euch bis zum fertigen Prototypen begleiten.
          </p>
        </motion.div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-12 pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4">
            {scenarios.map((scenario, i) => (
              <Card 
                key={i}
                delay={i * 0.05 + 0.1}
                variant="glass"
                className={`!p-5 hover:scale-[1.02] transition-transform cursor-default flex flex-col h-full text-left border ${scenario.border} bg-gradient-to-br ${scenario.color}`}
              >
                <div className="text-3xl mb-3">{scenario.icon}</div>
                <h3 className="font-bold text-white text-lg leading-tight mb-1">{scenario.title}</h3>
                <p className="text-white/70 text-xs mb-4 line-clamp-2">{scenario.desc}</p>
                
                <div className="flex-1 flex flex-col gap-3">
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                    <span className="block text-[9px] uppercase font-mono tracking-widest text-white/40 mb-1">Standard Flow</span>
                    <span className="text-xs text-white/90 leading-snug">{scenario.flow}</span>
                  </div>
                  
                  <div className="bg-black/20 rounded-lg p-3 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-fhgr-accent" />
                    <span className="block text-[9px] uppercase font-mono tracking-widest text-fhgr-accent mb-1 pl-1">Architectural Challenge</span>
                    <span className="text-xs text-white/80 leading-snug pl-1">{scenario.challenge}</span>
                  </div>

                  <div className="mt-auto pt-2 border-t border-white/10">
                    <span className="block text-[9px] uppercase font-mono tracking-widest text-red-400 mb-1">🔥 Edge Cases</span>
                    <span className="text-[11px] text-white/60 leading-tight italic">{scenario.unhappy}</span>
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
