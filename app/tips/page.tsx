import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Tips & Advanced Strategies — 900+ Words of Expert Advice",
  description:
    "Advanced Olden Era strategies. Map control, economy management, combat tricks, hero building, and faction counter tips. Level up your gameplay with expert advice.",
};

interface TipGroup {
  category: string;
  icon: string;
  color: string;
  desc: string;
  tips: { title: string; content: string }[];
}

const tipGroups: TipGroup[] = [
  {
    category: "Map Control",
    icon: "🗺️",
    color: "#22c55e",
    desc: "Controlling the adventure map is the first step to victory. Map control determines what resources you can access, which neutral stacks you can farm, and how quickly you can pressure your opponent.",
    tips: [
      {
        title: "Chain your hero movements",
        content:
          "Use a secondary hero to scout ahead, flag mines, and pick up scattered resources while your main hero clears neutral stacks. The main hero should never waste movement points on non-combat tasks. A well-chained hero pair can clear a map zone in half the time of a solo hero. In competitive play, chaining is mandatory — your opponent will out-pace you if you don't.",
      },
      {
        title: "Understand movement priority",
        content:
          "Logistics is the single most impactful adventure skill. At Expert level, it grants 30% more movement points. Stack Logistics with Boots of the Pathfinder and the Wayfarer specialty (Ister) for unprecedented map coverage. Always path through roads when possible — roads provide a significant movement discount.",
      },
      {
        title: "Control the center early",
        content:
          "The central area of any map typically contains the most valuable resources — artifact vaults, dragon utopias, and high-tier dwellings. Establish map control of the center by week 2. Denying central resources to your opponent is as important as claiming them for yourself. Send scouts to watch key chokepoints.",
      },
      {
        title: "Vision is power",
        content:
          "Invest in Scouting or vision-granting spells (Clear Fog, Groundsight). Knowing where enemy heroes are lets you avoid unfavorable engagements and set up ambushes. Place secondary heroes on hills or near enemy borders as living watchtowers. Information asymmetry wins games.",
      },
    ],
  },
  {
    category: "Economy Management",
    icon: "💰",
    color: "#f59e0b",
    desc: "Gold and resources fuel your war machine. Efficient economy management ensures you never run out of troops when it matters most.",
    tips: [
      {
        title: "Flag every mine, every week",
        content:
          "Mines provide critical resource income. Flag all mines in your starting zone before expanding. A single missed mine over 4 weeks can cost you thousands of gold worth of resources. Flag mines with secondary heroes so your main hero never deviates from their combat path.",
      },
      {
        title: "Rush your capitol building",
        content:
          "The Capitol provides bonus gold income that compounds over the course of a game. Build it by week 2 at the latest. Every turn without a Capitol is lost gold you can never recover. Some factions (Grove) may delay Capitol slightly for creature dwellings, but it should still be a top priority.",
      },
      {
        title: "Manage creature growth efficiently",
        content:
          "Visit all your creature dwellings every week to collect troops. Uncollected troops don't roll over — you lose them permanently. Use secondary heroes as troop ferries to collect from distant dwellings and deliver to your main army. Plan hero meetings at convenient map locations.",
      },
      {
        title: "Don't overspend on low-tier units",
        content:
          "It's tempting to buy every available unit, but gold is limited. In the mid-game, skip buying tier 1-2 units if you have a strong army already. Save gold for tier 5-7 power spikes. Each faction has key power tiers — know yours and invest accordingly.",
      },
      {
        title: "Exploit economy heroes",
        content:
          "Heroes with Economy, Recruitment, or resource-gathering specialties (Heretic Avis for gems, Zam for mercury) provide passive income that scales throughout the game. Deploy one economy hero early and let them passively generate value while your main hero fights.",
      },
    ],
  },
  {
    category: "Combat Tricks",
    icon: "⚔️",
    color: "#ef4444",
    desc: "Battlefield tactics separate good players from great ones. Mastering combat mechanics gives you an edge even when outnumbered.",
    tips: [
      {
        title: "Bait counter-attacks with cheap units",
        content:
          "Units can only counter-attack once per round unless they have special abilities. Send a stack of tier 1 units to bait the enemy's counter-attack, then commit your heavy hitters safely. This simple tactic reduces incoming damage by 30-50% in many fights. Against Necropolis, bait counter-attacks before sending in your expensive units.",
      },
      {
        title: "Position for initiative order",
        content:
          "Units act in order of their Initiative stat, not in alternating teams. If you act first with multiple high-initiative units, you can eliminate key enemy stacks before they get a turn. Hive is the best faction for initiative abuse. Place high-initiative units centrally to maximize their first-turn threat range.",
      },
      {
        title: "Exploit native terrain",
        content:
          "Every faction has a preferred terrain type that grants combat bonuses. Temple dominates on Grasslands, Grove controls Forest maps, Necropolis thrives in Wastelands. When possible, fight battles on your native terrain. Avoid fighting on enemy native terrain unless you have a decisive advantage.",
      },
      {
        title: "Focus fire on one stack at a time",
        content:
          "Spread damage across multiple enemy stacks is almost always inefficient. Pick the most dangerous enemy unit and focus all attacks on it until it's eliminated. A dead unit deals zero damage. Priority targets: enemy ranged units, spellcasters, and the strongest melee threat, in that order.",
      },
      {
        title: "Use spells before attacking",
        content:
          "Cast offensive spells at the beginning of your turn, before ordering unit attacks. Spells don't trigger counter-attacks and can soften up or debuff priority targets. A Vulnerability + Berserk combo on an enemy heavy hitter can neutralize it for an entire round while your units clean up.",
      },
    ],
  },
  {
    category: "Hero Building",
    icon: "🎯",
    color: "#8b5cf6",
    desc: "Your hero is your most important asset. Build them correctly and they will carry your faction to victory.",
    tips: [
      {
        title: "Pick heroes with strong specialties",
        content:
          "Not all heroes are created equal. S-tier heroes like Lord Edgar (Temple), Tarius (Necropolis), Halon (Grove), Vori Sage (Schism), and Malakar (Dungeon) have specialties that scale exceptionally well. Starting with a strong hero gives you immediate map advantage. Research your faction's hero pool before choosing.",
      },
      {
        title: "Commit to a build archetype",
        content:
          "Don't spread skill points trying to be a jack-of-all-trades. A Might hero should lean fully into Combat and Faction skills. A Magic hero should max one or two magic schools. Hybrid builds are tempting but usually underperform. The opportunity cost of a wasted skill slot is too high.",
      },
      {
        title: "Level efficiently",
        content:
          "Every combat grants experience, but some fights are more efficient than others. Prioritize battles against neutral stacks that you can defeat with minimal losses. Avoid fights that risk heavy casualties — losing a high-tier unit stack sets you back more than the experience gain is worth.",
      },
      {
        title: "Protect your main hero",
        content:
          "Your main hero is irreplaceable. Never send them into a fight you aren't confident about winning. Use secondary heroes to scout dangerous areas first. If your main hero dies, you lose all their artifacts, the army, and weeks of development — it's usually game-ending.",
      },
    ],
  },
  {
    category: "Faction Counters",
    icon: "🛡️",
    color: "#3b82f6",
    desc: "Understanding faction matchups is essential. Every faction has natural predators and prey. Exploit the rock-paper-scissors dynamic to your advantage.",
    tips: [
      {
        title: "Temple counters Necropolis",
        content:
          "Daylight Magic and Righteousness buffs make Temple the hardest counter to Necropolis. Light/Holy spells deal bonus damage to undead. Focus on Daylight Magic investment and rush Clerics or Righteousness Knights. Engage Necropolis armies before they build large skeleton stacks — strike early and often.",
      },
      {
        title: "Grove counters Hive",
        content:
          "Grove's powerful AoE spells (Chain Lightning, Fireball, Frost Ring) decimate Hive's tightly packed insect armies. Hive units have low individual HP, making them extremely vulnerable to area damage. Primal Magic investment is the key to this matchup.",
      },
      {
        title: "Schism counters Magic factions",
        content:
          "Schism's spell denial mechanics (Abyssal Rite, Silence) hard counter Grove, Dungeon, and magic-heavy Temple builds. If you're playing against Schism, diversify into Might strategies or invest in Resistance to mitigate their denial effects.",
      },
      {
        title: "Hive counters Schism (early game)",
        content:
          "Hive's blistering early-game speed can overwhelm Schism before their summons come online. Rush the Schism player before they reach tier 5-6 units. If the game goes past week 4, Schism will out-scale you — end the game early.",
      },
      {
        title: "Dungeon counters Temple (spell penetration)",
        content:
          "Dungeon's innate magic penetration and dual-attack versatility bypass Temple's buff-centric defense. Nightshade debuffs reduce Temple unit stats before they can stack Righteousness buffs. Malakar's Dragon Cult specialty can solo Temple armies in the late game.",
      },
    ],
  },
];

export default function TipsPage() {
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
          Pro Tips & Advanced Strategies
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
          Expert advice to elevate your gameplay. These strategies come from
          veteran players and competitive matches. Master them to dominate the
          battlefield.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {/* FAQ */}
        <section className="faq-snippets">
          <h2 style={{ marginBottom: "1rem" }}>Quick FAQ</h2>
          <details>
            <summary>What's the single most important tip for beginners?</summary>
            <p>
              Chain hero movements. Use a secondary hero as a resource collector
              and scout while your main hero fights. This single practice
              doubles your map efficiency and is the foundation of all advanced
              play. Most new players lose because their main hero wastes turns
              picking up resources.
            </p>
          </details>
          <details>
            <summary>How do I beat Necropolis as a non-Temple faction?</summary>
            <p>
              Pressure them early. Necropolis is at its weakest before week 3.
              Don't let them build skeleton stacks. Use fast factions (Hive) or
              magic penetration (Dungeon) to strike before Necromancy snowballs.
              Target Necromancy heroes specifically — killing Tarius or Mag
              early cripples their scaling.
            </p>
          </details>
          <details>
            <summary>Is it better to have one powerful hero or multiple?</summary>
            <p>
              One main hero with supporting secondary heroes is the optimal
              strategy. Your main hero should receive all the best artifacts,
              the largest army, and the best skill investment. Secondary heroes
              handle logistics, scouting, and minor skirmishes. A single level
              15 hero with artifacts will beat two level 10 heroes every time.
            </p>
          </details>
        </section>

        {/* Tips by Category */}
        {tipGroups.map((group) => (
          <div key={group.category} style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
                marginTop: group.category === "Map Control" ? "2rem" : 0,
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>{group.icon}</span>
              <div>
                <h2 style={{ margin: 0 }}>{group.category}</h2>
              </div>
              <div
                style={{
                  height: "3px",
                  flex: 1,
                  background: group.color,
                  borderRadius: "2px",
                  opacity: 0.5,
                }}
              />
            </div>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {group.desc}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {group.tips.map((tip) => (
                <div
                  key={tip.title}
                  className="card"
                  style={{ borderLeft: `4px solid ${group.color}` }}
                >
                  <h3
                    style={{
                      margin: "0 0 0.5rem 0",
                      fontSize: "1.05rem",
                      color: group.color,
                    }}
                  >
                    {tip.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                    }}
                  >
                    {tip.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Reference */}
        <h2 style={{ marginBottom: "1rem" }}>Quick Reference: Do's & Don'ts</h2>
        <div className="grid-cards" style={{ marginBottom: "2.5rem" }}>
          <div
            className="card"
            style={{ borderLeft: "4px solid var(--color-success)" }}
          >
            <h3 style={{ color: "var(--color-success)", marginTop: 0 }}>
              Do This
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                "Chain hero movements for efficiency",
                "Build Capitol by week 2 at the latest",
                "Focus fire on one enemy stack at a time",
                "Invest in Logistics on every hero",
                "Transfer artifacts to your main hero",
                "Fight on your faction's native terrain",
                "Scout ahead with secondary heroes",
                "Maximize your faction skill investment",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="card"
            style={{ borderLeft: "4px solid var(--color-danger)" }}
          >
            <h3 style={{ color: "var(--color-danger)", marginTop: 0 }}>
              Don't Do This
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {[
                "Waste main hero movement on flagging mines",
                "Spread damage across multiple enemy stacks",
                "Ignore weekly creature dwelling pickups",
                "Equip cursed artifacts without reading effects",
                "Build random skill combinations — plan ahead",
                "Engage Necropolis in prolonged late-game wars",
                "Send your main hero into unscouted territory",
                "Buy every available low-tier unit in late game",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
