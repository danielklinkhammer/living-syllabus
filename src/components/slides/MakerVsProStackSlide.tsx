import ContentSlide from '../templates/ContentSlide'
import Card from '../ui/Card'
import HeroGraphic from '../ui/HeroGraphic'

export default function MakerVsProStackSlide() {
  const leftContent = (
    <div className="space-y-6">
      <Card delay={0.1}>
        <h3 className="font-bold text-white mb-2 text-xl">🛠️ Der Maker Stack (Vibe Coding)</h3>
        <p className="text-sm text-white/50 mb-3">
          Tools wie <strong>Lovable</strong>, <strong>v0.dev</strong> oder <strong>Bolt.new</strong> generieren direkt aus eurem Prompt fertigen Code. Ihr schiebt keine Pixel mehr.
        </p>
        <ul className="text-sm space-y-1 text-white/70">
          <li className="flex gap-2"><span className="text-green-400">✅</span> Ideal für: Ideation, Hackathons, Prototypen.</li>
          <li className="flex gap-2"><span className="text-red-400">❌</span> Grenze: Bei komplexer Business-Logik/Security.</li>
        </ul>
      </Card>

      <Card variant="primary" delay={0.2}>
        <h3 className="font-bold text-fhgr-petrol-light mb-2 text-xl">💻 Der Professional Stack</h3>
        <p className="text-sm text-white/50 mb-3">
          Ihr öffnet den Code in einer <strong>IDE (VS Code, Cursor)</strong>. Hier seid ihr nicht auf das Prompt-Fenster beschränkt, sondern habt absolute Kontrolle.
        </p>
        <ul className="text-sm space-y-1 text-white/70">
          <li className="flex gap-2"><span className="text-fhgr-petrol-light">✅</span> Ideal für: Scalable Produkte, Bezahlvorgänge.</li>
        </ul>
      </Card>
    </div>
  );

  const rightContent = (
    <HeroGraphic delay={0.3}>
      <div className="absolute top-4 left-6 text-xs font-mono text-white/30 uppercase tracking-widest hidden md:block">
        Der Export Workflow
      </div>

      <div className="flex flex-col items-center w-full max-w-sm gap-4">
        {/* Step 1 */}
        <div className="w-full bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xl shrink-0">1</div>
          <div>
            <div className="font-bold text-white text-sm md:text-base">Lovable / AI Studio</div>
            <div className="text-xs text-white/50">"Export to GitHub" klicken</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-white/20 to-fhgr-petrol/50" />

        {/* Step 2 */}
        <div className="w-full bg-fhgr-petrol/10 border border-fhgr-petrol/30 rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-fhgr-petrol/20 text-fhgr-petrol-light flex items-center justify-center font-bold text-xl shrink-0">2</div>
          <div>
            <div className="font-bold text-white text-sm md:text-base">GitHub Repository</div>
            <div className="text-xs text-white/50">Code ist versioniert</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="w-0.5 h-6 bg-gradient-to-b from-fhgr-petrol/50 to-blue-500/50" />

        {/* Step 3 */}
        <div className="w-full bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl shrink-0">3</div>
          <div>
            <div className="font-bold text-white text-sm md:text-base">IDE (Cursor/Codespace)</div>
            <div className="text-xs text-white/50">Manuell per KI optimieren</div>
          </div>
        </div>
      </div>
    </HeroGraphic>
  );

  return (
    <ContentSlide 
      eyebrow="Tech für Designer · Part 1"
      title="Maker vs. Pro Stack"
      intro="Wir bauen Apps heute nicht mehr von Hand. Aber jedes Maker-Tool (Lovable, v0) stößt irgendwann an seine Grenzen – dann beginnt der Übergang zum Professional Stack."
      leftContent={leftContent}
      rightContent={rightContent}
    />
  )
}
