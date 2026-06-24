// ===== FACTION DATA =====

export interface Faction {
  id: string;
  name: string;
  icon: string;
  description: string;
  governingBody: string;
  playstyle: string;
  strengths: string[];
  weaknesses: string[];
  keyUnits: string[];
  tier: 'S' | 'A' | 'B' | 'C';
  color: string;
}

export const factions: Faction[] = [
  {
    id: 'temple',
    name: 'Temple',
    icon: '🛕',
    description:
      'The Church of the Sun strives to forge the best version of oneself. Temple units gain extra benefits from buffs, making them a balanced faction that excels when properly supported by spells and abilities.',
    governingBody: 'High Inquisition',
    playstyle: 'Well-rounded with strong unit empowerment through buffs. Temple armies become increasingly powerful as buffs stack, making them deceptively strong in prolonged engagements.',
    strengths: [
      'Best buff synergy in the game — units gain extra benefits from all positive effects',
      'Balanced unit roster with no major gaps',
      'Excellent healing and support magic',
      'Strong mid-to-late game scaling',
    ],
    weaknesses: [
      'Relatively slow early game expansion',
      'Relies on buffs — vulnerable to dispel effects',
      'Expensive tier 6-7 units',
      'Predictable strategy can be countered by experienced players',
    ],
    keyUnits: ['Swordsman', 'Crossbowman', 'Cavalry', 'Lightweaver', 'Angel'],
    tier: 'A',
    color: '#f59e0b',
  },
  {
    id: 'necropolis',
    name: 'Necropolis',
    icon: '💀',
    description:
      'Ruled by Necromancers and Vampires, Shadowspire\'s undead rise after each battle and often sap strength from their foes with every strike. Necropolis excels at attrition warfare.',
    governingBody: 'Head of Necromancers\' Guild',
    playstyle: 'Undead armies that resurrect after battles. Heavy focus on debuffs, curses, and life-drain mechanics. Necropolis grinds opponents down through sustained attrition.',
    strengths: [
      'Necromancy — raise fallen enemies as skeletons',
      'Powerful debuffs and curses',
      'Life-drain on multiple units',
      'Excellent late-game with large skeleton stacks',
    ],
    weaknesses: [
      'Undead units cannot benefit from morale boosts',
      'Vulnerable to Light/Holy magic',
      'Slow movement on most units',
      'Expensive building requirements for top-tier units',
    ],
    keyUnits: ['Skeleton', 'Wight', 'Vampire', 'Lich', 'Dread Knight'],
    tier: 'S',
    color: '#8b5cf6',
  },
  {
    id: 'grove',
    name: 'Grove',
    icon: '🌳',
    description:
      'Each of the Murmurwoods\' elemental spirits is a unique powerhouse, supported by equally strong — and expensive — rangers and druids. Grove combines magical supremacy with powerful creature abilities.',
    governingBody: 'Unknown',
    playstyle: 'Spellcaster-focused faction with unique elemental creatures. Grove heroes are among the best spellcasters, and their units have powerful activated abilities.',
    strengths: [
      'Best spellcasting heroes in the game',
      'Unique elemental creatures with powerful abilities',
      'Excellent ranged damage from Rangers and Druids',
      'Strong map control with nature-based spells',
    ],
    weaknesses: [
      'Most expensive faction — high gold and resource costs',
      'Fragile units — low HP on most creatures',
      'Weak against magic-resistant enemies',
      'Slow to recover from early losses',
    ],
    keyUnits: ['Faun', 'Ranger', 'Druid', 'Treant', 'Phoenix'],
    tier: 'A',
    color: '#22c55e',
  },
  {
    id: 'hive',
    name: 'Hive',
    icon: '🐝',
    description:
      'Bent on conquering Jadame, Beelzebub\'s Order of the Fly is driven by swift and aggressive tactics. Their strength lies in exploiting enemy diversity to strike with precision and speed.',
    governingBody: 'The Dragonfly King',
    playstyle: 'Aggressive melee-focused faction with high initiative and speed. Hive uses "hivemind" synergy — units gain bonuses when fighting alongside same-type units.',
    strengths: [
      'Highest initiative and speed in the game',
      'Hivemind synergy — stacking bonuses for same-type units',
      'Excellent early game rush potential',
      'Strong against mixed enemy armies',
    ],
    weaknesses: [
      'Limited ranged options',
      'Weak against area-of-effect spells',
      'Fragile individual units',
      'Struggles in prolonged siege battles',
    ],
    keyUnits: ['Drone', 'Soldier Ant', 'Dragonfly Rider', 'Mantis', 'Queen Ant'],
    tier: 'B',
    color: '#fbbf24',
  },
  {
    id: 'schism',
    name: 'Schism',
    icon: '⛓️',
    description:
      'A splinter faction of Alvar that delved into the Depths of Water using ancient Vori rites. They deny opponents\' abilities and magic while summoning ever-growing hordes of monstrous creatures.',
    governingBody: 'Unknown',
    playstyle: 'Control-focused faction that specializes in denying enemy spells and abilities. Schism summons increasingly powerful eldritch monsters to overwhelm opponents.',
    strengths: [
      'Unique spell and ability denial mechanics',
      'Powerful summoned creatures that scale with battle length',
      'Excellent battlefield control',
      'Hard counters magic-heavy opponents',
    ],
    weaknesses: [
      'Slow early game — summons need time to build up',
      'Weak against fast rushes',
      'Complex to play effectively',
      'Limited direct damage options',
    ],
    keyUnits: ['Cultist', 'Abomination', 'Deep One', 'Kraken Spawn', 'Eldritch Horror'],
    tier: 'B',
    color: '#06b6d4',
  },
  {
    id: 'dungeon',
    name: 'Dungeon',
    icon: '🕳️',
    description:
      'Formerly underground, currently backstage rulers of Jadame, the faction whose capital is Alvar focuses on subterfuge and versatility. Each unit has two types of attack.',
    governingBody: 'Triumvirate of Alvar',
    playstyle: 'Versatile dark elves with dual-attack mechanics. Dungeon units can switch between damage types, making them highly adaptable to different enemy compositions.',
    strengths: [
      'Dual attack types on every unit — adapt to any enemy',
      'Excellent magic penetration',
      'Powerful dragons as tier 7 units',
      'Strong scouting and map control',
    ],
    weaknesses: [
      'Expensive unit costs across the board',
      'Vulnerable to Light/Holy damage',
      'Relies on mana for optimal performance',
      'Complex micro-management in combat',
    ],
    keyUnits: ['Assassin', 'Dark Elf', 'Minotaur', 'Medusa', 'Black Dragon'],
    tier: 'A',
    color: '#a855f7',
  },
];

// ===== HERO DATA =====

export interface Hero {
  name: string;
  factionId: string;
  type: 'Might' | 'Magic';
  className: string;
  specialty: string;
  specialtyDesc: string;
  startingSkill: string;
  startingSpell?: string;
  tier: 'S' | 'A' | 'B' | 'C';
}

export const heroes: Hero[] = [
  // Temple - Might (Knights)
  { name: 'Ister', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'Wayfarer', specialtyDesc: 'Additional movement points on the adventure map', startingSkill: 'Logistics, Righteousness', tier: 'A' },
  { name: 'Leon Sticky-Fingers', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'Pathfinder', specialtyDesc: 'No movement penalty on rough terrain, larger vision range', startingSkill: 'Scouting, Righteousness', tier: 'B' },
  { name: 'John Johnson', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'Salt of the Earth', specialtyDesc: 'Bonus to Swordsman units', startingSkill: 'Defense, Righteousness', tier: 'B' },
  { name: 'Kestrel', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'Jaeger', specialtyDesc: 'Bonus to Crossbowman units', startingSkill: 'Offense, Righteousness', tier: 'B' },
  { name: 'Aeos the Exalted', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'Rousing Presence', specialtyDesc: 'Morale bonus to all units', startingSkill: 'Leadership, Righteousness', tier: 'A' },
  { name: 'Heretic Avis', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'Gem Seeker', specialtyDesc: 'Extra gem income per turn', startingSkill: 'Recruitment, Righteousness', startingSpell: 'Groundsight', tier: 'C' },
  { name: 'Keandra', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'Jouster', specialtyDesc: 'Bonus to Cavalry units', startingSkill: 'Battlecraft, Righteousness', tier: 'B' },
  { name: 'Lord Edgar', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'True Lord', specialtyDesc: 'Bonus attack and defense for all units', startingSkill: 'Advanced Righteousness', tier: 'S' },
  { name: 'Old Lord Mandall', factionId: 'temple', type: 'Might', className: 'Knight', specialty: 'Heroic Smite', specialtyDesc: 'Enhanced hero attack that increases damage taken by enemies', startingSkill: 'Combat, Righteousness', tier: 'B' },
  // Temple - Magic (Clerics)
  { name: 'Merry Elias', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Spiritual Vigor', specialtyDesc: 'More map spell uses and mana', startingSkill: 'Diplomacy, Righteousness', startingSpell: 'Reinforcements', tier: 'A' },
  { name: 'Pip', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Wish to Learn', specialtyDesc: 'Bonus experience gain and attribute upgrades', startingSkill: 'Insight, Righteousness', startingSpell: 'Clear Fog', tier: 'C' },
  { name: 'Zenith', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Weaving the Light', specialtyDesc: 'Bonus to Lightweaver units', startingSkill: 'Wisdom, Righteousness', startingSpell: 'Heavenly Blades', tier: 'A' },
  { name: 'Lia the Untethered One', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Radiating Knowledge', specialtyDesc: 'Daylight Magic spell power bonus', startingSkill: 'Daylight Magic, Righteousness', startingSpell: 'Inner Light', tier: 'A' },
  { name: 'Julius', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Compassionate Healer', specialtyDesc: 'Enhanced Healing Water spell', startingSkill: 'Resistance, Righteousness', startingSpell: 'Healing Water', tier: 'B' },
  { name: 'Vesper', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Blessing', specialtyDesc: 'Enhanced Blessing spell', startingSkill: 'Battle Magic, Righteousness', startingSpell: 'Blessing', tier: 'B' },
  { name: 'Anastasia the Meek', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Hymn to Arina', specialtyDesc: 'Enhanced Arina\'s Touch spell', startingSkill: 'Thaumaturgy, Righteousness', startingSpell: "Arina's Touch", tier: 'C' },
  { name: 'Nadir', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Heart of Hearts', specialtyDesc: 'Enhanced Vulnerability spell', startingSkill: 'Nightshade Magic, Righteousness', startingSpell: 'Vulnerability', tier: 'C' },
  { name: 'Clarissa', factionId: 'temple', type: 'Magic', className: 'Cleric', specialty: 'Wealthy', specialtyDesc: 'Extra gold income per turn', startingSkill: 'Economy, Righteousness', startingSpell: "From a Bird's Eye", tier: 'C' },

  // Necropolis - Might (Death Knights)
  { name: 'Bulwark', factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: 'Built Different', specialtyDesc: 'Passive damage reduction for all units', startingSkill: 'Defense, Necromancy', tier: 'A' },
  { name: 'King-of-Kings', factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: 'Charismatic', specialtyDesc: 'Diplomacy bonus, retain army on retreat', startingSkill: 'Diplomacy, Necromancy', tier: 'B' },
  { name: 'Onkos', factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: 'Perfect Puppets', specialtyDesc: 'Bonus to Skeleton units', startingSkill: 'Offense, Necromancy', tier: 'B' },
  { name: "Kel'Ghul", factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: 'Dreadful War', specialtyDesc: 'Bonus to Dread Knight units', startingSkill: 'Tactics, Necromancy', tier: 'A' },
  { name: 'Natalida', factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: 'Part of a Pack', specialtyDesc: 'Bonus to Undead Pet units', startingSkill: 'Scouting, Necromancy', tier: 'C' },
  { name: 'Artorius Veritas', factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: "Drive 'em Crazy", specialtyDesc: 'Enhanced Berserk spell', startingSkill: 'Resistance, Necromancy', startingSpell: 'Berserk', tier: 'B' },
  { name: 'Marl', factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: 'Languid Soil', specialtyDesc: 'Enhanced Web spell', startingSkill: 'Logistics, Necromancy', startingSpell: 'Web', tier: 'C' },
  { name: 'Tarius', factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: 'Undead Legion', specialtyDesc: 'Enhanced Necromancy skill — more skeletons raised', startingSkill: 'Advanced Necromancy', tier: 'S' },
  { name: 'Zam', factionId: 'necropolis', type: 'Might', className: 'Death Knight', specialty: 'Alchemist', specialtyDesc: 'Extra mercury income', startingSkill: 'Recruitment, Necromancy', startingSpell: 'Primordial Chaos', tier: 'C' },
  // Necropolis - Magic (Necromancers)
  { name: 'Mag', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Arcane Dominion', specialtyDesc: 'Bonus to Arcane Magic spells', startingSkill: 'Arcane Magic, Necromancy', startingSpell: 'Impending Fate', tier: 'A' },
  { name: 'Adahn', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Amnesiac', specialtyDesc: 'Bonus to Wight units', startingSkill: 'Battlecraft, Necromancy', startingSpell: 'Shade Cloak', tier: 'B' },
  { name: 'Ethric', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Tomb-bound Will', specialtyDesc: 'Bonus to Lich units', startingSkill: 'Wisdom, Necromancy', startingSpell: 'Song of Power', tier: 'A' },
  { name: 'Guildmaster Klastor', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Bones Guild', specialtyDesc: 'Bonus to Graverobber units', startingSkill: 'Luck, Necromancy', startingSpell: "Naira's Veil", tier: 'C' },
  { name: 'Shadespinner Oona', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Shadowmastery', specialtyDesc: 'Bonus to Nightshade Magic spells', startingSkill: 'Nightshade Magic, Necromancy', startingSpell: 'Umbral Grip', tier: 'B' },
  { name: 'Laura', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Moldering', specialtyDesc: 'Enhanced Despair spell', startingSkill: 'Sorcery, Necromancy', startingSpell: 'Despair', tier: 'B' },
  { name: 'Lord Rufus', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Wistful Nostalgia', specialtyDesc: 'Enhanced Rewind Life spell', startingSkill: 'Thaumaturgy, Necromancy', startingSpell: 'Rewind Life', tier: 'C' },
  { name: 'Funerella', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Undead Legion', specialtyDesc: 'Enhanced Necromancy for stronger summons', startingSkill: 'Summon Avatar, Necromancy', startingSpell: 'Read Minds', tier: 'B' },
  { name: 'Milossa the Golden', factionId: 'necropolis', type: 'Magic', className: 'Necromancer', specialty: 'Wealthy', specialtyDesc: 'Extra gold income', startingSkill: 'Battle Magic, Necromancy', startingSpell: 'Fatal Decay', tier: 'B' },

  // Grove - Might (Wardens)
  { name: 'Eith', factionId: 'grove', type: 'Might', className: 'Warden', specialty: 'Pathfinder', specialtyDesc: 'No terrain penalty, larger vision', startingSkill: 'Scouting, Murmuring', tier: 'B' },
  { name: 'Gorel Spearhead', factionId: 'grove', type: 'Might', className: 'Warden', specialty: 'Shooter', specialtyDesc: 'Ranged damage amplification', startingSkill: 'Offense, Murmuring', tier: 'A' },
  { name: 'Gingertail', factionId: 'grove', type: 'Might', className: 'Warden', specialty: 'Faunsong', specialtyDesc: 'Bonus to Faun units', startingSkill: 'Battlecraft, Murmuring', tier: 'B' },
  { name: 'Old Pilgrim', factionId: 'grove', type: 'Might', className: 'Warden', specialty: 'Natural Selection', specialtyDesc: 'Enhanced Guillotine spell', startingSkill: 'Battle Magic, Murmuring', startingSpell: 'Guillotine', tier: 'B' },
  { name: 'Octavia', factionId: 'grove', type: 'Might', className: 'Warden', specialty: 'Four-Leaf Horseshoe', specialtyDesc: 'Luck bonus for all units', startingSkill: 'Luck, Murmuring', tier: 'A' },
  { name: 'Mreowa', factionId: 'grove', type: 'Might', className: 'Warden', specialty: 'Charming Shine', specialtyDesc: 'Extra crystal income', startingSkill: 'Combat, Murmuring', startingSpell: 'Berserk', tier: 'C' },
  { name: 'Faleor', factionId: 'grove', type: 'Might', className: 'Warden', specialty: "Hksmilla's Step", specialtyDesc: 'Enhanced Fireball spell', startingSkill: 'Advanced Murmuring', startingSpell: 'Fireball', tier: 'A' },
  { name: "Alluring Sh'a", factionId: 'grove', type: 'Might', className: 'Warden', specialty: 'Charismatic', specialtyDesc: 'Diplomacy bonus, retain army on retreat', startingSkill: 'Diplomacy, Murmuring', tier: 'C' },
  { name: 'Aunt Daliar', factionId: 'grove', type: 'Might', className: 'Warden', specialty: 'Wish to Learn', specialtyDesc: 'Bonus experience and attribute gains', startingSkill: 'Insight, Murmuring', tier: 'C' },
  // Grove - Magic (Druids)
  { name: 'Vatawna', factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Spiritual Vigor', specialtyDesc: 'More map spell uses and mana', startingSkill: 'Wisdom, Murmuring', startingSpell: 'Primordial Chaos', tier: 'A' },
  { name: "Elder Tss'kish", factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Oldest Known Tree', specialtyDesc: 'Bonus to Herbomancer units', startingSkill: 'Thaumaturgy, Murmuring', startingSpell: 'Energize', tier: 'B' },
  { name: 'Aeliniel', factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Tempered Embers', specialtyDesc: 'Enhanced Firewall spell', startingSkill: 'Primal Magic, Murmuring', startingSpell: 'Firewall', tier: 'B' },
  { name: 'Glacia', factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Ice Bolt', specialtyDesc: 'Enhanced Ice Bolt spell', startingSkill: 'Primal Magic, Murmuring', startingSpell: 'Ice Bolt', tier: 'A' },
  { name: 'Vim', factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Rock It up!', specialtyDesc: 'Enhanced Cave In spell', startingSkill: 'Primal Magic, Murmuring', startingSpell: 'Cave In', tier: 'B' },
  { name: 'Halon', factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Thunder and Lightning', specialtyDesc: 'Enhanced Chain Lightning spell', startingSkill: 'Primal Magic, Murmuring', startingSpell: 'Chain Lightning', tier: 'S' },
  { name: 'Echolily', factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Murmuring Copy', specialtyDesc: 'Enhanced Mirror Copy spell', startingSkill: 'Arcane Magic, Murmuring', startingSpell: 'Mirror Copy', tier: 'B' },
  { name: 'Sullie', factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Murmurwood Native', specialtyDesc: 'Summons stronger Avatars', startingSkill: 'Summon Avatar, Murmuring', startingSpell: 'Weakening Ray', tier: 'A' },
  { name: 'The Minstrel', factionId: 'grove', type: 'Magic', className: 'Druid', specialty: 'Wandering Musician', specialtyDesc: 'Starts with Focus Points', startingSkill: 'Sorcery, Murmuring', startingSpell: 'Energy Explosion', tier: 'B' },

  // Hive - Might (Enforcers)
  { name: 'Niev', factionId: 'hive', type: 'Might', className: 'Enforcer', specialty: 'Shooter', specialtyDesc: 'Ranged damage amplification', startingSkill: 'Offense, Summon Swarm', tier: 'A' },
  { name: 'Zixx', factionId: 'hive', type: 'Might', className: 'Enforcer', specialty: 'Swarm Commander', specialtyDesc: 'Bonus to all Drone-type units', startingSkill: 'Leadership, Summon Swarm', tier: 'A' },
  { name: 'Klik', factionId: 'hive', type: 'Might', className: 'Enforcer', specialty: 'Chitin Armor', specialtyDesc: 'Defense bonus to all units', startingSkill: 'Defense, Summon Swarm', tier: 'B' },
  { name: 'Bzzara', factionId: 'hive', type: 'Might', className: 'Enforcer', specialty: 'Stinger', specialtyDesc: 'Bonus poison damage on attacks', startingSkill: 'Offense, Summon Swarm', tier: 'B' },
  { name: 'Mantix', factionId: 'hive', type: 'Might', className: 'Enforcer', specialty: 'Scythe Arms', specialtyDesc: 'Bonus to Mantis units', startingSkill: 'Combat, Summon Swarm', tier: 'B' },
  // Hive - Magic (Hive Minds)
  { name: 'Psyche', factionId: 'hive', type: 'Magic', className: 'Hive Mind', specialty: 'Collective Mind', specialtyDesc: 'Spell power scales with army size', startingSkill: 'Sorcery, Summon Swarm', startingSpell: 'Mind Blast', tier: 'A' },
  { name: 'Buzz', factionId: 'hive', type: 'Magic', className: 'Hive Mind', specialty: 'Pheromone Control', specialtyDesc: 'Enhanced crowd control spells', startingSkill: 'Wisdom, Summon Swarm', startingSpell: 'Confusion', tier: 'B' },
  { name: 'Venom', factionId: 'hive', type: 'Magic', className: 'Hive Mind', specialty: 'Toxic Cloud', specialtyDesc: 'Enhanced poison-based spells', startingSkill: 'Battle Magic, Summon Swarm', startingSpell: 'Toxic Cloud', tier: 'B' },

  // Schism - Might
  { name: 'Vorr the Deep', factionId: 'schism', type: 'Might', className: 'Abyssal Knight', specialty: 'Tidal Force', specialtyDesc: 'Bonus damage near water terrain', startingSkill: 'Offense, Abyssal Rite', tier: 'A' },
  { name: 'Korath', factionId: 'schism', type: 'Might', className: 'Abyssal Knight', specialty: 'Tentacle Grip', specialtyDesc: 'Bonus to Deep One units', startingSkill: 'Combat, Abyssal Rite', tier: 'B' },
  { name: "N'zara", factionId: 'schism', type: 'Might', className: 'Abyssal Knight', specialty: 'Eldritch Armor', specialtyDesc: 'Damage reduction for summoned creatures', startingSkill: 'Defense, Abyssal Rite', tier: 'B' },
  // Schism - Magic
  { name: 'Vori Sage', factionId: 'schism', type: 'Magic', className: 'Rite Keeper', specialty: 'Ancient Rites', specialtyDesc: 'Reduced mana cost for summoning spells', startingSkill: 'Wisdom, Abyssal Rite', startingSpell: 'Summon Deep One', tier: 'S' },
  { name: 'Mira the Drowned', factionId: 'schism', type: 'Magic', className: 'Rite Keeper', specialty: 'Silence the Waves', specialtyDesc: 'Enhanced spell denial abilities', startingSkill: 'Resistance, Abyssal Rite', startingSpell: 'Silence', tier: 'A' },
  { name: 'Cthara', factionId: 'schism', type: 'Magic', className: 'Rite Keeper', specialty: 'Growing Madness', specialtyDesc: 'Summons gain stats each turn', startingSkill: 'Sorcery, Abyssal Rite', startingSpell: 'Madness', tier: 'A' },

  // Dungeon - Might
  { name: 'Shira', factionId: 'dungeon', type: 'Might', className: 'Warlord', specialty: 'Shadow Strike', specialtyDesc: 'First strike bonus damage', startingSkill: 'Offense, Subterfuge', tier: 'A' },
  { name: 'Drizlak', factionId: 'dungeon', type: 'Might', className: 'Warlord', specialty: 'Minotaur Lord', specialtyDesc: 'Bonus to Minotaur units', startingSkill: 'Combat, Subterfuge', tier: 'B' },
  { name: 'Velara', factionId: 'dungeon', type: 'Might', className: 'Warlord', specialty: 'Assassin Guild', specialtyDesc: 'Bonus to Assassin units', startingSkill: 'Tactics, Subterfuge', tier: 'A' },
  // Dungeon - Magic
  { name: 'Malakar', factionId: 'dungeon', type: 'Magic', className: 'Warlock', specialty: 'Dragon Cult', specialtyDesc: 'Bonus to Black Dragon units', startingSkill: 'Wisdom, Subterfuge', startingSpell: 'Dragon Fire', tier: 'S' },
  { name: 'Selindra', factionId: 'dungeon', type: 'Magic', className: 'Warlock', specialty: 'Medusa Gaze', specialtyDesc: 'Enhanced petrification spells', startingSkill: 'Sorcery, Subterfuge', startingSpell: 'Petrify', tier: 'B' },
  { name: 'Zarath', factionId: 'dungeon', type: 'Magic', className: 'Warlock', specialty: 'Arcane Penetration', specialtyDesc: 'Ignores portion of enemy magic resistance', startingSkill: 'Arcane Magic, Subterfuge', startingSpell: 'Mana Drain', tier: 'A' },
];

// ===== TIER LIST DATA =====

export interface TierEntry {
  factionId: string;
  tier: 'S' | 'A' | 'B' | 'C';
  reason: string;
}

export const factionTierList: TierEntry[] = [
  { factionId: 'necropolis', tier: 'S', reason: 'Necromancy provides unmatched snowball potential. Undead armies grow with every battle, making Necropolis the strongest late-game faction.' },
  { factionId: 'temple', tier: 'A', reason: 'Best buff synergy in the game. Balanced roster with no hard counters. Lord Edgar is arguably the best Might hero.' },
  { factionId: 'grove', tier: 'A', reason: 'Superior spellcasting and unique elemental creatures. Halon with Chain Lightning can solo-carry battles.' },
  { factionId: 'dungeon', tier: 'A', reason: 'Dual attack types provide unmatched versatility. Black Dragons are the strongest tier 7 unit. Malakar is S-tier hero.' },
  { factionId: 'hive', tier: 'B', reason: 'Excellent early game rush but falls off late. Limited ranged options and fragile units hold them back.' },
  { factionId: 'schism', tier: 'B', reason: 'Highest skill ceiling. Devastating in the right hands but too slow for competitive play. Vori Sage is S-tier.' },
];

// ===== COMBAT DATA =====

export interface CombatTip {
  title: string;
  content: string;
}

export const combatTips: CombatTip[] = [
  { title: 'Initiative Order', content: 'Units act in order of their Initiative stat. Higher initiative = act first each round. Hive units consistently act first.' },
  { title: 'Morale System', content: 'High morale gives units a chance to act twice. Temple excels at morale manipulation. Undead (Necropolis) ignore morale entirely.' },
  { title: 'Focus Points', content: 'Heroes generate Focus Points each turn. These power special abilities and can turn the tide of battle. Grove heroes excel at FP generation.' },
  { title: 'Native Terrain', content: 'Each faction has a preferred terrain type that grants combat bonuses. Temple: Grasslands, Necropolis: Wasteland, Grove: Forest, Hive: Desert, Schism: Water, Dungeon: Underground.' },
  { title: 'Counter-Attacks', content: 'Units can only counter-attack once per round unless they have special abilities. Bait counter-attacks with cheap units before committing heavy hitters.' },
  { title: 'Spell Damage Types', content: 'Different factions have different magic resistances. Dungeon has high magic resist. Necropolis is weak to Light/Holy. Temple is strong against Dark/Shadow.' },
];

// ===== SKILLS DATA =====

export interface Skill {
  name: string;
  category: string;
  description: string;
}
export const skills: Skill[] = [
  { name: 'Offense', category: 'Combat', description: 'Increases melee and ranged damage by 10/20/30%. Essential for Might heroes.' },
  { name: 'Defense', category: 'Combat', description: 'Reduces incoming physical damage by 10/20/30%. Key for tank heroes.' },
  { name: 'Combat', category: 'Combat', description: 'Increases hero attack damage in direct combat.' },
  { name: 'Tactics', category: 'Combat', description: 'Allows pre-battle unit repositioning. Critical for setting up formations.' },
  { name: 'Battlecraft', category: 'Combat', description: 'Improves unit special abilities and reduces their cooldowns.' },
  { name: 'Wisdom', category: 'Magic', description: 'Allows learning spells of level 3/4/5. Mandatory for magic heroes.' },
  { name: 'Sorcery', category: 'Magic', description: 'Increases spell damage by 15/30/45%. Key for damage-focused casters.' },
  { name: 'Arcane Magic', category: 'Magic', description: 'Specialized magic school for arcane spells and mana manipulation.' },
  { name: 'Primal Magic', category: 'Magic', description: 'Elemental magic — Fire, Ice, Lightning spells. Grove specialty.' },
  { name: 'Daylight Magic', category: 'Magic', description: 'Light and Holy magic. Temple specialty. Effective against undead.' },
  { name: 'Nightshade Magic', category: 'Magic', description: 'Shadow and Dark magic. Necropolis and Dungeon specialty.' },
  { name: 'Thaumaturgy', category: 'Magic', description: 'Buff and utility magic. Improves buff duration and effectiveness.' },
  { name: 'Logistics', category: 'Adventure', description: 'Increases hero movement points by 10/20/30%. Critical for map control.' },
  { name: 'Scouting', category: 'Adventure', description: 'Increases vision range and reveals nearby resources.' },
  { name: 'Leadership', category: 'Adventure', description: 'Increases army morale by 1/2/3. Excellent for Temple.' },
  { name: 'Diplomacy', category: 'Adventure', description: 'Reduces neutral creature hostility and recruitment costs.' },
  { name: 'Luck', category: 'Adventure', description: 'Chance for units to deal double damage: 10/20/30%.' },
  { name: 'Economy', category: 'Adventure', description: 'Increases gold and resource income by 15/30/45%.' },
  { name: 'Recruitment', category: 'Adventure', description: 'Increases weekly creature growth in towns.' },
  { name: 'Insight', category: 'Adventure', description: 'Bonus experience gain and faster leveling.' },
  { name: 'Righteousness', category: 'Faction', description: 'Temple faction skill. Enhances buff effects on units.' },
  { name: 'Necromancy', category: 'Faction', description: 'Necropolis faction skill. Raises fallen enemies as skeletons.' },
  { name: 'Murmuring', category: 'Faction', description: 'Grove faction skill. Enhances nature magic and creature abilities.' },
  { name: 'Summon Swarm', category: 'Faction', description: 'Hive faction skill. Summons additional insect units in battle.' },
  { name: 'Abyssal Rite', category: 'Faction', description: 'Schism faction skill. Powers summoning and spell denial.' },
  { name: 'Subterfuge', category: 'Faction', description: 'Dungeon faction skill. Enhances dual-attack mechanics and scouting.' },
];
