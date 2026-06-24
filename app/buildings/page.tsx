import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Town Buildings Guide",
  description: "Complete guide to town buildings in Heroes of Might and Magic: Olden Era. Learn about Town Hall upgrades, creature dwellings, resource buildings, and building priorities.",
};

export default function BuildingsPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <h1>Town Buildings Guide</h1>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Town buildings are the backbone of your faction's economy and military power in Olden Era. Every structure you construct contributes to your resource generation, creature recruitment pool, or magical capabilities. Understanding the building system is essential for efficient town development and maintaining a competitive edge over your opponents.
      </p>

      <h2>Building System Overview</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        Building in Olden Era follows a tier-based progression system. Most advanced structures require prerequisite buildings to be constructed first — typically the Town Hall of the corresponding level and the lower-tier creature dwellings. Resources required include Gold, Wood, Ore, and faction-specific rare resources such as Crystals, Gems, Mercury, and Sulfur.
      </p>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Each faction has a unique building tree that reflects its thematic identity. For example, the Necropolis focuses on undead transformation and dark magic, while the Grove emphasizes nature-based growth and healing. Despite these thematic differences, all factions share a core building structure organized into four categories: Economy, Military, Magic, and Special.
      </p>

      <h2>Town Hall Upgrades</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        The Town Hall is the central building of every faction and determines your town's overall development level. Upgrading the Town Hall increases your daily Gold income, unlocks new building tiers, and often provides a defensive boost to the town itself.
      </p>
      <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li><strong>Level 1 (Village Hall):</strong> Provides basic Gold income. Unlocks tier 1 creature dwellings and basic economic buildings.</li>
        <li><strong>Level 2 (Town Hall):</strong> Doubles Gold income. Unlocks tier 2-3 dwellings and basic magic guild.</li>
        <li><strong>Level 3 (City Hall):</strong> Further increases Gold income. Unlocks tier 4-5 dwellings, advanced resource buildings, and magic guild upgrades.</li>
        <li><strong>Level 4 (Capitol):</strong> Maximum Gold generation. Unlocks tier 6-7 dwellings and all remaining structures. Usually provides a unique faction bonus.</li>
      </ul>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Upgrading the Town Hall should generally be your highest priority in the early game, as it enables everything else. Delaying Town Hall upgrades will bottleneck your entire development.
      </p>

      <h2>Creature Dwellings</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        Creature dwellings allow you to recruit units for your armies. Each faction has 7 tiers of creatures, and each tier has a basic and an upgraded dwelling. The upgraded dwelling typically increases weekly creature growth, unlocks the upgraded version of the unit, or both.
      </p>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Building creature dwellings requires the corresponding Town Hall level and often the previous tier's dwelling as a prerequisite. For example, building the tier 3 dwelling requires Town Hall level 2 (Town Hall) and the tier 2 dwelling to be completed. This creates a natural progression path where you build up your creature tiers incrementally.
      </p>

      <h2>Building Categories</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Building Type</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Economy</strong></td>
            <td>Resource Silos, Marketplaces, Gold Mines</td>
            <td>Generate resources each turn. Marketplace allows resource trading at favorable rates. Some factions have unique economic buildings that produce rare resources.</td>
          </tr>
          <tr>
            <td><strong>Military</strong></td>
            <td>Creature Dwellings, Blacksmith, Fortifications</td>
            <td>Unlock unit recruitment, provide army upgrades, and build defensive structures (walls, moats, towers) that protect the town during sieges.</td>
          </tr>
          <tr>
            <td><strong>Magic</strong></td>
            <td>Mage Guild, Special Faction Structures</td>
            <td>Provide access to spells for your heroes. Higher guild levels unlock more powerful spells. Some factions have unique magical structures that provide faction-specific benefits.</td>
          </tr>
          <tr>
            <td><strong>Special</strong></td>
            <td>Faction-Unique Buildings</td>
            <td>Each faction has one or more unique buildings that provide powerful, faction-specific bonuses. Examples include the Necropolis's Skeleton Transformer or the Temple's Sanctuary.</td>
          </tr>
        </tbody>
      </table>

      <h2>Resource Buildings</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        Resource buildings are critical for maintaining a steady flow of the materials needed to construct other buildings and recruit creatures. The most important resource buildings include:
      </p>
      <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li><strong>Marketplace:</strong> Enables resource trading. Each level improves trade rates. Essential for converting surplus resources into needed ones.</li>
        <li><strong>Resource Silo:</strong> Produces one unit of a specific rare resource per day (Crystals, Gems, Mercury, or Sulfur depending on faction).</li>
        <li><strong>Gold Mine:</strong> Increases daily Gold income beyond what the Town Hall provides. Usually available at higher Town Hall levels.</li>
      </ul>

      <h2>Special Faction Buildings</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        Each faction in Olden Era has access to at least one special building that defines its strategic identity:
      </p>
      <ul style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li><strong>Temple:</strong> Sanctuary — provides powerful blessings and defensive bonuses.</li>
        <li><strong>Necropolis:</strong> Necromancy Amplifier — increases the effectiveness of necromancy by raising additional skeletons after combat.</li>
        <li><strong>Grove:</strong> Ancient Treant — enhances nature magic and provides passive healing to defending armies.</li>
        <li><strong>Hive:</strong> Hive Mind Nexus — improves creature coordination and provides swarm-related bonuses.</li>
        <li><strong>Schism:</strong> Void Portal — enables special teleportation and reality-bending effects.</li>
        <li><strong>Dungeon:</strong> Underground Network — provides economic bonuses from subterranean resources and passage.</li>
      </ul>

      <h2>Building Priorities</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
        While optimal build order depends on your faction, strategy, and map conditions, here is a general priority framework:
      </p>
      <ol style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li><strong>Early Game (Week 1-2):</strong> Rush Town Hall to level 2, build tier 1-2 creature dwellings, and construct a Marketplace if your starting resources are unbalanced.</li>
        <li><strong>Mid Game (Week 3-4):</strong> Upgrade Town Hall to level 3, build tier 3-4 dwellings and their upgrades, construct the Mage Guild to level 2, and build your faction's special building.</li>
        <li><strong>Late Game (Week 5+):</strong> Push to Capitol (Town Hall 4), complete all creature dwelling upgrades, max out the Mage Guild, and construct any remaining resource buildings.</li>
      </ol>

      <h2>FAQ</h2>
      <div className="faq-snippets">
        <details>
          <summary>Should I upgrade creature dwellings or build new ones first?</summary>
          <p>
            Generally, you should build new creature dwellings first to unlock more unit types, then upgrade the dwellings of units you plan to use most. The increased weekly growth from upgrades is valuable, but having access to higher-tier units provides more immediate power.
          </p>
        </details>
        <details>
          <summary>When should I build the Mage Guild?</summary>
          <p>
            Build Mage Guild level 1 early (after your first few creature dwellings) to gain access to basic spells. Upgrade to level 2-3 in the mid game. Level 4-5 can wait until late game unless your hero heavily relies on magic.
          </p>
        </details>
        <details>
          <summary>Is the Capitol always worth rushing?</summary>
          <p>
            In most cases, yes. The Gold income from a Capitol is transformative and pays for itself quickly. However, on smaller maps or when under early pressure, you may need to prioritize military buildings instead.
          </p>
        </details>
        <details>
          <summary>Do all factions build the same way?</summary>
          <p>
            No. Each faction has unique buildings and priorities. For example, Necropolis benefits greatly from rushing its Necromancy Amplifier, while Temple may want to prioritize defensive fortifications. Consult individual faction guides for specific build orders.
          </p>
        </details>
      </div>
    </div>
  );
}
