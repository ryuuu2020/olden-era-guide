import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Olden Era Guide",
  description: "About Olden Era Guide — a fan-made strategy wiki and resource hub for Heroes of Might and Magic: Olden Era.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>About Olden Era Guide</h1>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Olden Era Guide is a fan-made strategy resource dedicated to Heroes of Might and Magic: Olden Era — the latest entry in the legendary turn-based strategy franchise. We are players, just like you, who fell in love with the depth and complexity of this game and wanted to create the resource we wished we had when we started playing.
      </p>
      <h2>What We Cover</h2>
      <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
        <li>Complete faction breakdowns for all 6 factions</li>
        <li>Detailed hero guides with tier rankings</li>
        <li>Combat mechanics and advanced tactics</li>
        <li>Beginner guides for new players</li>
        <li>Skill and spell system explanations</li>
        <li>Regularly updated news and patch notes</li>
      </ul>
      <h2>Our Philosophy</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        We believe strategy games are best enjoyed with knowledge. The deeper you understand the mechanics, the more rewarding your victories become. Our goal is to lower the barrier to entry while providing depth for experienced players.
      </p>
      <h2>Disclaimer</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
        Olden Era Guide is a fan-made website. We are not affiliated with, endorsed by, or connected to Ubisoft Entertainment, Unfrozen Studio, or Hooded Horse in any way. All game assets, names, and trademarks belong to their respective owners. This site exists purely as a community resource.
      </p>
    </div>
  );
}
