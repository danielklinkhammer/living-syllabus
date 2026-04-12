import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const webLayers = [
  {
    id: 'html', label: 'HTML', subtitle: 'Die Struktur', emoji: '🦴',
    color: 'bg-orange-500', border: 'border-orange-500',
    desc: 'Wie das Skelett eines Gebäudes. Definiert WAS auf der Seite steht — Texte, Bilder, Buttons, Formulare.',
    code: `<h1>Energieverbrauch</h1>\n<p>Heute: <strong>42.7 kWh</strong></p>\n<button>Details anzeigen</button>`,
    analogy: '🏗️ Rohbau / Skelett',
  },
  {
    id: 'css', label: 'CSS', subtitle: 'Das Aussehen', emoji: '🎨',
    color: 'bg-blue-500', border: 'border-blue-500',
    desc: 'Wie die Innenausstattung. Definiert WIE es aussieht — Farben, Abstände, Schriften, Animationen.',
    code: `body {\n  background: #1A1A2E;\n  color: white;\n}\nh1 {\n  font-size: 32px;\n}`,
    analogy: '🖌️ Farbe / Tapete / Möbel',
  },
  {
    id: 'js', label: 'JavaScript', subtitle: 'Das Verhalten', emoji: '⚡',
    color: 'bg-yellow-400', border: 'border-yellow-400',
    desc: 'Wie die Elektrik. Definiert WAS PASSIERT — Klick-Reaktionen, Daten laden, Animationen auslösen.',
    code: `button.addEventListener('click', () => {\n  loadData();\n  showChart();\n});`,
    analogy: '🔌 Elektrik / Türklingel',
  },
]

const gitCommits = [
  { sha: 'a1b2c3', msg: 'Initial commit: Projekt-Setup',  time: 'heute 09:12', branch: 'main', type: 'init' },
  { sha: 'd4e5f6', msg: 'feat: Login-Komponente hinzugefügt', time: 'heute 10:34', branch: 'main', type: 'feat' },
  { sha: 'g7h8i9', msg: 'fix: Passwort-Validierung repariert', time: 'heute 11:02', branch: 'fix/login', type: 'fix' },
  { sha: 'j0k1l2', msg: 'style: Dashboard Layout verbessert',  time: 'heute 13:17', branch: 'main', type: 'style' },
  { sha: 'm3n4o5', msg: 'feat: KPI-Charts integriert',         time: 'heute 14:45', branch: 'main', type: 'feat' },
]

type Tab = 'layers' | 'git'

export default function EngineeringSandbox() {
  const [tab, setTab] = useState<Tab>('layers')
  const [activeLayer, setActiveLayer] = useState<string>('html')
  const [hoveredCommit, setHoveredCommit] = useState<string | null>(null)

  const activeLayerData = webLayers.find(l => l.id === activeLayer)!

  return (
    <div className="w-full h-full flex flex-col bg-[#0F2027] text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-8 pt-6 pb-4">
        <div>
          <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest">Tech for Designers · S03-A</div>
          <h2 className="text-2xl font-bold mt-1">Engineering Sandbox</h2>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 p-1 rounded-xl bg-white/8 border border-white/10">
          {(['layers', 'git'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                tab === t ? 'bg-fhgr-petrol text-white shadow' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {t === 'layers' ? '🌐 Web-Schichten' : '⏰ Git-Zeitmaschine'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden px-8 pb-8">
        <AnimatePresence mode="wait">
          {tab === 'layers' ? (
            <motion.div
              key="layers"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full flex gap-6"
            >
              {/* Layer selector */}
              <div className="w-44 flex flex-col gap-3 justify-center">
                {webLayers.map(layer => (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      activeLayer === layer.id
                        ? `${layer.border} ${layer.color}/20 scale-105`
                        : 'border-white/10 bg-white/5 hover:bg-white/8'
                    }`}
                  >
                    <div className="text-2xl mb-1">{layer.emoji}</div>
                    <div className="font-bold text-sm">{layer.label}</div>
                    <div className="text-xs text-white/40">{layer.subtitle}</div>
                  </button>
                ))}

                <div className="p-3 rounded-xl bg-white/5 border border-white/8 mt-2">
                  <div className="text-xs text-white/30 mb-2">Metapher</div>
                  <div className="text-sm">{activeLayerData.analogy}</div>
                </div>
              </div>

              {/* Code preview */}
              <div className="flex-1 flex flex-col gap-4 justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLayer}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <p className="text-white/60 text-sm leading-relaxed">{activeLayerData.desc}</p>

                    <div className="rounded-xl bg-black/60 border border-white/10 overflow-hidden">
                      {/* Editor header */}
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/8">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                          <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <span className="text-white/20 text-xs font-mono ml-2">
                          {activeLayer === 'html' ? 'index.html' : activeLayer === 'css' ? 'styles.css' : 'script.js'}
                        </span>
                      </div>
                      <pre className="p-5 text-sm font-mono leading-7 overflow-auto text-green-300">
                        {activeLayerData.code}
                      </pre>
                    </div>

                    {/* Tailwind note */}
                    {activeLayer === 'css' && (
                      <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-700/30">
                        <div className="text-sky-400 text-xs font-mono mb-1">💡 Tailwind CSS — Abkürzung</div>
                        <code className="text-xs font-mono text-sky-200">
                          {'<button class="bg-blue-500 rounded-lg px-6 py-3 text-white">'}
                        </code>
                        <p className="text-white/40 text-xs mt-2">
                          Klassen = CSS in Klarnamen. KI-Tools (v0.dev, Lovable) generieren Tailwind-Code — lesen können genügt.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="git"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full flex gap-8 items-start pt-4"
            >
              {/* Timeline */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">Git — Die Zeitmaschine</h3>
                <p className="text-white/40 text-sm mb-5">
                  Jeder Commit = ein Speicherpunkt. Du kannst jederzeit zurückreisen.
                </p>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-fhgr-petrol/30" />

                  <div className="space-y-4">
                    {gitCommits.map((commit, i) => (
                      <motion.div
                        key={commit.sha}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onMouseEnter={() => setHoveredCommit(commit.sha)}
                        onMouseLeave={() => setHoveredCommit(null)}
                        className="relative flex gap-4 pl-12 cursor-default"
                      >
                        {/* Dot */}
                        <div className={`absolute left-3.5 top-3 w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                          hoveredCommit === commit.sha
                            ? 'bg-fhgr-petrol-light border-fhgr-petrol-light scale-125'
                            : 'bg-fhgr-petrol border-fhgr-petrol'
                        }`} />

                        <div className={`flex-1 p-4 rounded-xl border transition-all duration-200 ${
                          hoveredCommit === commit.sha
                            ? 'bg-white/8 border-fhgr-petrol/40'
                            : 'bg-white/5 border-white/8'
                        }`}>
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className={`inline-block text-xs px-2 py-0.5 rounded font-mono mr-2 ${
                                commit.type === 'feat'  ? 'bg-green-500/20 text-green-300' :
                                commit.type === 'fix'   ? 'bg-red-500/20 text-red-300'   :
                                commit.type === 'style' ? 'bg-purple-500/20 text-purple-300' :
                                'bg-gray-500/20 text-gray-300'
                              }`}>{commit.type}</span>
                              <span className="text-sm text-white/80">{commit.msg}</span>
                            </div>
                            <code className="text-xs font-mono text-white/20 flex-shrink-0">{commit.sha}</code>
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs text-white/30">{commit.time}</span>
                            <span className="text-xs font-mono text-fhgr-petrol-light">{commit.branch}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right info */}
              <div className="w-64 space-y-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/8">
                  <div className="text-fhgr-petrol-light text-xs font-mono uppercase tracking-widest mb-3">Git-Befehle</div>
                  <div className="space-y-2 font-mono text-xs">
                    {[
                      ['git init',          'Repo starten'],
                      ['git add .',         'Änderungen stagen'],
                      ['git commit -m ""',  'Speichern'],
                      ['git push',          'In die Cloud'],
                      ['git checkout sha',  'Zeitreise!'],
                    ].map(([cmd, desc]) => (
                      <div key={cmd} className="flex justify-between gap-2">
                        <code className="text-green-400">{cmd}</code>
                        <span className="text-white/30 text-right">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-fhgr-petrol/10 border border-fhgr-petrol/20">
                  <div className="text-fhgr-petrol-light text-xs font-mono mb-2">🚀 Vom Code zur App</div>
                  <div className="space-y-1 text-xs text-white/50">
                    <div>① Code schreiben (IDE)</div>
                    <div>② Commit + Push (Git)</div>
                    <div>③ Vercel baut automatisch</div>
                    <div>④ Live-URL in Sekunden</div>
                  </div>
                  <div className="mt-3 text-xs text-white/30">
                    → So funktioniert auch diese Präsentation!
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
