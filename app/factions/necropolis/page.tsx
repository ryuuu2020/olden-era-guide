import { Metadata } from "next";
import { factions, heroes, factionTierList } from "@/lib/data";

const faction = factions.find((f) => f.id === "necropolis")!;
const factionHeroes = heroes.filter((h) => h.factionId === "necropolis");
const tierEntry = factionTierList.find((t) => t.factionId === "necropolis")!;

export const metadata: Metadata = {
  title: "Necropolis Faction Guide — Olden Era Strategy & Hero Builds",
  description: "Complete Necropolis faction guide for Heroes of Might & Magic: Olden Era. Undead army strategies, hero builds, Necromancy mechanics, strengths, weaknesses, and tier ranking.",
};

export default function NecropolisPage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {faction.icon} Necropolis Faction Guide
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          The undead legions of Shadowspire — Master attrition warfare with Necromancy, debuffs, and endless skeleton armies.
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
            <summary>Why is Necropolis S-tier?</summary>
            <p>Necropolis earns its S-tier ranking primarily through the Necromancy skill, which raises fallen enemies as skeletons after every battle. This creates an unmatched snowball effect: your army grows with every engagement while your opponent&apos;s resources are permanently diminished. Combined with powerful life-drain and curse mechanics, Necropolis becomes nearly unstoppable in the late game.</p>
          </details>
          <details>
            <summary>How does Necromancy work in Olden Era?</summary>
            <p>When a Necropolis hero with the Necromancy skill wins a battle, a percentage of enemy casualties are raised as skeletons added to your army. The Advanced Necromancy skill (from heroes like Tarius) significantly increases this conversion rate. Skeletons are tier 1 units but benefit from number stacking — large skeleton stacks deal devastating damage. Necromancy does not work against other undead or mechanical units.</p>
          </details>
          <details>
            <summary>What counters Necropolis?</summary>
            <p>Temple is Necropolis&apos;s natural predator — holy and light magic deals bonus damage to undead units. Prevent Necropolis from snowballing by engaging early before their skeleton stacks grow too large. Target their Vampires and Liches first in battle, as these units provide the life-drain and ranged damage that sustain Necropolis armies. Schism&apos;s spell denial can also limit Necromancy effectiveness.</p>
          </details>
        </div>

        <h2>Faction Overview</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {faction.description}
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Necropolis is ruled by the {faction.governingBody}, a council of the most powerful necromancers and vampire lords on Jadame. The faction&apos;s core identity revolves around death as a resource. Every fallen enemy becomes a potential recruit, every curse weakens the opponent, and every life-drain strike heals your own forces. Necropolis embodies the principle that time is its greatest ally — the longer a game goes, the more overwhelming the undead horde becomes.
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
          Necropolis&apos;s unit roster is designed for sustained attrition. The Skeleton, while individually weak, becomes devastating in large numbers generated by Necromancy — a full stack of skeletons can one-shot most tier 4-5 units. Wights add life-drain and curse effects that weaken enemies while healing themselves. Vampires are the premier sustain unit, combining high damage output with self-healing. Liches provide powerful ranged damage and area-effect death magic. At the top, Dread Knights deliver catastrophic single-target damage with a chance to instant-kill.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {faction.keyUnits.map((unit, i) => (
            <div key={unit} className="card" style={{ flex: '1 1 180px', minWidth: '180px', padding: '1rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Tier {i + 1}</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{unit}</div>
            </div>
          ))}
        </div>

        <h2>Necropolis Heroes</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Necropolis fields Death Knights (Might) and Necromancers (Magic). Death Knights combine martial prowess with Necromancy for a balanced approach, while Necromancers focus on debilitating curses and death magic. Tarius stands alone as the S-tier hero with his Advanced Necromancy specialty, generating significantly more skeletons per battle than any other hero.
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
            <h3 style={{ marginTop: 0 }}>Necromancy Snowball Strategy</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Tarius is the cornerstone of any competitive Necropolis strategy. His Advanced Necromancy specialty generates roughly 30-40% more skeletons per battle compared to standard Necromancy. Prioritize battles against neutral creature stacks in the early game to build up skeleton numbers. By mid-game, field 2-3 full skeleton stacks alongside your core units for overwhelming numerical advantage. Never disband skeletons — each one represents a permanent resource gain.
            </p>
          </div>
          <div className="card">
            <h3>Early Game Build Order</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Rush the Graveyard building to unlock Wights as early as possible. Upgrade Skeletons in week 2 — the improved stats make a significant difference when fielding large stacks. Vampires should be your mid-game priority, as their life-drain dramatically improves your army&apos;s sustainability. Save Dread Knights for late game when you can afford the building prerequisites.
            </p>
          </div>
          <div className="card">
            <h3>Battle Tactics</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Lead with curses — cast Despair, Weakness, and Slow on enemy priority targets before engaging. Position skeletons as a frontline buffer, allowing Vampires and Dread Knights to flank. Wights should target enemy spellcasters to apply their stacking curse effects. Against Temple, avoid clustering units to minimize Light/Holy area damage. Undead units are immune to morale, so don&apos;t waste skill points on Leadership.
            </p>
          </div>
          <div className="card">
            <h3>Matchup Analysis</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Temple is your hardest counter — engage early before their buff synergy scales. Grove is a favorable matchup; their fragile units generate large skeleton counts. Against Hive, their rush can overwhelm you if you&apos;re not prepared; build early Wights for defensive sustainability. Schism is a skill matchup — their spell denial can limit your curses, but your numerical advantage from Necromancy often prevails in late game. Against mirror Necropolis, prioritize eliminating the enemy Vampires first.
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
