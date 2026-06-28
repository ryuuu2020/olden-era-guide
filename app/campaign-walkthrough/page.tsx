export const metadata = {
  title: "Olden Era Campaign Walkthrough — All Chapters (2026)",
  description: "Complete Olden Era campaign walkthrough. Chapter by chapter strategy guide, boss battles, and how to unlock all secret missions.",
};

export default function CampaignWalkthroughPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Olden Era Campaign Walkthrough</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Chapter 1: The Beginning</h2>
            <p className="text-gray-300 leading-relaxed">Chapter 1 introduces core mechanics through 5 tutorial-adjacent missions. Each mission has a primary objective (defeat enemies or capture flags) and a secondary objective (complete in X turns or take no casualties). Completing secondary objectives unlocks bonus rewards and contributes to the Chapter 1 S-rank score needed to access the secret bonus mission.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Chapter 2-3: Strategy</h2>
            <p className="text-gray-300 leading-relaxed">Chapters 2-3 introduce terrain advantages and weather effects. Position ranged units on high ground for +25% accuracy. Rain reduces cavalry charge bonus by 50% and makes ice terrain slippery — adjust your formation based on the weather forecast shown at mission start. These chapters reward patience over aggression — take positions, don't chase.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Chapter 4-5: Advanced Tactics</h2>
            <p className="text-gray-300 leading-relaxed">Chapters 4-5 feature multi-faction battles where you can sometimes turn enemy factions against each other. In missions with 3+ factions, focus on threatening one faction strongly — the AI logic will sometimes redirect attention to the more threatening enemy, giving you time to recover. Use diplomacy items discovered in Chapter 3 to temporarily neutralize one faction while you defeat another.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-yellow-400 mb-3">Secret Missions</h2>
            <p className="text-gray-300 leading-relaxed">Secret missions unlock by achieving S-rank on specific chapters (1, 3, and 5). They feature unique story content and the best item drops in the game. Secret Mission 1 gives the only source of Legendary Weapon shards. Plan your main campaign runs around the S-rank requirements — it's far harder to go back and earn S-rank on a chapter than to achieve it on the first playthrough.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-yellow-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about chapter 1: the beginning in Olden Era?</h3>
                <p className="text-gray-300 leading-relaxed">Chapter 1 introduces core mechanics through 5 tutorial-adjacent missions. Each mission has a primary objective (defeat enemies or capture flags) and a secondary objective (complete in X turns or take ...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about chapter 2-3: strategy in Olden Era?</h3>
                <p className="text-gray-300 leading-relaxed">Chapters 2-3 introduce terrain advantages and weather effects. Position ranged units on high ground for +25% accuracy. Rain reduces cavalry charge bonus by 50% and makes ice terrain slippery — adjust ...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about chapter 4-5: advanced tactics in Olden Era?</h3>
                <p className="text-gray-300 leading-relaxed">Chapters 4-5 feature multi-faction battles where you can sometimes turn enemy factions against each other. In missions with 3+ factions, focus on threatening one faction strongly — the AI logic will s...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
