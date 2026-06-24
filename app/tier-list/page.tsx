import { factions, factionTierList, heroes } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faction Tier List — S/A/B/C Rankings",
  description:
    "Complete Olden Era faction tier list with S, A, B, C rankings. Necropolis S-tier, Temple/Grove/Dungeon A-tier, Hive/Schism B-tier. Detailed reasoning for each placement.",
};

const tierColors: Record<string, string> = {
  S: "#ef4444",
  A: "#f59e0b",
  B: "#22c55e",
  C: "#3b82f6",
};

const tierLabels: Record<string, string> = {
  S: "God Tier",
  A: "Strong Tier",
  B: "Balanced Tier",
  C: "Niche Tier",
};

export default function TierListPage() {
  const sortedFactions = [...factions].sort((a, b) => {
    const order = { S: 0, A: 1, B: 2, C: 3 };
    return order[a.tier] - order[b.tier];
  });

  const getTierEntry = (factionId: string) =>
    factionTierList.find((e) => e.factionId === factionId);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "var(--color-accent)",
          }}
        >
          Faction Tier List
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
          Comprehensive rankings for all six Olden Era factions based on
          competitive viability, hero pool quality, unit roster depth, and
          overall power level. Updated for the Early Access build.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
        {/* FAQ */}
        <section className="faq-snippets">
          <h2 style={{ marginBottom: "1rem" }}>Quick FAQ</h2>
          <details>
            <summary>How often is the tier list updated?</summary>
            <p>
              The tier list is reviewed after every major patch and balance
              update. Since Olden Era is in Early Access, expect frequent
              adjustments as the meta evolves. Check back after each patch for
              changes.
            </p>
          </details>
          <details>
            <summary>Can a B-tier faction beat an S-tier faction?</summary>
            <p>
              Tier lists measure overall consistency and power ceiling, not
              guaranteed outcomes. Player skill, hero choice, map layout, and
              early RNG all matter. A skilled Hive player can absolutely beat an
              inexperienced Necropolis player.
            </p>
          </details>
          <details>
            <summary>Why is Necropolis S-tier?</summary>
            <p>
              Necromancy creates a snowball effect unmatched by any other
              faction mechanic. Every battle won grows your skeleton army, and
              skeletons cost zero gold. Combined with strong debuffs and
              life-drain, Necropolis out-scales every other faction in the late
              game.
            </p>
          </details>
        </section>

        {/* Tier Summary Cards */}
        <div
          className="grid-cards"
          style={{ marginBottom: "2.5rem", marginTop: "2rem" }}
        >
          {(["S", "A", "B", "C"] as const).map((tier) => {
            const tierFactions = sortedFactions.filter((f) => f.tier === tier);
            return (
              <div
                key={tier}
                className="card"
                style={{
                  borderLeft: `4px solid ${tierColors[tier]}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span className={`tier-${tier.toLowerCase()}`}>{tier}</span>
                  <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                    {tierLabels[tier]}
                  </span>
                </div>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  {tier === "S" &&
                    "The single strongest faction. Overwhelming late-game power, consistent performance across all map types, and a hero pool full of top-tier picks."}
                  {tier === "A" &&
                    "Very strong factions that can win any match. Each has a clear identity and powerful tools, with only minor weaknesses that can be played around."}
                  {tier === "B" &&
                    "Solid factions with defined strengths but noticeable gaps. Viable in most situations but require more careful play and favorable matchups to excel."}
                  {tier === "C" &&
                    "Situational picks. Can succeed in the right hands or specific scenarios, but their weaknesses are harder to overcome than higher-tier factions."}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  {tierFactions.map((f) => (
                    <span
                      key={f.id}
                      style={{
                        background: "var(--color-bg-elevated)",
                        padding: "0.3rem 0.7rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      {f.icon} {f.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Tier Table */}
        <h2 style={{ marginBottom: "1rem" }}>Detailed Rankings</h2>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Faction</th>
                <th>Tier</th>
                <th>Playstyle</th>
                <th>Reasoning</th>
              </tr>
            </thead>
            <tbody>
              {sortedFactions.map((faction, index) => {
                const entry = getTierEntry(faction.id);
                return (
                  <tr key={faction.id}>
                    <td style={{ fontWeight: 700 }}>#{index + 1}</td>
                    <td>
                      <span style={{ fontWeight: 600 }}>
                        {faction.icon} {faction.name}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`tier-${faction.tier.toLowerCase()}`}
                        style={{ fontSize: "0.85rem" }}
                      >
                        {faction.tier}-Tier
                      </span>
                    </td>
                    <td style={{ color: "var(--color-text-muted)" }}>
                      {faction.playstyle}
                    </td>
                    <td style={{ color: "var(--color-text-muted)" }}>
                      {entry?.reason || faction.description}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Individual Faction Analysis */}
        <h2 style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
          In-Depth Faction Analysis
        </h2>

        {sortedFactions.map((faction) => (
          <div
            key={faction.id}
            className="card"
            style={{ marginBottom: "1.5rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <h3 style={{ margin: 0 }}>
                {faction.icon} {faction.name}
              </h3>
              <span className={`tier-${faction.tier.toLowerCase()}`}>
                {faction.tier}-Tier
              </span>
            </div>

            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {faction.description}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div>
                <h4
                  style={{
                    color: "var(--color-success)",
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Strengths
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  {faction.strengths.map((s, i) => (
                    <li
                      key={i}
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                        paddingLeft: "1rem",
                        position: "relative" as const,
                      }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4
                  style={{
                    color: "var(--color-danger)",
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Weaknesses
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  {faction.weaknesses.map((w, i) => (
                    <li
                      key={i}
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                        paddingLeft: "1rem",
                      }}
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                marginTop: "1rem",
                padding: "0.75rem",
                background: "var(--color-bg-elevated)",
                borderRadius: "0.5rem",
              }}
            >
              <strong>Top Heroes: </strong>
              <span style={{ color: "var(--color-text-muted)" }}>
                {getHeroNamesForFaction(faction.id)}
              </span>
            </div>
          </div>
        ))}

        {/* Methodology */}
        <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
          Tier List Methodology
        </h2>
        <div className="card">
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            Our tier list evaluates each faction across four weighted
            categories:
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
                name: "Hero Pool (30%)",
                desc: "Quality and depth of available heroes. Factions with multiple S/A-tier heroes score higher.",
              },
              {
                name: "Unit Roster (25%)",
                desc: "Overall unit quality, synergy between tiers, and upgrade paths.",
              },
              {
                name: "Faction Mechanic (25%)",
                desc: "How powerful and consistent the unique faction ability is across different game phases.",
              },
              {
                name: "Meta Position (20%)",
                desc: "Current competitive standing, matchup spread, and performance in tournament play.",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  padding: "0.75rem",
                  background: "var(--color-bg-elevated)",
                  borderRadius: "0.5rem",
                }}
              >
                <strong>{item.name}</strong>
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
            <strong>Important:</strong> Olden Era is in Early Access. Balance
            patches will shift the tier list over time. This ranking reflects
            the current meta and the consensus of experienced players. Your
            mileage may vary based on playstyle and map-specific factors. All
            six factions are viable for most content — play what you enjoy.
          </p>
        </div>
      </div>
    </div>
  );
}

function getHeroNamesForFaction(factionId: string): string {
  const factionHeroes = heroes.filter((h) => h.factionId === factionId);
  const topHeroes = factionHeroes
    .filter((h) => h.tier === "S" || h.tier === "A")
    .map((h) => `${h.name} (${h.tier})`)
    .slice(0, 4);
  return topHeroes.length > 0 ? topHeroes.join(", ") : "Various heroes available";
}
