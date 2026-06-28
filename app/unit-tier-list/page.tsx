export const metadata = {
  title: "Olden Era Unit Tier List — Best Units (2026)",
  description: "Complete unit tier list for Olden Era. Best units for campaign and PvP, S-tier picks, and unit upgrade guide.",
};

export default function UnitTierListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Olden Era Unit Tier List</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">S-Tier Units</h2>
            <p className="text-gray-300 leading-relaxed">S-tier units in Olden Era have the best stat-to-cost ratios and the most versatile ability sets. These units perform well across all content types — campaign missions, skirmish battles, and player vs. player challenges. Prioritizing these units for upgrades provides the highest return on investment.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Infantry Units</h2>
            <p className="text-gray-300 leading-relaxed">Infantry form the backbone of any Olden Era army. S-tier infantry: Knight (heavy armor, high defense, excellent against ranged units), Berserker (highest attack speed, best at eliminating support units quickly), and Shield Bearer (taunt ability draws fire from more valuable units). Always field at least 3 infantry units to maintain frontline stability.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Ranged Units</h2>
            <p className="text-gray-300 leading-relaxed">Ranged units deal damage from safety but are vulnerable to cavalry charges and flanking. S-tier ranged: Longbowman (longest attack range, best sustained DPS), Crossbowman (armor-piercing bolts, excellent against heavy infantry), and Fire Archer (AoE attack that applies burning status to enemy clusters).</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Cavalry Units</h2>
            <p className="text-gray-300 leading-relaxed">Cavalry are the decisive strike force of your army — fast, high-damage, and capable of breaking enemy formations. Use cavalry to flank once your infantry has engaged the enemy front line. S-tier cavalry: Heavy Lancer (highest charge damage), Scout Rider (fastest movement, best at capturing objectives and eliminating artillery units), and Mounted Archer (mobile ranged harassment).</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-yellow-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about s-tier units in Olden Era?</h3>
                <p className="text-gray-300 leading-relaxed">S-tier units in Olden Era have the best stat-to-cost ratios and the most versatile ability sets. These units perform well across all content types — campaign missions, skirmish battles, and player vs....</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about infantry units in Olden Era?</h3>
                <p className="text-gray-300 leading-relaxed">Infantry form the backbone of any Olden Era army. S-tier infantry: Knight (heavy armor, high defense, excellent against ranged units), Berserker (highest attack speed, best at eliminating support unit...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about ranged units in Olden Era?</h3>
                <p className="text-gray-300 leading-relaxed">Ranged units deal damage from safety but are vulnerable to cavalry charges and flanking. S-tier ranged: Longbowman (longest attack range, best sustained DPS), Crossbowman (armor-piercing bolts, excell...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
