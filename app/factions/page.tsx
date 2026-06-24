import { Metadata } from "next";
import { factions, factionTierList } from "@/lib/data";

export const metadata: Metadata = {
  title: "Olden Era Factions Guide — Tier List, Playstyles & Strategies",
  description: "Complete Olden Era factions guide. Compare all 6 factions: Temple, Necropolis, Grove, Hive, Schism, and Dungeon. Tier list, playstyles, governing bodies, and key units for each faction.",
};

export default function FactionsPage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Olden Era Factions</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Every faction in Olden Era plays dramatically differently. Compare strengths, weaknesses, playstyles, and tier rankings to find your perfect match.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div className="faq-snippets">
          <details>
            <summary>How do I choose the right faction for me?</summary>
            <p>Start by identifying your preferred playstyle. If you enjoy balanced armies with reliable buffs, pick Temple. If you love overwhelming numbers and attrition, Necropolis is for you. Spellcasters should try Grove, aggressive rushers will love Hive, control enthusiasts should explore Schism, and players who value versatility will find Dungeon rewarding.</p>
          </details>
          <details>
            <summary>Which faction is currently the strongest?</summary>
            <p>Necropolis sits at S-tier due to its unmatched Necromancy mechanic, which lets undead armies grow with every battle. Temple, Grove, and Dungeon share A-tier with strong but balanced performance. Hive and Schism occupy B-tier — powerful in skilled hands but requiring more expertise to execute effectively.</p>
          </details>
          <details>
            <summary>Do factions have different building requirements?</summary>
            <p>Yes. Each faction has a unique town building tree. Temple and Necropolis have relatively straightforward build orders, while Grove requires significant gold and rare resources for its powerful rangers and druids. Dungeon and Schism have complex prerequisite chains for their top-tier units. Check each faction&apos;s detail page for optimal build orders.</p>
          </details>
        </div>

        <h2>Faction Comparison</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Olden Era&apos;s six factions represent fundamentally different approaches to strategy. Understanding each faction&apos;s governing body, preferred playstyle, and unit roster is the first step toward mastering the game. Below is a detailed comparison to help you evaluate each option.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Faction</th>
                <th>Tier</th>
                <th>Governing Body</th>
                <th>Playstyle</th>
                <th>Key Units</th>
              </tr>
            </thead>
            <tbody>
              {factions.map((f) => {
                const tierEntry = factionTierList.find((t) => t.factionId === f.id);
                return (
                  <tr key={f.id}>
                    <td>
                      <a href={`/factions/${f.id}`} style={{ fontWeight: 600 }}>
                        {f.icon} {f.name}
                      </a>
                    </td>
                    <td><span className={`tier-${f.tier.toLowerCase()}`}>{f.tier}</span></td>
                    <td>{f.governingBody}</td>
                    <td style={{ maxWidth: '300px', fontSize: '0.9rem', lineHeight: 1.5 }}>{f.playstyle}</td>
                    <td>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                        {f.keyUnits.map((u) => (
                          <span key={u} style={{ background: 'var(--color-bg-elevated)', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{u}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '3rem' }}>Tier List Breakdown</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          The tier list reflects competitive viability and overall strength in the current meta. S-tier factions have game-warping mechanics that are difficult to counter. A-tier factions are strong and consistent but require solid fundamentals. B-tier factions have higher skill ceilings and more situational power, rewarding dedicated mastery with devastating potential.
        </p>

        {factionTierList.map((entry) => {
          const faction = factions.find((f) => f.id === entry.factionId);
          if (!faction) return null;
          return (
            <div key={entry.factionId} className="card" style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{faction.icon}</span>
                <h3 style={{ margin: 0 }}>{faction.name}</h3>
                <span className={`tier-${entry.tier.toLowerCase()}`} style={{ marginLeft: 'auto' }}>{entry.tier} Tier</span>
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{entry.reason}</p>
              <a href={`/factions/${entry.factionId}`} style={{ display: 'inline-block', marginTop: '0.75rem', fontWeight: 600 }}>
                Full {faction.name} Guide →
              </a>
            </div>
          );
        })}

        <h2 style={{ marginTop: '3rem' }}>How to Choose Your Faction</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Your faction choice shapes every aspect of your Olden Era experience. Temple provides the most forgiving learning curve with its balanced roster and reliable buff synergy. Necropolis rewards players who enjoy long-term planning and watching their undead army grow with every battle. Grove appeals to spellcasters who want the most powerful magical arsenal in the game, though managing its expensive economy requires discipline.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Hive is built for aggressive players who want to seize the initiative from turn one. Its high-speed units and hivemind synergy create overwhelming early pressure, but fragile troops demand decisive engagements. Schism offers the most unique playstyle — if you enjoy controlling the battlefield and denying your opponent&apos;s options, its eldritch summoning and spell-disruption mechanics deliver a deeply satisfying experience.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Dungeon provides the highest tactical flexibility through its dual-attack system. Every unit can switch between two damage types, letting you adapt to any enemy composition on the fly. This versatility comes at the cost of higher unit prices and mana dependency, making Dungeon a rewarding challenge for experienced players who enjoy micro-management and tactical depth.
        </p>

        <h2>Explore Each Faction</h2>
        <div className="grid-cards" style={{ marginTop: '1.5rem' }}>
          {factions.map((f) => (
            <a key={f.id} href={`/factions/${f.id}`} className="card" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{f.icon}</div>
              <h3 style={{ marginBottom: '0.5rem' }}>{f.name} <span className={`tier-${f.tier.toLowerCase()}`}>{f.tier}</span></h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{f.description.slice(0, 120)}...</p>
              <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {f.keyUnits.map((u) => (
                  <span key={u} style={{ background: 'var(--color-bg-elevated)', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{u}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
