import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates — Heroes of Might & Magic: Olden Era",
  description:
    "Heroes of Might and Magic: Olden Era news. Early Access launch details and game information.",
};

export default function NewsPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1>News &amp; Updates</h1>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
        Latest information about Heroes of Might and Magic: Olden Era from Unfrozen Studio.
      </p>

      <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ background: 'var(--color-accent)', color: '#000', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600 }}>LAUNCH</span>
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>April 30, 2026</span>
        </div>
        <h3 style={{ marginBottom: '0.5rem' }}>Early Access Launch</h3>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
          Heroes of Might and Magic: Olden Era launched in Early Access on Steam on April 30, 2026. 
          Developed by Unfrozen Studio, the game features 6 unique factions (Temple, Necropolis, Grove, Hive, Schism, Dungeon) 
          set on the continent of Jadame. The game introduces new mechanics including Focus Points for hero abilities, 
          dual-attack mechanics (Dungeon), and faction-specific skill trees.
        </p>
      </div>

      <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span style={{ background: 'var(--color-text-muted)', color: '#000', padding: '0.15rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600 }}>FACTIONS</span>
        </div>
        <h3 style={{ marginBottom: '0.5rem' }}>Six Factions at Launch</h3>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
          Temple (tier A): Balanced with strong buff synergy. Necropolis (tier S): Undead attrition and necromancy. 
          Grove (tier A): Spellcaster-focused with elemental creatures. Hive (tier B): Aggressive melee with hivemind synergy. 
          Schism (tier B): Control-focused with eldritch summoning. Dungeon (tier A): Versatile dark elves with dual-attack mechanics.
        </p>
      </div>

      <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '0.75rem', padding: '1.5rem', marginTop: '1.5rem' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>
          For the latest official news, patch notes, and developer updates, visit the 
          official Olden Era Steam page or check the 
          <a href="https://wiki.hoodedhorse.com/Heroes_of_Might_and_Magic_Olden_Era" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}> Official Wiki</a>.
        </p>
      </div>
    </div>
  );
}
