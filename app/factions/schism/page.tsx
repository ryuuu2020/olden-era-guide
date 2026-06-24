import { Metadata } from "next";
import { factions, heroes, factionTierList } from "@/lib/data";

const faction = factions.find((f) => f.id === "schism")!;
const factionHeroes = heroes.filter((h) => h.factionId === "schism");
const tierEntry = factionTierList.find((t) => t.factionId === "schism")!;

export const metadata: Metadata = {
  title: "Schism Faction Guide — Olden Era Strategy & Hero Builds",
  description: "Complete Schism faction guide for Heroes of Might & Magic: Olden Era. Eldritch summoning strategies, hero builds, spell denial mechanics, strengths, weaknesses, and tier ranking.",
};

export default function SchismPage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {faction.icon} Schism Faction Guide
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          The eldritch servants of the Depths — Master spell denial, summon growing horrors, and control the battlefield.
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
            <summary>Why is Schism the hardest faction to play?</summary>
            <p>Schism requires mastery of three complex systems simultaneously: summon timing, spell denial, and battlefield positioning. Unlike other factions that improve existing units, Schism must generate power through summoned creatures that start weak and scale over time. Mismanaging the timing of Abyssal Rite summons leaves you vulnerable to early aggression. Schism rewards players who can think several turns ahead and anticipate enemy spell patterns.</p>
          </details>
          <details>
            <summary>How does spell denial work?</summary>
            <p>Schism&apos;s unique Abyssal Rite faction skill grants abilities that prevent or disrupt enemy spellcasting. The Silence spell (available to Mira the Drowned) shuts down a target hero&apos;s spellcasting for multiple turns. Additionally, Schism units like Cultists and Deep Ones generate Abyssal energy that can be spent to counter specific enemy spells. This makes Schism a hard counter to magic-reliant factions like Grove.</p>
          </details>
          <details>
            <summary>Can Schism compete in the current meta?</summary>
            <p>Schism sits at B-tier primarily due to its slow start. In competitive play against skilled opponents, early rushing strategies from Hive or Temple can end the game before Schism&apos;s summoned army reaches critical mass. However, in longer game modes or against players who fail to apply early pressure, Schism becomes nearly unbeatable. Vori Sage&apos;s S-tier hero ranking reflects this massive late-game potential.</p>
          </details>
        </div>

        <h2>Faction Overview</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {faction.description}
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Schism&apos;s origins are the most enigmatic of all Olden Era factions. A splinter group from Alvar, they delved into forbidden Vori rites in the Depths of Water and emerged transformed. Their {faction.governingBody} governing body remains unknown to outsiders, adding to their mystique. Schism&apos;s philosophy rejects the orderly combat of other factions, instead embracing chaos and inevitability — their power grows while their enemies&apos; options diminish.
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
          Schism&apos;s units embody eerie otherworldliness and escalating power. Cultists serve as the foundational unit — weak individually but capable of channeling Abyssal energy for powerful rituals. Abominations are twisted melee fighters that grow stronger as battle length increases. Deep Ones represent the faction&apos;s aquatic heritage with unique water-based abilities. Kraken Spawn are devastating area-control units that can immobilize entire enemy formations. At the apex, the Eldritch Horror is arguably the most terrifying tier 7 unit — its attacks bypass all damage reduction and it grows stronger each turn it remains on the battlefield.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {faction.keyUnits.map((unit, i) => (
            <div key={unit} className="card" style={{ flex: '1 1 180px', minWidth: '180px', padding: '1rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Tier {i + 1}</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{unit}</div>
            </div>
          ))}
        </div>

        <h2>Schism Heroes</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Schism fields Abyssal Knights (Might) and Rite Keepers (Magic). Abyssal Knights lead from the front with water-enhanced combat abilities, while Rite Keepers are the true masters of Schism&apos;s summoning and denial mechanics. Vori Sage is the undisputed S-tier hero — reduced mana costs for summoning spells mean you can field Eldritch Horrors turns before opponents expect them. Cthara&apos;s Growing Madness specialty makes summons gain stats each turn, creating an ever-escalating threat.
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
            <h3 style={{ marginTop: 0 }}>Early Game Survival</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Your first priority is surviving the early game. Build Cultists and Abominations defensively — do not seek out fights against major neutral stacks in the first two weeks. Prioritize Abyssal Rite skill upgrades to reduce summoning costs. Use Deny Ability (available from Mira the Drowned) to shut down enemy hero spells that would wipe your fragile early army. Your win condition is reaching the mid-game with a stable economy and at least one upgraded Deep One summoning structure.
            </p>
          </div>
          <div className="card">
            <h3>Summon Rotation Strategy</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              With Vori Sage, the optimal summoning rotation is: turn 1 cast Summon Deep One for frontline presence, turn 2 cast Abyssal Rite to boost existing summons, turn 3 summon Kraken Spawn for area control. By turn 5, you should have 3-4 summons on the field, each scaling from Abyssal Rite bonuses. Cthara&apos;s Growing Madness specialty makes this rotation even deadlier. Never summon all at once — staggered summoning ensures you always have fresh units entering the battlefield.
            </p>
          </div>
          <div className="card">
            <h3>Spell Denial Timing</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              The key to spell denial is anticipation, not reaction. Watch enemy hero mana pools and skill trees. When you see a Grove hero approach with high Primal Magic, prepare Silence. Against Temple, save denial abilities for their mass buffs (Blessing, Righteous Might). Against Necropolis, deny their curse chain before it can be established. Mira the Drowned excels at this — her extended Silence duration can lock out enemy spellcasters for 3+ turns.
            </p>
          </div>
          <div className="card">
            <h3>Late Game Dominance</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              If you reach the late game intact, you&apos;ve already won. A fully-developed Schism army with 5+ Eldritch-touched summons is functionally unstoppable. The Eldritch Horror should be your primary damage dealer — its scaling damage and damage reduction bypass make it effective against every faction. Use Kraken Spawn to lock down enemy tier 7 units. Your Cultists should transition from combat to support, channeling Abyssal energy to maintain buffs on your summon army. The only remaining threat is an equally-developed Necropolis with an enormous skeleton count — and you counter that with spell denial on their Necromancy.
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
