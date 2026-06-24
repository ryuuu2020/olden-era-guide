import { Metadata } from "next";
import { factions, heroes, factionTierList } from "@/lib/data";

const faction = factions.find((f) => f.id === "dungeon")!;
const factionHeroes = heroes.filter((h) => h.factionId === "dungeon");
const tierEntry = factionTierList.find((t) => t.factionId === "dungeon")!;

export const metadata: Metadata = {
  title: "Dungeon Faction Guide — Olden Era Strategy & Hero Builds",
  description: "Complete Dungeon faction guide for Heroes of Might & Magic: Olden Era. Dark elf strategies, hero builds, dual-attack mechanics, Black Dragon tactics, strengths, weaknesses, and tier ranking.",
};

export default function DungeonPage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {faction.icon} Dungeon Faction Guide
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          The dark elves of Alvar — Master dual-attack versatility, subterfuge tactics, and Black Dragon devastation.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <span className={`tier-${faction.tier.toLowerCase()}`} style={{ fontSize: '1.1rem' }}>
            {faction.tier} Tier
          </span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div className="faq-snippets">
          <details>
            <summary>How do dual attacks work for Dungeon units?</summary>
            <p>Every Dungeon unit can switch between two distinct attack types before making their action. For example, Assassins can choose between a high-damage backstab or a poison-inflicting strike. Dark Elves toggle between piercing and magic damage. This mechanic lets you adapt to enemy resistances on the fly — use physical attacks against magic-resistant foes and magic attacks against heavily armored targets. The Subterfuge faction skill enhances both attack types.</p>
          </details>
          <details>
            <summary>Are Black Dragons really the best tier 7 unit?</summary>
            <p>Black Dragons are widely considered the strongest tier 7 unit for several reasons: they are immune to all magic (both harmful and beneficial, including resurrection), possess dual breath weapon types, and have the highest raw stats of any recruitable unit. Their magic immunity means enemy heroes cannot target them with debuffs or direct damage — a massive tactical advantage. Malakar&apos;s Dragon Cult specialty further amplifies their already impressive power.</p>
          </details>
          <details>
            <summary>Why is Dungeon considered hard to play?</summary>
            <p>Dungeon requires the most micro-management of any faction. Every turn, you must decide which attack type each unit uses, manage mana-hungry Warlocks, and protect expensive glass-cannon units. Building the Black Dragon structure requires the most complex prerequisite chain in the game. The faction rewards players who enjoy tactical depth and are willing to invest time in mastering unit interactions. Beginners often find Dungeon overwhelming compared to more straightforward factions like Temple.</p>
          </details>
        </div>

        <h2>Faction Overview</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {faction.description}
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Dungeon is ruled by the {faction.governingBody}, a shadowy triumvirate that pulls the strings of Jadame from beneath the surface. Unlike their surface-dwelling counterparts, Dungeon&apos;s dark elves have mastered the art of deception and adaptation — their dual-attack system reflects a philosophy of always having the right tool for any situation. Dungeon rewards intelligence and flexibility above raw power.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          {faction.playstyle}
        </p>

        <div className="grid-cards" style={{ marginBottom: '2rem' }}>
          <div className="card">
            <h3 style={{ color: 'var(--color-success)' }}>Strengths</h3>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
              {faction.strengths.map((s) => (
                <li key={s} style={{ marginBottom: '0.5rem' }}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 style={{ color: 'var(--color-danger)' }}>Weaknesses</h3>
            <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
              {faction.weaknesses.map((w) => (
                <li key={w} style={{ marginBottom: '0.5rem' }}>{w}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2>Key Units</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Dungeon&apos;s unit roster epitomizes finesse over brute force. Assassins are the tier 1 scout-harassers with poison and backstab options — fragile but deadly when positioned correctly. Dark Elves provide versatile mid-tier damage with physical/magic toggling. Minotaurs serve as the durable frontline, one of the few Dungeon units that can take punishment. Medusas offer ranged control with petrification abilities. The Black Dragon is the undisputed king of tier 7 units — magic-immune, dual-breath-weapon wielding, and fearsome in both stats and presence.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {faction.keyUnits.map((unit, i) => (
            <div key={unit} className="card" style={{ flex: '1 1 180px', minWidth: '180px', padding: '1rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Tier {i + 1}</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{unit}</div>
            </div>
          ))}
        </div>

        <h2>Dungeon Heroes</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Dungeon fields Warlords (Might) and Warlocks (Magic). Warlords capitalize on Dungeon&apos;s dual-attack system with enhanced physical damage and tactical positioning abilities. Warlocks are arcane specialists who can penetrate enemy magic resistance — Zarath&apos;s Arcane Penetration specialty is particularly effective against magic-resistant factions. Malakar is the definitive S-tier hero, with Dragon Cult providing massive bonuses to Black Dragons that make an already powerful unit truly game-defining.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Class</th>
                <th>Specialty</th>
                <th>Specialty Description</th>
                <th>Tier</th>
              </tr>
            </thead>
            <tbody>
              {factionHeroes.map((h) => (
                <tr key={h.name}>
                  <td style={{ fontWeight: 600 }}>{h.name}</td>
                  <td>{h.type}</td>
                  <td>{h.className}</td>
                  <td>{h.specialty}</td>
                  <td style={{ fontSize: '0.9rem', maxWidth: '300px' }}>{h.specialtyDesc}</td>
                  <td><span className={`tier-${h.tier.toLowerCase()}`}>{h.tier}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '3rem' }}>Strategy Tips</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Dual-Attack Decision Tree</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Against Temple: use magic attacks — Temple&apos;s physical defense outscales their magic resistance. Against Necropolis: physical attacks are generally better, as undead have varied magic resistances. Against Grove: magic attacks bypass their high physical evasion. Against Hive: physical attacks punish their low armor values. Against Schism: magic attacks outrange their summon-based armies. Against other Dungeon: physical attacks tend to be more reliable due to Dungeon&apos;s natural magic resistance. Master these matchups and you&apos;ll always have the damage advantage.
            </p>
          </div>
          <div className="card">
            <h3>Black Dragon Rush</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              The Black Dragon building chain is the most expensive but most rewarding in the game. Start planning from turn one: capture gem and crystal mines early, as these are prerequisites for high-tier Dungeon units. With Malakar, prioritize Subterfuge and Wisdom for faster tech progression. Aim to field your first Black Dragon by week 5-6. Once you have 2-3 Black Dragons, you can directly challenge enemy capitals. Their magic immunity makes them immune to crowd control — send them straight at the enemy hero.
            </p>
          </div>
          <div className="card">
            <h3>Mana Management</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Dungeon is the most mana-hungry faction. Warlocks must constantly cast to maintain their magic advantage, and dual-attack abilities cost mana for several units. Build Mana Wells in every town. Zarath&apos;s Mana Drain spell helps sustain your mana pool by stealing from enemy heroes. Never enter a major battle with less than 50% mana — Dungeon units without magical support are overpriced for their raw stats. The Wisdom skill is mandatory for all Dungeon magic heroes.
            </p>
          </div>
          <div className="card">
            <h3>Scouting and Map Control</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Dungeon&apos;s Subterfuge faction skill provides enhanced vision and map mobility. Dedicate Velara (Assassin Guild specialty) or Shira (Shadow Strike) as your scout. Use Assassins to reveal the map — their high movement speed and stealth make them perfect explorers. Dungeon excels at asymmetric warfare: avoid fair fights, strike enemy resource lines, and use superior map knowledge to ambush isolated enemy stacks. The Triumvirate didn&apos;t rule Jadame through strength alone — they ruled through information.
            </p>
          </div>
        </div>

        <h2>Tier Placement: {faction.tier}-Tier</h2>
        <div className="card" style={{ marginBottom: '2rem' }}>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            {tierEntry.reason}
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a href="/factions" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>← All Factions</a>
        </div>
      </div>
    </>
  );
}
