import { Metadata } from "next";
import { factions, heroes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Olden Era Heroes Guide — Complete Hero Tier List & Builds",
  description: "Complete Olden Era heroes guide covering all 56 heroes across 6 factions. Hero tier list, specialties, starting skills, and class breakdown for every Might and Magic hero.",
};

export default function HeroesPage() {
  const factionIds = ['temple', 'necropolis', 'grove', 'hive', 'schism', 'dungeon'];

  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Olden Era Heroes Guide</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Complete hero database with tier rankings for all 56 heroes across all 6 factions.
          Compare specialties, starting skills, and find the best hero for your playstyle.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div className="faq-snippets">
          <details>
            <summary>How do I choose the right hero?</summary>
            <p>Your hero choice should synergize with your faction and strategy. Might heroes (Knights, Death Knights, Wardens, Enforcers, Abyssal Knights, Warlords) excel at direct combat and army leadership. Magic heroes (Clerics, Necromancers, Druids, Hive Minds, Rite Keepers, Warlocks) dominate through spellcasting. Look for S and A-tier heroes first — they provide the most impactful specialties that scale throughout the game.</p>
          </details>
          <details>
            <summary>What&apos;s the difference between Might and Magic heroes?</summary>
            <p>Might heroes gain more attack and defense per level, making them stronger in direct combat. Their skills focus on unit enhancement, combat tactics, and army leadership. Magic heroes gain more spell power and knowledge per level, giving them larger mana pools and more devastating spells. Their skill trees emphasize magical schools, mana management, and spell amplification. Most competitive players run one of each type as a main and secondary hero.</p>
          </details>
          <details>
            <summary>Which heroes are considered S-tier and why?</summary>
            <p>Four heroes currently hold S-tier status: Lord Edgar (Temple) for his universal attack/defense buff, Tarius (Necropolis) for Advanced Necromancy generating massive skeleton armies, Halon (Grove) for his game-warping Chain Lightning, Vori Sage (Schism) for reduced summoning costs, and Malakar (Dungeon) for his Black Dragon amplification. Each provides a game-defining specialty that fundamentally changes how their faction operates.</p>
          </details>
        </div>

        <h2>Hero Overview</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Olden Era features 56 unique heroes spread across 6 factions. Each hero belongs to either the Might or Magic archetype, determining their stat progression and available skill trees. Every hero has a unique specialty — a defining trait that provides a specific bonus or enhancement. Choosing the right hero is the most important decision you make in any Olden Era campaign, as your hero shapes your entire strategy from turn one.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Might heroes excel at frontline combat and army leadership. They gain more attack and defense per level and specialize in skills like Offense, Defense, Leadership, and Combat. Magic heroes gain more spell power and knowledge, making them devastating spellcasters with skills like Wisdom, Sorcery, and the various magic school specializations. The most effective strategy in Olden Era typically involves fielding one hero of each type — a main damage dealer and a support hero for map control and economy.
        </p>

        {factionIds.map((factionId) => {
          const faction = factions.find((f) => f.id === factionId);
          const factionHeroes = heroes.filter((h) => h.factionId === factionId);
          if (!faction || factionHeroes.length === 0) return null;

          const mightHeroes = factionHeroes.filter((h) => h.type === 'Might');
          const magicHeroes = factionHeroes.filter((h) => h.type === 'Magic');

          return (
            <div key={factionId} style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '0.5rem' }}>
                <a href={`/factions/${factionId}`} style={{ textDecoration: 'none' }}>
                  {faction.icon} {faction.name} Heroes
                </a>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {factionHeroes.length} heroes — {mightHeroes.length} {factionHeroes[0]?.type === 'Might' ? factionHeroes[0]?.className : mightHeroes[0]?.className || 'Might'} ({mightHeroes.length}) and {magicHeroes.length} {(magicHeroes[0]?.className || 'Magic')} ({magicHeroes.length}).
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
                      <th>Starting Skill</th>
                      <th>Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {factionHeroes.map((h) => (
                      <tr key={h.name}>
                        <td style={{ fontWeight: 600 }}>{h.name}</td>
                        <td>
                          <span style={{
                            background: h.type === 'Might' ? 'var(--color-danger)' : 'var(--color-accent-secondary)',
                            color: 'white',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                          }}>
                            {h.type}
                          </span>
                        </td>
                        <td>{h.className}</td>
                        <td style={{ fontWeight: 500, color: 'var(--color-accent)' }}>{h.specialty}</td>
                        <td style={{ fontSize: '0.9rem', maxWidth: '280px', lineHeight: 1.4 }}>{h.specialtyDesc}</td>
                        <td style={{ fontSize: '0.85rem' }}>{h.startingSkill}{h.startingSpell ? `, ${h.startingSpell}` : ''}</td>
                        <td><span className={`tier-${h.tier.toLowerCase()}`}>{h.tier}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}

        <h2 style={{ marginTop: '3rem' }}>Might vs Magic: Which Should You Main?</h2>
        <div className="grid-cards" style={{ marginTop: '1.5rem' }}>
          <div className="card">
            <h3>Might Heroes</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Might heroes gain +2 attack and +2 defense per level on average, making them formidable combatants who can hold their own in direct combat. Their skill trees emphasize unit enhancement through Offense, Defense, Leadership, and Tactics. Might heroes excel in prolonged campaigns where army strength matters more than spell power.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--color-accent)' }}>Best for:</strong> Beginner and intermediate players. Temple with Lord Edgar, Necropolis with Tarius, and Hive with Zixx are the strongest Might-hero factions.
            </p>
          </div>
          <div className="card">
            <h3>Magic Heroes</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Magic heroes gain +2 spell power and +2 knowledge per level, giving them larger mana pools and more devastating spells. Their skill trees include Wisdom, Sorcery, and specialized magic schools. Magic heroes can turn battles with well-timed spells, making them ideal for players who enjoy tactical depth and spell-slinging gameplay.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--color-accent)' }}>Best for:</strong> Advanced players. Grove with Halon, Schism with Vori Sage, and Dungeon with Malakar are the strongest Magic-hero factions.
            </p>
          </div>
        </div>

        <h2 style={{ marginTop: '3rem' }}>Hero Selection Strategy</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          When selecting your starting hero, consider three factors: your faction&apos;s natural playstyle, the map type, and your personal comfort level. Factions like Temple and Hive benefit from Might heroes who amplify their already strong combat units, while Grove and Schism demand Magic heroes to unlock their full magical potential. On larger maps with longer game times, scaling specialties (like Tarius&apos;s Advanced Necromancy or Cthara&apos;s Growing Madness) become increasingly valuable. On smaller maps, immediate-impact specialties like Lord Edgar&apos;s True Lord or Vori Sage&apos;s reduced summoning costs provide earlier power spikes.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Your secondary hero should complement your main hero&apos;s weaknesses. If your main is a Magic hero with low defense, recruit a Might hero with Defense and Logistics for map control and resource gathering. If your main is a Might hero, a Magic hero with Wisdom and Sorcery provides the spell support your army lacks. The Economy and Recruitment skills are excellent on secondary heroes regardless of type, as they generate passive value without requiring combat participation.
        </p>
      </div>
    </>
  );
}
