import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olden Era Magic System Guide — All Spell Schools, Focus Points & Synergies",
  description: "Complete Olden Era magic system guide. All four spell schools compared, Focus Points mechanics, optimal spell combos, and hero magic specialization paths for maximum combat effectiveness.",
};

const SPELL_SCHOOLS = [
  {
    school: "Light Magic",
    focus: "Buffing and healing allied units. Defensive utility.",
    signatureSpells: "Bless (attack buff), Haste (speed buff), Heal (HP restore), Resurrection (revive dead stack)",
    bestFaction: "Haven, Castle — human factions benefit most from Light buffs",
    playstyle: "Defensive and attrition-based. Outlast enemies with healing and buffed stats.",
  },
  {
    school: "Dark Magic",
    focus: "Debuffing enemies and direct damage. Offensive control.",
    signatureSpells: "Curse (damage debuff), Slow (speed debuff), Weakness (attack debuff), Vampiric Touch (lifesteal)",
    bestFaction: "Necropolis, Dungeon — dark-aligned factions gain synergy bonuses",
    playstyle: "Control and drain. Weaken enemies before engagement, then mop up with buffed units.",
  },
  {
    school: "Destruction Magic",
    focus: "Pure damage output. Area and single-target destruction spells.",
    signatureSpells: "Fireball (AoE damage), Lightning Bolt (single-target burst), Ice Ring (AoE + slow), Armageddon (massive global damage)",
    bestFaction: "Any faction with a magic-focused hero — Destruction spells work universally",
    playstyle: "Aggressive burst. Eliminate enemy threats before they can act. High risk, high reward.",
  },
  {
    school: "Summoning Magic",
    focus: "Creating temporary units on the battlefield. Map utility spells.",
    signatureSpells: "Summon Elemental (temporary tank), Phantom Forces (clone a friendly stack), Earthquake (siege damage), Town Portal (instant travel)",
    bestFaction: "Academy, Conflux — summoning-specialized factions",
    playstyle: "Economy of action. Every summon spell creates an extra unit that takes a turn, effectively multiplying your army's actions per round.",
  },
];

const FOCUS_POINT_TIERS = [
  { tier: "Tier 1 (1 FP)", spellExamples: "Bless, Curse, Haste, Slow — basic buffs and debuffs", whenToUse: "Every turn when possible. Tier 1 spells are cheap and always useful. Do not end a turn with an unused Focus Point." },
  { tier: "Tier 2 (2 FP)", spellExamples: "Fireball, Lightning Bolt, Heal — moderate impact spells", whenToUse: "When a key enemy stack needs to be eliminated or a critical ally stack needs saving. Use deliberately, not automatically." },
  { tier: "Tier 3 (3 FP)", spellExamples: "Resurrection, Armageddon, Phantom Forces — game-changing spells", whenToUse: "These spells can single-handedly win battles. Save for decisive moments — do not waste Resurrection on a stack you can afford to lose." },
];

export default function MagicSystemPage() {
  return (
    <>
      <div className="hero-section">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Olden Era Magic System Guide</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Master the four schools of magic, Focus Points economy, and spell synergies.
          The right spell at the right moment wins battles that raw army strength cannot.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div className="faq-snippets">
          <details>
            <summary>Which magic school is best for beginners?</summary>
            <p>Light Magic is the most forgiving for new players. Bless and Haste are straightforward buffs with no downsides, and Heal keeps your army alive through mistakes. Start with Light, then branch into Destruction once you understand combat pacing. Dark and Summoning require more game knowledge to use effectively — leave those for your second or third playthrough.</p>
          </details>
          <details>
            <summary>How do Focus Points (FP) regenerate?</summary>
            <p>Focus Points regenerate at a base rate of 1 FP per turn. Certain hero skills, artifacts, and buildings (like the Mage Guild at level 3) increase this to 2 FP per turn. Some artifacts provide a one-time FP boost at the start of combat. Managing FP is the core skill of Olden Era magic — casting a Tier 3 spell costs 3 FP and leaves you without spells for three turns (at base regen), so timing is everything.</p>
          </details>
          <details>
            <summary>Can heroes learn spells from multiple schools?</summary>
            <p>Yes. Heroes are not locked into a single school. However, each school has its own skill tree, and spreading skill points across multiple schools means you will be mediocre at all of them. A common advanced strategy is to specialize in one school fully (max out the tree) and dip 3-4 points into a secondary school for one or two key spells. For example, Light main + Destruction dip for Fireball gives you both sustain and burst.</p>
          </details>
        </div>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem' }}>The Four Schools of Magic</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table className="parchment-table">
            <thead>
              <tr>
                <th>School</th>
                <th>Focus</th>
                <th>Signature Spells</th>
                <th>Best Faction</th>
                <th>Playstyle</th>
              </tr>
            </thead>
            <tbody>
              {SPELL_SCHOOLS.map((s, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 700 }}>{s.school}</td>
                  <td>{s.focus}</td>
                  <td style={{ fontSize: '0.9rem' }}>{s.signatureSpells}</td>
                  <td>{s.bestFaction}</td>
                  <td style={{ fontSize: '0.9rem' }}>{s.playstyle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Focus Points — The Core Resource</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
          Focus Points are the mana system of Olden Era. Every hero starts combat with 3 FP and regenerates 1 FP per turn. The decision of when to spend FP — and on which spell — is the single most impactful choice you make each turn. A hero with full FP and no plan is a hero that is not contributing.
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table className="parchment-table">
            <thead>
              <tr>
                <th>Cost Tier</th>
                <th>Spell Examples</th>
                <th>When to Use</th>
              </tr>
            </thead>
            <tbody>
              {FOCUS_POINT_TIERS.map((t, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 700 }}>{t.tier}</td>
                  <td style={{ fontSize: '0.9rem' }}>{t.spellExamples}</td>
                  <td style={{ fontSize: '0.9rem' }}>{t.whenToUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Spell Combo Synergies</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
          The most powerful magic strategies come from combining spells across turns. Here are the combos that competitive players use:
        </p>
        <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.5rem', lineHeight: 2.2, marginBottom: '2rem' }}>
          <li><strong>Haste + Bless + Attack:</strong> Cast Haste on your strongest melee stack (Turn 1), Bless on the same stack (Turn 2), then send it into the enemy backline. A hasted, blessed stack moves first, hits hard, and can often eliminate a key enemy unit before they act.</li>
          <li><strong>Curse + Slow + Focus Fire:</strong> Cast Curse on the enemy&apos;s strongest stack (reducing damage), then Slow on the same stack (reducing speed). The enemy stack is now weak and slow — you can ignore it and kill the rest of their army, then mop up the debuffed stack last.</li>
          <li><strong>Summon Elemental + Bless:</strong> Summon an Elemental in front of your army (Turn 1), then Bless it (Turn 2). A blessed Elemental is a credible threat that enemies must deal with, buying your real army extra turns to position and attack.</li>
          <li><strong>Fireball + Lightning Bolt:</strong> The burst combo. Fireball damages the entire enemy formation (Turn 1), then Lightning Bolt finishes the most damaged stack (Turn 2). This combo can eliminate two enemy stacks before they reach your front line.</li>
        </ul>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Magic Hero Build Archetypes</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
          Your hero&apos;s magic specialization defines their role. Here are the three most effective archetypes:
        </p>
        <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.5rem', lineHeight: 2.2, marginBottom: '2rem' }}>
          <li><strong>The Buffer (Light primary):</strong> Skill priority — Wisdom (FP regen) &gt; Light Magic Mastery &gt; Enlightenment (max FP pool). Play pattern: cast Bless or Haste every turn on your best stacks. Let your army do the damage. Ideal for beginners and army-heavy strategies.</li>
          <li><strong>The Nuker (Destruction primary):</strong> Skill priority — Sorcery (spell power) &gt; Destruction Magic Mastery &gt; Wisdom. Play pattern: save FP for 2-3 turns, then unleash Fireball + Lightning Bolt on the same turn (requires Enlightenment for 4+ max FP). Wipes enemy armies before melee starts. High risk — if your spells fail to kill, you have no backup plan.</li>
          <li><strong>The Controller (Dark primary, Summoning secondary):</strong> Skill priority — Dark Magic Mastery &gt; Summoning Magic (3 points) &gt; Wisdom. Play pattern: Curse the biggest threat, Slow the fastest threat, summon an Elemental to block, then pick off weakened enemies one by one. The most versatile archetype — good in every situation, great in none.</li>
        </ul>

        <p style={{ color: 'var(--color-text-muted)', marginTop: '3rem', fontSize: '0.85rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
          Last updated: July 1, 2026. Magic system mechanics verified against Olden Era current patch.
        </p>
      </div>
    </>
  );
}
