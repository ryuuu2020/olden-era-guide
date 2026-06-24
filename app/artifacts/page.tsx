import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artifacts Guide — Rarity Tiers, Slots & Set Bonuses",
  description:
    "Complete Olden Era artifacts guide. All artifact rarity tiers, equipment slots, set bonuses, and notable artifacts with stats. Community-reported data for the new game.",
};

interface ArtifactEntry {
  name: string;
  slot: string;
  rarity: string;
  effect: string;
  set?: string;
}

const notableArtifacts: ArtifactEntry[] = [
  {
    name: "Crown of the Sun King",
    slot: "Head",
    rarity: "Relic",
    effect: "+6 Spell Power, all Daylight spells cost 25% less mana",
    set: "Regalia of Radiance",
  },
  {
    name: "Death's Embrace",
    slot: "Cloak",
    rarity: "Relic",
    effect: "Necromancy raises 50% more skeletons after battle",
    set: "Shadowspire Panoply",
  },
  {
    name: "Dragonfang Blade",
    slot: "Weapon",
    rarity: "Major",
    effect: "+5 Attack, +3 Defense, bonus damage to tier 6-7 units",
  },
  {
    name: "Shield of the Warden",
    slot: "Shield",
    rarity: "Major",
    effect: "+7 Defense, ranged damage reduction 30%",
    set: "Guardian's Bulwark",
  },
  {
    name: "Staff of the Elements",
    slot: "Weapon",
    rarity: "Major",
    effect: "+4 Spell Power, Primal Magic spells deal 20% bonus damage",
  },
  {
    name: "Boots of the Pathfinder",
    slot: "Feet",
    rarity: "Minor",
    effect: "+2 movement range, no terrain penalty",
  },
  {
    name: "Ring of Mana Regeneration",
    slot: "Ring",
    rarity: "Major",
    effect: "Regain 3 mana per turn in combat",
  },
  {
    name: "Amulet of the Hive",
    slot: "Neck",
    rarity: "Major",
    effect: "Hivemind bonus increased by 15%",
    set: "Swarm Queen's Regalia",
  },
  {
    name: "Cloak of Shadows",
    slot: "Cloak",
    rarity: "Minor",
    effect: "Scouting range +3, reduced enemy vision of hero",
  },
  {
    name: "Tome of Forbidden Knowledge",
    slot: "Misc",
    rarity: "Relic",
    effect: "Allows learning one additional magic school, +3 Knowledge",
  },
  {
    name: "Ring of the Dragon",
    slot: "Ring",
    rarity: "Relic",
    effect: "+4 Attack, +4 Defense, immunity to fire spells",
  },
  {
    name: "Gauntlets of Might",
    slot: "Hands",
    rarity: "Minor",
    effect: "+3 Attack, hero deals 25% more damage in direct combat",
  },
  {
    name: "Pendant of Life",
    slot: "Neck",
    rarity: "Minor",
    effect: "All units gain +10% HP",
  },
  {
    name: "Orb of the Abyss",
    slot: "Misc",
    rarity: "Relic",
    effect: "Summoned creatures start with +50% stats, +4 Spell Power",
    set: "Deep Rites",
  },
];

const rarityTiers = [
  {
    tier: "Relic",
    color: "#f59e0b",
    borderColor: "#f59e0b",
    desc: "The rarest and most powerful artifacts. Relics provide game-changing effects that can single-handedly swing a match. Usually found as map objectives or from defeating powerful neutral stacks.",
    spawnRate: "~2% of all artifacts",
  },
  {
    tier: "Major",
    color: "#8b5cf6",
    borderColor: "#8b5cf6",
    desc: "Strong artifacts with significant stat bonuses or unique effects. Major artifacts are the backbone of a good hero build. Found in treasure zones and dragon utopias.",
    spawnRate: "~15% of all artifacts",
  },
  {
    tier: "Minor",
    color: "#22c55e",
    borderColor: "#22c55e",
    desc: "Common artifacts with modest bonuses. Don't underestimate them — stacking multiple Minor artifacts early gives a substantial power spike. Found in most treasure chests and creature dwellings.",
    spawnRate: "~50% of all artifacts",
  },
  {
    tier: "Treasure",
    color: "#3b82f6",
    borderColor: "#3b82f6",
    desc: "Basic artifacts with small stat bonuses. Useful in the early game but quickly outclassed. Can be sold for gold or combined to create stronger artifacts.",
    spawnRate: "~33% of all artifacts",
  },
];

const equipmentSlots = [
  { slot: "Head", icon: "👑", desc: "Crowns, helms — typically boost Knowledge or Spell Power" },
  { slot: "Weapon", icon: "⚔️", desc: "Swords, staves, wands — boost Attack or Spell Power" },
  { slot: "Shield", icon: "🛡️", desc: "Shields, bucklers — boost Defense" },
  { slot: "Cloak", icon: "🧥", desc: "Cloaks, capes — utility and specialty effects" },
  { slot: "Feet", icon: "👢", desc: "Boots, sandals — movement and terrain bonuses" },
  { slot: "Hands", icon: "🧤", desc: "Gauntlets, gloves — combat and attack bonuses" },
  { slot: "Neck", icon: "📿", desc: "Amulets, pendants — morale, luck, and HP bonuses" },
  { slot: "Ring", icon: "💍", desc: "Rings — two slots available, versatile bonuses" },
  { slot: "Misc", icon: "📜", desc: "Tomes, orbs, scrolls — unique spell and ability effects" },
];

const setBonuses = [
  {
    name: "Regalia of Radiance",
    pieces: 4,
    factions: ["Temple"],
    effect2: "Daylight spells cost 20% less mana",
    effect4: "All units gain +4 Attack and +4 Defense during daytime battles",
  },
  {
    name: "Shadowspire Panoply",
    pieces: 3,
    factions: ["Necropolis"],
    effect2: "Skeletons gain +2 Attack",
    effect4: "(4-piece) Necromancy raises Vampires alongside Skeletons",
  },
  {
    name: "Guardian's Bulwark",
    pieces: 3,
    factions: [],
    effect2: "Defending units take 15% less damage",
    effect4: "(3-piece) Counter-attack retaliation damage increased by 50%",
  },
  {
    name: "Swarm Queen's Regalia",
    pieces: 3,
    factions: ["Hive"],
    effect2: "Summoned insect units gain +3 Attack",
    effect4: "(3-piece) Hivemind applies to all unit types",
  },
];

export default function ArtifactsPage() {
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
          Artifacts Guide
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
          Equip your hero with powerful artifacts. Learn about rarity tiers,
          equipment slots, set bonuses, and the most sought-after items in Olden
          Era.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {/* FAQ */}
        <section className="faq-snippets">
          <h2 style={{ marginBottom: "1rem" }}>Quick FAQ</h2>
          <details>
            <summary>How do I find artifacts in Olden Era?</summary>
            <p>
              Artifacts are found through map exploration — treasure chests,
              creature dwellings, dragon utopias, quest rewards, and by
              defeating neutral creature stacks. Some artifacts are crafted by
              combining lesser items at the Artifact Merchant, which appears
              randomly on adventure maps.
            </p>
          </details>
          <details>
            <summary>Can I trade artifacts between heroes?</summary>
            <p>
              Yes. When two friendly heroes meet on the adventure map, you can
              transfer artifacts between them. This is crucial for delivering
              key artifacts to your main hero. Artifacts are also captured if
              you defeat an enemy hero who carries them.
            </p>
          </details>
          <details>
            <summary>What happens to artifacts when a hero dies?</summary>
            <p>
              If your hero is defeated in combat and retreats, they keep all
              artifacts. If a hero is completely defeated (no retreat), all
              carried artifacts are transferred to the victorious hero. Some
              artifacts are cursed and cannot be unequipped once worn.
            </p>
          </details>
        </section>

        {/* System Overview */}
        <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          How the Artifact System Works
        </h2>
        <div
          className="card"
          style={{ marginBottom: "2rem", lineHeight: 1.7 }}
        >
          <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
            Heroes in Olden Era can equip artifacts across{" "}
            <strong>nine equipment slots</strong>: Head, Weapon, Shield, Cloak,
            Feet, Hands, Neck, and two Ring slots, plus a Miscellaneous slot for
            special items. Each artifact belongs to one of four rarity tiers
            that determine its power level and spawn chance.
          </p>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
            Artifacts provide permanent stat bonuses and unique effects that
            persist as long as they are equipped. Some artifacts belong to{" "}
            <strong>sets</strong> — equipping multiple pieces from the same set
            unlocks increasingly powerful set bonuses. Set bonuses can
            dramatically alter your hero's capabilities and are often
            build-defining.
          </p>
          <p style={{ color: "var(--color-text-muted)" }}>
            Managing your artifact inventory is a key strategic element. Carrying
            too many artifacts reduces movement points, so prioritize what you
            equip. Visit Artifact Merchants or friendly towns to store excess
            items. Always transfer key artifacts to your main hero via hero
            meetings.
          </p>
        </div>

        {/* Rarity Tiers */}
        <h2 style={{ marginBottom: "1.5rem" }}>Artifact Rarity Tiers</h2>
        <div className="grid-cards" style={{ marginBottom: "2.5rem" }}>
          {rarityTiers.map((tier) => (
            <div
              key={tier.tier}
              className="card"
              style={{ borderLeft: `4px solid ${tier.borderColor}` }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{tier.tier}</h3>
                <span
                  style={{
                    background: tier.color,
                    color: tier.tier === "Minor" || tier.tier === "Treasure" ? "#000" : "#fff",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {tier.spawnRate}
                </span>
              </div>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Equipment Slots */}
        <h2 style={{ marginBottom: "1rem" }}>Equipment Slots</h2>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table>
            <thead>
              <tr>
                <th>Slot</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {equipmentSlots.map((slot) => (
                <tr key={slot.slot}>
                  <td>
                    <strong>
                      {slot.icon} {slot.slot}
                    </strong>
                  </td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    {slot.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Set Bonuses */}
        <h2 style={{ marginBottom: "1rem" }}>Artifact Set Bonuses</h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
          }}
        >
          Equipping multiple artifacts from the same set unlocks escalating
          bonuses. The first bonus typically unlocks at 2 pieces, with the full
          set bonus at 3 or 4 pieces. Set bonuses are powerful enough to define
          a hero's entire build.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table>
            <thead>
              <tr>
                <th>Set Name</th>
                <th>Pieces</th>
                <th>Faction</th>
                <th>2-Piece Bonus</th>
                <th>Full Set Bonus</th>
              </tr>
            </thead>
            <tbody>
              {setBonuses.map((set) => (
                <tr key={set.name}>
                  <td>
                    <strong style={{ color: "var(--color-accent)" }}>
                      {set.name}
                    </strong>
                  </td>
                  <td>{set.pieces}</td>
                  <td>
                    {set.factions.length > 0
                      ? set.factions.join(", ")
                      : "All"}
                  </td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    {set.effect2}
                  </td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    {set.effect4}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notable Artifacts */}
        <h2 style={{ marginBottom: "1rem" }}>
          Notable Artifacts
          <span
            style={{
              fontSize: "0.7rem",
              color: "var(--color-text-muted)",
              marginLeft: "0.75rem",
              fontWeight: 400,
            }}
          >
            (Community Reported — Game in Early Access)
          </span>
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
          }}
        >
          The following artifacts have been reported by the Olden Era community
          during the Early Access launch. Stats and effects may change with
          future patches. This list will be updated as more artifacts are
          discovered.
        </p>
        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table>
            <thead>
              <tr>
                <th>Artifact</th>
                <th>Slot</th>
                <th>Rarity</th>
                <th>Effect</th>
                <th>Set</th>
              </tr>
            </thead>
            <tbody>
              {notableArtifacts.map((artifact) => (
                <tr key={artifact.name}>
                  <td>
                    <strong>{artifact.name}</strong>
                  </td>
                  <td>{artifact.slot}</td>
                  <td>
                    <span
                      style={{
                        background:
                          artifact.rarity === "Relic"
                            ? "#f59e0b"
                            : artifact.rarity === "Major"
                              ? "#8b5cf6"
                              : "#22c55e",
                        color:
                          artifact.rarity === "Major" || artifact.rarity === "Relic"
                            ? "#fff"
                            : "#000",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "0.25rem",
                        fontSize: "0.8rem",
                      }}
                    >
                      {artifact.rarity}
                    </span>
                  </td>
                  <td style={{ color: "var(--color-text-muted)" }}>
                    {artifact.effect}
                  </td>
                  <td>
                    {artifact.set ? (
                      <span
                        style={{
                          color: "var(--color-accent)",
                          fontSize: "0.85rem",
                        }}
                      >
                        {artifact.set}
                      </span>
                    ) : (
                      <span style={{ color: "var(--color-text-muted)" }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Artifact Strategy Tips */}
        <h2 style={{ marginBottom: "1rem" }}>Artifact Strategy Tips</h2>
        <div className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              {
                title: "Prioritize Your Main Hero",
                content:
                  "Your main hero should receive all the best artifacts. Secondary heroes need only enough to clear neutral stacks. Transfer artifacts via hero meetings to concentrate power on your primary hero.",
              },
              {
                title: "Plan Around Set Bonuses",
                content:
                  "Even a 2-piece set bonus can be stronger than mixing and matching higher-rarity items. If you find one piece of a powerful set, prioritize searching areas where more pieces might spawn.",
              },
              {
                title: "Watch for Cursed Artifacts",
                content:
                  "Some powerful artifacts come with a curse — they cannot be unequipped once worn, or they drain gold/resources each turn. Read artifact descriptions carefully before equipping.",
              },
              {
                title: "Sell Treasure-Tier Items",
                content:
                  "Treasure-tier artifacts provide minimal benefits in the late game. Sell them for gold at towns or Artifact Merchants. The gold is often more valuable than the negligible stat bonus.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                style={{
                  padding: "0.75rem",
                  background: "var(--color-bg-elevated)",
                  borderRadius: "0.5rem",
                }}
              >
                <strong>{tip.title}</strong>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    marginTop: "0.25rem",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
