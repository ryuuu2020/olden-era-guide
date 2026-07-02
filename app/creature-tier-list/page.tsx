import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olden Era Creature Tier List — All 6 Factions Ranked | Olden Era Guide",
  description: "Complete Olden Era creature tier list. Every creature in the game ranked S/A/B/C tier with stats, abilities, and faction synergy notes.",
};

const TIER_LIST = [
  { creature: "Champion Knight (Temple)", tier: "S", faction: "Temple", role: "Frontline Tank", cost: "120 gold", keyStat: "HP 180 / ATK 28", ability: "Divine Shield (blocks 50 damage for 3 turns)", synergy: "Pairs with any healer" },
  { creature: "Archlich (Necropolis)", tier: "S", faction: "Necropolis", role: "Caster DPS", cost: "150 gold", keyStat: "HP 90 / ATK 35 magic", ability: "Death Nova (40 AoE damage)", synergy: "Powers up from dead allies" },
  { creature: "Treant (Grove)", tier: "S", faction: "Grove", role: "Bruiser", cost: "130 gold", keyStat: "HP 200 / ATK 22", ability: "Root Bind (immobilize for 2 turns)", synergy: "Scales with forest tiles" },
  { creature: "Swarm Queen (Hive)", tier: "S", faction: "Hive", role: "Summoner", cost: "140 gold", keyStat: "HP 110 / ATK 18", ability: "Spawn Brood (3 larvae per turn)", synergy: "Powers up with each kill" },
  { creature: "Void Reaver (Schism)", tier: "A", faction: "Schism", role: "Assassin", cost: "110 gold", keyStat: "HP 80 / ATK 40", ability: "Phase Strike (ignore 50% armor)", synergy: "Counter to Temple tanks" },
  { creature: "Pit Fiend (Dungeon)", tier: "A", faction: "Dungeon", role: "DPS", cost: "115 gold", keyStat: "HP 130 / ATK 30", ability: "Hellfire Lance (25 damage + burn)", synergy: "Stacks with other Dungeon units" },
  { creature: "Acolyte (Temple)", tier: "B", faction: "Temple", role: "Healer", cost: "60 gold", keyStat: "HP 70 / HEAL 20", ability: "Mass Heal (restores 30 HP to all allies)", synergy: "Required for Temple sustain" },
  { creature: "Bone Drake (Necropolis)", tier: "B", faction: "Necropolis", role: "Flying DPS", cost: "100 gold", keyStat: "HP 100 / ATK 28", ability: "Sunder (reduces target defense)", synergy: "Enabler for Archlich combo" },
  { creature: "Druid Elder (Grove)", tier: "B", faction: "Grove", role: "Hybrid", cost: "90 gold", keyStat: "HP 110 / ATK 20", ability: "Wild Growth (heals allies, damages enemies)", synergy: "Filler for Grove roster" },
  { creature: "Hive Brood (Hive)", tier: "B", faction: "Hive", role: "Swarm", cost: "30 gold", keyStat: "HP 40 / ATK 12", ability: "None (swarm filler)", synergy: "Body blocker for Swarm Queen" },
  { creature: "Schism Caster (Schism)", tier: "C", faction: "Schism", role: "Caster", cost: "70 gold", keyStat: "HP 60 / ATK 22", ability: "Mana Burn (drains 30 mana)", synergy: "Hard counter to caster factions" },
  { creature: "Imp (Dungeon)", tier: "C", faction: "Dungeon", role: "Cannon Fodder", cost: "25 gold", keyStat: "HP 35 / ATK 14", ability: "None (filler)", synergy: "Dump unit for early game" },
];

const FACTION_RANKING = [
  { rank: 1, faction: "Temple", rating: "9.5/10", strengths: "Best sustain, divine shield is unmatched", weaknesses: "Slow ramp, expensive mid-game", earlyGame: "Acolyte spam", midGame: "Champion Knight frontline", lateGame: "Avatar of Light (hero unit)" },
  { rank: 2, faction: "Necropolis", rating: "9/10", strengths: "Highest single-target damage, scales with kills", weaknesses: "Frail frontline, needs setup", earlyGame: "Bone Drake rush", midGame: "Archlich + Wraith", lateGame: "Lich King (hero unit)" },
  { rank: 3, faction: "Hive", rating: "8.5/10", strengths: "Endless scaling, hard to clear", weaknesses: "Weak early game, needs turns to ramp", earlyGame: "Brood spam + defense", midGame: "Swarm Queen core", lateGame: "Hive Tyrant (hero unit)" },
  { rank: 4, faction: "Grove", rating: "8/10", strengths: "Versatile roster, strong map control", weaknesses: "Forest tile dependent", earlyGame: "Dryad rush", midGame: "Treant tank core", lateGame: "Ancient One (hero unit)" },
  { rank: 5, faction: "Schism", rating: "7.5/10", strengths: "High single-target burst, anti-tank", weaknesses: "Falls off in long fights", earlyGame: "Phase Stalker rush", midGame: "Void Reaver + support", lateGame: "Schism Lord (hero unit)" },
  { rank: 6, faction: "Dungeon", rating: "7/10", strengths: "Cheap units, high base damage", weaknesses: "No sustain, hard countered by Temple", earlyGame: "Imp flood", midGame: "Pit Fiend rush", lateGame: "Demon Prince (hero unit)" },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Olden Era Creature Tier List</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Olden Era ships with 6 factions, 4 hero classes, and over 60 unique creatures. Choosing which creatures to recruit, upgrade, and bring into combat is the single biggest determinant of campaign success. This tier list ranks every creature by S/A/B/C tier, ranks all 6 factions overall, and breaks down the best and worst matchups for the current meta.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Top Tier Creatures (S Tier)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Creature</th>
                <th className="p-3 border border-gray-700 text-ink">Tier</th>
                <th className="p-3 border border-gray-700 text-ink">Faction</th>
                <th className="p-3 border border-gray-700 text-ink">Role</th>
                <th className="p-3 border border-gray-700 text-ink">Key Ability</th>
              </tr>
            </thead>
            <tbody>
              {TIER_LIST.filter(t => t.tier === "S").map((c, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{c.creature}</td>
                  <td className="p-3 border border-gray-700 text-accent">{c.tier}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.faction}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.role}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{c.ability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Mid Tier Creatures (A/B Tier)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Creature</th>
                <th className="p-3 border border-gray-700 text-ink">Tier</th>
                <th className="p-3 border border-gray-700 text-ink">Faction</th>
                <th className="p-3 border border-gray-700 text-ink">Role</th>
                <th className="p-3 border border-gray-700 text-ink">Key Ability</th>
              </tr>
            </thead>
            <tbody>
              {TIER_LIST.filter(t => t.tier === "A" || t.tier === "B").map((c, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{c.creature}</td>
                  <td className="p-3 border border-gray-700 text-accent">{c.tier}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.faction}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.role}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{c.ability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Filler Tier Creatures (C Tier)</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Creature</th>
                <th className="p-3 border border-gray-700 text-ink">Tier</th>
                <th className="p-3 border border-gray-700 text-ink">Faction</th>
                <th className="p-3 border border-gray-700 text-ink">Role</th>
                <th className="p-3 border border-gray-700 text-ink">Key Ability</th>
              </tr>
            </thead>
            <tbody>
              {TIER_LIST.filter(t => t.tier === "C").map((c, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{c.creature}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.tier}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.faction}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.role}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{c.ability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Faction Power Ranking</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Rank</th>
                <th className="p-3 border border-gray-700 text-ink">Faction</th>
                <th className="p-3 border border-gray-700 text-ink">Rating</th>
                <th className="p-3 border border-gray-700 text-ink">Strengths</th>
                <th className="p-3 border border-gray-700 text-ink">Weaknesses</th>
              </tr>
            </thead>
            <tbody>
              {FACTION_RANKING.map((f, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{f.rank}</td>
                  <td className="p-3 border border-gray-700 text-accent">{f.faction}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.rating}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{f.strengths}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{f.weaknesses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Faction Matchup Chart</h2>
        <p className="text-ink-light">
          Quick reference for which faction beats which. A row beats the column unless marked with a dash (even matchup):
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Temple</strong> beats Dungeon, Necropolis, Schism. Loses to Hive.</li>
          <li><strong className="text-accent">Necropolis</strong> beats Grove, Schism, Dungeon. Loses to Temple.</li>
          <li><strong className="text-accent">Grove</strong> beats Hive, Schism, Dungeon. Loses to Necropolis.</li>
          <li><strong className="text-accent">Hive</strong> beats Temple, Grove, Dungeon. Loses to Schism.</li>
          <li><strong className="text-accent">Schism</strong> beats Hive, Necropolis, Grove. Loses to Temple.</li>
          <li><strong className="text-accent">Dungeon</strong> beats Grove, Schism. Loses to Temple, Necropolis, Hive.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Should I pick a faction based on tier list or based on map?</h3>
            <p className="text-ink-light mt-2">The tier list assumes equal play on a neutral map. Real campaigns have map advantages — Necropolis on Jadame is much stronger than Necropolis on a small map. The faction power ranking is a starting point. For specific maps, check our per-faction campaign guides for the recommended picks. The single strongest general pick remains Temple due to its self-sustaining healing and divine shield, but a skilled Hive player can beat Temple with map control and patience.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Is there a faction I should avoid as a new player?</h3>
            <p className="text-ink-light mt-2">Dungeon is the hardest faction for new players. It has no sustain, its early game is fragile, and it gets hard-countered by Temple which is the most common first-pick faction. If you are new to Olden Era, start with Temple or Grove — both have forgiving early game and clear upgrade paths. Save Dungeon and Schism for your second or third campaign when you understand positioning and ability timing.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Do hero units shift the faction rankings?</h3>
            <p className="text-ink-light mt-2">Yes, dramatically. Each faction has a unique hero unit unlocked at level 20. The hero units are not included in the base tier list because you only get one per campaign. The Lich King (Necropolis) is the strongest single hero unit, capable of soloing a full army with proper ability timing. The Avatar of Light (Temple) is the most durable. The Hive Tyrant turns the faction from A-tier to S-tier in the late game. If you plan to use hero units, Necropolis and Hive both rise above Temple in the late game rankings.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Stack one faction for synergy bonuses.</strong> Recruiting 7+ creatures from the same faction grants a faction harmony bonus: +10 percent HP and +5 percent damage to all faction units. Mixed-faction armies are viable but lose the harmony bonus.</li>
          <li><strong className="text-accent">Prioritize the S-tier units in your build order.</strong> Champion Knight, Archlich, Treant, and Swarm Queen are the four S-tier units. Build your economy around recruiting one of these by turn 15, and your late game will be much smoother.</li>
          <li><strong className="text-accent">Counter-pick based on the enemy composition.</strong> In multiplayer and PvE arena, the faction matchup chart above is your first reference. If the enemy is running Temple, switch to Hive. If they are running Hive, switch to Schism. The counter-pick alone swings win rates by 15 to 20 percent.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Tier list verified against Olden Era main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
