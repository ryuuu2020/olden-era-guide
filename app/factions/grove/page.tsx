import { Metadata } from "next";
import { factions, heroes, factionTierList } from "@/lib/data";

const faction = factions.find((f) => f.id === "grove")!;
const factionHeroes = heroes.filter((h) => h.factionId === "grove");
const tierEntry = factionTierList.find((t) => t.factionId === "grove")!;

export const metadata: Metadata = {
  title: "Grove Faction Guide — Olden Era Strategy & Hero Builds",
  description: "Complete Grove faction guide for Heroes of Might & Magic: Olden Era. Elemental spirit strategies, hero builds, nature magic, strengths, weaknesses, and tier ranking.",
};

export default function GrovePage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {faction.icon} Grove Faction Guide
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          The elemental spirits of Murmurwoods — Master primal magic, summon avatars, and unleash nature&apos;s fury.
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
            <summary>Is Grove the best spellcasting faction?</summary>
            <p>Absolutely. Grove heroes have the highest spell power progression and access to Primal Magic — the most destructive magical school in the game. Halon, with his Chain Lightning specialty, can single-handedly win battles. Grove&apos;s druids and rangers also provide powerful spell-like abilities, making Grove the premier choice for players who want magic to be their primary weapon.</p>
          </details>
          <details>
            <summary>How do I manage Grove&apos;s high costs?</summary>
            <p>Grove requires significant gold and rare resources for its top-tier units. Prioritize Economy and Recruitment skills on secondary heroes. Capture gold mines early and protect them aggressively. Build Rangers and Druids in moderation — their high cost means you can&apos;t afford to lose them. The Phoenix, while expensive, is worth saving for as it provides game-changing area damage and resurrection.</p>
          </details>
          <details>
            <summary>Which Grove hero is best for beginners?</summary>
            <p>Gorel Spearhead provides a smooth entry point with his ranged damage amplification, making Grove&apos;s already strong archers even deadlier. For magic-focused beginners, Vatawna offers reliable spell power with her Spiritual Vigor specialty granting additional mana and map spell uses. Avoid Halon initially — while he&apos;s S-tier, Chain Lightning requires precise timing and positioning to maximize value.</p>
          </details>
        </div>

        <h2>Faction Overview</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {faction.description}
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          The Grove faction hails from the enchanted Murmurwoods, whose {faction.governingBody} governing body remains shrouded in mystery. Unlike other factions with clear political structures, Grove operates through a primal connection to nature itself. The Murmuring faction skill enhances nature magic and creature abilities, creating synergies between spellcasters and elemental creatures that no other faction can replicate.
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
          Grove&apos;s unit roster emphasizes quality over quantity. Fauns provide early-game utility with their nature-based abilities. Rangers deliver some of the highest ranged damage in the game, making them a top priority for upgrades. Druids combine spellcasting with respectable combat stats, offering both damage and support. Treants serve as Grove&apos;s primary tank — slow but exceptionally durable with self-healing. The Phoenix is Grove&apos;s apex unit, a flying elemental that deals massive fire damage and can resurrect itself upon death, making it one of the most feared tier 7 units.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {faction.keyUnits.map((unit, i) => (
            <div key={unit} className="card" style={{ flex: '1 1 180px', minWidth: '180px', padding: '1rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Tier {i + 1}</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{unit}</div>
            </div>
          ))}
        </div>

        <h2>Grove Heroes</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Grove features Wardens (Might) and Druids (Magic). Wardens specialize in ranged combat enhancement and nature-based martial skills, while Druids are the most powerful spellcasters in the game. Halon is the standout S-tier hero — his Chain Lightning specialization can decimate entire enemy formations in a single cast. The Murmuring faction skill enhances all nature magic and creature abilities.
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
            <h3 style={{ marginTop: 0 }}>Primal Magic Burst Strategy</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Halon with Chain Lightning is Grove&apos;s signature play. Prioritize Wisdom and Primal Magic skills to unlock the highest-tier elemental spells. At expert Primal Magic, Halon&apos;s Chain Lightning hits 4-5 targets with amplified damage. Time your spellcasts carefully — wait for enemies to cluster, then unleash devastating area damage. Pair with Sullie&apos;s Summon Avatar ability to create magical copies that confuse enemy targeting.
            </p>
          </div>
          <div className="card">
            <h3>Economic Management</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Grove is the most expensive faction — you must prioritize economy from turn one. Start with Economy or Recruitment skills on your secondary hero. Capture gold mines and resource generators before engaging major neutral stacks. Upgrade Rangers before Druids — their ranged damage is more cost-effective in the early game. Only build Phoenix when you have a healthy gold reserve and can protect the investment.
            </p>
          </div>
          <div className="card">
            <h3>Battle Formation</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Treants should anchor your frontline, positioned to shield Rangers and Druids behind them. Rangers should have clear lines of sight — their damage falls off dramatically when blocked. Druids perform best in the center where they can both cast and fight. Phoenix should start on a flank to dive enemy backlines unimpeded. Use Fauns for early game scouting and harassment rather than main-line combat.
            </p>
          </div>
          <div className="card">
            <h3>Matchup Analysis</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Against Necropolis, your Primal Magic bypasses undead damage resistances — a favorable matchup. Temple is tricky; their buffed units can withstand your spells and their Light magic hurts your fragile units. Against Hive, use area-effect spells to punish their tendency to swarm — Chain Lightning and Firewall are devastating. Dungeon&apos;s magic resistance is your biggest problem; prioritize physical damage from Rangers in this matchup. Schism can be neutralized by focusing their summoners before the army grows too large.
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
