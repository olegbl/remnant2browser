export type Entity = {
  name: string;
  description: string;
  iconURL: string;
  linkURL: string;
  tags: string[];
};

const data: Entity[] = [
  {
    name: 'Abrasive Whetstone',
    description:
      'When attacking a BLEEDING enemy, Crit Chance is increased by 15% and Crit Damage is increased by 30%.',
    tags: ['Amulet', 'Cass', 'Root Earth'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/abrasive_whetstone_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Abrasive+Whetstone',
  },
  {
    name: 'Acid Stone',
    description: 'Increases ACID damage by 10% and ACID Resistance by 15%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2///acid_stone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Acid+Stone',
    tags: ['Reggie', 'Ring', 'Ward 13'],
  },
  {
    name: 'Ahanae Crystal',
    description:
      ' Deal 5% additional damage for each Status Effect the target is suffering from.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/anahae_crystal_rings_remnant2_wiki_guide_250px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ahanae+Crystal',
    tags: ['Reggie', 'Ring', 'Yaesha'],
  },
  {
    name: 'Akari War Band',
    description:
      'Perfect Dodges increase Critical Chance by 15% and Critical Damage by 15% for 15s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//akari_war_band_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Akari+War+Band',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Alchemy Stone',
    description:
      'Increases base Lifesteal by 5% while suffering from a negative STATUS or BLIGHT Effect.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//alchemy_stone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Alchemy+Stone',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Alumni Ring',
    description: 'Increases all Elemental damage dealt by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//alumini_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Alumni+Ring',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Amber Moonstone',
    description:
      "When the wearer's Health drops below 30%, all incoming damage is reduced by 25% and wearer becomes immune to Temporary Status Effects.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//amber_moonstone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Amber+Moonstone',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Ammo Reserves',
    description: 'Increases Ammo Reserves by 50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/ammo_reserves_gunslinger_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ammo+Reserves',
    tags: ['Trait'],
  },
  {
    name: 'Amplify',
    description: 'Increases Mod Damage by +5%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/amplify_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Amplify',
    tags: ['Archon', 'Damage', 'Perk'],
  },
  {
    name: 'Amplitude',
    description: 'Increases AOE Size by +50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/amplitude_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Amplitude',
    tags: ['Trait'],
  },
  {
    name: "Anastasija's Inspiration",
    description: 'When receiving healing effects, gain HASTE for 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//anastajias_inspiration_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Anastasija's+Inspiration",
    tags: ['Ring', 'Root Earth', 'Ward 13'],
  },
  {
    name: 'Ankh of Power',
    description:
      'Grants a 15% increase to all damage. Consuming a Relic doubles the bonus for 15s.',
    tags: ['Amulet', 'Root Earth'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/ankh_of_power_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ankh+of+Power',
  },
  {
    name: 'Arcane Strike',
    description: 'Increases Mod Power Generation from Melee Damage by 50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/arcane_strike_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Arcane+Strike',
    tags: ['Trait'],
  },
  {
    name: "Archer's Crest",
    description:
      'Increases Projectile Speed by 20% and Decreases Weapon Charge Time by 25%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//archers_crest_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Archer's+Crest",
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: "Assassin's Seal",
    description:
      'Reduces enemy Awareness Range by 25%. Increases all damage dealt to enemies not targeting wearer by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//assassins_seal_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Assassin's+Seal",
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Backbone',
    description:
      'Increases the hits Medic can take before losing Grey Health by 1',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/backbone_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Backbone',
    tags: ['Medic', 'Perk', 'Utility'],
  },
  {
    name: 'Band Band',
    description:
      'Icreases Speed of Revive and being Revived by 35%. Increases Downed Health and Downed Movement Speed by 100%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//band_band_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Band+Band',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Band of Accord',
    description:
      'Ammo acquired on pickup is increased by 25% per ally also wearing this ring and is shared with other allies.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/band_of_accord_rings_remnant2_wiki_guide_250px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Band+of+Accord',
    tags: ['Reggie', 'Ring'],
  },
  {
    name: 'Bandit',
    description:
      'On hit, grants a 10-[30]% chance  to return spent Ammo directly into the magazine of this weapon.  When Ammo is returned to this weapon, it gains 10% increased Fire Rate for 3s. Duration can increase up to 10s. + ',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/bandit_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Bandit',
    tags: ['Mutator'],
  },
  {
    name: 'Barkskin',
    description: 'Reduces ALL incoming Damage by 10%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/barkskin_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Barkskin',
    tags: ['Trait'],
  },
  {
    name: 'Battery',
    description:
      'Ranged Hits increase the next weakspot Hit by 10-[20]% per stack. Max 5 Stacks. At Max Stacks, the next weakspot Hit deals 15% additional damage over 3s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/battery_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Battery',
    tags: ['Mutator'],
  },
  {
    name: 'Benefactor',
    description: 'Increases Relic Use Speed by 20%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/benefactor_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Benefactor',
    tags: ['Medic', 'Perk', 'Relic'],
  },
  {
    name: 'Benevolence',
    description:
      'Increases Relic Efficacy by 15% and heals nearby allies for 30% of the total healing value.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/benevolence_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Benevolence',
    tags: ['Medic', 'Perk', 'Team'],
  },
  {
    name: "Berserker's Crest",
    description:
      'Increases Melee Charge Speed by 20% and reduces Melee Stamina Cost by 25%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//berserkers_crest_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Berserker's+Crest",
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Best Friend',
    description: "Using a Relic fully restores the Companion's health.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/best_friend_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Best+Friend',
    tags: ['Handler', 'Perk', 'Relic'],
  },
  {
    name: 'Bisected Ring',
    description:
      ' Gain Infinite Stamina. All damage received is increased by 25%. ',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/bisected_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Bisected+Ring',
    tags: ['Labyrinth', 'Ring'],
  },
  {
    name: 'Black Cat Band',
    description:
      "When taking fatal damage, instead of dying, the wearer's Health will drop to 1, and Movement Speed will increase by 25% for 10s. 2m cooldown.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/black_cat_band_rings_remnant2_wiki_guide_250px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Black+Cat+Band',
    tags: ['Reggie', 'Ring'],
  },
  {
    name: 'Black Pawn Stamp',
    description: 'Reduces Cooldowns of Skills by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//black_pawn_stamp_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Black+Pawn+Stamp',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Blackout Ring',
    description:
      "After dealing 20% of the Weapon's Total Magazine base damage, increases Reload Speed by 3%. Stacks 5x Cleared on Reload.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//blackout_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Blackout+Ring',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Blasting Cap Ring',
    description: 'Increases Explosive damage by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//blasting_cap_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Blasting+Cap+Ring',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Blessed Ring',
    description:
      'After receiving a benefit from a Relic, gain 2 Stacks of BULWARK for 15s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//blessed_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Blessed+Ring',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Blood Bond',
    description: 'Summons absorb 10% of damage taken by the caster',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/blood_bond_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Blood+Bond',
    tags: ['Trait'],
  },
  {
    name: 'Blood Jewel',
    description:
      'Charged Melee Attacks apply BLEEDING, dealing 460 BLEED damage over 20s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//blood_jewel_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Blood+Jewel',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Blood Tinged Ring',
    description:
      'Gain 2 Health Regeneration per second when within 10m of a BLEEDING entity.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//blood_tinged_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Blood+Tinged+Ring',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Bloodstream',
    description: 'Increases Grey Health regen by 3.0/s',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/bloodstream_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Bloodstream',
    tags: ['Trait'],
  },
  {
    name: 'Blooming Heart',
    description:
      "On use, heals the user for 35% of caster's Max Health over 5s. Spawns 3 Healing Orbs which grant 35% of caster's Max Health over 5s. Orbs last 20s. Recasting removes previous Orbs",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/blooming_heart_relic_items_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Blooming+Heart',
    tags: ['Relic', 'Yaesha'],
  },
  {
    name: 'Bonded',
    description:
      'When Handler is downed, Companioon will attempet to revive them at 50% Max Health. Can be used to revive allies with Command. Downed ally must have a Relic charge.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/bonded_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Bonded',
    tags: ['Handler', 'Perk', 'Prime'],
  },
  {
    name: 'Booster Ring',
    description: 'Increases all Status Resistances by 10.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//booster_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Booster+Ring',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Braided Thorns',
    description:
      'After killing an enemy, gain 15% increased Critical Chance for 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//braided_thorns_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Braided+Thorns',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Bright Steel Ring',
    description:
      'Gives the wearer the fastest evade roll regardless of their Armor Encumbrance.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/bright_steel_ring_rings_remnant2_wiki_guide_250px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Bright+Steel+Ring',
    tags: ['Reggie', 'Ring'],
  },
  {
    name: 'Broken Pocket Watch',
    description:
      'Increases Stamina Regeneration by 25 and reduces Stamina cost by 50%.',
    tags: ['Amulet', 'Cass', 'Root Earth'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/broken_pocket_watch_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Broken+Pocket+Watch',
  },
  {
    name: 'Bulletweaver',
    description:
      'Mod use increases Fire Rate of this weapon by 10-[20]% for 7s. Reloading from empty increases Mod Generation of this weapon by 15%. Lasts 7s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/bulletweaver_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Bulletweaver',
    tags: ['Mutator'],
  },
  {
    name: 'Burden of the Audacious',
    description:
      'Decreases all healing by 75%. Perfect Dodges heal for 15% of Max Health.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_audacious_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Audacious',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Burden of the Destroyer',
    description:
      'Decreases Ideal Range of all Firearms by 25%. Increases all damage dealt by 15%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_destroyer_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Destroyer',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Burden of the Divine',
    description:
      'All damage dealt by wearer is reduced by 10%. 50% of self healing applies to allies.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_divine_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Divine',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Burden of the Follower',
    description:
      'Reduces Fire Rate by 15%. Increases Mod Power Generation by 50%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_follower_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Follower',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Burden of the Gambler',
    description:
      'Disables Weakspots. Increases Critical Chance by 10% and Critical Damage by 20%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_gambler_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Gambler',
    tags: ['Cass', 'Ring', 'Ward 13'],
  },
  {
    name: 'Burden of the Mariner',
    description:
      'Increases Skill Cooldowns by 25%. Generate 10% additional Mod Power for each Skill on Cooldown.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_mariner_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Mariner',
    tags: ['Drzyr Replicator', "N'Erud", 'Ring'],
  },
  {
    name: 'Burden of the Rebel',
    description:
      'Reduces Skill Cooldowns by 15% but decreases Relic Use Speed by 25%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_rebel_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Rebel',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Burden of the Stargazer',
    description:
      'Reduces Skill Cooldowns by 15%. Activating a Skill costs 15% Health.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_stargazer_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Stargazer',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Burden of the Warlock',
    description:
      'Reduces Mod Power Requirement by 15%. Activating a Mod costs 15% Health as Grey Health. Activation cannot kill wearer.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//burden_of_the_warlock_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Burden+of+the+Warlock',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: "Butcher's Fetish",
    description:
      'Increases Critical Chance by 15% and Critical Damage by 25% for 15s after striking enemy with a Charged Melee Attack.',
    tags: ['Amulet', 'Reggie', 'Ward 13'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/butchers_fetish_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Butcher's+Fetish",
  },
  {
    name: "Captain's Insignia",
    description:
      'Increases Revive Speed and Relic Consume Speed by 25% per downed or dead ally. Max 2 stacks.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//captains_insignia_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Captain's+Insignia",
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Cass',
    description:
      'Innate double use speed. On use, heals 140 over 0.5s. Relic capacity is halved.',
    iconURL: '',
    linkURL: 'https://remnant2.wiki.fextralife.com/Cass',
    tags: ['Cass', 'Relic', 'Ward 13'],
  },
  {
    name: "Cataloger's Jewel",
    description: 'Automatically generates 8 Mod Power per second.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//catalogers_jewel_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Cataloger's+Jewel",
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Celerity Stone',
    description: 'Increases Consumable and Relic Use Speed by 20%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//celerity_stone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Celerity+Stone',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Chains Of Amplification',
    description:
      'Increases all damage dealt to targets suffering from a Status Effect by 20%.',
    tags: ['Amulet', 'Losomn'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/chains_of_amplification_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Chains+Of+Amplification',
  },
  {
    name: 'Circumvent',
    description: 'Reduce Cost of Evade and Combat Slide by 10%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/circumvent_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Circumvent',
    tags: ['Invader', 'Perk', 'Utility'],
  },
  {
    name: 'Cleansing Stone',
    description:
      'Reduces Duration of Elemental Status Effects against wearer by 50%. Relic use cleanses Elemental Status effects and grants 15% of wearers Max Health to all allies within 7m when cleansed.',
    tags: ['Amulet', 'Losomn'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/cleansing_stone_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Cleansing+Stone',
  },
  {
    name: 'Close Quarters',
    description:
      'Grants a 3.5% increase to All Damage to enemies within 10m. Damage bonus tapers off until 20m.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/challenger_close_quarters_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Close+Quarters',
    tags: ['Challenger', 'Damage', 'Perk'],
  },
  {
    name: 'Compulsion Loop',
    description:
      'After killing an enemy, gain 5% Fire Rate and Melee Attack Speed for 7s. Stacks 3x.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//compulsion_loop_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Compulsion+Loop',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Conservation Seal',
    description:
      'For every 10% of Health missing  (Max 50%) gain 3% chance to not consume Relic and 5% increased Relic Efficacy on next use.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//conservation_seal_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Conservation+Seal',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Constant Variable Ring',
    description:
      "Increases Ranged damage up to 20% based on current Weapon's Overheat value.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//constant_variable_rings_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Constant+Variable+Ring',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Core Booster',
    description:
      'Increases weakspot damage by 50% for 10s after killing an enemy.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/core_booster_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Core+Booster',
  },
  {
    name: 'Crystal Heart',
    description:
      'On use, regenerates 100% of Max Health over 10s, Movement Speed is reduced by 50%, and incoming damage is reduced by 25%. Lasts 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/crystal_heart_relic_items_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Crystal+Heart',
    tags: ["N'Erud", 'Relic'],
  },
  {
    name: "Daredevil's Charm",
    description:
      "Gain 7.5% to all damage dealt, 3% Movement Speed, and 5% all damage taker' for each piece of unequipped armor.",
    tags: ['Amulet', 'Reggie', 'Root Earth'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/daredevils_charm_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Daredevil's+Charm",
  },
  {
    name: "Dead King's Memento",
    description: 'Increases Health by 15.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//dead_kings_memento_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Dead+King's+Memento",
    tags: ['Ring', 'Root Earth'],
  },
  {
    name: 'Dead to Rights',
    description:
      'Dealing 65 Base Ranged Weakspot Damage extends the duration of active Hunter Skills by 2.5s. Can extend timer beyond its initial duration',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/dead_to_rights_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Dead+to+Rights',
    tags: ['Hunter', 'Perk', 'Prime'],
  },
  {
    name: 'Deadeye',
    description: 'Gain 4% Ranged Damage and 1.5% Weakspot Damage.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/deadey_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Deadeye',
    tags: ['Damage', 'Hunter', 'Perk'],
  },
  {
    name: 'Deadly Calm',
    description:
      'Continuously Aiming increases Ranged Damage by up to 10-[20]% over 3s. Ranged Critical Hit Chance increased by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/deadly_calm_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Deadly+Calm',
    tags: ['Mutator'],
  },
  {
    name: "Death's Embrace",
    description:
      'Gain 20% to all damage when Health is below 100%. Gain HASTE when below 50% Health.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/death_embrace_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Death's+Embrace",
  },
  {
    name: 'Decayed Heart',
    description:
      'On use, causes the next 3 instances of enemy damage taken to trigger 40 Health regeneration over 3s. Lasts 30s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/decayed_heart_relic_items_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Decayed+Heart',
    tags: ['Relic', 'Root Earth'],
  },
  {
    name: 'Decayed Margin',
    description:
      'Melee hits gain 1.5% base damage dealt as Lifesteal. For each 25% missing Health, gain 1.5% additional Melee Lifesteal. When Health is full, gain 25% Melee Damage.',
    tags: ['Amulet', 'Cass', 'Ward 13'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/decayed_margin_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Decayed+Margin',
  },
  {
    name: "Deceiver's Band",
    description:
      'After performing a Slide, gain 15% Evade Speed and 10% Movement Speed for 12s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//deceivers_band_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Deceiver's+Band",
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Deep Pocket Ring',
    description: 'Increases Ammo Reserves by 25%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//deep_pocket_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Deep+Pocket+Ring',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Defensive Action Loop',
    description:
      'While reloading, and for 3s after reload completes, incoming damage is reduced by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//defensive_action_loop_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Defensive+Action+Loop',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Dense Silicon Ring',
    description: 'Gain 200% of Health Regenerated as Mod Power.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//dense_silicon_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Dense+Silicon+Ring',
    tags: ['Labyrinth', 'Ring'],
  },
  {
    name: 'Dervish',
    description:
      'Increases Melee Damage by 10-[40]% for 10s when activating a Skill. Melee kills reduce skill cooldowns by 5%. Can trigger once every 5s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/dervish_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Dervish',
    tags: ['Mutator'],
  },
  {
    name: 'Detonation Trigger',
    description:
      'Increases Explosion damage by 25%. Explosions apply 405 BURNING damage over 5s.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/detonation_trigger_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Detonation+Trigger',
  },
  {
    name: 'Die Hard',
    description:
      'When receiving fatal damage, the Challenger becomes invulnerable for 2s and regenerates 50% of Max Health.Can only happen once every 10 minutes. Resets at Wordstone or on death.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/die_hard_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Die+Hard',
    tags: ['Challenger', 'Perk', 'Prime'],
  },
  {
    name: 'Difference Engine',
    description:
      'While a Shield is active, gain 20% damage and 1.5% of base dealt as Lifesteal.',
    tags: ['Amulet', "N'Erud", 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/difference_engine_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Difference+Engine',
  },
  {
    name: 'Disengange',
    description:
      'Melee Strikes increase the damage of the next Backdash Evade Attack by 4-[10]%. Max 5 Stacks.Lasts 7.5s. Perfect Neutral Evades grants 5 stacks',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/disengage_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Disengange',
    tags: ['Mutator'],
  },
  {
    name: 'Dominator',
    description:
      'Increases Mod and Skill Damage by 3.5% while a Minion is active. Sacrificing a Minion increases Ranged and Melee Damage by 3% for 30s or until another Minion is summoned. Increases with Summoner level',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/dominator_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Dominator',
    tags: ['Damage', 'Perk', 'Summoner'],
  },
  {
    name: 'Downward Spiral',
    description:
      'Increase Fire Rate by 10% and Melee Attack Speed by 15%. For every missing 10% of Max Health, gain 3% Ranged Damage (Max 15%) and 4% Melee Damage (Max 20%).',
    tags: ['Amulet', 'Losomn', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/downward_spiral_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Downward+Spiral',
  },
  {
    name: 'Dragon Heart',
    description: 'On use, heals 70 Health over 0.5s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/dragon_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Dragon+Heart',
    tags: ['Relic', 'Ward 13'],
  },
  {
    name: 'Drakestone Pearl',
    description:
      'Enables Stamina Regeneration during Melee Attacks at 20% of the normal rate.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//drakestone_pearl_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Drakestone+Pearl',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Dran Memento',
    description: 'Increases Max Stamina by 20 and reduces Encumbrance by 5.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//dran_memento_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Dran+Memento',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Dread Font',
    description: 'Increases Grey Health Regeneration rate by 2 per second.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//dread_font_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Dread+Font',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Dying Ember',
    description: 'Gain 5% of base Melee damage dealt as Lifesteal.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//dying_ember_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Dying+Ember',
    tags: ['Ring', 'Root Earth'],
  },
  {
    name: 'Effigy Pendant',
    description:
      'While Grey Health is present, gain 15% to all damage dealt, 10% damage reduction and 1 additional hit before Grey Health is removed.',
    tags: ['Amulet', 'Losomn', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/effigy_pendant_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Effigy+Pendant',
  },
  {
    name: 'Effluvium Enhancer',
    description: 'Increases ACID damage by 20% and CORROSIVE damage by 50%.',
    tags: ['Amulet', 'Drzyr Replicator', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/effluvium_enhancer_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Effluvium+Enhancer',
  },
  {
    name: "Embrace of Sha'Hala",
    description:
      'Wearer gains 5% incoming damage reduction for each Negative Status Effect or Blight they are suffering from. Max 4 stacks.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/embrace_of_sha_hala_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Embrace+of+Sha'Hala",
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Emergency Switch',
    description:
      'When below 50% health, chance to consume Relic on use is reduced by 35%. Final Relic Charge is not consumed on use, but effect cannot be triggered again for 60s.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/emergency_switch_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Emergency+Switch',
  },
  {
    name: 'Encrypted Ring',
    description:
      'Using a Mod regenerates 10% of max HP over 10s. Reapplication increases duration up to a max of 30s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//encrypted_loop_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Encrypted+Ring',
    tags: ['Labyrinth', 'Ring'],
  },
  {
    name: "Endaira's Endless Loop",
    description:
      'After Sprinting for 2s, the wearer gains 1.5 Health Regeneration per second until they stop Sprinting.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//endairas_endless_loop_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Endaira's+Endless+Loop",
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Endurance',
    description: 'Increases Max Stamina by 30%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/endurance_core_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Endurance',
    tags: ['Trait'],
  },
  {
    name: 'Energized Neck Coil',
    description:
      "Increases Status Effect damage by 25%. Applying a damagin Status Effect creates a 5m Explosion for 20% of the Status Effect's full damage.",
    tags: ['Amulet', 'Labyrinth'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/energized_neck_coil_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Energized+Neck+Coil',
  },
  {
    name: 'Energy Diverter',
    description:
      'While a SHIELD is active, gain 10 Critical Chance and 15% to all damage dealt.',
    tags: ['Amulet', 'Drzyr Replicator', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/energy_diverter__amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Energy+Diverter',
  },
  {
    name: 'Escalation Protocol',
    description:
      'Increases all damage dealt by 2.5% for 10s after killing an enemy. Stacks 10x. Dealing damage refreshes the timer.',
    tags: ['Amulet', 'Root Earth'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/escalation_protocol_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Escalation+Protocol',
  },
  {
    name: 'Excess Coil',
    description:
      'Activating a Skill grants a SHIELD for 25% of Max Health. Cannot stack with itself. Lasts10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//excess_coil_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Excess+Coil',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Experimentalist',
    description:
      'Using a Relic applies a random buff on the Alchemist for 30s. Cannot be overriden.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/experimentalist_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Experimentalist',
    tags: ['Alchemist', 'Perk', 'Relic'],
  },
  {
    name: 'Expertise',
    description: 'Reduces Skill Cooldowns by -20%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/expertise_core_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Expertise',
    tags: ['Trait'],
  },
  {
    name: 'Extender',
    description:
      'Increases Magazine Capacity of this weapon by 20-[40]%. Increases Reload Speed of this weapon by 15% when reloading from empty.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/extender_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Extender',
    tags: ['Mutator'],
  },
  {
    name: 'Face of Danger',
    description:
      'Using a Relic within 10m of an enemy grants 2 stacks of Bulwark for 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/face_of_danger_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Face+of+Danger',
    tags: ['Challenger', 'Perk', 'Relic'],
  },
  {
    name: 'Fae Bruiser Ring',
    description:
      'Dealing Melee damage grants 2 Stack of BULWARK for 7s. Does not stack with itself.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//fae_bruiser_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Fae+Bruiser+Ring',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Fae Hunter Ring',
    description: 'Increases Range of Firearms by 30%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//fae_hunter_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Fae+Hunter+Ring',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Fae Protector Signet',
    description:
      'Increases Max Health and Stamina by 10 and Reduces Encumbrance by 5.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//fae_protector_signet_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Fae+Protector+Signet',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Fae Shaman Ring',
    description:
      'Increases Health Regeneration by 0.25 and Relic Use Speed by 25%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//fae_shaman_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Fae+Shaman+Ring',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Fae Warrior Ring',
    description: 'Increases Melee Damage by 15%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//fae_warrior_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Fae+Warrior+Ring',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: "Faelin's Sigil",
    description: 'Melee Damage generates 10% additional Mod Power.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//faelins_sigil_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Faelin's+Sigil",
    tags: ['Losomn', 'Ring'],
  },
  {
    name: "Faerin's Sigil",
    description:
      'Critical and Weakspot Hits generates 10% additional Mod Power.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//faerin_sigil_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Faerin's+Sigil",
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Failsafe',
    description:
      'Attached Mod deals 10-[20]% additional Mod Damage. Attached Mod use gains a 15% chace to not consume charge.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/failsafe_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Failsafe',
    tags: ['Mutator'],
  },
  {
    name: "Feastmaster's Signet",
    description: 'Increases active Concoction Limit by1.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//feastmasters_signet_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Feastmaster's+Signet",
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Feedback',
    description:
      "Using this weapon's Mod generates 10-[20]% of single charge value as passive Mod Power over 10s. Does not stack. Mod Damage generates 10% of damage dealt as Mod Power.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/feedback_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Feedback',
    tags: ['Mutator'],
  },
  {
    name: 'Feedback Loop',
    description:
      'Perfect Dodge triggers a 3m AOE blast that deal 115 SHOCK Damage and applies OVERLOADED.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//feedback_loop_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Feedback+Loop',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Fire Stone',
    description: 'Increases FIRE damage by 10% and FIRE Resistance by 15.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//fire_stone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Fire+Stone',
    tags: ['Losomn', 'Reggie', 'Ring', 'Ward 13'],
  },
  {
    name: 'Fitness',
    description: 'Increases Evade Distance by +30%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/fitness_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Fitness',
    tags: ['Trait'],
  },
  {
    name: 'Flash Caster',
    description: 'Increases casting speed by 50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/flash_caster_archon_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Flash+Caster',
    tags: ['Trait'],
  },
  {
    name: "Flyweight's Sting",
    description:
      'Increases Melee damage while Armor Encumbrance is below 50. Damage bonus increases with lower Encumbrance, up to 25% at 0 Weight.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//flyweights_sting_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Flyweight's+Sting",
    tags: ['Ring', 'Root Earth'],
  },
  {
    name: 'Focused Jewel',
    description:
      'Continuously Aiming Down Sights reduces Recoil by 25% and gradually reduces Spread up to 35% over 3.5s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//focused_jewel_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Focused+Jewel',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Footwork',
    description: 'Increases Movement Speed while Aiming by +50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/footwork_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Footwork',
    tags: ['Trait'],
  },
  {
    name: 'Fortify',
    description: 'Increases Armor Effectiveness by 50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/fortify_engineer_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Fortify',
    tags: ['Trait'],
  },
  {
    name: 'Frivolous Band',
    description:
      'Increases Evade Speed by 10%. Perfect Evades increase Fire Rate by 10% and Melee Speed by 10% for 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//frivolous_band_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Frivolous+Band',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Full Moon Circlet',
    description:
      'Ranged damage gives Lifesteal as 3% of base damage dealt. At full health, damage is increases by 20%.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/full_moon_circlet_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Full+Moon+Circlet',
  },
  {
    name: 'Galvanized Resupply Band',
    description: 'Increases Ammo Pickups by 50%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//galvanized_resupply_band_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Galvanized+Resupply+Band',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: "Game Master's Pride",
    description:
      'Reduces all healing by 50%. Splits all damage and remaining healing evenly amoung all allies wearing this ring.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//game_masters_pride_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Game+Master's+Pride",
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Generating Band',
    description:
      'Regenerate 3% of Max Health per second while a Shield is active.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//generating_band_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Generating+Band',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Ghost Shell',
    description:
      'After 3 consecutive Weakspot Hits, increase the damage of the next Weakspot Hit by 20-[40]%. Increases Weakspot Critical Chance by 15%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/ghost_shell_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ghost+Shell',
    tags: ['Mutator'],
  },
  {
    name: 'Glutton',
    description: 'Increases the Use Speed of Consumables and Relics by +30%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/glutton_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Glutton',
    tags: ['Trait'],
  },
  {
    name: 'Gold To Lead',
    description:
      'Picking up Scrap has a 15% chance to also award Ammo to the Alchemist.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/gold_to_lead_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Gold+To+Lead',
    tags: ['Alchemist', 'Perk', 'Utility'],
  },
  {
    name: 'Golden Ribbon',
    description:
      'Increases Mod damage by 25%. Activating a MOD grants HASTE for 15s.',
    tags: ['Amulet', 'Faerin', 'Losomn', 'Statue Event'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/gold_ribbon_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Golden+Ribbon',
  },
  {
    name: 'Grounding Stone',
    description: 'Increases SHOCK damage by 10% and SHOCK Resistance by 15.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//grounding_stone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Grounding+Stone',
    tags: ['Losomn', 'Reggie', 'Ring', 'Ward 13'],
  },
  {
    name: "Guardian's Ring",
    description:
      'Adds 1 Stack of BULWARK when within 7m of an enemy. Increases to 2 Stacks for 10s after taking Melee damage.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//guardians_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Guardian's+Ring",
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Gunfire Security Lanyard',
    description:
      'Automatically reloads Magazine over time. Does not work for single shot weapons.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/gunfire_security_lanyard_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Gunfire+Security+Lanyard',
    tags: ['Amulet', 'Labyrinth'],
  },
  {
    name: "Gunslinger's Charm",
    description: 'Increases Fire Rate by 15% and Reload Speed by 20%.',
    tags: ['Amulet', 'Mudtooth', 'Ward 13'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/gunslingers_charm_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Gunslinger's+Charm",
  },
  {
    name: "Gunslinger's Ring",
    description: 'Increases Firearm Swap Speed by 30% and Reload Speed by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//gunslingers_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Gunslinger's+Ring",
    tags: ['Mudtooth', 'Ring', 'Ward 13'],
  },
  {
    name: 'Hallowed Egg',
    description:
      'Spending at least 30% of Firearms magazine to deal damage increases Melee damage by 10% for 7s. Stacks 5x.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/hallowed_egg_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Hallowed+Egg',
  },
  {
    name: 'Handling',
    description: 'Reduces Weapon Spread and Recoil by 40%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/handling_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Handling',
    tags: ['Trait'],
  },
  {
    name: 'Hardcore Metal Band',
    description:
      'Taking damage adds 1 stack of BULWARK which individually falls of after 10s. Max 5 stacks.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//hardcore_metal_band_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Hardcore+Metal+Band',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Hardened Coil',
    description:
      'Reduces all incoming damage by 3% for each 10% missing Health. Max 15% reduction.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//hardened_coil_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Hardened+Coil',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Harmonizer',
    description:
      ' Increases Mod Damage by 10-[20]%. Generate 25% additional Mod Power for Stowed Weapon.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/harmonizer_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Harmonizer',
    tags: ['Mutator'],
  },
  {
    name: "Haymaker's Ring",
    description:
      'Increase Melee damage by 0.2% for every 1 points of Armor Encumbrance.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//haymakers_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Haymaker's+Ring",
    tags: ['Ring', 'Root Earth'],
  },
  {
    name: 'Heart of the Wolf',
    description: 'Increases Max Stamina by 25 and Movement Speed by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//heart_of_the_wolf_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Heart+of+the+Wolf',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Heavy Mobility',
    description:
      'Movement Speed while Carrying a Heavy Weapon is increased by 35%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/heavy_mobility_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Heavy+Mobility',
    tags: ['Engineer', 'Perk', 'Utility'],
  },
  {
    name: 'Hex Ward',
    description: 'Prevents CURSE Blight.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/hex_ward_rings_remnant2_wiki_guide_250px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Hex+Ward',
    tags: ['Nimue', 'Ring'],
  },
  {
    name: 'High Tech',
    description:
      'Holding the SKILL button will Overclock a Carried or Deployed Heavy Weapon. Overclocking grants infinite Ammo, increased Fire Rate, and a 25% damage increase for 15s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/high_tech_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/High+Tech',
    tags: ['Engineer', 'Perk', 'Prime'],
  },
  {
    name: 'Hyperconductor',
    description:
      'Gain double Skill Charges. Increases Skill Cooldowns by 50% and reduces Max Power Generation by 15%.For Heavy Weapons, doubles Heavy Weapon Ammo instead.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/hyper_conductor_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Hyperconductor',
  },
  {
    name: 'Incite',
    description:
      'Using a Relic grants Minions 5% Max HP per second, and increases their damage dealt by 15%. Lasts 30s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/incite_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Incite',
    tags: ['Perk', 'Relic', 'Summoner'],
  },
  {
    name: 'Indignant Fetish',
    description:
      'Taking damage from enemies increases all damage dealt by 25% and reduces all incoming damage by 10%. Lasts 20s.',
    tags: ['Amulet', 'Losomn'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/indignant_fetish_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Indignant+Fetish',
  },
  {
    name: 'Inert Overcharger',
    description:
      'Standing still increases Fire Rate by 20%, Reload Speed by 15%, and reduces Recoil by 50%. Lasts 1.5s after moving.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/inert_overcharger_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Inert+Overcharger',
  },
  {
    name: 'Insulation Driver',
    description:
      'While BULWARK is active, gain 15% to all damage dealt and HASTE.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/insulation_driver_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Insulation+Driver',
  },
  {
    name: 'Intimidating Presence',
    description:
      'After activating a Challenger Skill, enemies within 10m deal 10% less damage for 15s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/intimidating_presence_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Intimidating+Presence',
    tags: ['Challenger', 'Perk', 'Team'],
  },
  {
    name: 'Intuition',
    description:
      'Using a Relic extends the duration of any active Hunter Skill by 5s. Effect degrades with each subsequent use.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/intuition_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Intuition',
    tags: ['Hunter', 'Perk', 'Relic'],
  },
  {
    name: 'Invigorated',
    description: 'Grants a 2.5% increase to All Damage',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/invigorated_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Invigorated',
    tags: ['Damage', 'Medic', 'Perk'],
  },
  {
    name: "Jester's Bell",
    description:
      'Increases Mod and Skill Cast Speed by 35%. Casting a Skill or Mod increases all damage by 20% for 15s.',
    tags: ['Amulet', 'Losomn'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/jesters_bell_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Jester's+Bell",
  },
  {
    name: 'Kinetic Cycle Stone',
    description: 'Increases Mod and Skill Cast Speed by 20%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//kinetic_cycle_stone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Kinetic+Cycle+Stone',
    tags: ['Ring', 'Root Earth'],
  },
  {
    name: 'Kinetic Shield Exchanger',
    description:
      'While a SHIELD is active, gain 25% Mod damage and generate 15% additional Mod power.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/kinetic_shield_exchanger_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Kinetic+Shield+Exchanger',
  },
  {
    name: 'Kinship',
    description: 'Reduces Friendly Fire Damage Dealt and Received by 80%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/kinship_handler_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Kinship',
    tags: ['Trait'],
  },
  {
    name: 'Kuri Kuri Charm',
    description:
      'For every 10% of Health missing (Max 50%), gain 10% increased Relic Use Speed and 7% chance to not consume a Relic Charge.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/kuri_kuri_charm_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Kuri+Kuri+Charm',
  },
  {
    name: 'Laemir Censer',
    description: 'Increases Mod Duration by 50%. Increases Mod Cost by 15%.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/laemir_censer_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Laemir+Censer',
  },
  {
    name: 'Lifeless Heart',
    description: 'On use, heals 30 Health over 0.5s. Relic capacity is doubled',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/lifeless_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Lifeless+Heart',
    tags: ['Relic'],
  },
  {
    name: 'Liquid Courage',
    description: 'Gain 2.5% increase to All Damage.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/liquid_courage_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Liquid+Courage',
    tags: ['Alchemist', 'Damage', 'Perk'],
  },
  {
    name: 'Lithely',
    description:
      "Increases this weapon's Reload Speed by 4-[7]% for each enemy killed between reloads. lasts 15s Max 5 Stacks. Reloading this weapon at Max Stacks increases Ranged Damage by 20% by 15s",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/lithe%C3%B1y_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Lithely',
    tags: ['Mutator'],
  },
  {
    name: 'Lithic Signet',
    description: 'Reduces all incoming damage by 5%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//lithic_signet_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Lithic+Signet',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Loaded',
    description:
      'When activating any Gunslinger Skill, both weapons are instantly reloaded, and gain infinite reserve ammo on all weapons for 5s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/loaded_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Loaded',
    tags: ['Gunslinger', 'Perk', 'Prime'],
  },
  {
    name: 'Lodestone Ring',
    description:
      'Increases all damage dealt against illuminated enemies by 5%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//lodestone_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Lodestone+Ring',
    tags: ['Ring'],
  },
  {
    name: 'Longshot',
    description: 'Increases Weapon Ideal Range by 600(cm)',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/longshot_hunter_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Longshot',
    tags: ['Trait'],
  },
  {
    name: 'Loophole',
    description:
      "All ally Ranged and Melee damage against enemies distracted by the Invader's Decoy grants 5% as Lifesteal",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/loophole_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Loophole',
    tags: ['Invader', 'Perk', 'Team'],
  },
  {
    name: 'Low Yield Recovery Ring',
    description:
      'Killing an enemy regenerates 5% Max Health over 5s. Additional kills increase duration by 5s. Max 30s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//low_yield_recovery_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Low+Yield+Recovery+Ring',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Lucky',
    description:
      'Grants a 10% chance to spawn additional items and rarer drops when defeating stronger enemies.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/lucky_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Lucky',
    tags: ['Explorer', 'Perk', 'Prime'],
  },
  {
    name: 'Magnetic Field',
    description:
      'Heavy Weapons grant 15% Damage Reduction to all allies within 2.5m.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/magnetic_field_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Magnetic+Field',
    tags: ['Engineer', 'Perk', 'Team'],
  },
  {
    name: "Matriarch's Insignia",
    description:
      'Increases Melee Damage by 35% and causes all successful Melee Attacks to restore 10 Stamina.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/matriarch_insignia_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Matriarch's+Insignia",
  },
  {
    name: "Mechanic's Cog",
    description:
      'While carrying an Engineer Heavy Weapon, gain 15% Movement Speed and 1 stack of BULWARK',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//mechanics_cog_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Mechanic's+Cog",
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Metal Detector',
    description:
      'Increase Ammo, Currecny, and Metal Drop Rate Chance for entire party by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/metal_detector_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Metal+Detector',
    tags: ['Explorer', 'Metal Detector', 'Perk'],
  },
  {
    name: 'Metal Driver',
    description: 'Killing Blows increase Reload Speed by 5% for 7s. Stacks 3x.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//metal_driver_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Metal+Driver',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Metalworker',
    description:
      'Increaases Skill Damage by 5%. Heavy Weapons gain 5% Ammo Capacity, and +2.5% Max Health',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/metalworker_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Metalworker',
    tags: ['Damage', 'Engineer', 'Perk'],
  },
  {
    name: 'Meteorite Shard Ring',
    description:
      'Increases Encumbrance by 50. Increases Unarmed damage by 50%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//meteorite_shard_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Meteorite+Shard+Ring',
    tags: ['Drzyr Replicator', "N'Erud", 'Ring'],
  },
  {
    name: 'Microcompressor',
    description:
      'Reduces Heat Generation when firing weapons that Overheat by -30%. Increases Heat Reduction Rate by 30%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//microcompressor_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Microcompressor',
    tags: ['Drzyr Replicator', "N'Erud", 'Ring'],
  },
  {
    name: 'Misfortune',
    description:
      'Increase Melee damage by 5-[8]% for each unique Negative Status the target is suffering from. Melee Attacks apply SLOW for 2s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/misfortune_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Misfortune',
    tags: ['Mutator'],
  },
  {
    name: 'Momentum',
    description:
      'When this weapon scores a Critical Hit, it increases Critical Chance and Critical Damage by 1.5-[3]% for 3s. Max 10 stacks. Critical Hits from this weapon add 2 stacks. Increases duration by 2s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/momentum_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Momentum',
    tags: ['Mutator'],
  },
  {
    name: 'Momentum Driver',
    description:
      'After Sprinting for 2s, Movement Speed is increased by 15% and Stagger Level reduced by 1.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//momentum_driver_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Momentum+Driver',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: "Navigator's Pendant",
    description: 'Grants 20 Health, 20 Stamina, and -10 Armor Encumbrance.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/navigator_pendant_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Navigator's+Pendant",
  },
  {
    name: 'Neckbone Necklace',
    description:
      'Reduces the Damage of Status Effects applied to wearer by 50%. Gain 25% increased Damage when suffering from a Status Effect or Blight.',
    tags: ['Amulet', 'Feast Event', 'Losomn'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/neckbone_necklace_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Neckbone+Necklace',
  },
  {
    name: 'Necklace of Flowing Life',
    description:
      'Increases Grey Health conversion by an additional 100%. When Grey Health Conversion triggers, gain 5x the amount as Mod Power.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/necklace_of_flowing_life_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Necklace+of+Flowing+Life',
  },
  {
    name: 'Necklace of Supremacy',
    description:
      'After 7s of not being damaged, increases all damage dealt by 15%. Increases to 25% if Health is full.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/necklace_of_supremacy_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Necklace+of+Supremacy',
  },
  {
    name: 'Nightmare Spiral',
    description:
      ' Gain 10% of base Ranged damage dealt as Lifesteal. Reduces Healing Effectiveness by 95%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/nightmare_spiral_amulets_remnant2_wiki_guide_250px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Nightmare+Spiral',
    tags: ['Amulet', 'Reggie'],
  },
  {
    name: "Nightweaver's Grudge",
    description:
      'Gain 20% Critical Chance and HASTE when within 15m of an entity suffering from a Status Effect.',
    tags: ['Amulet', 'Losomn', "Nightweaver's Web."],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/nightwavers_grudge_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Nightweaver's+Grudge",
  },
  {
    name: "Nimue's Ribbon",
    description:
      'Increase Relic Healing Effectiveness by 50% Activating a Relic grants HASTE for 25s.',
    tags: ['Amulet', 'Losomn', 'Nimue'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/nimues_ribbon_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Nimue's+Ribbon",
  },
  {
    name: 'One True King Sigil',
    description:
      "Increases Mod damage by 20%. Enhances the effect of Faerin's Sigil and Faelin's Sigil by 50% per Sigil equipped.",
    tags: ['Amulet', 'Losomn', 'Nimue'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/one_true_king_sigil_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/One+True+King+Sigil',
  },
  {
    name: 'One-Eyed Joker Idol',
    description:
      'Neutral Backdash creates a Magic Card lasting 1s. If Card absorbs enemy damage gain 25% Critical Chance for 5s. Neutral Backdash cost 30% additional Stamina.',
    tags: ['Amulet'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/one-eyed_joker_idol_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/One-Eyed+Joker+Idol',
  },
  {
    name: 'Outcast Ring',
    description:
      'Increases Reload Speed by 5% for 15s after reloading. Stacks 5x.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//outcast_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Outcast+Ring',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Outrage',
    description:
      'Sacrifice grants 3% Lifesteal for each Minion Sacrificed. Lasts 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/outrage_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Outrage',
    tags: ['Perk', 'Summoner', 'Utility'],
  },
  {
    name: 'Overdrive',
    description:
      'Melee Critical Hits increase Melee Critical Chance and Critical Damage by 5% for 7.5-[15]s. stacking up to 5 times. Melee Critical Strikes deal 20% additional damage.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/overdrive_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Overdrive',
    tags: ['Mutator'],
  },
  {
    name: 'Override',
    description:
      'Using a Relic reduces Threat Generation by 25% for 10s. While Override is active, the next Evade leaves a Empowered Decoy which lasts 4s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/override_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Override',
    tags: ['Invader', 'Perk', 'Relic'],
  },
  {
    name: 'Pack Hunter',
    description:
      'Gain 3% Ranged and Skill Damage while Companion is active and within 25m of the player.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/pack_hunter_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Pack+Hunter',
    tags: ['Damage', 'Handler', 'Perk'],
  },
  {
    name: 'Panacea',
    description:
      'Curative effects apply to all allies within15m and grant 15 additional Resistance.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/panacea_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Panacea',
    tags: ['Alchemist', 'Perk', 'Team'],
  },
  {
    name: 'Point Focus Ring',
    description: 'Reduces Initial Spread and Recoil by 35%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//point_focus_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Point+Focus+Ring',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Posse Up',
    description:
      'Ammo pickups award 20% additional Ammo per player with the bonus split equally among teammates.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/posse_up_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Posse+Up',
    tags: ['Gunslinger', 'Perk', 'Team'],
  },
  {
    name: 'Potency',
    description: 'Increases Consumable Duration by 100%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/potency_alchemist_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Potency',
    tags: ['Trait'],
  },
  {
    name: 'Power Creep',
    description:
      'After casting a Mod, 5% of the Mod Power spent will be regenerated by all allies over 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/power_creep_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Power+Creep',
    tags: ['Archon', 'Perk', 'Team'],
  },
  {
    name: 'Power Leak',
    description: 'Using a Relic grants 200 Mod Power for both equipped Mods.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/power_leak_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Power+Leak',
    tags: ['Archon', 'Perk', 'Relic'],
  },
  {
    name: 'Power Saver',
    description: 'At Max Health, gain a 25% chance to not use a Relic charge.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//power_saver_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Power+Saver',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Powerlifter',
    description:
      'The Stamina Cost increases for each weight bracket is reduced by 50%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/powerlifter_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Powerlifter',
    tags: ['Challenger', 'Perk', 'Utility'],
  },
  {
    name: 'Probability Cord',
    description: 'Increases Crit Damage by 30%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//probability_cord_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Probability+Cord',
    tags: ['Ring', 'Root Earth'],
  },
  {
    name: 'Propulsion Loop',
    description:
      'After killing an enemy, increases Movement Speed by 5% and Consumable Use Speed by 10% for 10s. Stacks 3x.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//propulsion_loop_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Propulsion+Loop',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Prospector',
    description:
      'Relic Fragments discovered by Explorer drop at a higher quality.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/prospector_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Prospector',
    tags: ['Explorer', 'Perk', 'Utility'],
  },
  {
    name: 'Provisioner Ring',
    description: 'Firearms reload over time while stowed.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/provisioner_ring_rings_remnant2_wiki_guide_250px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Provisioner+Ring',
    tags: ['Labyrinth', 'Reggie', 'Ring'],
  },
  {
    name: 'Pulsing Heart',
    description:
      'On use, pulses every 3s, healing allies within 7m for 20 Health over 0.5s per pulse. Lasts 15s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/pulsing_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Pulsing+Heart',
    tags: ['Relic', 'Yaesha'],
  },
  {
    name: 'Quick Hands',
    description: 'Firearms gain 10% Reload Speed',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/quick_hands_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Quick+Hands',
    tags: ['Gunslinger', 'Perk', 'Utility'],
  },
  {
    name: 'Quilted Heart',
    description:
      'Does not provide standard healing. On use, negates Stamina Drain and cause Evades to heal for 15 Health over 0.25s. Lasts 20s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/quilted_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Quilted+Heart',
    tags: ['Losomn', 'Relic'],
  },
  {
    name: 'Range Finder',
    description:
      'After killing an enemy, gain 10% Ranged damage and 2m Firearm Range. Stacks 3x Lasts 10s. ranged Weakspot Hits will refresh duration.',
    tags: ['Amulet', 'Drzyr Replicator', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/range_finder_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Range+Finder',
  },
  {
    name: "Ravager's Mark",
    description:
      'Increases all damage dealt to BLEEDING targets by 20%. Bonus increases to 30% for targets with 50% or lower Health.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/ravagers_mark_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Ravager's+Mark",
  },
  {
    name: 'Reaping Stone',
    description:
      'After an Elemental Status Effect is removed from wearer, they become immune to all Elemental Status Effects and gain 2% of base damage dealt as Lifesteal for 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//reaping_stone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Reaping+Stone',
    tags: ['Ring', 'Root Earth'],
  },
  {
    name: 'Recovery',
    description: 'Increases Stamina Regen by 30/s',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/recovery_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Recovery',
    tags: ['Trait'],
  },
  {
    name: 'Red Doe Sigil',
    description:
      "Increases Relic Healing Effectiveness by 30% which doubles when the wearer's Health is below 50%.",
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/red_doe_sigil_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Red+Doe+Sigil',
  },
  {
    name: 'Refunder',
    description:
      'Shots from this weapon have a 20-[30]% chance to return Ammo to reserves. Refunded Ammo has a 50% chance to also be added to stowed weapon reserves.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/refunder_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Refunder',
    tags: ['Mutator'],
  },
  {
    name: 'Regenerator',
    description:
      'After restoring 350 Total Health to allies, regain a spent Relic charge.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/regenerator_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Regenerator',
    tags: ['Medic', 'Perk', 'Prime'],
  },
  {
    name: 'Regrowth',
    description: 'Increases Health Regen by 1.5s',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/regrowth_summoner_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Regrowth',
    tags: ['Trait'],
  },
  {
    name: 'Reinvigorate',
    description:
      'Reduces the Stamina Cost of all Charged Melee Attacks by 25-[50]%. Melee Charge Attacks gain 15% additional damage and 10% Critical Chance.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/reinvigorate_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Reinvigorate',
    tags: ['Mutator'],
  },
  {
    name: 'Reprocessed Heart',
    description:
      'On use, converts 5 Health to 40 Mod Power per second for 25s for Both Weapons. Cannot die from conversion.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/reprocessed_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Reprocessed+Heart',
    tags: ['Labyrinth', 'Relic'],
  },
  {
    name: 'Rerouting Cable',
    description:
      'Gain 5% of Max Health as a SHIELD for 5s after spending 25 Stamina. Accumulation resets after 5s of inaction. Max 50% SHIELD.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//rerouting_cable_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Rerouting+Cable',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Resentment',
    description:
      'Gain 10-[30]% Melee Damage when Grey Health is present. Reduces Stagger by 1 when using any Melee Attack',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/resentment_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Resentment',
    tags: ['Mutator'],
  },
  {
    name: 'Reserve Boosting Gem',
    description:
      'Increases Health Regeneration by 0.333 per second. 1s after going below 50% Health, increases regeneration value to 2 per second until 50% Health is reached.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//reserve_boosting_gem_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Reserve+Boosting+Gem',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Residue',
    description:
      'Minions that expire lave a 3m Aura which heals 2.5% Health per second. Lasts 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/residue_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Residue',
    tags: ['Perk', 'Summoner', 'Team'],
  },
  {
    name: 'Resonance',
    description: 'Increases Aura Size by +50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/resonance_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Resonance',
    tags: ['Trait'],
  },
  {
    name: 'Resonating Heart',
    description:
      'On use, regenerates 50% of Max Health over 5s. When heal ends, any overhea| Health is Doubled and awarded over the next 20s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/resonating_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Resonating+Heart',
    tags: ['Relic', 'Root Earth'],
  },
  {
    name: 'Restriction Cord',
    description:
      'Restricts the wearer from Healing above 50% of their Max Health and reduces all incoming damage by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//restriction_cord_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Restriction+Cord',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Return to Sender',
    description:
      'Kills due to Weakspot and Criticl Hits increase Ammo drops by 25%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/return_to_sender_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Return+to+Sender',
    tags: ['Hunter', 'Perk', 'Team'],
  },
  {
    name: 'Revivalist',
    description: 'Increases the Speed of Reviving and being Revived by +50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/revivalist_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Revivalist',
    tags: ['Trait'],
  },
  {
    name: 'Ring of Crisis',
    description:
      "When wearer's Health drops below 25%, gain a Shield for 25% of Max Health. Lasts 10s.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_crisis_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+of+Crisis',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Ring Of Deflection',
    description:
      'Direct Damage against wearer has a 20% Chance to be converted entirely to Grey Health.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_deflection_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+Of+Deflection',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Ring of Diversion',
    description: 'Increases invulnerability window while evading and sliding.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_diversion_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+of+Diversion',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Ring of Flawed Beauty',
    description:
      'Ranged Weakspot damage is increased by 25%. Ranged damage is reduced by 15% when failing to hit a Weakspot.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_flawed_beauty_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+of+Flawed+Beauty',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Ring of Grace',
    description:
      'Taking enemy damage causes 10% of Maximum Health to regenerate over 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_grace_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+of+Grace',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Ring of Omens',
    description:
      'Evades cost 15% Max Health as Grey Health instead of Stamina.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_omens_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+of+Omens',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Ring Of Restocking',
    description:
      'Reloads within 1.5s of a Critical Hit or Weakspot Kill are 20% faster.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_restocking_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+Of+Restocking',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Ring Of Retribution',
    description:
      'Incoming enemy damage increases Reload Speed and all outgoing damage by 10%. Lasts 15s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_retribution_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+Of+Retribution',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Ring of the Damned',
    description:
      'Increases all damage dealt by10% while Grey Health is present.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/strong_arm_band_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+of+the+Damned',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Ring of the Forest Spirit',
    description: 'Relic Healing Effectiveness is increased by 15%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_the_forest_spirit_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+of+the+Forest+Spirit',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Ring of the Robust',
    description: 'Increases Max Health by 10, and Armor Effectiveness by 15.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//ring_of_the_robust_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ring+of+the+Robust',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Ripened Heart',
    description:
      'On.use, heals 35 Health over 0.5s and an additional 70 over 5s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/ripened_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ripened+Heart',
    tags: ['Relic', 'Yaesha'],
  },
  {
    name: 'Rock of Anguish',
    description:
      'Gain 5% Movement Speed and 7.5% Reload Speed for every 25% of Max Healthmissing.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//rock_of_anguish_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Rock+of+Anguish',
    tags: ['Cass', 'Ring'],
  },
  {
    name: 'Rotward',
    description: 'Prevents ROOT ROT Blight.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//rotward_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Rotward',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Rugged',
    description: 'Increases the Health of Archetpye Summons by +100%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/rugged_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Rugged',
    tags: ['Trait'],
  },
  {
    name: 'Runed Heart',
    description:
      'On use, increases Health Regeneration by 5 and generates 500 Mod Power over 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/runed_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Runed+Heart',
    tags: ['Labyrinth', 'Relic'],
  },
  {
    name: 'Rusted Heirloom',
    description: 'Grants 2 Stacks of BULWARK below 50% Max HP.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//rusted_heirloom_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Rusted+Heirloom',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: "Rusted Navigator's Pendant",
    description: 'Grants 15 Health, 15 Stamina, and -15 Armor Encumbrance.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/rusted_navigators_pendant_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Rusted+Navigator's+Pendant",
  },
  {
    name: 'Ruthless',
    description:
      'When the Summoner deals damage to their Minion, it causes them to ENRAGE. Minions gain 30% increased Damage, Attack Speed, and Movement Speed. Lasts 20s',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/ruthless_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Ruthless',
    tags: ['Perk', 'Prime', 'Summoner'],
  },
  {
    name: 'Sagestone',
    description: 'Increases earned Experience by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//sagestone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Sagestone',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Salvaged Heart',
    description:
      'Innate 50% Use Speed bonus. On use, heals 30 Health over 0.25s and restore 300% of current Grey Health.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/salvaged_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Salvaged+Heart',
    tags: ['Relic'],
  },
  {
    name: 'Samoflange',
    description:
      'Direct damage taken from enemies, and any additional damage within 2s, is reduced by 50%. Once the defensive buff expires, all incoming damage to wearer is increased by 15% for 10s.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/samoflange_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Samoflange',
  },
  {
    name: 'Sapphire Dreamstone',
    description:
      'Critical Hits reduce Skill Cooldowns by 3%. Can only happen once every 2s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//sapphire_dreamstone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Sapphire+Dreamstone',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Scavenger',
    description:
      'Pickups increase All Damage Dealt by 0.5% per stack for 15s. Addiotional Stacks increase Duration, up to 60s. Max 5 Stacks.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/scavenger_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Scavenger',
    tags: ['Damage', 'Explorer', 'Perk'],
  },
  {
    name: "Scavenger's Bauble",
    description:
      'Increases Scrap pickups by 50%, Automatically pick up any nearby crafting materials.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/scavengers_bauble_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Scavenger's+Bauble",
  },
  {
    name: 'Scholar',
    description: 'Increases Experience Gain by +15%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/scholar_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Scholar',
    tags: ['Trait'],
  },
  {
    name: 'Seal of the Empress',
    description: 'Increases Max Health by 20. Reduces Max Stamina by 10.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//seal_of_the_empress_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Seal+of+the+Empress',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Self Discovery',
    description:
      'Using a Relic instantly fills Scavenger Stacks and prevents Stack Decay for 15s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/self_discovery_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Self+Discovery',
    tags: ['Explorer', 'Perk', 'Relic'],
  },
  {
    name: 'Shadeskin',
    description:
      'Increases Resistance to Elemental Status Effect Damage by 20%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/shadeskin_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shadeskin',
    tags: ['Trait'],
  },
  {
    name: 'Shadow',
    description:
      'Casting an Invader Skill leaves a Decoy for 3s which draws enemy fire. Deal +5% additional damage to enemies not targeting Invader.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/shadow_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shadow',
    tags: ['Invader', 'Perk', 'Prime'],
  },
  {
    name: 'Shaed Bloom Crystal',
    description:
      'Gain a 30% damage bonus. Every 5s, the bonus switches between Physical and Elemental damage.',
    tags: ['Amulet', 'Losomn', 'Malefic Palace'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/shaed_bloom_crystal_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shaed+Bloom+Crystal',
  },
  {
    name: 'Shard Banded Ring',
    description: 'Increases Mod damage by 12%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//shard_banded_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shard+Banded+Ring',
    tags: ['Labyrinth', 'Ring'],
  },
  {
    name: 'Shark',
    description:
      'Sprinting for 1s or Evading adds 1 Stack of Momentum which increases Ranged and Melee damage by 0.7% for 15s. Max 5 Stacks.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/shark_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shark',
    tags: ['Damage', 'Invader', 'Perk'],
  },
  {
    name: 'Shield Breaker',
    description:
      'Melee Attacks grants a Shield for 2-4% of Max Health. Max 20-40%. Last 10s. Charged Melee Attacks consume all Shield to increase damage of next strike by 1% per Shield Consumed. Max 100%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/shield_breaker_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shield+Breaker',
    tags: ['Mutator'],
  },
  {
    name: 'Shielded Heart',
    description:
      'On use, grants a Shield for 100% of Current Health. Lasts 20s or until Shield is removed by damage',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/shielded_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shielded+Heart',
    tags: ["N'Erud", 'Relic'],
  },
  {
    name: 'Shift Shot',
    description: 'Gain 1.5% Fire Rate and 2.5% Ranged Damage.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/swift_shot_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shift+Shot',
    tags: ['Damage', 'Gunslinger', 'Perk'],
  },
  {
    name: 'Shiny Hog Lure',
    description:
      'Reloading grants 25-30 Mod Power to both weapons based on percentage of Magazine reloaded.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//shiny_hog_lure_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shiny+Hog+Lure',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Shock Device',
    description: 'Increases SHOCK damage by 20% and OVERLOADED damage by 50%.',
    tags: ['Amulet', 'Losomn', 'Morrow Parish'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/shock_device_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Shock+Device',
  },
  {
    name: 'Silver Ribbon',
    description:
      'Increases Skill damage by 25%. Activating a SKILL grants HASTE for 15s.',
    tags: ['Amulet', 'Faelin', 'Losomn', 'Statue Event'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/silver_ribbon_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Silver+Ribbon',
  },
  {
    name: 'Singed Ring',
    description: 'Increases all damage dealt to BURNING enemies by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//singed_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Singed+Ring',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Siphon Heart',
    description:
      'On use, grants 10% of dase damage dealt as Lifesteal for 10s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/siphon_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Siphon+Heart',
    tags: ["N'Erud", 'Relic'],
  },
  {
    name: 'Siphoner',
    description: 'Increases Lifesteal by +3.0%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/siphoner_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Siphoner',
    tags: ['Trait'],
  },
  {
    name: 'Slayer (Mutator)',
    description:
      "Reloading increases the damage of this weapon's next shot by 10-[20]%. Last 3s. Increases reload Speed by 15%.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/slayer_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Slayer+(Mutator)',
    tags: ['Mutator'],
  },
  {
    name: "Slayer's Crest",
    description:
      'Increases Melee damage by 25% when attacking enemies from behind',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//slayers_crest_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Slayer's+Crest",
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Sleight of Hand',
    description: 'Using a Relic reloads equipped Firearm',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/sleight_of_hands_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Sleight+of+Hand',
    tags: ['Gunslinger', 'Perk', 'Relic'],
  },
  {
    name: 'Soul Anchor',
    description: 'Summoning increases all damage dealt by 20% for 30s.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/soul_anchor_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Soul+Anchor',
  },
  {
    name: 'Soul Guard',
    description: 'Gain a stack of BULWARK for each active Summon.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//soul_guard_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Soul+Guard',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Soul Link',
    description:
      'Summons Lifesteal 5% of base damage dealt which returns to the wearer as Health.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//soul_link_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Soul+Link',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Spirit',
    description: 'Increases Mod Power Generation by 20%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/spirit_core_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Spirit',
    tags: ['Trait'],
  },
  {
    name: 'Spirit of the Wolf',
    description:
      "Increases Movement Speed by 10%. All allies within 10m of the Handler gain the Handler's Movement Spped (if faster).",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/spirit_of_the_wolf_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Spirit+of+the+Wolf',
    tags: ['Handler', 'Perk', 'Team'],
  },
  {
    name: 'Spirit Stone',
    description: 'Increases Mod Power generation by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//spirit_stone_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Spirit+Stone',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Spirit Wisp Amulet',
    description:
      'Activating a Mod reduces current Skill Cooldowns by 3% for every 300 Mod Power spent.',
    tags: ['Amulet', 'Losomn', 'Man In The Sewers Event'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/spirit_wisp_amulet__amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Spirit+Wisp+Amulet',
  },
  {
    name: 'Spirit Within',
    description: 'Reduces the Mod Power requirement for all Mods by 15%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/spirit_within_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Spirit+Within',
    tags: ['Archon', 'Perk', 'Utility'],
  },
  {
    name: 'Spirited',
    description: 'Alchemist can have 1 additional Concotion buff active.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/spirited_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Spirited',
    tags: ['Alchemist', 'Perk', 'Prime'],
  },
  {
    name: "Stalker's Brand",
    description:
      'Gain 10% Ranged and 15% Melee damage. Bonus double versus enemies not targeting wearer.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/stalkers_brand_amulets_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Stalker's+Brand",
  },
  {
    name: 'Steadfast',
    description:
      'Charged Melee Attacks cannot be interrupted and gain 10-[20]% damage reduction from all sources. All damage taken during Charged Melee Attack is covered to Grey Health.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/steadfast_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Steadfast',
    tags: ['Mutator'],
  },
  {
    name: 'Stockpile Charger',
    description:
      'After picking up ammo, increases the damage of that Ammo Type by 13% for 20s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//stockpile_charger_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Stockpile+Charger',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Stone of Balance',
    description: 'Increases all damage by 7%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//stone_of_balance_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Stone+of+Balance',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Stone of Continuance',
    description: 'Increases Skill Duration by 25%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//stone_of_continuance_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Stone+of+Continuance',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Stone of Expanse',
    description:
      'Increases Ranged damage by 12%. Reduces all other damage dealt by 6%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//stone_of_expanse_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Stone+of+Expanse',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Stone Of Malevolence',
    description: 'Elemental Status damage generates 15% additional Mod Power.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//stone_of_malevolence_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Stone+Of+Malevolence',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Stream Coupler',
    description: 'Using a Skill regenerates 10% of Max Health over 5s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//stream_coupler_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Stream+Coupler',
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Striker',
    description:
      'Melee Hits increase Melee Damage by 3-6% for 10s Max 5 Stacks. Increases Movement Speed by 2% per stack.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/striker_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Striker',
    tags: ['Mutator'],
  },
  {
    name: 'Strong Back',
    description: 'Reduces encumbrance by 10',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/strong_back_challenger_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Strong+Back',
    tags: ['Trait'],
  },
  {
    name: 'Subterfuge Link',
    description:
      'After killing an enemy, increases the Cast Speed of the next Mod or Skill Cast by 35%. Lasts 15s or until consumed.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//subterfuge_link_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Subterfuge+Link',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Supercharger',
    description:
      'Increases Charge Speed of Bows and Fusion Rifles by 10-[30]%. Charged Primary Shots of Bows and Fusion Rigles gain 15% Critical Chance.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/supercharger_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Supercharger',
    tags: ['Mutator'],
  },
  {
    name: 'Suppression Ward',
    description: 'Prevents SUPPRESSION Blight.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//supression_ward_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Suppression+Ward',
    tags: ['Drzyr Replicator', "N'Erud", 'Ring'],
  },
  {
    name: 'Surplus',
    description:
      'Using a Relic refills 15% of Heavy Weapon Ammo. Bonus is doubled when Heavy Weapon is stowed. If the Stowed Heavy Weapon is overfilled, the Engineer will drop additional Ammo based on the surplus.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/surplus_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Surplus',
    tags: ['Engineer', 'Perk', 'Relic'],
  },
  {
    name: 'Swiftness',
    description: 'Increases all Movement Speed by 15%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/swiftness_explorer_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Swiftness',
    tags: ['Trait'],
  },
  {
    name: 'Talisman of the Sun',
    description: 'Increases FIRE damage by 20% and BURNING damage by 50%.',
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/talisman_of_the_sun_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Talisman+of+the+Sun',
  },
  {
    name: 'Targeting Jewel',
    description:
      'Increases Range on all Firearms by 4m. Reduces Spread by 15%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//targeting_jewel_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Targeting+Jewel',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Tarnished Ring',
    description: 'Increases damage of Unarmed Attacks by 30%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//tarnished_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Tarnished+Ring',
    tags: ['Ring', 'Ward 13'],
  },
  {
    name: 'Teamwork',
    description: 'Handler and Companion gain 5% increased Revive Speed.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/teamwork_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Teamwork',
    tags: ['Handler', 'Perk', 'Utility'],
  },
  {
    name: 'Tear of Kaeula',
    description: 'Increases Relic capacity by 2 while equipped',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//tear_of_kauela_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Tear+of+Kaeula',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Tempest',
    description:
      'Automatically generate 2 Mod Power per second. Casting a Mod increases all Mod Generation by 50% for 6s',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/tempest_perk_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Tempest',
    tags: ['Archon', 'Perk', 'Prime'],
  },
  {
    name: 'Tempest Conduit',
    description:
      'After receiving Elemental Damage, increases all damage dealt by 10% and Resistance to the received Element by 20 for 20s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//tempest_conduit_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Tempest+Conduit',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Tightly Wound Coil',
    description:
      'When spending 75% or more of current magazine, gain a SHIELD ofr 10% of Max Health for 5s. Does not stack with itself.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//tightly_wound_coil_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Tightly+Wound+Coil',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: "Timekeeper's Jewel",
    description:
      'Increases the duration of all Status Effects applied by wearer. Durations varies per status.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//timekeepers_jewel_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Timekeeper's+Jewel",
    tags: ['Losomn', 'Ring'],
  },
  {
    name: 'Timewave',
    description:
      "Mod Use applies SLOW status on all enemies within 7.5m for 5-[7]s. Increase this weapon's Ranged damage by 15% to enemies inflicted with SLOW status.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/timewave_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Timewave',
    tags: ['Mutator'],
  },
  {
    name: "Tomb Dweller's Ring",
    description:
      'Increases Movement Speed by 10% for 7s after Vaulting, Climbing, Leaping, and entering Water, stacks 1x. Reduces Fall Damage by 25%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//tomb_dwellers_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Tomb+Dweller's+Ring",
    tags: ['Ring'],
  },
  {
    name: 'Tormented Heart',
    description:
      'Innate 20% Use Speed bonus. On use, deals 420 Explosive damage to enemies within 10m and Lifesteals 25% of damage dealt. ',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/tormented_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Tormented+Heart',
    tags: ['Losomn', "Nightweaver's Web.", 'Relic'],
  },
  {
    name: 'Toxic Release Valve',
    description:
      'Swapping off an empty Firearm releases a Toxic Cloud, which deals 148.5 ACID Damage to all enemies within 7m. and applies CORROSION. Can only happen once every 3s.',
    tags: ['Amulet', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/toxic_release_valve_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Toxic+Release+Valve',
  },
  {
    name: 'Tranquil Heart',
    description:
      'Passively grants 2 Health Regeneration per second. On use, doubles All Health Regeneration for 15s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/tranquil_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Tranquil+Heart',
    tags: ['Nimue', 'Relic'],
  },
  {
    name: 'Transference',
    description:
      'Melee Hits generate 5% Ammo Reserves for both Firearms. Cooldown 10-[5]s. When a Firearm reserve is full, melee Strikes generate 25% additional Mod Power for that weapon.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/transference_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Transference',
    tags: ['Mutator'],
  },
  {
    name: 'Transpose',
    description:
      "Picking up Ammo increases Ranged damage by 10-[20]% for 20s. Ammo pickups are added directly to into this weapon's magazine.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/transpose_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Transpose',
    tags: ['Mutator'],
  },
  {
    name: 'Triage',
    description: 'Increases healing provided by Weapon Mods by 50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/triage_medic_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Triage',
    tags: ['Trait'],
  },
  {
    name: 'Twisted Idol',
    description:
      'Increases Armor Effectiveness by 30% and reduces Encumbrance by 15.',
    tags: ['Amulet', 'Cass', 'Ward 13'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/twisted_idol_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Twisted+Idol',
  },
  {
    name: 'Twisting Wounds',
    description:
      "Increases Ranged damage of this weapon by 10-[20]% to BLEEDING targets. This weapon's Ranged Weakspot and Ranged Critical Hits apply BLEEDING, dealing 100 BLEED damage over 10s.",
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/twisting_wounds_ranged_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Twisting+Wounds',
    tags: ['Mutator'],
  },
  {
    name: 'Unsullied Heart',
    description: 'On use, heals for 100% of Current Health over 0.5s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/unsullied_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Unsullied+Heart',
    tags: ['Losomn', 'Relic'],
  },
  {
    name: 'Untouchable',
    description: 'Increases Evade Window by 30%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/untouchable_invader_archetype_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Untouchable',
    tags: ['Trait'],
  },
  {
    name: 'Urgency',
    description: 'Firearms gain 15% Reload Speed after a Kill. Lasts 3s',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/urgency_perk_remnant2_wiki_guide_256px_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Urgency',
    tags: ['Hunter', 'Perk', 'Utility'],
  },
  {
    name: 'Vacuum Seal',
    description:
      'Increases Automatic Pickup Range for Scrap by 100%. Picking up Scrap, Iron, or Ammo grants a SHIELD for 10% of Max Health for l0s Does not stack.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//vacuum_seal_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Vacuum+Seal',
    tags: ["N'Erud", 'Ring'],
  },
  {
    name: 'Vampire Blade',
    description:
      'Increases Melee Damage by 10-[25]% while within 10m of a BLEEDING entity. Melee Hits vs BLEEDING targets will Lifesteal 3% of base damage dealt.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/vampire_blade_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Vampire+Blade',
    tags: ['Mutator'],
  },
  {
    name: 'Vengeance Idol',
    description:
      "Increases all damage dealt by 30% when the wearer's Health is below 50%.",
    tags: ['Amulet', 'Yaesha'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/vengeance_idol_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Vengeance+Idol',
  },
  {
    name: 'Vengeful Strike',
    description:
      'Increases Melee damage by 20-[50]% when below 50% Max Health. Increases Melee Critical Chance by 15% when below 50% Max Health.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/vengeful_striker_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Vengeful+Strike',
    tags: ['Mutator'],
  },
  {
    name: 'Vestige of Power',
    description:
      'After 7s of not being damaged, increases Ranged and Melee Damage by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//vestige_of_power_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Vestige+of+Power',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Vigor',
    description: 'Increases Max Health by 30%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/vigor_core_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Vigor',
    tags: ['Trait'],
  },
  {
    name: 'Void Heart',
    description:
      'On use, reduces incoming damage by 50% for 4s. When buff ends, heals 100% of missing Health over 0.75s.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/void_heart_relic_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Void+Heart',
    tags: ["N'Erud", 'Relic'],
  },
  {
    name: 'Void Idol',
    description:
      'Increases Reload Speed by 20%. Reloads only require 50% of magazine from reserves to fully reload.',
    tags: ['Amulet', 'Drzyr Replicator', "N'Erud"],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/void_idol_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Void+Idol',
  },
  {
    name: 'Wax Sealed Ring',
    description:
      'Killing blows increase Ranged and Melee Damage by 4% for 15s. Stacks 3x.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/wax_sealed_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Wax+Sealed+Ring',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: 'Wayfarer',
    description: 'Increeses Traversal Movement by +50%',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/wayfarer_trait_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Wayfarer',
    tags: ['Trait'],
  },
  {
    name: 'Weaponlord',
    description:
      'Basic Melee Attacks increase the next Charge Attacks by 7%. Max 5 Stacks. At Max Stacks, the next Charge Attack gains 100% Critical Chance.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/weaponlord_mutator_remnant2_wiki_guide_100px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Weaponlord',
    tags: ['Mutator'],
  },
  {
    name: 'Weightless Weight',
    description:
      'Increases Movement Speed by 0.75% and Reduces Stamina Costs of all actions by 0.75%  for every each 5 point of Armor Encumbrance.',
    tags: ['Amulet', 'Losomn'],
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2/wightless_weight_amulets_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Weightless+Weight',
  },
  {
    name: 'White Pawn Stamp',
    description: 'Reduces Mod Power Requirement by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//white_pawn_stamp_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/White+Pawn+Stamp',
    tags: ['Ring'],
  },
  {
    name: 'Wind Hollow Circlet',
    description: 'Increases Reload Speed by 12%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//wind_hollow_circlet_rings_remnant2_wiki_guide_75px.png',
    linkURL: 'https://remnant2.wiki.fextralife.com/Wind+Hollow+Circlet',
    tags: ['Ring', 'Yaesha'],
  },
  {
    name: "Worn Admiral's Ring",
    description:
      'All damage received is increased by 200%. All damage dealt is increased by 10%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//worn_admirals_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Worn+Admiral's+Ring",
    tags: ['Reggie', 'Ring', 'Ward 13'],
  },
  {
    name: "Zania's Malice",
    description:
      'Dealing Weakspot damage increases Weakspot damage by 10% for 7s. Stacks 3x.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//zanias_malice_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Zania's+Malice",
    tags: ['Ring', 'Root Earth'],
  },
  {
    name: "Zohee's Ring",
    description: 'Increases Mod Duration by 15%.',
    iconURL:
      'https://remnant2.wiki.fextralife.com/file/Remnant-2//zohees_ring_rings_remnant2_wiki_guide_75px.png',
    linkURL: "https://remnant2.wiki.fextralife.com/Zohee's+Ring",
    tags: ['Ring', 'Yaesha'],
  },
];
export default data;
