import { Metadata } from "next";
import { factions, heroes, factionTierList } from "@/lib/data";

const faction = factions.find((f) => f.id === "temple")!;
const factionHeroes = heroes.filter((h) => h.factionId === "temple");
const tierEntry = factionTierList.find((t) => t.factionId === "temple")!;

export const metadata: Metadata = {
  title: "Temple Faction Guide — Olden Era Strategy & Hero Builds",
  description: "Complete Temple faction guide for Heroes of Might & Magic: Olden Era. Unit roster, hero builds, strengths, weaknesses, strategy tips, and tier ranking for the Temple faction.",
};

export default function TemplePage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {faction.icon} Temple Faction Guide
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          The Church of the Sun — Master buff synergy, healing magic, and balanced armies.
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
            <summary>Why is Temple the best faction for beginners?</summary>
            <p>Temple&apos;s well-rounded unit roster covers all tactical roles without major gaps. Its buff synergy mechanic rewards players for casting buffs on units, making spell usage intuitive and forgiving. Heroes like Lord Edgar and Ister provide reliable early-game advantages that help new players learn the game without punishment.</p>
          </details>
          <details>
            <summary>Which Temple hero should I pick first?</summary>
            <p>Lord Edgar is the premier Temple hero with his True Lord specialty granting bonus attack and defense to all units — a straightforward, always-useful power boost. For magic enthusiasts, Lia the Untethered One provides Daylight Magic bonuses that synergize perfectly with Temple&apos;s Light/Holy focus.</p>
          </details>
          <details>
            <summary>How do I counter Temple buffs?</summary>
            <p>Temple&apos;s greatest weakness is dispel effects that strip away their stacked buffs. Schism&apos;s spell denial is particularly effective. Focus on eliminating Temple&apos;s Lightweavers and Cleric heroes first, as they are the primary buff sources. Area-of-effect spells can also punish Temple&apos;s tendency to cluster buffed units together.</p>
          </details>
        </div>

        <h2>Faction Overview</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          {faction.description}
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Temple is governed by the {faction.governingBody}, a strict religious order that channels the power of the Sun to protect Jadame. Temple&apos;s playstyle philosophy centers on empowerment: every buff spell, every morale boost, and every leadership ability stacks to create an army that is significantly more powerful than the sum of its individual units. This makes Temple deceptively strong in prolonged engagements where buffs have time to accumulate.
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
          Temple&apos;s unit roster is built around synergy and reliability. The Swordsman forms a sturdy frontline that becomes formidable when buffed, while the Crossbowman provides consistent ranged damage. Cavalry units offer mobility and flanking potential, and the Lightweaver is a dedicated support unit that amplifies the power of Temple&apos;s buff-focused strategy. At the apex sits the Angel — one of the most powerful tier 7 units in the game with devastating holy damage and the ability to resurrect fallen allies.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {faction.keyUnits.map((unit, i) => (
            <div key={unit} className="card" style={{ flex: '1 1 180px', minWidth: '180px', padding: '1rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Tier {i + 1}</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{unit}</div>
            </div>
          ))}
        </div>

        <h2>Temple Heroes</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Temple fields both Knight (Might) and Cleric (Magic) heroes. Knights focus on direct combat effectiveness and army leadership, while Clerics provide powerful buff and healing magic. The Righteousness faction skill is shared by all Temple heroes, enhancing the effectiveness of buffs on their units.
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
            <h3 style={{ marginTop: 0 }}>Buff Stacking Priority</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Temple units gain extra benefits from buffs through the Righteousness skill. Prioritize casting Blessing, Righteous Might, and Stone Skin on your core combat units — especially Swordsmen and Cavalry. The multiplicative effect of stacked buffs makes even tier 1-3 Temple units competitive against higher-tier enemies. Rush Advanced Righteousness on your main hero to maximize this synergy.
            </p>
          </div>
          <div className="card">
            <h3>Early Game Build Order</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Start by building the Tavern and recruiting a second hero on day one. Upgrade your Swordsmen and Crossbowmen first — these tier 1-3 units form the backbone of your early army. Rush to the Chapel for Lightweavers, which dramatically improve your buff effectiveness. Save the expensive Angel building for the mid-game when your economy can support it.
            </p>
          </div>
          <div className="card">
            <h3>Battle Formation</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Place Swordsmen in front to absorb damage, Crossbowmen and Lightweavers behind them, with Cavalry on the flanks for mobile threat. Cast Blessing on your entire frontline before engagement. Use Lord Edgar or Aeos the Exalted for maximum army-wide buffs. Against undead (Necropolis), Daylight Magic spells deal bonus damage — exploit this matchup.
            </p>
          </div>
          <div className="card">
            <h3>Counter Strategies</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Beware of Schism opponents — their spell denial shuts down Temple&apos;s buff-reliant strategy entirely. Against Necropolis, leverage your Light/Holy damage advantage. When fighting Hive, use Cavalry to outmaneuver their fragile insect swarms. Against Grove, close the distance quickly before their powerful spellcasters can control the battlefield. Temple thrives in prolonged fights — avoid quick decisive engagements where your buff stacking has no time to build up.
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
