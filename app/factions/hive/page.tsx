import { Metadata } from "next";
import { factions, heroes, factionTierList } from "@/lib/data";

const faction = factions.find((f) => f.id === "hive")!;
const factionHeroes = heroes.filter((h) => h.factionId === "hive");
const tierEntry = factionTierList.find((t) => t.factionId === "hive")!;

export const metadata: Metadata = {
  title: "Hive Faction Guide — Olden Era Strategy & Hero Builds",
  description: "Complete Hive faction guide for Heroes of Might & Magic: Olden Era. Insect swarm strategies, hero builds, hivemind synergy, strengths, weaknesses, and tier ranking.",
};

export default function HivePage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {faction.icon} Hive Faction Guide
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          The swarming insect armies of Beelzebub — Master speed, aggression, and overwhelming hivemind synergy.
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
            <summary>What makes Hive unique among factions?</summary>
            <p>Hive&apos;s defining mechanic is hivemind synergy — units gain stacking bonuses when fighting alongside other units of the same type. This encourages specialized army compositions rather than diverse rosters. Their insect units also have the highest base Initiative in the game, ensuring Hive almost always acts first in each combat round. The combination of speed and synergy makes Hive the premier rush-down faction.</p>
          </details>
          <details>
            <summary>Why is Hive only B-tier?</summary>
            <p>Hive&apos;s early game is among the strongest in Olden Era, but the faction struggles as games progress. Its limited ranged options make siege battles difficult, and fragile individual units don&apos;t scale well into the late game. Hive also lacks the economic or magical tools that A-tier and S-tier factions use to dominate prolonged campaigns. In skilled hands, Hive can still win, but the margin for error is smaller than other factions.</p>
          </details>
          <details>
            <summary>How do I use hivemind synergy effectively?</summary>
            <p>Commit to unit specialization — fielding 3-4 stacks of the same unit type generates maximum hivemind bonuses. Soldier Ants are the best target for hivemind stacking due to their durability. Zixx, the Swarm Commander, amplifies these bonuses further. Avoid mixing too many unit types, as diluted hivemind bonuses defeat the purpose of the mechanic. The sweet spot is 2-3 unit types in your army, with 2+ stacks of each.</p>
          </details>
        </div>

        <h2>Faction Overview</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {faction.description}
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Hive is led by {faction.governingBody}, a fearsome insectoid ruler who commands absolute loyalty through pheromone control. The faction&apos;s philosophy is brutally simple: strike first, strike hard, and overwhelm the enemy before they can mount a defense. Hive armies operate as a single organism — each unit supports the swarm, and the swarm amplifies each unit. This symbiotic relationship is mechanized through the hivemind system.
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
          Hive&apos;s units are designed for speed and aggression. Drones form the expendable vanguard — cheap, fast, and perfect for triggering hivemind bonuses. Soldier Ants are the durable backbone, providing frontline staying power while maintaining good mobility. Dragonfly Riders are Hive&apos;s elite flying cavalry, capable of striking anywhere on the battlefield. Mantis units serve as the heavy hitters with devastating single-target damage. At the top, the Queen Ant is a mobile command center that generates additional units and amplifies hivemind bonuses across the entire army.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {faction.keyUnits.map((unit, i) => (
            <div key={unit} className="card" style={{ flex: '1 1 180px', minWidth: '180px', padding: '1rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Tier {i + 1}</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{unit}</div>
            </div>
          ))}
        </div>

        <h2>Hive Heroes</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Hive fields Enforcers (Might) and Hive Minds (Magic). Enforcers are combat-focused commanders who lead from the front, while Hive Minds channel psychic energy to debilitate enemies and enhance the swarm. Zixx is the premier Enforcer with Swarm Commander boosting all Drone-type units. Psyche is the standout Hive Mind, with spell power that scales directly with army size — the larger your swarm, the more devastating her spells.
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
            <h3 style={{ marginTop: 0 }}>Rush Strategy — The First 5 Turns</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Hive&apos;s early game is its strongest phase. Build Drones on turn one and immediately start clearing neutral stacks. Recruit a second hero by turn two and split your forces — use your main hero for offense and your secondary for resource collection. Rush Soldier Ant upgrades by week two to establish hivemind bonuses. Your goal is to pressure opponents before they can build their economy. If the game reaches month three, your power has already peaked.
            </p>
          </div>
          <div className="card">
            <h3>Hivemind Stacking Optimization</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              The hivemind bonus scales quadratically — two stacks of Soldier Ants provide more total power than one stack of Soldiers and one stack of Drones. Pick 2-3 unit types and commit fully. Typical competitive compositions are: 3x Soldier Ant, 2x Mantis, 1x Queen (tank-heavy) or 2x Drone, 2x Dragonfly Rider, 2x Mantis (flanking-focused). Zixx amplifies these bonuses by 25% at expert Summon Swarm.
            </p>
          </div>
          <div className="card">
            <h3>Initiative Advantage Play</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Hive almost always moves first. Use this to eliminate high-value enemy units before they can act. Dragonfly Riders should target enemy spellcasters or ranged units on turn one. Mantis units can one-shot most tier 3-4 creatures with a clean hit. If you can reduce the enemy army by 30% before they take their first action, you&apos;ve already won the battle through initiative alone.
            </p>
          </div>
          <div className="card">
            <h3>Late Game Survival</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              If the game extends past your power spike, transition to a defensive posture. Build the Queen Ant as soon as possible — her unit generation provides sustainability that Hive otherwise lacks. Use hit-and-run tactics with Dragonfly Riders to harass enemy resource lines. Avoid pitched battles against fully-developed Temple or Necropolis armies. Your win condition shifts from outright destruction to economic strangulation through superior map mobility.
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
