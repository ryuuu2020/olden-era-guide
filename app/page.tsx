import { Metadata } from "next";
import { factions, factionTierList } from "@/lib/data";

export const metadata: Metadata = {
  title: "Olden Era Guide — Complete Strategy Wiki for Heroes of Might & Magic",
  description: "Comprehensive Olden Era guide covering all 6 factions, hero builds, tier lists, combat tactics, and beginner tips. Master Heroes of Might & Magic: Olden Era.",
};

export default function HomePage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Heroes of Might &amp; Magic: Olden Era Guide</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 2rem' }}>
          The complete strategy wiki for all 6 factions — Temple, Necropolis, Grove, Hive, Schism, and Dungeon.
          Hero builds, tier lists, combat tactics, and beginner guides.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/beginners-guide" className="btn-primary">Beginner&apos;s Guide</a>
          <a href="/factions" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '2px solid var(--color-accent)', color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}>Explore Factions</a>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div className="faq-snippets">
          <details>
            <summary>What is Heroes of Might and Magic: Olden Era?</summary>
            <p>Olden Era is the official prequel to the genre-defining HoMM series, developed by Unfrozen Studio. Set on the continent of Jadame, it features 6 unique factions, turn-based tactical combat, empire building, and deep RPG hero progression. Launched in Early Access on April 30, 2026.</p>
          </details>
          <details>
            <summary>Which faction is best for beginners?</summary>
            <p>Temple is the most beginner-friendly faction. Its balanced unit roster and powerful buff synergy make it forgiving for new players. The straightforward playstyle lets you focus on learning core mechanics without managing complex faction-specific systems.</p>
          </details>
          <details>
            <summary>What&apos;s new in Olden Era compared to previous HoMM games?</summary>
            <p>Olden Era introduces Focus Points for hero abilities, dual-attack mechanics (Dungeon), hivemind synergy (Hive), spell denial (Schism), and a reworked skill system with faction-specific skill trees alongside universal combat, magic, and adventure skills.</p>
          </details>
        </div>

        <h2>What Is Olden Era?</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          Heroes of Might and Magic: Olden Era takes players back to the origins of the beloved strategy series. Set generations before the events of the classic HoMM titles, the game unfolds on the mysterious continent of Jadame — a land of ancient magic, warring factions, and untold secrets. You take on the role of a faction leader, building towns, recruiting armies, and exploring a rich world map filled with treasure, creatures, and rival heroes.
        </p>
        <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          What sets Olden Era apart from previous entries is its depth of strategic choice. Each of the 6 factions plays dramatically differently — from Temple&apos;s buff-centric armies to Necropolis&apos;s undead swarms, from Hive&apos;s aggressive rush tactics to Schism&apos;s eldritch summoning. The new Focus Points system adds a layer of tactical decision-making: heroes generate FP each turn that can be spent on powerful abilities, creating moments of critical impact in every battle.
        </p>

        <h2>Factions at a Glance</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
          Olden Era features 6 unique factions, each with its own governing body, playstyle philosophy, and unit roster.
          Click any faction to dive into detailed guides.
        </p>

        <div className="grid-cards">
          {factions.map((f) => (
            <a key={f.id} href={`/factions/${f.id}`} className="card" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{f.icon}</div>
              <h3 style={{ marginBottom: '0.5rem' }}>{f.name} <span className={`tier-${f.tier.toLowerCase()}`}>{f.tier}</span></h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{f.description.slice(0, 120)}...</p>
              <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {f.keyUnits.slice(0, 3).map((u) => (
                  <span key={u} style={{ background: 'var(--color-bg-elevated)', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{u}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <h2 style={{ marginTop: '3rem' }}>Quick Start Tips</h2>
        <div className="grid-cards" style={{ marginTop: '1.5rem' }}>
          <div className="card">
            <h3>1. Pick Temple First</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Temple&apos;s well-rounded roster and buff synergy make it the ideal learning faction. Start with Lord Edgar or Ister for a smooth early game.</p>
          </div>
          <div className="card">
            <h3>2. Prioritize Economy</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Build resource-generating structures early. Gold is the lifeblood of your army — heroes with Economy or Recruitment skills can dramatically accelerate your growth.</p>
          </div>
          <div className="card">
            <h3>3. Scout Aggressively</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Map knowledge wins games. Dedicate one hero to scouting with Logistics and Scouting skills. Finding resources and enemy positions early gives you a decisive advantage.</p>
          </div>
          <div className="card">
            <h3>4. Learn Focus Points</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>The Focus Points system is Olden Era&apos;s defining innovation. Save FP for critical moments — a well-timed hero ability can turn a losing battle into a victory.</p>
          </div>
        </div>
      </div>
    </>
  );
}
