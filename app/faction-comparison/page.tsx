import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olden Era Faction Comparison — Strengths, Weaknesses & Best Match for Your Playstyle",
  description: "Compare all Olden Era factions side by side. Find the best faction for your playstyle with detailed breakdowns of strengths, weaknesses, unique units, and magic schools.",
};

const factionComparisonData = [
  {
    id: "temple",
    name: "Temple",
    icon: "🛕",
    governingBody: "High Inquisition",
    playstyle: "Well-rounded with strong unit empowerment through buffs. Temple armies become increasingly powerful as buffs stack during prolonged engagements.",
    strengths: ["Best buff synergy in the game", "Balanced unit roster with no major gaps", "Excellent healing and support magic", "Strong mid-to-late game scaling", "Highest morale potential"],
    weaknesses: ["Relatively slow early game expansion", "Relies on buffs — vulnerable to dispel effects", "Expensive tier 6-7 units", "Predictable strategy can be countered"],
    bestMagicSchool: "Daylight Magic",
    beginnerFriendly: 9,
    tier: "A",
    keyUnits: ["Swordsman", "Crossbowman", "Cavalry", "Lightweaver", "Angel"],
    difficulty: "Medium",
  },
  {
    id: "necropolis",
    name: "Necropolis",
    icon: "💀",
    governingBody: "Head of Necromancers Guild",
    playstyle: "Undead armies that grow through Necromancy — raise fallen enemies as skeletons after every battle. Excels at attrition warfare with powerful debuffs and life-drain.",
    strengths: ["Unmatched Necromancy snowball mechanic", "Army grows with every battle", "Powerful debuffs and curses", "Life-drain on multiple units", "Outstanding late-game power"],
    weaknesses: ["Undead cannot benefit from morale boosts", "Vulnerable to Light/Holy magic", "Slow movement on most units", "Expensive building requirements", "Struggles against dispel-heavy opponents"],
    bestMagicSchool: "Nightshade Magic",
    beginnerFriendly: 7,
    tier: "S",
    keyUnits: ["Skeleton", "Wight", "Vampire", "Lich", "Dread Knight"],
    difficulty: "Easy",
  },
  {
    id: "grove",
    name: "Grove",
    icon: "🌳",
    governingBody: "Spirit Council",
    playstyle: "Spellcaster-focused with unique elemental creatures. Grove heroes are among the best casters, and their units have powerful activated abilities that dominate the battlefield.",
    strengths: ["Best spellcasting heroes in the game", "Unique elemental creatures with powerful abilities", "Excellent ranged damage", "Strong map control via nature spells", "Top-tier hero Halon with Chain Lightning"],
    weaknesses: ["Most expensive faction — high gold costs", "Fragile units with low HP pools", "Weak against magic-resistant enemies", "Slow to recover from early losses", "Resource-intensive build orders"],
    bestMagicSchool: "Primal Magic",
    beginnerFriendly: 4,
    tier: "A",
    keyUnits: ["Faun", "Ranger", "Druid", "Treant", "Phoenix"],
    difficulty: "Hard",
  },
  {
    id: "hive",
    name: "Hive",
    icon: "🐝",
    governingBody: "The Dragonfly King",
    playstyle: "Aggressive melee-focused faction with the highest initiative and speed. Hivemind synergy grants bonuses when same-type units fight together, enabling devastating early rushes.",
    strengths: ["Highest initiative and speed in the game", "Hivemind stacking bonuses", "Excellent early game rush potential", "Strong against mixed enemy armies", "Fast map exploration and expansion"],
    weaknesses: ["Limited ranged options", "Weak against area-of-effect spells", "Fragile individual units", "Struggles in prolonged siege battles", "Falls off in late game"],
    bestMagicSchool: "Primal Magic",
    beginnerFriendly: 6,
    tier: "B",
    keyUnits: ["Drone", "Soldier Ant", "Dragonfly Rider", "Mantis", "Queen Ant"],
    difficulty: "Medium",
  },
  {
    id: "schism",
    name: "Schism",
    icon: "⛓️",
    governingBody: "Abyssal Conclave",
    playstyle: "Control-focused faction specializing in spell denial and ability disruption. Summons increasingly powerful eldritch monsters that overwhelm opponents through sustained battlefield control.",
    strengths: ["Unique spell and ability denial mechanics", "Powerful summoned creatures scaling with battle length", "Excellent battlefield control", "Hard counters magic-heavy opponents", "Vori Sage is an S-tier caster hero"],
    weaknesses: ["Slow early game — summons need time", "Weak against fast rush strategies", "Complex to play effectively", "Limited direct damage options", "Vulnerable before summons establish"],
    bestMagicSchool: "Arcane Magic",
    beginnerFriendly: 2,
    tier: "B",
    keyUnits: ["Cultist", "Abomination", "Deep One", "Kraken Spawn", "Eldritch Horror"],
    difficulty: "Very Hard",
  },
  {
    id: "dungeon",
    name: "Dungeon",
    icon: "🕳️",
    governingBody: "Triumvirate of Alvar",
    playstyle: "Versatile dark elves with dual-attack mechanics on every unit. Dungeon forces can switch between damage types to adapt to any enemy composition, making them the most tactically flexible faction.",
    strengths: ["Dual attack types on every unit", "Excellent magic penetration", "Powerful Black Dragons as tier 7", "Strong scouting and map control", "Malakar is an S-tier magic hero"],
    weaknesses: ["Expensive unit costs across the board", "Vulnerable to Light/Holy damage", "Relies on mana for optimal performance", "Complex micro-management in combat", "Steep learning curve"],
    bestMagicSchool: "Arcane Magic",
    beginnerFriendly: 5,
    tier: "A",
    keyUnits: ["Assassin", "Dark Elf", "Minotaur", "Medusa", "Black Dragon"],
    difficulty: "Hard",
  },
];

const strengthsWeaknessesTable = [
  { faction: "Temple", strengths: "Buff synergy, balanced roster, excellent healing, strong morale", weaknesses: "Slow early game, dispel vulnerability, expensive elites", score: "8.5/10" },
  { faction: "Necropolis", strengths: "Necromancy snowball, attrition warfare, life-drain, huge late-game armies", weaknesses: "No morale, vulnerable to Light magic, slow units, expensive buildings", score: "9.2/10" },
  { faction: "Grove", strengths: "Best spellcasters, elemental creatures, ranged damage, map control", weaknesses: "Most expensive, fragile units, weak vs magic resist, slow recovery", score: "8.3/10" },
  { faction: "Hive", strengths: "Fastest faction, hivemind synergy, early rush, map exploration", weaknesses: "Limited ranged, weak to AoE, fragile, falls off late", score: "7.6/10" },
  { faction: "Schism", strengths: "Spell denial, scaling summons, battlefield control, anti-magic", weaknesses: "Slow start, weak vs rush, complex, limited direct damage", score: "7.8/10" },
  { faction: "Dungeon", strengths: "Dual attack types, magic penetration, Black Dragons, scouting", weaknesses: "Expensive, vulnerable to Light, mana-dependent, complex micro", score: "8.1/10" },
];

const faqData = [
  {
    question: "Which Olden Era faction is best for beginners?",
    answer: "Temple is the best faction for beginners with a 9/10 beginner-friendliness rating. Its balanced unit roster, straightforward buff mechanics, and reliable healing make it forgiving to learn. Necropolis is also accessible at a 7/10 rating because its Necromancy snowball mechanic provides a safety net — even if you lose units, you can raise more from fallen enemies.",
  },
  {
    question: "Which faction is currently the strongest in competitive play?",
    answer: "Necropolis sits at S-tier with a 9.2/10 overall score due to its unmatched Necromancy mechanic. The ability to raise fallen enemies as skeletons creates an unstoppable snowball effect in the late game. Temple, Grove, and Dungeon share A-tier with strong but balanced performance. Hive and Schism occupy B-tier — powerful in skilled hands but requiring more expertise to execute consistently.",
  },
  {
    question: "How do I choose between Temple and Dungeon if I want a versatile playstyle?",
    answer: "If you value reliability and buff synergy, pick Temple — its balanced roster with strong morale and healing makes it the most consistent choice. If you value tactical flexibility and enjoy adapting to opponents on the fly, pick Dungeon — its dual-attack system lets every unit switch damage types, but this comes at the cost of higher unit prices and mana dependency. Temple is more forgiving for mistakes; Dungeon rewards skilled micro-management.",
  },
];

export default function FactionComparisonPage() {
  return (
    <>
      <div className="hero-section">
        <h1 className="chapter-heading font-display" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Olden Era <span className="text-accent">Faction Comparison</span>
        </h1>
        <p className="text-ink-light" style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "0 auto" }}>
          Compare all six Olden Era factions side by side. Find the best faction for your playstyle with detailed breakdowns of strengths, weaknesses, unique units, and magic schools.
        </p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <div className="faq-snippets" style={{ marginBottom: "2rem" }}>
          {faqData.map((faq, i) => (
            <details key={i}>
              <summary className="text-ink font-display">{faq.question}</summary>
              <p className="text-ink-light">{faq.answer}</p>
            </details>
          ))}
        </div>

        <h2 className="chapter-heading font-display">Faction Comparison Table</h2>
        <p className="text-ink-light" style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Olden Era features six distinct factions, each with a unique governing body, magic school, and playstyle. The table below provides a quick comparison of tier rankings, difficulty ratings, and core characteristics to help you evaluate every option at a glance.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table className="parchment-table">
            <thead>
              <tr>
                <th>Faction</th>
                <th>Tier</th>
                <th>Difficulty</th>
                <th>Governing Body</th>
                <th>Best Magic School</th>
                <th>Beginner Friendly</th>
                <th>Key Units</th>
              </tr>
            </thead>
            <tbody>
              {factionComparisonData.map((f) => (
                <tr key={f.id} className={f.tier === "S" ? "bg-parchment-light" : ""}>
                  <td className="text-ink font-display">
                    <span style={{ marginRight: "0.5rem" }}>{f.icon}</span>
                    {f.name}
                  </td>
                  <td>
                    <span className={`tier-${f.tier.toLowerCase()}`}>{f.tier}</span>
                  </td>
                  <td className="text-ink-light">{f.difficulty}</td>
                  <td className="text-ink-light">{f.governingBody}</td>
                  <td className="text-accent">{f.bestMagicSchool}</td>
                  <td className="text-ink-light">
                    <span style={{ fontWeight: 600 }}>{f.beginnerFriendly}</span>/10
                  </td>
                  <td>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                      {f.keyUnits.map((u) => (
                        <span key={u} className="bg-parchment-light text-ink-light" style={{ padding: "0.15rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem", whiteSpace: "nowrap" }}>
                          {u}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="chapter-heading font-display" style={{ marginTop: "3rem" }}>Strengths & Weaknesses Breakdown</h2>
        <p className="text-ink-light" style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Understanding each faction&apos;s strengths and weaknesses is essential for both choosing the right faction and countering opponents. Below is a detailed side-by-side comparison with overall effectiveness scores.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table className="parchment-table">
            <thead>
              <tr>
                <th>Faction</th>
                <th>Core Strengths</th>
                <th>Core Weaknesses</th>
                <th>Overall Score</th>
              </tr>
            </thead>
            <tbody>
              {strengthsWeaknessesTable.map((row) => (
                <tr key={row.faction}>
                  <td className="text-ink font-display">{row.faction}</td>
                  <td className="text-ink-light" style={{ maxWidth: "350px", fontSize: "0.9rem", lineHeight: 1.5 }}>{row.strengths}</td>
                  <td className="text-ink-light" style={{ maxWidth: "350px", fontSize: "0.9rem", lineHeight: 1.5 }}>{row.weaknesses}</td>
                  <td className="text-accent" style={{ fontWeight: 600 }}>{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="chapter-heading font-display" style={{ marginTop: "3rem" }}>Faction Deep Dives</h2>
        <p className="text-ink-light" style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Each faction offers a fundamentally different approach to strategy. Let us examine what makes each faction distinctive, including their optimal magic schools, unique units, and the playstyles they reward.
        </p>

        <div className="grid-cards" style={{ marginTop: "1.5rem" }}>
          {factionComparisonData.map((f) => (
            <div key={f.id} className="card">
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{f.icon}</div>
              <h3 className="chapter-heading font-display">
                {f.name} <span className={`tier-${f.tier.toLowerCase()}`}>{f.tier}</span>
              </h3>
              <p className="drop-cap text-ink-light" style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                {f.playstyle}
              </p>

              <div style={{ marginBottom: "1rem" }}>
                <h4 className="text-accent font-display" style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>Strengths</h4>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {f.strengths.map((s, i) => (
                    <li key={i} className="text-ink-light" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{s}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <h4 className="text-ink" style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>Weaknesses</h4>
                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {f.weaknesses.map((w, i) => (
                    <li key={i} className="text-ink-light" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{w}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                <span className="bg-parchment-light text-ink-light" style={{ padding: "0.25rem 0.6rem", borderRadius: "0.25rem", fontSize: "0.8rem" }}>
                  Magic: {f.bestMagicSchool}
                </span>
                <span className="bg-parchment-light text-ink-light" style={{ padding: "0.25rem 0.6rem", borderRadius: "0.25rem", fontSize: "0.8rem" }}>
                  Beginner: {f.beginnerFriendly}/10
                </span>
                <span className="bg-parchment-light text-ink-light" style={{ padding: "0.25rem 0.6rem", borderRadius: "0.25rem", fontSize: "0.8rem" }}>
                  Difficulty: {f.difficulty}
                </span>
              </div>

              <div>
                <h4 className="text-ink font-display" style={{ marginBottom: "0.3rem", fontSize: "0.85rem" }}>Key Units</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {f.keyUnits.map((u) => (
                    <span key={u} className="bg-parchment-light text-ink-light" style={{ padding: "0.15rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.75rem" }}>{u}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="chapter-heading font-display" style={{ marginTop: "3rem" }}>Magic School Synergy</h2>
        <p className="text-ink-light" style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Each faction has a natural affinity for specific magic schools. Understanding these synergies is critical for hero development. Daylight Magic enhances Temple&apos;s buff playstyle, while Nightshade Magic amplifies Necropolis&apos;s debuff and curse arsenal. Primal Magic fuels Grove&apos;s elemental devastation, and Arcane Magic supports Schism&apos;s and Dungeon&apos;s control-oriented spellbooks. Selecting heroes with the right magic school specialization can dramatically increase your faction&apos;s effectiveness.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table className="parchment-table">
            <thead>
              <tr>
                <th>Faction</th>
                <th>Primary Magic School</th>
                <th>Secondary Magic School</th>
                <th>Magic Playstyle</th>
                <th>Top Caster Hero</th>
              </tr>
            </thead>
            <tbody>
              {[
                { faction: "Temple", primary: "Daylight Magic", secondary: "Thaumaturgy", playstyle: "Buff & Heal", hero: "Lia the Untethered One" },
                { faction: "Necropolis", primary: "Nightshade Magic", secondary: "Sorcery", playstyle: "Curse & Drain", hero: "Mag" },
                { faction: "Grove", primary: "Primal Magic", secondary: "Arcane Magic", playstyle: "Elemental Burst", hero: "Halon" },
                { faction: "Hive", primary: "Primal Magic", secondary: "Battle Magic", playstyle: "Enhance & Debuff", hero: "Psyche" },
                { faction: "Schism", primary: "Arcane Magic", secondary: "Sorcery", playstyle: "Summon & Deny", hero: "Vori Sage" },
                { faction: "Dungeon", primary: "Arcane Magic", secondary: "Sorcery", playstyle: "Penetrate & Control", hero: "Malakar" },
              ].map((row) => (
                <tr key={row.faction}>
                  <td className="text-ink font-display">{row.faction}</td>
                  <td className="text-accent">{row.primary}</td>
                  <td className="text-ink-light">{row.secondary}</td>
                  <td className="text-ink-light">{row.playstyle}</td>
                  <td className="text-ink-light">{row.hero}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="chapter-heading font-display" style={{ marginTop: "3rem" }}>Final Verdict — Which Faction Is Right for You?</h2>
        <p className="text-ink-light" style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
          Your faction choice shapes every aspect of your Olden Era experience. Temple provides the most forgiving learning curve and is the recommended starting point for new players. Necropolis rewards long-term planning with an unstoppable late-game army — if you enjoy watching your forces grow with every battle, this is your faction. Grove appeals to players who want the most powerful magical arsenal and do not mind managing an expensive economy. Dungeon offers unmatched tactical flexibility for those who enjoy micro-management and adapting to opponents on the fly. Hive suits aggressive players who want to dominate from turn one. Schism provides the most distinctive playstyle — if controlling the battlefield and denying enemy options sounds exciting, the Abyssal Conclave awaits.
        </p>

        <div className="related-guides" style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
          <h2 className="chapter-heading font-display" style={{ marginBottom: "1rem" }}>Related Guides</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="/best-builds" className="card" style={{ textDecoration: "none", padding: "0.75rem 1.25rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Best Builds →
            </a>
            <a href="/advanced-strategy" className="card" style={{ textDecoration: "none", padding: "0.75rem 1.25rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Advanced Strategy →
            </a>
            <a href="/unit-tier-list" className="card" style={{ textDecoration: "none", padding: "0.75rem 1.25rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Unit Tier List →
            </a>
            <a href="/magic-system" className="card" style={{ textDecoration: "none", padding: "0.75rem 1.25rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Magic System →
            </a>
          </div>
        </div>

        <p className="text-ink-light" style={{ fontSize: "0.8rem", marginTop: "2rem" }}>
          Last updated: July 2, 2026
        </p>
      </div>
    </>
  );
}
