import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olden Era Beginner's Guide — Getting Started & First Steps",
  description: "Complete beginner's guide for Heroes of Might & Magic: Olden Era. Learn economy basics, combat fundamentals, Focus Points, common mistakes to avoid, and optimal first-turn strategies.",
};

export default function BeginnersGuidePage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Beginner&apos;s Guide to Olden Era</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Everything new players need to know — from your first turn to your first victory.
          Master economy, combat, and hero progression in Heroes of Might &amp; Magic: Olden Era.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div className="faq-snippets">
          <details>
            <summary>What should I do on my very first turn?</summary>
            <p>On turn one, immediately build a Tavern and recruit a second hero. Use your starting hero to scout nearby and capture resource generators. Your second hero should pick up any loose resources and flag mines. Never end your first turn without having both heroes deployed and moving. Early hero deployment is the single most impactful decision in Olden Era — every turn a hero is inactive costs you resources and map control.</p>
          </details>
          <details>
            <summary>How do I know if my army can win a fight?</summary>
            <p>Check the creature stack sizes before engaging. As a rule of thumb: don&apos;t fight neutral stacks larger than your own army without hero spell support. Tier 1-3 neutral creatures can be engaged at equal or slightly larger numbers. Tier 4-6 neutrals require numerical advantage or powerful spells. Never fight tier 7 neutral creatures without at least a 3:1 numerical advantage and a full mana pool. The Focus Points system also means hero abilities can swing fights — factor those into your calculations.</p>
          </details>
          <details>
            <summary>What are the most common beginner mistakes?</summary>
            <p>The top mistakes new players make are: (1) not recruiting a second hero on turn one, (2) building military structures before economy buildings, (3) ignoring Focus Points and not using hero abilities, (4) fighting neutral stacks they can&apos;t win, (5) not scouting the map aggressively, (6) ignoring the skill tree and picking random skills, and (7) hoarding resources instead of spending them. Fix these seven issues and you&apos;ll immediately improve by several skill levels.</p>
          </details>
        </div>

        <h2>Getting Started</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Welcome to Heroes of Might &amp; Magic: Olden Era. If you&apos;re new to the HoMM series or returning after a long break, this guide will walk you through the fundamentals. Olden Era combines town building, hero progression, turn-based tactical combat, and strategic map exploration into a deeply rewarding experience. The learning curve is real — but with the right foundation, you&apos;ll be conquering Jadame in no time.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Start with the Temple faction. Temple&apos;s balanced unit roster and forgiving buff mechanics make it the ideal learning faction. Lord Edgar provides a straightforward attack/defense bonus to all units — no complex conditions, no specific unit requirements, just pure, reliable power. Once you&apos;re comfortable with Temple, branch out to other factions that match your evolving playstyle.
        </p>

        <h2>First Turn Priorities</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Your opening moves set the trajectory for your entire campaign. Here&apos;s the optimal first-turn checklist:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Turn 1 Checklist</h3>
            <ol style={{ color: 'var(--color-text-muted)', lineHeight: 2, paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: 'var(--color-accent)' }}>Build a Tavern</strong> — this unlocks hero recruitment and is always your first building.</li>
              <li><strong style={{ color: 'var(--color-accent)' }}>Recruit a second hero</strong> — even a basic hero doubles your map presence and resource gathering.</li>
              <li><strong style={{ color: 'var(--color-accent)' }}>Scout with your main hero</strong> — reveal the fog of war in all directions. Prioritize finding mines and treasure.</li>
              <li><strong style={{ color: 'var(--color-accent)' }}>Send your second hero to collect loose resources</strong> — gold, wood, ore, gems. Everything matters early.</li>
              <li><strong style={{ color: 'var(--color-accent)' }}>Flag nearby mines</strong> — especially gold mines and sawmills. These generate passive income every turn.</li>
            </ol>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Turns 2-7 Priorities</h3>
            <ol style={{ color: 'var(--color-text-muted)', lineHeight: 2, paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: 'var(--color-accent)' }}>Build economy structures</strong> — Town Hall, Marketplace, and resource silos before military buildings.</li>
              <li><strong style={{ color: 'var(--color-accent)' }}>Fight tier 1-2 neutral stacks</strong> — gain experience and resources. Avoid losses — every unit counts.</li>
              <li><strong style={{ color: 'var(--color-accent)' }}>Plan your skill tree</strong> — don&apos;t pick skills randomly. Commit to a build path (combat, magic, or economy) by week 2.</li>
              <li><strong style={{ color: 'var(--color-accent)' }}>Locate enemy positions</strong> — scouting reveals opponents. Knowing their location lets you plan expansion routes.</li>
            </ol>
          </div>
        </div>

        <h2>Economy Basics</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Gold is the lifeblood of Olden Era. Every unit, building, and hero costs gold. Your primary gold sources are town income (from Town Hall upgrades), gold mines on the adventure map, and treasure chests found during exploration. Secondary resources — wood, ore, gems, crystals, mercury, and sulfur — are required for advanced buildings and top-tier units. Different factions consume different rare resources: Temple needs gems, Necropolis needs mercury, Grove needs crystals, Hive needs sulfur, Schism needs mercury and crystals, and Dungeon needs gems and crystals.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          The Economy skill is a game-changer. At expert level, it increases gold income by 45%. On a secondary hero who doesn&apos;t need combat skills, Economy provides immense passive value. Similarly, the Recruitment skill increases weekly creature growth, meaning more units available for purchase each week. Prioritize capturing and defending resource generators — losing a gold mine in the early game can set you back by 2-3 turns of development. Protect your economic infrastructure with secondary heroes or garrisons.
        </p>

        <h2>Building Your First Army</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Your army composition should reflect your faction&apos;s strengths. Temple builds balanced armies with Swordsmen (frontline), Crossbowmen (ranged), and Cavalry (flanking). Necropolis focuses on skeleton stacks supplemented by Wights and Vampires. Grove invests heavily in Rangers and Druids with Treant protection. Hive stacks same-type units for hivemind bonuses. Schism relies on Cultists and summoned creatures. Dungeon rotates between dual-attack units with Minotaur frontline support.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Upgrade your core units early — upgraded tier 1-3 units are more cost-effective than un-upgraded tier 4 units. The power jump from un-upgraded to upgraded is significant (often 30-50% stat increases plus new abilities). Build creature dwellings in this priority order: tier 1-3 upgrades first, tier 4-5 mid-game, tier 6-7 late game. The most expensive units are not always the best — a full stack of upgraded Swordsmen will outperform a half-stack of un-upgraded Cavalry in most situations.
        </p>

        <h2>Combat Fundamentals</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Olden Era combat is turn-based and tactical. Units act in Initiative order — higher initiative means acting first each round. Hive units consistently have the highest initiative. Position your units carefully: ranged units and spellcasters should stay behind durable frontline units. Use terrain to your advantage — forests provide cover, hills grant elevation bonuses, and native terrain (your faction&apos;s preferred environment) provides combat bonuses.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Counter-attacks are a critical mechanic. Each unit can only counter-attack once per turn (unless it has a special ability). Bait enemy counter-attacks with cheap or expendable units before committing your heavy hitters. This simple tactic alone can swing the outcome of evenly-matched battles. Heroes contribute to combat through spells and Focus Point abilities — never let your hero stand idle during battle. Every turn, your hero should be casting a spell, using a Focus Point ability, or attacking.
        </p>

        <h2>Focus Points Explained</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Focus Points (FP) are Olden Era&apos;s defining combat innovation. Heroes generate FP each turn based on their stats and skills. These points can be spent on powerful hero abilities — unique actions that are separate from regular spells and attacks. Focus Point abilities include direct damage, unit buffs, enemy debuffs, battlefield manipulation, and summoning. Managing your FP economy is just as important as managing mana.
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Don&apos;t spend FP the moment you have enough. Save them for critical moments: when you need to eliminate a high-value enemy unit, save a dying ally, or break through enemy defenses. A well-timed FP ability can turn a losing battle into a decisive victory. Grove heroes generate FP the fastest, making them excellent at chaining multiple FP abilities in a single battle. New players often forget FP exists — check your FP bar at the start of every combat turn.
        </p>

        <h2>Common Mistakes to Avoid</h2>
        <div className="grid-cards" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>❌ Skipping the Second Hero</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Not recruiting a second hero on turn one is the single biggest beginner mistake. A second hero doubles your map presence, resource gathering, and scouting. The gold cost is trivial compared to the value gained. Always recruit on turn one.</p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>❌ Building Military Before Economy</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Building creature dwellings before your Town Hall and resource structures starves your economy. Gold compounds over time — every turn without upgraded economy buildings is lost gold. Economy first, military second.</p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>❌ Ignoring the Skill Tree</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Picking skills randomly will cripple your hero by mid-game. Plan your build from level one. Choose a primary specialization (Combat, Magic, or Adventure) and commit. Each skill point spent on a skill you won&apos;t use is wasted potential.</p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>❌ Fighting Unwinnable Battles</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Losing units to neutral stacks is never worth it. If the battle preview shows you&apos;ll lose significant forces, skip it or return later with reinforcements. Neutral creatures don&apos;t move — they&apos;ll still be there when you&apos;re stronger.</p>
          </div>
        </div>

        <h2>Next Steps After This Guide</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          Once you&apos;ve mastered these fundamentals, dive deeper into faction-specific strategies on the Factions page. Study hero synergies on the Heroes page. Learn advanced combat mechanics in the Combat guide. And most importantly — play. Olden Era rewards experience. Every game teaches you something new about unit interactions, map layouts, and strategic timing. The journey from beginner to veteran is long but deeply satisfying.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
          <a href="/factions" className="btn-primary" style={{ textDecoration: 'none' }}>Explore Factions</a>
          <a href="/heroes" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '2px solid var(--color-accent)', color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}>View Heroes</a>
          <a href="/combat" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '2px solid var(--color-accent)', color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}>Combat Guide</a>
        </div>
      </div>
    </>
  );
}
