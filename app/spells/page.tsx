import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spells & Magic Guide — All Six Schools Explained",
  description:
    "Complete Olden Era magic and spells overview. Primal, Arcane, Daylight, Nightshade, Battle Magic, and Thaumaturgy schools explained. Which factions use each school best.",
};

const magicSchools = [
  {
    name: "Primal Magic",
    icon: "🔥",
    color: "#ef4444",
    specialty: "Elemental destruction — Fire, Ice, Lightning",
    description:
      "Primal Magic channels the raw forces of nature. It specializes in direct damage spells that scale with Spell Power. Fire spells deal high single-target damage, Ice spells include control effects, and Lightning spells deal chain damage to multiple targets. Grove is the premier Primal Magic faction, with Druids like Halon unleashing devastating Chain Lightning. Temple and Dungeon also make good use of Primal Magic's damage options.",
    factionSynergy:
      "Best with Grove. Also strong on Temple (Fire spells) and Dungeon (Lightning spells).",
    keySpells: [
      "Fireball — AoE fire damage",
      "Frost Ring — AoE ice damage with slow",
      "Chain Lightning — Hits multiple units, decreasing damage per target",
      "Cave In — Earth damage, chance to stun",
      "Meteor Strike — Massive fire damage to all enemies",
      "Ice Bolt — Single-target freeze and damage",
    ],
    tier: "A",
  },
  {
    name: "Arcane Magic",
    icon: "✨",
    color: "#8b5cf6",
    specialty: "Pure magic energy and mana manipulation",
    description:
      "Arcane Magic deals with the fundamental forces of magic itself — raw energy, mana manipulation, and reality warping. Arcane spells often ignore elemental resistances, making them reliable against all enemies. They also include powerful utility effects like mana drain, mirror images, and fate manipulation. Necropolis value Arcane Magic for its resistance-bypassing damage. Dungeon Warlocks excel at Arcane due to their innate magic penetration.",
    factionSynergy:
      "Best with Necropolis and Dungeon. Grove and Temple can also utilize Arcane effectively.",
    keySpells: [
      "Mana Drain — Steals mana from enemy hero",
      "Mirror Copy — Creates a duplicate of target unit",
      "Impending Fate — Delayed high damage to all enemies",
      "Energy Explosion — Raw arcane AoE damage",
      "Weakening Ray — Reduces enemy attack and defense",
      "Disenchant — Removes all buffs from target unit",
    ],
    tier: "A",
  },
  {
    name: "Daylight Magic",
    icon: "☀️",
    color: "#f59e0b",
    specialty: "Holy light, blessings, and anti-undead",
    description:
      "Daylight Magic embodies the power of the sun and divine radiance. It excels at healing, cleansing debuffs, buffing allies, and dealing massive damage to undead and shadow creatures. Temple is the undisputed master of Daylight Magic, with Clerics like Lia the Untethered One receiving direct bonuses. Every Temple hero benefits from Daylight Magic investment. It's also the hard counter to Necropolis, as Light spells deal bonus damage to undead units.",
    factionSynergy:
      "Best with Temple — it is their signature magic school. Essential when facing Necropolis opponents.",
    keySpells: [
      "Inner Light — Heals and buffs target unit",
      "Heavenly Blades — Holy bolts strike multiple enemies",
      "Healing Water — Heals target unit over time",
      "Blessing — Increases unit attack and defense",
      "Light of Judgement — Massive holy damage to undead",
      "Sanctuary — Protected zone where units cannot be attacked",
    ],
    tier: "S",
  },
  {
    name: "Nightshade Magic",
    icon: "🌑",
    color: "#a855f7",
    specialty: "Shadow, curses, and life-drain",
    description:
      "Nightshade Magic draws power from darkness and shadow. It specializes in debilitating debuffs, life-drain effects, and psychological warfare. Necropolis and Dungeon are the primary Nightshade users. Curses from this school stack multiplicatively with Necropolis debuffs, creating devastating combo potential. Dungeon Warlocks use Nightshade to set up their dual-attack units for maximum damage.",
    factionSynergy:
      "Best with Necropolis and Dungeon. Temple can learn Nightshade but has less synergy with it.",
    keySpells: [
      "Vulnerability — Reduces enemy defense significantly",
      "Despair — Reduces enemy morale and attack",
      "Umbral Grip — Shadow damage with life-drain",
      "Berserk — Forces enemy unit to attack nearest ally",
      "Shade Cloak — Stealth buff, unit cannot be targeted",
      "Soul Rend — Heavy shadow damage, heals caster",
    ],
    tier: "A",
  },
  {
    name: "Battle Magic",
    icon: "⚔️",
    color: "#22c55e",
    specialty: "Combat augmentation and tactical spells",
    description:
      "Battle Magic bridges the gap between physical combat and spellcasting. It focuses on spells that directly affect the battlefield — terrain manipulation, unit repositioning, and combat buffs that complement martial heroes. Battle Magic is favored by Might heroes who want spellcasting utility without heavy Magic skill investment. Temple Knights and Grove Wardens are the best Battle Magic users.",
    factionSynergy:
      "Best with Temple (Might builds) and Grove (Might builds). Useful for any Might hero wanting spell utility.",
    keySpells: [
      "Guillotine — Execute low-HP target unit",
      "Focus Strike — Next attack deals bonus damage",
      "Battle Cry — Increases attack of all allied units",
      "Fortify — Increases defense of target unit",
      "Ambush — Teleport unit to flank enemy position",
      "Warcry — AoE damage based on hero attack stat",
    ],
    tier: "B",
  },
  {
    name: "Thaumaturgy",
    icon: "🔮",
    color: "#f97316",
    specialty: "Buff enhancement and utility magic",
    description:
      "Thaumaturgy is the school of magical enhancement and transformation. It doesn't deal direct damage but amplifies the effectiveness of all other spells and abilities. Thaumaturgy spells improve buff durations, reduce enemy resistances, and create powerful utility effects. Temple gets the most value from Thaumaturgy because it synergizes with their buff-stacking playstyle. Grove and Schism also benefit from Thaumaturgy's utility.",
    factionSynergy:
      "Best with Temple. Valuable for any faction that relies on buffs and support magic.",
    keySpells: [
      "Empower — Next spell deals double damage",
      "Extend Magic — Doubles buff duration on target",
      "Rewind Life — Restores unit to previous turn's HP",
      "Magic Mirror — Reflects enemy spells back at caster",
      "Energize — Grants extra action to target unit",
      "Spell Shield — Blocks next enemy spell on target",
    ],
    tier: "B",
  },
];

export default function SpellsPage() {
  return (
    <div>
      <section className="hero-section">
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "var(--color-accent)",
          }}
        >
          Spells & Magic Guide
        </h1>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1.15rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Harness the arcane arts. Master all six magic schools in Olden Era
          and learn which factions synergize best with each school's unique
          spell arsenal.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {/* FAQ */}
        <section className="faq-snippets">
          <h2 style={{ marginBottom: "1rem" }}>Quick FAQ</h2>
          <details>
            <summary>How does magic work in Olden Era?</summary>
            <p>
              Heroes cast spells using mana during combat. Each turn generates
              Focus Points, which can be spent on hero abilities or converted
              into additional mana. Spells are unlocked by learning the
              corresponding magic school skill (e.g., Primal Magic, Arcane
              Magic) and reaching the required Wisdom level.
            </p>
          </details>
          <details>
            <summary>Which magic school is the strongest?</summary>
            <p>
              Daylight Magic is often considered the strongest due to its
              healing, buffs, and anti-undead capabilities. Primal Magic deals
              the highest raw damage. The &quot;best&quot; school depends on
              your faction — Temple should prioritize Daylight and
              Thaumaturgy, while Grove excels with Primal Magic.
            </p>
          </details>
          <details>
            <summary>Can Might heroes use magic?</summary>
            <p>
              Yes, but with limitations. Might heroes have lower Spell Power and
              smaller mana pools. They can still learn spells and benefit from
              Battle Magic or utility spells. A Might hero with Battle Magic
              investment can be surprisingly effective at hybrid play.
            </p>
          </details>
        </section>

        {/* Magic System Overview */}
        <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          How the Magic System Works
        </h2>
        <div className="card" style={{ marginBottom: "2rem" }}>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            Magic in Olden Era is governed by three primary stats:{" "}
            <strong>Spell Power</strong> (damage/healing magnitude),{" "}
            <strong>Knowledge</strong> (maximum mana pool), and{" "}
            <strong>Wisdom</strong> (maximum spell level accessible).
            Additionally, each magic school skill provides scaling bonuses to
            spells of that school — 10% at Basic, 20% at Advanced, and 30% at
            Expert.
          </p>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            Spells are categorized into six distinct magic schools. Heroes can
            learn spells from any school as long as they have the corresponding
            magic skill and sufficient Wisdom. Most heroes specialize in one or
            two schools, as spreading skill points too thin weakens your overall
            casting power.
          </p>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
            Magic heroes (Clerics, Necromancers, Druids, Hive Minds, Rite
            Keepers, Warlocks) naturally excel at spellcasting with higher base
            Spell Power and Knowledge. Might heroes can cast spells but should
            focus on Battle Magic or buff/debuff spells that don't rely heavily
            on Spell Power scaling.
          </p>
        </div>

        {/* Magic School Summary Cards */}
        <div className="grid-cards" style={{ marginBottom: "2.5rem" }}>
          {magicSchools.map((school) => (
            <div
              key={school.name}
              className="card"
              style={{ borderLeft: `4px solid ${school.color}` }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{school.icon}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
                    {school.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {school.specialty}
                  </span>
                </div>
              </div>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                {school.factionSynergy}
              </p>
            </div>
          ))}
        </div>

        {/* Spell Tier List */}
        <h2 style={{ marginBottom: "1rem" }}>Magic School Tier List</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table>
            <thead>
              <tr>
                <th>Tier</th>
                <th>School</th>
                <th>Best Factions</th>
                <th>Role</th>
                <th>Why This Tier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tier-s">S-Tier</span>
                </td>
                <td>
                  <strong>☀️ Daylight Magic</strong>
                </td>
                <td>Temple</td>
                <td>Healing, Buffs, Anti-Undead</td>
                <td style={{ color: "var(--color-text-muted)" }}>
                  Healing is always valuable, and anti-undead damage is the
                  hardest counter in the game. Temple buffs stack with Daylight
                  spells for exponential power growth.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tier-a">A-Tier</span>
                </td>
                <td>
                  <strong>🔥 Primal Magic</strong>
                </td>
                <td>Grove, Temple, Dungeon</td>
                <td>Direct Damage, Control</td>
                <td style={{ color: "var(--color-text-muted)" }}>
                  Highest raw damage output. Chain Lightning alone can win
                  battles. Lacks utility compared to Daylight but makes up for
                  it with sheer destructive power.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tier-a">A-Tier</span>
                </td>
                <td>
                  <strong>✨ Arcane Magic</strong>
                </td>
                <td>Necropolis, Dungeon</td>
                <td>Mana Control, Pure Damage</td>
                <td style={{ color: "var(--color-text-muted)" }}>
                  Bypasses elemental resistances, making it consistently
                  reliable. Mana Drain alone can shut down enemy casters.
                  Excellent utility with Mirror Copy and Disenchant.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tier-a">A-Tier</span>
                </td>
                <td>
                  <strong>🌑 Nightshade Magic</strong>
                </td>
                <td>Necropolis, Dungeon</td>
                <td>Debuffs, Life-Drain</td>
                <td style={{ color: "var(--color-text-muted)" }}>
                  Devastating when combined with Necropolis curses.
                  Vulnerability + Despair can reduce enemy stats by 40%+.
                  Life-drain provides excellent sustain for caster survival.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tier-b">B-Tier</span>
                </td>
                <td>
                  <strong>⚔️ Battle Magic</strong>
                </td>
                <td>Temple (Might), Grove (Might)</td>
                <td>Combat Utility, Control</td>
                <td style={{ color: "var(--color-text-muted)" }}>
                  Excellent for Might heroes who want spell utility. Guillotine
                  can execute key targets. Lacks the raw power of dedicated
                  magic schools but fills an important hybrid niche.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tier-b">B-Tier</span>
                </td>
                <td>
                  <strong>🔮 Thaumaturgy</strong>
                </td>
                <td>Temple, Grove, Schism</td>
                <td>Buff Enhancement, Utility</td>
                <td style={{ color: "var(--color-text-muted)" }}>
                  Multiplies the power of other magic schools. Empower is
                  devastating when combined with Primal spells. Ranks lower
                  because it requires another magic school to shine.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* In-depth School Analysis */}
        <h2 style={{ marginBottom: "1.5rem" }}>In-Depth School Analysis</h2>
        {magicSchools.map((school) => (
          <div
            key={school.name}
            className="card"
            style={{ marginBottom: "1.5rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "2rem" }}>{school.icon}</span>
              <div>
                <h3 style={{ margin: 0 }}>{school.name}</h3>
                <span
                  style={{
                    color: school.color,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {school.specialty}
                </span>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <span
                  style={{
                    background: school.color,
                    color: "#fff",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "0.25rem",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                  }}
                >
                  {school.tier}-Tier
                </span>
              </div>
            </div>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              {school.description}
            </p>
            <div
              style={{
                background: "var(--color-bg-elevated)",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
              }}
            >
              <strong>Notable Spells:</strong>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                {school.keySpells.map((spell) => (
                  <span
                    key={spell}
                    style={{
                      background: "var(--color-bg-card)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.85rem",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {spell}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Faction Magic Recommendations */}
        <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
          Faction Magic Recommendations
        </h2>
        <div className="card">
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            Each faction has natural affinity with specific magic schools. Here
            is the optimal magic build for each faction.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Faction</th>
                  <th>Primary School</th>
                  <th>Secondary School</th>
                  <th>Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Temple</strong></td>
                  <td>Daylight Magic</td>
                  <td>Thaumaturgy</td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    Stack Daylight buffs with Righteousness for exponential
                    growth. Thaumaturgy doubles buff duration.
                  </td>
                </tr>
                <tr>
                  <td><strong>Necropolis</strong></td>
                  <td>Nightshade Magic</td>
                  <td>Arcane Magic</td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    Stack debuffs with Necromancy curses. Arcane bypasses
                    resistances against Light-immune enemies.
                  </td>
                </tr>
                <tr>
                  <td><strong>Grove</strong></td>
                  <td>Primal Magic</td>
                  <td>Arcane Magic</td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    Maximum elemental damage with Primal. Arcane provides
                    utility and mana sustain for longer fights.
                  </td>
                </tr>
                <tr>
                  <td><strong>Hive</strong></td>
                  <td>Battle Magic</td>
                  <td>Primal Magic</td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    Hive has the weakest magic heroes. Focus Battle Magic for
                    combat utility, supplement with Primal damage.
                  </td>
                </tr>
                <tr>
                  <td><strong>Schism</strong></td>
                  <td>Arcane Magic</td>
                  <td>Nightshade Magic</td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    Arcane for mana denial, Nightshade for debuffs. Complement
                    the summon-based playstyle with control magic.
                  </td>
                </tr>
                <tr>
                  <td><strong>Dungeon</strong></td>
                  <td>Nightshade Magic</td>
                  <td>Arcane Magic</td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    Nightshade debuffs set up dual-attack units. Arcane
                    penetration stacks with innate magic penetration.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Magic Mechanics Deep Dive */}
        <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
          Advanced Magic Mechanics
        </h2>
        <div className="card">
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            Understanding these advanced mechanics will elevate your
            spellcasting game.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              {
                title: "Spell Resistance",
                content:
                  "Each unit has hidden magic resistance values for different damage types. Undead take bonus damage from Light/Holy but are immune to mind-affecting spells. Dungeon dragons have high universal resistance. Match your spell school to enemy weaknesses.",
              },
              {
                title: "Focus Points Economy",
                content:
                  "Focus Points are the resource that powers hero abilities and can be converted to mana. Magic heroes generate more FP per turn. Deciding whether to spend FP on abilities or save for a big spell is a critical combat decision.",
              },
              {
                title: "Buff Stacking Rules",
                content:
                  "Buffs from the same source don't stack, but buffs from different schools do. Temple can stack Daylight buffs + Thaumaturgy buffs + Righteousness faction buffs on the same unit for massive stat increases.",
              },
              {
                title: "Damage Formula",
                content:
                  "Spell damage = Base Damage × (1 + Spell Power × 0.05) × (1 + School Bonus). Against resistant enemies, subtract the resistance percentage. A 30% school bonus at Expert level makes a significant difference.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "0.75rem",
                  background: "var(--color-bg-elevated)",
                  borderRadius: "0.5rem",
                }}
              >
                <strong style={{ color: "var(--color-accent)" }}>
                  {item.title}
                </strong>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    marginTop: "0.25rem",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
