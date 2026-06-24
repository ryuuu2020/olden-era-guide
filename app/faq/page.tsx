import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions About Olden Era",
  description:
    "Comprehensive FAQ for Heroes of Might and Magic: Olden Era. Game basics, factions, heroes, combat mechanics, and guide site questions answered.",
};

interface FaqCategory {
  category: string;
  icon: string;
  color: string;
  items: { question: string; answer: string }[];
}

const faqData: FaqCategory[] = [
  {
    category: "Game Basics",
    icon: "🎮",
    color: "#f59e0b",
    items: [
      {
        question: "What is Heroes of Might and Magic: Olden Era?",
        answer:
          "Olden Era is the newest entry in the classic Heroes of Might and Magic turn-based strategy series, developed by Unfrozen Studio and published by Ubisoft. It launched in Early Access on April 30, 2026. The game features six unique factions, tactical turn-based combat, hero progression with skills and artifacts, and a rich fantasy setting on the continent of Jadame.",
      },
      {
        question: "Is Olden Era free to play?",
        answer:
          "No, Olden Era is a premium game available for purchase on Steam and the Epic Games Store. There are no microtransactions or pay-to-win mechanics. All factions, heroes, and game content are included with the base purchase. Future DLC expansions may add additional content at a separate cost.",
      },
      {
        question: "What platforms is Olden Era available on?",
        answer:
          "Olden Era is currently available on PC via Steam and the Epic Games Store. The developers have mentioned interest in console ports (PlayStation 5, Xbox Series X/S) for the full 1.0 release, but no official console announcements have been made yet. The game supports Windows and has been tested on Steam Deck/Proton.",
      },
    ],
  },
  {
    category: "Factions & Heroes",
    icon: "🏰",
    color: "#8b5cf6",
    items: [
      {
        question: "Which faction should I choose as a beginner?",
        answer:
          "Temple is the most beginner-friendly faction. It has a balanced unit roster, the best buff synergy, strong healing, and straightforward game plans. Temple's playstyle teaches core game mechanics without overwhelming complexity. After mastering Temple, try Necropolis for a more advanced playstyle or Hive for an aggressive alternative.",
      },
      {
        question: "How many heroes does each faction have?",
        answer:
          "Each faction has a unique hero pool. Temple has the largest with 18 heroes. Necropolis and Grove each have 18 heroes. Hive, Schism, and Dungeon have 8-6 heroes respectively. Each faction has a mix of Might and Magic heroes. The total hero roster currently stands at over 70 unique heroes in the Early Access build.",
      },
      {
        question: "What is the difference between Might and Magic heroes?",
        answer:
          "Might heroes excel at physical combat with higher base Attack and Defense stats. They invest in Combat skills (Offense, Defense, Tactics) to strengthen their army. Magic heroes have higher Spell Power and Knowledge, specializing in spell schools (Primal, Arcane, Daylight, etc.) to cast powerful spells that control the battlefield or deal massive damage.",
      },
    ],
  },
  {
    category: "Combat & Mechanics",
    icon: "⚔️",
    color: "#ef4444",
    items: [
      {
        question: "How does combat work in Olden Era?",
        answer:
          "Combat is turn-based on a hexagonal grid. Units act in order of their Initiative stat. Each turn, the active unit can move, attack, use a special ability, or wait. Heroes cast spells using mana. Focus Points are generated each turn and can power hero abilities or be converted to mana. The battle ends when one army is defeated or retreats.",
      },
      {
        question: "What are Focus Points?",
        answer:
          "Focus Points (FP) are a resource generated at the start of each combat turn. The amount generated depends on the hero's Knowledge stat and FP-generating skills. FP can be used to activate hero abilities (which vary by class) or converted into additional mana for spellcasting. Managing FP efficiently is a key combat skill.",
      },
      {
        question: "How does the morale system work?",
        answer:
          "Morale affects a unit's chance to take an extra action on its turn. High morale gives a percentage chance for a bonus action. Mixed-faction armies suffer morale penalties. Temple's Leadership skill and certain artifacts boost morale. Necropolis undead units are immune to morale — they never gain or lose it. The Luck skill provides a separate double-damage mechanic.",
      },
    ],
  },
  {
    category: "Guide Site",
    icon: "📚",
    color: "#22c55e",
    items: [
      {
        question: "Who maintains this guide site?",
        answer:
          "Olden Era Guide is a fan-made community resource created and maintained by dedicated players. It is not affiliated with Ubisoft, Unfrozen Studio, or any official entity. All information is based on community research, player experience, and publicly available data. The site is updated regularly as new information becomes available.",
      },
      {
        question: "How accurate is the information on this site?",
        answer:
          "We strive for accuracy and update content after every major patch. However, Olden Era is in Early Access, so game mechanics and balance change frequently. All tier lists, rankings, and numerical values represent the current meta and community consensus. Cross-reference with official patch notes for the most up-to-date information. We clearly mark speculative or community-reported data.",
      },
      {
        question: "How can I contribute or report errors?",
        answer:
          "We welcome community contributions. If you find an error, have additional data to share, or want to contribute a guide, you can reach out through our community channels. For bug reports related to the game itself, please use the in-game feedback tool or the official Discord server. For site-specific issues, use the feedback form on our About page.",
      },
    ],
  },
];

export default function FaqPage() {
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
          Frequently Asked Questions
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
          Everything you need to know about Heroes of Might and Magic: Olden
          Era and this guide site. Browse by category or search for your
          question.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {/* FAQ */}
        <section className="faq-snippets">
          <h2 style={{ marginBottom: "1rem" }}>Quick FAQ</h2>
          <details>
            <summary>What is the best faction for PvP?</summary>
            <p>
              Necropolis is currently considered the strongest faction for
              competitive PvP due to Necromancy's snowball potential. However,
              the meta is still evolving in Early Access. Temple and Grove are
              very close in power level and can counter Necropolis when played
              correctly. Tier lists shift with every balance patch.
            </p>
          </details>
          <details>
            <summary>How long does a typical match take?</summary>
            <p>
              A standard 1v1 match on a medium map typically takes 45-90
              minutes. Faster matches with aggressive factions like Hive can
              end in 30 minutes. Large maps and multiplayer free-for-all matches
              can run 2-4 hours. The Quick Battle feature for neutral stacks
              significantly reduces game length.
            </p>
          </details>
          <details>
            <summary>Does Olden Era have a campaign mode?</summary>
            <p>
              A campaign mode is planned for the full release but is not yet
              available in the Early Access build. Currently, players can enjoy
              skirmish mode against AI, multiplayer matches, and custom
              scenarios. The campaign will feature three acts telling the story
              of Jadame across all six factions.
            </p>
          </details>
        </section>

        {/* Categorized FAQ */}
        {faqData.map((category) => (
          <div key={category.category} style={{ marginBottom: "3rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
                marginTop: category.category === "Game Basics" ? "2rem" : 0,
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>{category.icon}</span>
              <h2 style={{ margin: 0 }}>{category.category}</h2>
              <div
                style={{
                  height: "3px",
                  flex: 1,
                  background: category.color,
                  borderRadius: "2px",
                  opacity: 0.5,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {category.items.map((item) => (
                <div
                  key={item.question}
                  className="card"
                  style={{ borderLeft: `4px solid ${category.color}` }}
                >
                  <h3
                    style={{
                      margin: "0 0 0.75rem 0",
                      fontSize: "1.05rem",
                      color: category.color,
                    }}
                  >
                    Q: {item.question}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      lineHeight: 1.7,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Resources */}
        <h2 style={{ marginBottom: "1rem" }}>Additional Resources</h2>
        <div className="grid-cards" style={{ marginBottom: "2rem" }}>
          {[
            {
              title: "Beginner's Guide",
              desc: "Step-by-step walkthrough for new players. Learn the fundamentals of map control, economy, and combat.",
              href: "/beginners-guide",
            },
            {
              title: "Faction Overview",
              desc: "Detailed breakdown of all six factions, including strength analysis, key units, and playstyle guides.",
              href: "/factions",
            },
            {
              title: "Hero Database",
              desc: "Complete hero list with specialties, starting skills, and tier rankings for every faction.",
              href: "/heroes",
            },
            {
              title: "Combat Guide",
              desc: "In-depth combat mechanics explained, including initiative, morale, terrain bonuses, and advanced tactics.",
              href: "/combat",
            },
          ].map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="card"
              style={{
                textDecoration: "none",
                borderLeft: "4px solid var(--color-accent-secondary)",
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.05rem" }}>
                {resource.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                }}
              >
                {resource.desc}
              </p>
            </a>
          ))}
        </div>

        {/* Still have questions */}
        <div
          className="card"
          style={{
            marginTop: "2rem",
            borderColor: "var(--color-accent)",
            background: "rgba(245, 158, 11, 0.05)",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Still have questions?</h3>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
              maxWidth: "600px",
              margin: "0 auto 1.5rem auto",
            }}
          >
            If your question isn't answered here, check our detailed guide
            pages for in-depth information on specific topics. Our Tips page
            has advanced strategies, and the Skills and Spells pages cover
            every mechanic in detail.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="/tips" className="btn-primary">
              Pro Tips
            </a>
            <a
              href="/tier-list"
              style={{
                color: "var(--color-accent)",
                padding: "0.75rem 1.5rem",
                border: "2px solid var(--color-accent)",
                borderRadius: "0.5rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              Tier List
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
