import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates — Latest Olden Era Developments",
  description:
    "Stay updated with the latest Heroes of Might and Magic: Olden Era news. EA launch details, patch notes, community events, and game updates.",
};

interface NewsItem {
  date: string;
  title: string;
  summary: string;
  details: string;
  tag?: string;
}

const newsItems: NewsItem[] = [
  {
    date: "June 25, 2026",
    title: "Community Tier List Shakeup: Dungeon and Grove Surge Post-Patch #9",
    tag: "Meta Analysis",
    summary:
      "The competitive landscape has shifted dramatically in the week since Patches #8 and #9 dropped. Early data from community tournaments and ranked ladder matches reveals two factions emerging as the biggest winners.",
    details:
      "Dungeon has rocketed from mid-tier obscurity to a top-3 contender, driven largely by the Summon Avatar rework. With the new spell-power scaling replacing the old attack-based system, Dungeon's natural spellcaster synergy (Warlocks, Dark Priestesses) now benefits disproportionately from Avatar investment. A single level-3 Avatar behind a frontline of Minotaurs has become the standard Dungeon opener at Diamond+ rank. Grove is the other surprise beneficiary: the Hive nerfs opened space in the meta for Grove's creature-heavy strategies, and the 'Summon Sorcery' mastery replacement (+25% HP and damage to all summoned creatures) directly buffs Grove's Treant and Dryad summons. Meanwhile, Temple has fallen hardest — the Murmuring 'One More Time' buff was expected to help but the 2-turn cooldown reduction frequently leaves Temple heroes overextended without escape options. The Necropolis economy nerfs from Patch #8 have pushed the faction toward aggressive early-game strategies, with mixed tournament results. Community consensus: this is the healthiest Olden Era meta since Early Access launch, with 5 factions showing tournament-viable win rates above 48%.",
  },
  {
    date: "June 25, 2026",
    title: "Patches #8 and #9: Massive Skill Rework, Hive Overhaul, and Anti-Cheat Enforcement",
    tag: "Patch Notes",
    summary:
      "A double-patch drop in early June reshapes Olden Era's competitive landscape. Patch #8 delivers a complete Summon Avatar rework, sweeping skill tree balance, and Hive faction adjustments. Patch #9 follows within 24 hours as a hotfix walking back several controversial changes.",
    details:
      "Unfrozen Studio released Patch #8 on June 1 with one of the most ambitious balance passes since Early Access launch. Summon Avatar has been completely redesigned: it now scales off spell power instead of attack, uses a fixed-hit-point system (2/3/4 hits per level) instead of conventional HP, and can no longer be healed or cloned. Murmuring subskill 'One More Time' now reduces cooldowns by 2 turns (up from 1), while 'Energy Burst' damage bonus increased from 5% to 15% but now only lasts until end of turn. Justice and Offense/Defense masteries saw net reductions, while Sorcery's 'Magic Influence' was replaced with 'Summon Sorcery' (+25% HP and damage to all summoned creatures). Hive received across-the-board creature count reductions in Arena mode, tier-based building cost increases, and hero specialization swaps for Tav and Paupa. Multiplayer integrity saw major enforcement: Alt+F4 disconnects now auto-assign losses, tactical-phase scouting exploits are patched, and free unit upgrade glitches are fixed — with disciplinary actions including temporary and permanent bans for repeat offenders. Patch #9 (June 2) walked back several over-nerfs and fine-tuned the Hive adjustments based on 24 hours of live data.",
  },
  {
    date: "April 30, 2026",
    title: "Olden Era Launches in Early Access",
    tag: "Launch",
    summary:
      "The highly anticipated return of Heroes of Might and Magic enters Early Access. Six factions, a new continent of Jadame, and the classic HoMM formula reimagined.",
    details:
      "Ubisoft and Unfrozen Studio have officially launched Heroes of Might and Magic: Olden Era in Early Access. The launch includes all six factions — Temple, Necropolis, Grove, Hive, Schism, and Dungeon — each with a full unit roster, unique mechanics, and hero pools. The game introduces the continent of Jadame as its primary setting, with new lore expanding the Might and Magic universe. Early players have praised the faction diversity, tactical depth, and modernized visuals while retaining the classic HoMM spirit. The developers have committed to regular updates throughout the Early Access period.",
  },
  {
    date: "May 15, 2026",
    title: "First Balance Patch — Necromancy Adjusted",
    tag: "Patch Notes",
    summary:
      "The first post-launch balance patch addresses Necropolis dominance, Temple buff stacking, and various bug fixes reported by the community.",
    details:
      "Update 0.9.1 brings the first round of balance changes based on community feedback and early competitive data. Necromancy skeleton scaling has been reduced at Advanced and Expert levels, bringing Necropolis more in line with other factions. Temple's Righteousness buff stacking has been capped at 3 simultaneous buffs per unit. Hive received buffs to Dragonfly Rider initiative and Queen Ant durability. Several crash fixes and UI improvements were included, along with a new Quick Battle option for neutral stack encounters.",
  },
  {
    date: "June 1, 2026",
    title: "Community Tournament Series Announced",
    tag: "Community",
    summary:
      "The first official Olden Era community tournament kicks off with a $5,000 prize pool. Sign-ups open for competitive players worldwide.",
    details:
      "Ubisoft and community organizers have announced the Olden Era Launch Tournament Series, featuring weekly qualifiers and a grand finals event. The tournament will use a Swiss-system format with best-of-three matches. Players can register through the official Discord server. The prize pool totals $5,000 with additional in-game rewards for top finishers. This marks the beginning of Olden Era's competitive scene, and community interest has been strong with over 500 players signing up in the first 24 hours.",
  },
  {
    date: "June 20, 2026",
    title: "Roadmap Revealed — New Faction Coming in 2026",
    tag: "Announcement",
    summary:
      "The development roadmap outlines upcoming content, including a mystery seventh faction, artifact crafting system, and multiplayer improvements.",
    details:
      "Unfrozen Studio has shared the Early Access development roadmap on the official website. Major upcoming features include: a seventh playable faction (teased with ocean imagery, leading to speculation about a water-based faction), a new artifact crafting system that allows combining lesser artifacts into powerful new items, ranked multiplayer with seasonal leaderboards, an improved map editor with scripting support, and additional campaign missions expanding the story of Jadame. The first major content update is slated for Q3 2026, with the full release targeted for early 2027.",
  },
];

export default function NewsPage() {
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
          News & Updates
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
          The latest news, patch notes, community events, and development
          updates for Heroes of Might and Magic: Olden Era.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {/* FAQ */}
        <section className="faq-snippets">
          <h2 style={{ marginBottom: "1rem" }}>Quick FAQ</h2>
          <details>
            <summary>How often is the game updated?</summary>
            <p>
              The development team at Unfrozen Studio has committed to bi-weekly
              patches during Early Access, with major content updates every 2-3
              months. Bug fixes and hotfixes are deployed as needed between
              scheduled updates.
            </p>
          </details>
          <details>
            <summary>When is the full release expected?</summary>
            <p>
              Based on the published roadmap, Olden Era is targeting a full 1.0
              release in early 2027. The Early Access period is expected to last
              12-18 months, giving the team time to implement community feedback
              and polish all features.
            </p>
          </details>
          <details>
            <summary>How do I report bugs or give feedback?</summary>
            <p>
              The best way to report bugs is through the in-game feedback tool
              (press F8 during gameplay) or through the official Discord
              server's bug-reporting channel. The developers actively read and
              respond to community feedback.
            </p>
          </details>
        </section>

        {/* Latest Updates */}
        <h2
          style={{
            marginTop: "2rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          Latest Updates
          <span
            style={{
              background: "var(--color-accent)",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {newsItems.map((item, index) => (
            <div
              key={item.title}
              className="card"
              style={{ borderLeft: "4px solid var(--color-accent)" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.tag && (
                      <span
                        style={{
                          background: "var(--color-accent)",
                          color: "#0a0e17",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "0.25rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {item.date}
                    </span>
                    {index === 0 && (
                      <span
                        style={{
                          background: "var(--color-danger)",
                          color: "#fff",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "0.25rem",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                        }}
                      >
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 style={{ margin: 0, fontSize: "1.15rem" }}>
                    {item.title}
                  </h3>
                </div>
              </div>
              <p
                style={{
                  color: "var(--color-text)",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  marginBottom: "0.75rem",
                }}
              >
                {item.summary}
              </p>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                }}
              >
                {item.details}
              </p>
            </div>
          ))}
        </div>

        {/* Development Status */}
        <h2 style={{ marginBottom: "1rem" }}>Development Status</h2>
        <div className="card" style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            Olden Era is currently in <strong>Early Access (v0.9.x)</strong>.
            The development team is actively working on the following priorities
            based on community feedback.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {[
              {
                status: "In Progress",
                title: "Seventh Faction Development",
                color: "#22c55e",
              },
              {
                status: "In Progress",
                title: "Artifact Crafting System",
                color: "#22c55e",
              },
              {
                status: "In Progress",
                title: "Ranked Multiplayer Mode",
                color: "#22c55e",
              },
              {
                status: "Planned",
                title: "Full Campaign (3 Acts)",
                color: "#f59e0b",
              },
              {
                status: "Planned",
                title: "Map Editor with Scripting",
                color: "#f59e0b",
              },
              {
                status: "Planned",
                title: "Additional Spells and Artifacts",
                color: "#f59e0b",
              },
              {
                status: "Planned",
                title: "Steam Workshop Integration",
                color: "#f59e0b",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.5rem 0.75rem",
                  background: "var(--color-bg-elevated)",
                  borderRadius: "0.375rem",
                }}
              >
                <span
                  style={{
                    background: item.color,
                    color: "#000",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.status}
                </span>
                <span style={{ color: "var(--color-text-muted)" }}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stay Updated */}
        <h2 style={{ marginBottom: "1rem" }}>Stay Updated</h2>
        <div className="card">
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1.25rem",
            }}
          >
            We update this guide site regularly as new information becomes available. Check
            back for:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                title: "Patch Notes",
                desc: "Detailed breakdowns of every balance change, new feature, and bug fix.",
              },
              {
                title: "Meta Analysis",
                desc: "How patches affect the tier list, best heroes, and competitive strategies.",
              },
              {
                title: "Community Events",
                desc: "Tournament schedules, results, and community-created content spotlights.",
              },
              {
                title: "New Content",
                desc: "Coverage of new factions, units, spells, artifacts, and map features as they release.",
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
                    fontSize: "0.85rem",
                    marginTop: "0.3rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="card"
          style={{
            marginTop: "2rem",
            borderColor: "var(--color-accent)",
            background: "rgba(245, 158, 11, 0.05)",
          }}
        >
          <p style={{ lineHeight: 1.7, fontSize: "0.9rem" }}>
            <strong>Disclaimer:</strong> This is a fan-made news page based on
            publicly available information. For official news, visit the{" "}
            <a
              href="https://store.steampowered.com/app/olden-era"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-accent)" }}
            >
              Official Olden Era Steam Page
            </a>{" "}
            and the{" "}
            <a
              href="https://discord.gg/oldenera"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-accent)" }}
            >
              Official Discord Server
            </a>
            . Dates and details are approximate and may be subject to change as
            development progresses.
          </p>
        </div>
      </div>
    </div>
  );
}
