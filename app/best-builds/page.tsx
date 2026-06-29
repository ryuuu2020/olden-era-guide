import Link from 'next/link';

export const metadata = {
  title: "Olden Era Best Builds — Hero Build Guides & Skill Optimization (2026)",
  description: "Best hero builds for Heroes of Might and Magic: Olden Era. Skill tree paths, artifact choices, spell combos, and faction-specific build guides for optimal gameplay.",
};

const BUILD_TIER_LIST = [
  { tier: 'S', hero: 'Temple Knight (Might)', skills: 'Leadership, Offense, Defense, Light Magic', artifacts: 'Lion Shield, Angel Wings, Crown of Courage', spells: 'Bless, Divine Strength, Resurrection', description: 'The ultimate front-line commander. Templar Knight with Might focus provides unmatched survivability and army buffs. Leadership boosts morale and initiative on all units, while Light Magic offers sustain through Bless and healing.' },
  { tier: 'S', hero: 'Necropolis Necromancer (Magic)', skills: 'Necromancy, Dark Magic, Summoning, Intelligence', artifacts: 'Amulet of the Undertaker, Cloak of the Undead King, Staff of the Netherworld', spells: 'Raise Dead, Vampiric Touch, Curse', description: 'The quintessential Necropolis build. Necromancy skill raises slain enemies as skeletons, scaling exponentially with skill level. Combined with Dark Magic debuffs, this build can snowball out of control by mid-game.' },
  { tier: 'A', hero: 'Sylvan Ranger (Might)', skills: 'Archery, Logistics, Nature Magic, Luck', artifacts: 'Bow of the Elf King, Boots of the Forest, Ring of Vitality', spells: 'Precision, Fortune, Haste', description: 'Ranged powerhouse build. Archery skill maximizes the Sylvan faction’s ranged units, while Logistics ensures first strike on the adventure map. Nature Magic provides terrain advantage and healing.' },
  { tier: 'A', hero: 'Dungeon Warlock (Magic)', skills: 'Destruction Magic, Sorcery, Intelligence, Earth Magic', artifacts: 'Orb of the Dragon, Spellbinder’s Hat, Ring of Mana', spells: 'Armageddon, Implosion, Meteor Shower', description: 'Pure spell damage build. Dungeon Warlocks have the highest spell power potential in Olden Era. Destruction Magic paired with Sorcery for reduced mana costs lets you chain-cast devastating spells.' },
  { tier: 'A', hero: 'Hive Swarmlord (Might)', skills: 'Tactics, Offense, War Machines, Logistics', artifacts: 'Swarm Banner, Carapace Armor, Boots of Speed', spells: 'Haste, Slow, Stoneskin', description: 'Aggressive tempo build. The Hive faction thrives on fast, overwhelming attacks. Tactics skill lets you reposition before combat, while War Machines provide siege support.' },
  { tier: 'B', hero: 'Temple Cleric (Magic)', skills: 'Light Magic, Intelligence, Scholar, Diplomacy', artifacts: 'Holy Grail, Robe of the Guardian, Ring of Light', spells: 'Prayer, Heal, Mass Bless', description: 'Support-focused magic build. Best as a secondary hero accompanying a main army. Scholar transfers spells between heroes, and Diplomacy reduces neutral creature aggression.' },
  { tier: 'B', hero: 'Sylvan Druid (Magic)', skills: 'Nature Magic, Intelligence, Mysticism, Scholar', artifacts: 'Staff of the Grove, Circlet of Wisdom, Bag of Endless Herbs', spells: 'Summon Treant, Regeneration, Quicksand', description: 'Terrain control and summoning build. Nature Magic summons battlefield obstacles and creatures that disrupt enemy formations. Best paired with a Sylvan Ranger main hero.' },
  { tier: 'B', hero: 'Dungeon Overlord (Might)', skills: 'Defense, Earth Magic, Resistance, Logistics', artifacts: 'Dragon Scale Armor, Shield of the Depths, Boots of Levitation', spells: 'Shield, Stoneskin, Anti-Magic', description: 'Durable hybrid build. Sacrifices spell damage potential for battlefield survivability. Earth Magic defensive spells combined with high Defense make this hero a brick wall.' },
];

const SYNERGY_MATRIX = [
  { hero: 'Temple Knight', pairedSkill: 'Light Magic + Leadership', effect: 'Blessed units gain +3 Attack and +3 Defense for the battle duration', priority: 'High' },
  { hero: 'Necromancer', pairedSkill: 'Necromancy + Dark Magic', effect: 'Raised skeletons benefit from Curse and Weakness debuffs on enemies', priority: 'Essential' },
  { hero: 'Sylvan Ranger', pairedSkill: 'Archery + Nature Magic', effect: 'Ranged units deal 50% more damage on Forest terrain', priority: 'High' },
  { hero: 'Dungeon Warlock', pairedSkill: 'Destruction + Sorcery', effect: 'Reduces all Destruction spell costs by 30%', priority: 'Essential' },
  { hero: 'Hive Swarmlord', pairedSkill: 'Tactics + Offense', effect: 'Units get +2 Speed and +10% damage on first combat turn', priority: 'High' },
  { hero: 'Temple Cleric', pairedSkill: 'Light Magic + Intelligence', effect: 'Healing spells restore 50% more HP and grant temporary HP shield', priority: 'Medium' },
  { hero: 'Sylvan Druid', pairedSkill: 'Nature Magic + Summoning', effect: 'Summoned creatures persist for 3 additional turns', priority: 'Medium' },
  { hero: 'Dungeon Overlord', pairedSkill: 'Defense + Earth Magic', effect: 'Defensive spells provide permanent +4 Defense bonus for the battle', priority: 'Medium' },
];

function getTierColor(tier: string): string {
  switch (tier) {
    case 'S': return 'text-amber-400';
    case 'A': return 'text-blue-400';
    case 'B': return 'text-green-400';
    default: return 'text-ink-faded';
  }
}

export default function BestBuildsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Olden Era Best Builds — Hero Build Guides &amp; Skill Optimization</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Every faction in Heroes of Might and Magic: Olden Era offers distinct hero classes, each with unique skill trees, preferred spell schools, and optimal artifact loadouts. Your hero build determines not just how you fight, but how you explore the adventure map, develop your towns, and counter enemy strategies. This guide covers the best builds for every faction, ranked by effectiveness, with detailed skill paths, artifact recommendations, and spell combos so you can dominate from the early game through the late game.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Understanding Hero Skills in Olden Era</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Hero skill trees in Olden Era follow the classic Might and Magic structure but with expanded depth. Each hero has a primary class (Might or Magic) that determines starting skills and stat growth rates. Might heroes gain more Attack and Defense per level, while Magic heroes gain more Spell Power and Knowledge. The skill system uses a tiered mastery system: Basic, Advanced, and Expert — each level unlocks new abilities and amplifies existing bonuses.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              When building your hero, you must balance between faction-specific skills (Necromancy for Necropolis, Archery for Sylvan, etc.) and universal skills (Logistics, Intelligence, Pathfinding). Universal skills are valuable on any hero but do not provide the same multiplicative bonuses that faction skills offer. A general rule: prioritize one faction-defining skill to Expert, one universal support skill to Advanced, and fill remaining slots based on your playstyle.
            </p>
            <p className="text-ink-light leading-relaxed">
              Skill synergy is the most important concept in Olden Era build crafting. Certain skill combinations produce effects far stronger than each skill individually. The classic example is Necromancy + Dark Magic on Necropolis heroes, where skeletons raised through Necromancy benefit from Dark Magic debuffs applied to living enemies. Understanding these synergies is the difference between a functional build and an optimized one.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hero Build Tier List</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              This tier list ranks each faction&apos;s optimal hero builds based on overall power level, consistency across different maps, and win rate in both PvE campaigns and skirmish mode. S-tier builds can carry entire games single-handedly, A-tier requires some setup but pays off enormously, and B-tier builds are viable but more situational or map-dependent.
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Hero Build</th>
                    <th>Key Skills</th>
                    <th>Artifacts</th>
                    <th>Playstyle</th>
                  </tr>
                </thead>
                <tbody>
                  {BUILD_TIER_LIST.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <span className={`font-display text-lg font-bold ${getTierColor(item.tier)}`}>
                          {item.tier}
                        </span>
                      </td>
                      <td className="font-semibold text-ink text-sm">{item.hero}</td>
                      <td className="text-ink-light text-sm">{item.skills}</td>
                      <td className="text-ink-faded text-xs">{item.artifacts}</td>
                      <td className="text-ink-light text-sm">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hero-Skill Synergy Matrix</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              This matrix maps the most powerful skill synergies for each hero class. These combinations should be prioritized when leveling up, as they define the core power spikes of each build. Note that some synergies require both skills at Expert level to activate their full effects.
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Hero Class</th>
                    <th>Synergy Pair</th>
                    <th>Combined Effect</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {SYNERGY_MATRIX.map((row, i) => (
                    <tr key={i}>
                      <td className="font-semibold text-ink text-sm">{row.hero}</td>
                      <td className="text-ink-light text-sm">{row.pairedSkill}</td>
                      <td className="text-ink-light text-sm">{row.effect}</td>
                      <td>
                        <span className={
                          row.priority === 'Essential' ? 'text-amber-400 font-semibold' :
                          row.priority === 'High' ? 'text-blue-400' :
                          'text-green-400'
                        }>
                          {row.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Artifact Selection Strategy</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Artifacts in Olden Era come in four rarities — Minor, Major, Relic, and Artifact — and can be found on the adventure map, purchased from artifact merchants, or obtained by defeating neutral creature stacks guarding treasure. A fully equipped hero can carry up to nine artifacts across weapon, shield, helm, armor, cloak, boots, ring, necklace, and miscellaneous slots.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              For Might heroes, prioritize artifacts that boost primary stats (Attack and Defense) and movement points. The Lion Shield (+4 Defense) and Boots of Speed (+2 Movement) are universally strong picks for any Might-focused build. For Magic heroes, artifacts that increase Spell Power and Knowledge take priority. The Orb of the Dragon (+6 Spell Power) is the single most impactful artifact for Dungeon Warlocks and Necropolis spellcasters.
            </p>
            <p className="text-ink-light leading-relaxed">
              Set artifacts — artifacts that provide bonus effects when multiple pieces from the same set are equipped — are worth pursuing even if individual pieces are weaker than standalone alternatives. For example, the Angel Set (Angel Wings + Crown of Courage + Sword of Judgment) grants the Angelic Guardian ability that resurrects a portion of fallen units after battle, which can single-handedly change the outcome of otherwise unwinnable fights.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Spell School Priorities by Faction</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Each faction in Olden Era has natural affinities for specific magic schools. Temple heroes excel with Light Magic (blesses, healing, resurrection), Necropolis with Dark Magic (curses, death spells, necromancy), Sylvan with Nature Magic (terrain manipulation, summons, regeneration), Dungeon with Destruction Magic (direct damage spells), and Hive with a balanced mix.
            </p>
            <p className="text-ink-light leading-relaxed mb-4">
              When building your hero, invest in your faction&apos;s primary magic school first — reaching Expert level unlocks the most powerful spells in that school. Secondary magic schools should only be pursued once your primary school is at Expert, or if you have a specific synergy goal in mind. A common mistake among new players is spreading skill points across multiple magic schools too early, resulting in a hero that can cast many weak spells but no game-changing ones.
            </p>
            <p className="text-ink-light leading-relaxed">
              Intelligence is the universal skill that benefits all spellcasting heroes regardless of faction. At Expert level, Intelligence doubles your maximum mana pool and provides mana regeneration each turn. For any Magic-focused hero, Intelligence should be the second or third skill you take to Expert, right after your primary magic school.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the most powerful hero build in Olden Era right now?</h3>
                <p className="text-ink-light leading-relaxed">
                  The Necropolis Necromancer with Necromancy and Dark Magic at Expert level is widely regarded as the strongest build in the current patch. The ability to convert every slain enemy stack into skeletons creates an unstoppable snowball effect that few other builds can match. However, this build is weaker on smaller maps where there are fewer neutral stacks to farm before engaging enemy heroes. On larger maps with abundant neutral creatures, the Necromancer is virtually unbeatable in the hands of a skilled player.
                </p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I focus on Might or Magic for my main hero?</h3>
                <p className="text-ink-light leading-relaxed">
                  It depends on your faction and playstyle, but as a general rule: Might heroes are stronger in the early game due to their combat stat bonuses, while Magic heroes scale better into the late game as their spell arsenal expands. For Temple and Hive factions, a Might-focused main hero with a Magic secondary hero is optimal. For Dungeon and Necropolis, a Magic-focused main hero with Might support is preferred. Sylvan is the most flexible faction, with both Might Rangers and Magic Druids being equally viable in different situations.
                </p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <h3 className="font-display text-lg font-semibold text-ink mb-2">How many skills should I aim to have at Expert level?</h3>
                <p className="text-ink-light leading-relaxed">
                  A well-built hero in Olden Era should have two to three skills at Expert level by late game, with the remaining slots at Advanced or Basic. Attempting to get four or more skills to Expert spreads your skill points too thin and delays critical power spikes. The ideal progression is: one skill to Expert by level 10, a second skill to Expert by level 15, and a third by level 20 if the game continues that long. Quality over quantity — Expert-level skills provide exponentially more value than multiple Basic skills.
                </p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026 — Based on Olden Era Early Access gameplay data and community build testing.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/heroes" className="text-accent hover:underline">All Heroes &amp; Classes</Link></li>
              <li><Link href="/tier-list" className="text-accent hover:underline">Complete Hero Tier List</Link></li>
              <li><Link href="/skills" className="text-accent hover:underline">Skill Tree Database</Link></li>
              <li><Link href="/spells" className="text-accent hover:underline">Spell Guide &amp; Rankings</Link></li>
              <li><Link href="/artifacts" className="text-accent hover:underline">Artifact Collection Guide</Link></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Build Priorities</h3>
            <ul className="space-y-2 text-ink-light text-sm">
              <li>Prioritize faction-defining skills to Expert first.</li>
              <li>Intelligence is the best universal skill for magic heroes.</li>
              <li>Logistics is the best universal skill for might heroes.</li>
              <li>Aim for 2-3 Expert skills by late game, not more.</li>
              <li>Set artifacts provide bonuses worth pursuing even if individual pieces are weaker.</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
