import { Metadata } from "next";
import { combatTips } from "@/lib/data";

export const metadata: Metadata = {
  title: "Olden Era Combat Guide — Tactics, Mechanics & Advanced Strategies",
  description: "Master Olden Era combat mechanics. Initiative order, morale system, Focus Points, native terrain bonuses, counter-attack tactics, spell damage types, and formation strategies.",
};

export default function CombatPage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Olden Era Combat Guide</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Master the tactical combat system — initiative, morale, Focus Points, terrain, and advanced battle formations.
          Turn losing fights into decisive victories.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div className="faq-snippets">
          <details>
            <summary>How does the initiative system determine turn order?</summary>
            <p>In Olden Era combat, every unit has an Initiative stat that determines when they act each round. Higher initiative units always act before lower initiative units. The current turn order is displayed on the combat timeline at the bottom of the screen. Hive units consistently have the highest initiative, giving them first strike advantage. Understanding and manipulating initiative — through spells, abilities, and unit selection — is fundamental to winning battles.</p>
          </details>
          <details>
            <summary>What triggers morale bonuses and penalties?</summary>
            <p>Morale is influenced by army composition (mixing units from different factions reduces morale), hero abilities (Leadership skill provides morale bonuses), and certain spells or battlefield events. High morale gives units a chance to act twice in a single round — a massive advantage. Low morale causes units to freeze and lose their turn. Undead units (Necropolis) are immune to morale entirely — they never gain or lose morale. Temple excels at morale manipulation through the Leadership skill and hero specialties like Aeos the Exalted.</p>
          </details>
          <details>
            <summary>How do I know which damage type to use?</summary>
            <p>Check enemy unit tooltips for their resistances and vulnerabilities. Physical damage is generally reliable against all targets. Magic damage bypasses armor but can be resisted. Light/Holy damage deals bonus damage to undead (Necropolis) and dark creatures (Dungeon). Shadow/Dark damage is effective against living creatures but weak against Temple. Elemental damage (Fire, Ice, Lightning) has varying effectiveness by creature type. Dungeon&apos;s dual-attack system lets you choose the optimal damage type for every situation.</p>
          </details>
        </div>

        <h2>Combat System Overview</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Olden Era&apos;s combat system is the heart of the game. Battles take place on a hex-grid battlefield where positioning, sequencing, and resource management determine victory. Unlike the adventure map layer which is turn-based at the strategic level, combat unfolds in detailed tactical rounds where every decision matters. Understanding the underlying mechanics — initiative, morale, Focus Points, terrain, and damage types — transforms you from a button-masher into a strategic commander.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Each battle round, units act in initiative order. Heroes can cast spells and use Focus Point abilities at any point during their turn. The battle ends when one side is completely eliminated or retreats. Creatures retain their damage between battles — there is no automatic healing, making every point of damage meaningful. This creates a war of attrition where preserving your units while destroying enemy forces is paramount.
        </p>

        <h2>Combat Tips Reference</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Here are the essential combat tips every Olden Era player should know:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {combatTips.map((tip, i) => (
            <div key={i} className="card">
              <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>{tip.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{tip.content}</p>
            </div>
          ))}
        </div>

        <h2>Initiative and Turn Order</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Initiative is the single most important combat stat. Acting first means you can eliminate enemy units before they attack, apply debuffs before the enemy buffs, and control the battlefield from round one. Here&apos;s how initiative works in practice:
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Hive units consistently have the highest base initiative (12-16), followed by Dungeon (10-14), Grove (9-13), Temple (8-12), Schism (7-11), and Necropolis (6-10). Spells like Haste and Slow can temporarily modify initiative. The Tactics skill allows pre-battle repositioning, which is especially valuable for slow factions like Necropolis. When facing Hive, bring initiative-modifying spells or accept that you&apos;ll be acting second and plan accordingly with defensive positioning and protective spells.
        </p>

        <h2>Morale System Deep Dive</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Morale is a secondary stat that affects how often units get to act. Each unit has a base morale of 0, modified by army composition, hero skills, and battlefield conditions. Positive morale (1-5) grants a scaling chance for the unit to take an extra action after its normal turn. Negative morale (-1 to -5) causes the unit to freeze and lose its turn, with the chance scaling with the severity of the morale penalty.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          The most common morale penalty comes from mixing units of different factions. Each unit from a different faction than your hero reduces army morale by 1. Temple&apos;s Leadership skill provides +1/+2/+3 morale at basic/advanced/expert levels, which can offset mixed-army penalties. Aeos the Exalted (Temple) provides additional morale bonuses through his specialty. High morale strategies create devastating chain turns where your best units act twice, potentially eliminating the enemy&apos;s most dangerous threats before they can respond.
        </p>

        <h2>Focus Points in Combat</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Focus Points represent your hero&apos;s concentration and tactical awareness during battle. Heroes generate 1-3 FP per turn based on their level and skills. FP abilities are separate from spells — they don&apos;t cost mana and can be used alongside regular spellcasting. Key FP thresholds: 3 FP for minor abilities (single-target damage, small buffs), 5 FP for moderate abilities (area damage, group buffs), 8 FP for major abilities (summons, battlefield manipulation), and 12 FP for ultimate abilities (game-changing effects).
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Grove heroes generate FP the fastest thanks to the Murmuring faction skill, reaching 3 FP per turn by mid-game. The Minstrel (Grove) starts battles with bonus FP. The Sorcery skill increases FP generation for all magic heroes. Strategic FP usage: use minor abilities freely (they regenerate quickly), save moderate abilities for key enemy units, and reserve major/ultimate abilities for critical moments. Wasting an ultimate FP ability on a dying enemy is one of the most common tactical errors.
        </p>

        <h2>Native Terrain Bonuses</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Every faction has a preferred terrain type that provides combat bonuses when fighting on it. Temple thrives on Grasslands, gaining +1 attack and +1 defense. Necropolis dominates Wasteland with increased Necromancy effectiveness. Grove excels in Forests with enhanced spell power. Hive performs best in Desert terrain with initiative bonuses. Schism gains power near Water tiles with summon strength bonuses. Dungeon fights best Underground with dual-attack damage amplification.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Terrain control is an underappreciated aspect of Olden Era strategy. When possible, engage enemies on your native terrain. When forced to fight on enemy terrain, compensate with spells and Focus Point abilities. The Scouting skill helps identify terrain types before committing to battle. Experienced players use terrain chokepoints — positioning on the border of two terrain types to force the enemy to fight on your preferred ground while you remain on neutral territory.
        </p>

        <h2>Counter-Attack Mechanics</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          When a unit is attacked by an adjacent enemy, it automatically counter-attacks — but only once per round (unless it has abilities that grant additional counter-attacks). This fundamental rule creates the tactical rhythm of Olden Era combat. The optimal attack sequence is: bait enemy counter-attacks with cheap or expendable units, then commit your heavy hitters to deal damage without retaliation. This is called &quot;counter-attack baiting&quot; and is the single most important combat tactic to master.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Several units and abilities modify counter-attack rules. Temple&apos;s Swordsmen gain an extra counter-attack through their Retaliation training upgrade. Hive&apos;s Soldier Ants can counter-attack twice. Certain hero abilities and spells can prevent enemy counter-attacks entirely. The Tactics skill allows you to position units optimally before battle to set up counter-attack baiting sequences. Advanced players plan their entire battle around counter-attack economy — tracking which enemy units have used their retaliation and punishing those who haven&apos;t.
        </p>

        <h2>Spell Damage Types and Resistances</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Olden Era features five major spell damage categories: Physical (rare, bypasses all resistances), Elemental (Fire, Ice, Lightning — affected by specific resistances), Light/Holy (bonus vs undead and dark creatures), Shadow/Dark (effective vs living, resisted by Temple), and Arcane (pure magic damage, affected by magic resistance only). Understanding damage type matchups is essential for magic-focused heroes.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Temple&apos;s Daylight Magic deals Light/Holy damage — devastating against Necropolis and Dungeon. Necropolis&apos;s Nightshade Magic deals Shadow/Dark damage — strong against living factions but weak against Temple. Grove&apos;s Primal Magic covers Fire, Ice, and Lightning — versatile but each type can be resisted individually. Schism&apos;s Abyssal Rite produces Arcane damage that penetrates most resistances. Dungeon&apos;s Arcane Magic similarly bypasses standard defenses but is checked by pure magic resistance.
        </p>

        <h2>Formation Tactics</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Battle formation is the art of unit positioning before and during combat. The standard formation for most factions is the &quot;shield wall&quot;: durable frontline units (Swordsmen, Minotaurs, Soldier Ants) form a protective line, with ranged units (Crossbowmen, Rangers, Liches) and spellcasters (Druids, Clerics, Hive Minds) positioned safely behind them. Cavalry and flying units (Cavalry, Dragonfly Riders, Phoenix) start on the flanks for rapid deployment.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Alternative formations serve specific strategies. The &quot;aggressive wedge&quot; places heavy hitters in front for maximum turn-one damage — effective for Hive rush strategies. The &quot;defensive box&quot; clusters all units tightly with ranged units in the center — used against AoE-heavy opponents. The &quot;split flank&quot; divides forces into two groups to force the enemy to choose which to engage — effective for Dungeon&apos;s hit-and-run tactics. The Tactics skill is invaluable for setting up formations before the first round begins. Without Tactics, your units deploy in a fixed pattern that may be suboptimal for the current matchup.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a href="/factions" className="btn-primary" style={{ textDecoration: 'none' }}>Explore Factions</a>
          <a href="/beginners-guide" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '2px solid var(--color-accent)', color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}>Beginner&apos;s Guide</a>
        </div>
      </div>
    </>
  );
}
