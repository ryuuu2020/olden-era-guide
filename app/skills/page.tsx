import { skills } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills Guide — Combat, Magic, Adventure & Faction Skills",
  description:
    "Complete Olden Era skills guide. All Combat, Magic, Adventure, and Faction skills explained. Skill priority recommendations for Might vs Magic heroes.",
};

const categories = [
  {
    name: "Combat",
    color: "#ef4444",
    desc: "Skills that enhance physical combat, unit damage, defense, and battlefield positioning. Essential for Might heroes who lead from the front.",
    priority: "Might heroes should max Offense and Defense first, then pick Tactics or Combat based on playstyle.",
  },
  {
    name: "Magic",
    color: "#8b5cf6",
    desc: "Skills that empower spellcasting, increase mana, unlock higher-level spells, and boost magic damage. The core of any Magic hero's build.",
    priority: "Magic heroes must take Wisdom to unlock all spell levels, then Sorcery for damage. Choose one or two magic schools to specialize in.",
  },
  {
    name: "Adventure",
    color: "#22c55e",
    desc: "Skills that improve hero mobility, resource income, scouting, and army logistics. Powerful utility that benefits any hero type.",
    priority: "Logistics is the best adventure skill for all heroes. Economy and Recruitment are excellent for snowballing. Luck is a strong late-game investment.",
  },
  {
    name: "Faction",
    color: "#f59e0b",
    desc: "Unique faction-specific skills that define each faction's identity. Every hero starts with their faction skill and should invest in it.",
    priority: "Always invest in your faction skill — it defines your faction's power curve. Upgrading it unlocks stronger faction abilities and units.",
  },
];

export default function SkillsPage() {
  const groupedSkills = categories.map((cat) => ({
    ...cat,
    skills: skills.filter((s) => s.category === cat.name),
  }));

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
          Skills Guide
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
          Master the skill system in Heroes of Might and Magic: Olden Era.
          Learn which skills to prioritize, how to build Might vs Magic heroes,
          and every skill's effects.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {/* FAQ */}
        <section className="faq-snippets">
          <h2 style={{ marginBottom: "1rem" }}>Quick FAQ</h2>
          <details>
            <summary>How do I unlock higher skill levels?</summary>
            <p>
              Skills have three levels (Basic, Advanced, Expert). Each hero can
              learn up to 8 skill slots. Leveling up grants skill points that
              can be used to unlock new skills or upgrade existing ones. Some
              high-level spells also require Advanced or Expert Wisdom to learn.
            </p>
          </details>
          <details>
            <summary>Which skill is the most important?</summary>
            <p>
              Logistics is widely considered the best skill in the game. Extra
              movement points let you collect more resources, fight more
              battles, and control the map. For combat power, Offense and
              Sorcery are the top picks for Might and Magic heroes respectively.
            </p>
          </details>
          <details>
            <summary>Can I respec my hero's skills?</summary>
            <p>
              Olden Era does not have a respec mechanic at launch. Your skill
              choices are permanent, so plan your build carefully. Some map
              objects like the Forgotten Temple may offer skill rerolls, but
              these are rare and not guaranteed.
            </p>
          </details>
        </section>

        {/* Skill System Overview */}
        <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          How Skills Work
        </h2>
        <div
          className="card"
          style={{ marginBottom: "2rem", lineHeight: 1.7 }}
        >
          <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
            Every hero in Olden Era can learn up to <strong>8 skills</strong>,
            each with three levels of mastery. Skills are divided into four
            categories: <strong>Combat</strong> for martial prowess,{" "}
            <strong>Magic</strong> for spellcasting power,{" "}
            <strong>Adventure</strong> for map utility, and{" "}
            <strong>Faction</strong> for unique faction mechanics.
          </p>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
            When a hero levels up, you choose between two randomly offered
            skills. Each skill level provides escalating benefits — Basic offers
            a small bonus, Advanced doubles it, and Expert provides the maximum
            effect. Strategic skill selection is what separates good heroes from
            great ones.
          </p>
          <p style={{ color: "var(--color-text-muted)" }}>
            Might heroes typically lean into Combat skills with supplemental
            Adventure and Faction investment. Magic heroes prioritize Magic
            skills, picking one or two schools to specialize in. Every hero
            should invest in their Faction skill, as it unlocks core faction
            mechanics that define their power curve.
          </p>
        </div>

        {/* Skill Priority for Might vs Magic */}
        <h2 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
          Skill Priority: Might vs Magic
        </h2>
        <div className="grid-cards" style={{ marginBottom: "2.5rem" }}>
          <div
            className="card"
            style={{ borderLeft: "4px solid #ef4444" }}
          >
            <h3 style={{ marginTop: 0 }}>Might Hero Build</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Focus on raw combat power and army strength.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {[
                { prio: "S-Tier", skills: "Offense, Defense, Logistics", color: "#ef4444" },
                { prio: "A-Tier", skills: "Tactics, Combat, Faction Skill", color: "#f59e0b" },
                { prio: "B-Tier", skills: "Luck, Leadership, Economy", color: "#22c55e" },
                { prio: "Situational", skills: "Scouting, Recruitment, Battlecraft", color: "#3b82f6" },
              ].map((item) => (
                <div
                  key={item.prio}
                  style={{
                    padding: "0.5rem 0.75rem",
                    background: "var(--color-bg-elevated)",
                    borderRadius: "0.375rem",
                    borderLeft: `3px solid ${item.color}`,
                  }}
                >
                  <strong style={{ color: item.color }}>{item.prio}:</strong>{" "}
                  <span style={{ color: "var(--color-text-muted)" }}>
                    {item.skills}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="card"
            style={{ borderLeft: "4px solid #8b5cf6" }}
          >
            <h3 style={{ marginTop: 0 }}>Magic Hero Build</h3>
            <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>
              Focus on spell power and mana efficiency.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {[
                { prio: "S-Tier", skills: "Wisdom, Sorcery, Magic School", color: "#ef4444" },
                { prio: "A-Tier", skills: "Faction Skill, Logistics, Thaumaturgy", color: "#f59e0b" },
                { prio: "B-Tier", skills: "Insight, Economy, Defense", color: "#22c55e" },
                { prio: "Situational", skills: "Battlecraft, Luck, Scouting", color: "#3b82f6" },
              ].map((item) => (
                <div
                  key={item.prio}
                  style={{
                    padding: "0.5rem 0.75rem",
                    background: "var(--color-bg-elevated)",
                    borderRadius: "0.375rem",
                    borderLeft: `3px solid ${item.color}`,
                  }}
                >
                  <strong style={{ color: item.color }}>{item.prio}:</strong>{" "}
                  <span style={{ color: "var(--color-text-muted)" }}>
                    {item.skills}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Details */}
        {groupedSkills.map((category) => (
          <div key={category.name} style={{ marginBottom: "3rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "0.375rem",
                  background: category.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontWeight: 700, color: "white", fontSize: "0.85rem" }}>
                  {category.name[0]}
                </span>
              </div>
              <h2 style={{ margin: 0 }}>{category.name} Skills</h2>
            </div>

            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              {category.desc}
            </p>

            <div
              className="card"
              style={{
                marginBottom: "1rem",
                padding: "0.75rem 1rem",
                background: "rgba(245, 158, 11, 0.05)",
                borderColor: "var(--color-accent)",
              }}
            >
              <strong>Priority Tip: </strong>
              <span style={{ color: "var(--color-text-muted)" }}>
                {category.priority}
              </span>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Category</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {category.skills.map((skill) => (
                    <tr key={skill.name}>
                      <td>
                        <strong>{skill.name}</strong>
                      </td>
                      <td>
                        <span
                          style={{
                            background: category.color,
                            color: "#fff",
                            padding: "0.15rem 0.5rem",
                            borderRadius: "0.25rem",
                            fontSize: "0.8rem",
                          }}
                        >
                          {skill.category}
                        </span>
                      </td>
                      <td style={{ color: "var(--color-text-muted)" }}>
                        {skill.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Faction Skill Deep Dive */}
        <h2 style={{ marginBottom: "1rem" }}>
          Faction Skills — Build Your Identity
        </h2>
        <div className="card">
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            Faction skills are what make each faction unique. These are not
            optional — your faction skill determines your core gameplay loop.
            Every hero starts with their faction skill at Basic level. Investing
            points into it at levels 1, 4, and 8 is strongly recommended, as
            Expert faction skills unlock the full potential of your faction's
            mechanics.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Faction</th>
                  <th>Faction Skill</th>
                  <th>Effect</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    faction: "Temple",
                    skill: "Righteousness",
                    effect:
                      "Enhances buff effects on all units. At Expert, buffs gain additional secondary effects.",
                  },
                  {
                    faction: "Necropolis",
                    skill: "Necromancy",
                    effect:
                      "Raises fallen enemies as skeletons. At Expert, skeletons gain permanent stat bonuses.",
                  },
                  {
                    faction: "Grove",
                    skill: "Murmuring",
                    effect:
                      "Enhances nature magic and creature activated abilities. At Expert, spells gain additional elemental effects.",
                  },
                  {
                    faction: "Hive",
                    skill: "Summon Swarm",
                    effect:
                      "Summons insect units during battle. At Expert, summoned units gain Hivemind synergy bonuses.",
                  },
                  {
                    faction: "Schism",
                    skill: "Abyssal Rite",
                    effect:
                      "Powers summoning and spell denial. At Expert, can deny up to 2 enemy spells per turn.",
                  },
                  {
                    faction: "Dungeon",
                    skill: "Subterfuge",
                    effect:
                      "Enhances dual-attack mechanics and scouting. At Expert, units can switch attack types mid-combat.",
                  },
                ].map((row) => (
                  <tr key={row.faction}>
                    <td>
                      <strong>{row.faction}</strong>
                    </td>
                    <td>{row.skill}</td>
                    <td style={{ color: "var(--color-text-muted)" }}>
                      {row.effect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Skill Combination Synergies */}
        <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
          Skill Synergies & Combos
        </h2>
        <div className="card">
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            Some skills work especially well together. Here are the most
            powerful skill combinations every player should know.
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
                combo: "Logistics + Scouting",
                desc: "The ultimate map control combo. Extra movement points plus larger vision range lets you find resources and avoid dangerous encounters.",
              },
              {
                combo: "Sorcery + Magic School",
                desc: "Stacking spell damage from Sorcery with school-specific bonuses (e.g., Primal Magic for Grove) creates enormous spell damage output.",
              },
              {
                combo: "Offense + Luck",
                desc: "High base damage multiplied by Luck's double-damage procs can one-shot enemy stacks. Particularly deadly with ranged units.",
              },
              {
                combo: "Leadership + Diplomacy",
                desc: "High morale plus reduced neutral hostility lets you recruit wandering creatures cheaply and maintain high army morale.",
              },
              {
                combo: "Defense + Thaumaturgy",
                desc: "Damage reduction stacked with powerful defensive buffs creates nearly unkillable frontline units.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "0.75rem",
                  background: "var(--color-bg-elevated)",
                  borderRadius: "0.5rem",
                }}
              >
                <strong>{item.combo}</strong>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    marginTop: "0.25rem",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
