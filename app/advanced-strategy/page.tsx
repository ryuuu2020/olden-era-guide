export const metadata = {
  title: "Olden Era Advanced Strategy — Combat Tactics, Map Control & Late Game (2026)",
  description:
    "Advanced Olden Era strategy guide covering combat tactics, faction map control, late-game optimization, and PvP meta. Master every aspect of the game beyond the basics.",
};

export default function AdvancedStrategyPage() {
  const matchupMatrix = [
    { faction: 'Temple', strong: 'Necropolis, Dungeon (Holy damage)', weak: 'Schism (Magic resist)', neutral: 'Grove, Hive', keyTactic: 'Aggressive early expansion. Temple thrives in the first 20 turns before magic factions scale. Rush Holy Warriors and siege enemy towns before they build defenses.' },
    { faction: 'Necropolis', strong: 'Dungeon, Grove (Undead immunity)', weak: 'Temple (Holy counter)', neutral: 'Hive, Schism', keyTactic: 'Snowball through unit recycling. Every enemy killed becomes a Skeleton. Play defensive early, then overwhelm mid-game when your army doubles enemy size.' },
    { faction: 'Grove', strong: 'Dungeon, Hive (Nature spells)', weak: 'Necropolis (Undead immune to poison)', neutral: 'Temple, Schism', keyTactic: 'Turtle and tech. Grove has the best late-game economy. Build Treants as walls, stack Nature buffs, and win through resource attrition.' },
    { faction: 'Schism', strong: 'Temple, Hive (Magic burst)', weak: 'Dungeon (Magic resist)', neutral: 'Necropolis, Grove', keyTactic: 'Mobile harassment. Schism units are fragile but fast. Split enemy attention with multi-pronged attacks. Never fight fair — hit resource lines, not armies.' },
    { faction: 'Hive', strong: 'Grove (Swarm overwhelms single targets)', weak: 'Schism (AoE magic) / Temple (Holy AoE)', neutral: 'Necropolis, Dungeon', keyTactic: 'Swarm economy. Produce 2x more units than any faction. Accept losses — every unit is replaceable. Win by exhausting enemy mana and spell cooldowns.' },
    { faction: 'Dungeon', strong: 'Schism (Magic resist + ambush)', weak: 'Temple, Grove (No early pressure)', neutral: 'Necropolis, Hive', keyTactic: 'Ambush warfare. Dungeon units are weak in open field but devastating from fog of war. Control vision, bait enemies into traps, and fight on your terms only.' },
  ];

  const lateGamePrio = [
    { turn: '30-40', priority: 'Secure 2nd resource node', action: 'Expand territory to claim second gold mine or mana crystal. A single resource node cannot sustain late-game unit production. Build Outpost or Fort on captured node.', risk: 'Overextending before army is large enough to defend two fronts' },
    { turn: '40-50', priority: 'Max tier-3 research', action: 'Complete all tier-3 faction tech. Temple: Holy Avenger. Necropolis: Lich King. Grove: Ancient Treant. Schism: Archmage. Hive: Queen. Dungeon: Shadow Dragon.', risk: 'Enemy aggression while tech structures are building' },
    { turn: '50-60', priority: 'Build ultimate army', action: 'Transition from mixed army to faction-specialized composition. Temple: 3 Holy Warriors + 2 Priests. Necropolis: 1 Lich + 4 Skeletons + 1 Vampire. Grove: 2 Treants + 3 Archers + 1 Druid.', risk: 'Counter-composition by opponent during transition' },
    { turn: '60+', priority: 'Siege enemy capital', action: 'Commit all forces. Bring 2 siege engines minimum. Temple/Grove: battering rams. Schism/Dungeon: magic bombardment. Necropolis: Skeleton waves. Hive: unlimited Swarm respawn.', risk: 'Counter-attack on your undefended base — leave at least 2 defensive units' },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Olden Era Advanced Strategy</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Once you've mastered the basics of Olden Era, the real game begins. Advanced strategy separates the top 5% of players from everyone else. This guide covers faction matchups at the highest level, map control theory, late-game optimization, and the subtle mechanics that turn a good player into a great one. Whether you're climbing the ranked ladder or tackling the hardest campaign difficulties, these principles will elevate your play.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Faction Matchup Matrix (Advanced)</h2>
            <p className="text-ink-light mb-4">Understanding matchups at the strategic level — not just unit counters — is what wins games. Each faction has a distinct tempo and power curve. Exploit your opponent's timing windows while protecting your own.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead><tr><th>Faction</th><th>Strong vs</th><th>Weak vs</th><th>Power Spike</th><th>Key Tactic</th></tr></thead>
                <tbody>
                  {matchupMatrix.map((m) => (
                    <tr key={m.faction}>
                      <td className="font-medium">{m.faction}</td>
                      <td className="text-emerald-400 text-sm">{m.strong}</td>
                      <td className="text-red-400 text-sm">{m.weak}</td>
                      <td className="text-ink-faded text-sm">{m.neutral}</td>
                      <td className="text-ink-light text-sm">{m.keyTactic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Late-Game Priority Order (Turns 30+)</h2>
            <p className="text-ink-light mb-4">The late game is about converting advantage into victory. Many players stall at turns 40-60 because they don't know what to prioritize. Follow this roadmap.</p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead><tr><th>Turns</th><th>Priority</th><th>Action</th><th>Risk</th></tr></thead>
                <tbody>
                  {lateGamePrio.map((p) => (
                    <tr key={p.turn}>
                      <td className="font-medium">{p.turn}</td>
                      <td className="font-medium">{p.priority}</td>
                      <td className="text-ink-light text-sm">{p.action}</td>
                      <td className="text-red-400/80 text-sm">{p.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Map Control Fundamentals</h2>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Vision Economy</h3>
            <p className="text-ink-light mb-3">Vision is the most underrated resource in Olden Era. Place Scouts on every high-ground tile within 10 hexes of your base. Knowing enemy movement 2 turns before they arrive lets you reposition or ambush. Dungeon faction benefits most — their ambush bonus doubles damage from fog of war.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Resource Denial</h3>
            <p className="text-ink-light mb-3">Don't just capture nodes — deny them. A neutral gold mine does nothing. A gold mine you can't hold but the enemy also can't use is a tactical win. Use fast units (Schism Scouts, Hive Drones) to harass enemy resource lines. Even 2-3 turns of disrupted gold income can delay their tier-3 tech by 10+ turns.</p>
            <h3 className="font-display text-xl font-medium text-ink mb-2">Chokepoint Fortification</h3>
            <p className="text-ink-light">Identify natural chokepoints on the map — bridges, mountain passes, narrow corridors. Fortify these with your tankiest units (Temple Paladins, Grove Treants) and ranged support behind them. One well-defended chokepoint can hold off an army 3x your size. This is especially critical for late-game Necropolis and Grove who need time to scale.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">Which faction is best for climbing ranked?</h3>
                <p className="text-ink-light">Temple and Necropolis dominate the current meta. Temple's early aggression punishes greedy play — great for climbing through lower ranks where players over-invest in economy. Necropolis scales hardest into late game and wins most mirror matches. At the highest ranks, Schism's mobility is favored by top players who can micro-manage multi-pronged attacks.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">When should I abandon my base instead of defending it?</h3>
                <p className="text-ink-light">Abandon when: (1) enemy army is 2x your size with siege engines already built, (2) defending would cost 80%+ of your army, and (3) you have a secondary base established. Relocate your hero and key units, leave a skeleton garrison as sacrifice, and rebuild elsewhere. Losing a base costs 5-10 turns; losing your army costs the game.</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium text-ink mb-1">How do I handle the Hive swarm in late game?</h3>
                <p className="text-ink-light">Hive's late-game strength is unit spam — they can lose 10 units and replace them in 2 turns. Counter with: (1) AoE damage — Temple's Holy Nova, Schism's Firestorm wipe entire swarms, (2) targeting the Hive Queen — kill her and swarm production stops, (3) mana denial — Schism's Mana Burn prevents respawn. Never fight Hive in an attrition war; you will lose.</p>
              </div>
            </div>
          </section>
          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Meta analysis based on current ranked ladder data.</p>
        </div>
        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/best-builds" className="text-accent hover:underline">Best Builds &amp; Loadouts</a></li>
              <li><a href="/combat" className="text-accent hover:underline">Combat System Guide</a></li>
              <li><a href="/factions" className="text-accent hover:underline">Faction Guide</a></li>
              <li><a href="/campaign-walkthrough" className="text-accent hover:underline">Campaign Walkthrough</a></li>
              <li><a href="/tier-list" className="text-accent hover:underline">Hero Tier List</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
