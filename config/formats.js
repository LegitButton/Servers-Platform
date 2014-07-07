// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

// XY Singles
///////////////////////////////////////////////////////////////////

{
name: "Random Battle",
section: "XY Singles",

team: 'random',
ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
},
{
name: "Unrated Random Battle",
section: "XY Singles",

team: 'random',
challengeShow: false,
rated: false,
ruleset: ['Random Battle']
},
{
name: "OU",
section: "XY Singles",

ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Baton Pass Clause'],
banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Swagger']
},
{
name: "Ubers",
section: "XY Singles",

ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
banlist: []
},
{
name: "UU",
section: "XY Singles",

ruleset: ['OU'],
banlist: ['OU', 'BL', 'Heracronite', 'Medichamite', 'Gardevoirite', 'Drizzle', 'Drought', 'Alakazite']
},
{
name: "RU",
section: "XY Singles",

searchShow: false,
ruleset: ['UU'],
banlist: ['UU', 'BL2']
},
{
name: "RU (suspect test)",
section: "XY Singles",

challengeShow: false,
ruleset: ['UU'],
banlist: ['UU', 'BL2']
},
{
name: "NU (beta)",
section: "XY Singles",

ruleset: ['RU'],
banlist: ['RU', 'BL3']
},
{
name: "LC",
section: "XY Singles",

maxLevel: 5,
ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Gligar']
},
{
name: "LC UU",
section: "XY Singles",

searchShow: false,
maxLevel: 5,
ruleset: ['LC'],
banlist: ['Abra', 'Aipom', 'Archen', 'Bellsprout', 'Bunnelby', 'Carvanha', 'Chinchou', 'Clamperl', 'Cottonee', 'Cranidos',
'Croagunk', 'Diglett', 'Drilbur', 'Dwebble', 'Elekid', 'Ferroseed', 'Fletchling', 'Foongus', 'Gastly', 'Honedge',
'Houndour', 'Magnemite', 'Meditite', 'Mienfoo', 'Misdreavus', 'Omanyte', 'Onix', 'Pawniard', 'Ponyta', 'Porygon',
'Riolu', 'Scraggy', 'Shellder', 'Slowpoke', 'Snubbull', 'Spritzee', 'Staryu', 'Taillow', 'Timburr', 'Tirtouga',
'Trubbish', 'Vullaby', 'Vulpix', 'Zigzagoon'
]
},
{
name: "XY Battle Spot Singles",
section: "XY Singles",

onBegin: function () {
this.debug('cutting down to 3');
this.p1.pokemon = this.p1.pokemon.slice(0, 3);
this.p1.pokemonLeft = this.p1.pokemon.length;
this.p2.pokemon = this.p2.pokemon.slice(0, 3);
this.p2.pokemonLeft = this.p2.pokemon.length;
},
maxForcedLevel: 50,
ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
banlist: [], // The neccessary bans are in Standard GBU
validateTeam: function (team, format) {
if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
}
},
{
name: "XY Battle Spot Special 4",
section: "XY Singles",

mod: 'inverse',
onBegin: function () {
this.debug('cutting down to 3');
this.p1.pokemon = this.p1.pokemon.slice(0, 3);
this.p1.pokemonLeft = this.p1.pokemon.length;
this.p2.pokemon = this.p2.pokemon.slice(0, 3);
this.p2.pokemonLeft = this.p2.pokemon.length;
},
maxForcedLevel: 50,
ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
banlist: [], // The neccessary bans are in Standard GBU
validateTeam: function (team, format) {
if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
}
},
/*{
name: "CAP Volkraken Playtest",
section: "XY Singles",

ruleset: ['CAP Pokemon', 'Standard', 'Team Preview'],
banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Tomohawk', 'Necturna', 'Mollux', 'Aurumoth', 'Malaconda', 'Cawmodore', 'Syclant', 'Revenankh', 'Pyroak', 'Fidgit', 'Stratagem', 'Arghonaut', 'Kitsunoh', 'Cyclohm', 'Colossoil', 'Krilowatt', 'Voodoom']
},*/
{
name: "Custom Game",
section: "XY Singles",

searchShow: false,
canUseRandomTeam: true,
debug: true,
maxLevel: 9999,
defaultLevel: 100,
// no restrictions, for serious (other than team preview)
ruleset: ['Team Preview']
},

// XY Doubles
///////////////////////////////////////////////////////////////////


{
name: "Random Doubles Battle",
section: "XY Doubles",

gameType: 'doubles',
team: 'randomDoubles',
ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
},
{
name: "Smogon Doubles",
section: "XY Doubles",

gameType: 'doubles',
ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
banlist: ['Soul Dew', 'Dark Void',
'Mewtwo', 'Lugia', 'Ho-Oh', 'Kyogre', 'Groudon', 'Rayquaza', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin',
'Arceus', 'Reshiram', 'Zekrom', 'Kyurem-White', 'Xerneas', 'Yveltal'
]
},
{
name: "Smogon Doubles Ubers",
section: "XY Doubles",

gameType: 'doubles',
searchShow: false,
ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview'],
banlist: ['Unreleased', 'Illegal', 'Dark Void']
},
{
name: "Smogon Doubles UU",
section: "XY Doubles",

gameType: 'doubles',
searchShow: false,
ruleset: ['Smogon Doubles'],
banlist: ['Abomasnow', 'Aegislash', 'Aerodactyl', 'Amoonguss', 'Aromatisse', 'Azumarill', 'Bisharp', 'Breloom', 'Chandelure', 'Charizard',
'Conkeldurr', 'Cresselia', 'Dragonite', 'Dusclops', 'Excadrill', 'Ferrothorn', 'Garchomp', 'Gardevoir', 'Genesect', 'Gengar',
'Greninja', 'Gyarados', 'Heatran', 'Hitmontop', 'Infernape', 'Kangaskhan', 'Klefki', 'Kyurem-Black', 'Landorus-Therian', 'Latios',
'Lucario', 'Mamoswine', 'Manectric', 'Mawile', 'Meowstic', 'Politoed', 'Rotom-Wash', 'Salamence', 'Scizor', 'Scrafty',
'Shaymin-Sky', 'Sylveon', 'Talonflame', 'Terrakion', 'Thundurus', 'Togekiss', 'Tyranitar', 'Venusaur', 'Volcarona', 'Whimsicott', 'Zapdos'
]
},
{
name: "XY Battle Spot Doubles",
section: "XY Doubles",

gameType: 'doubles',
onBegin: function () {
this.debug('cutting down to 4');
this.p1.pokemon = this.p1.pokemon.slice(0, 4);
this.p1.pokemonLeft = this.p1.pokemon.length;
this.p2.pokemon = this.p2.pokemon.slice(0, 4);
this.p2.pokemonLeft = this.p2.pokemon.length;
},
maxForcedLevel: 50,
ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
validateTeam: function (team, format) {
if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
}
},
{
name: "VGC 2014",
section: "XY Doubles",

gameType: 'doubles',
onBegin: function () {
this.debug('cutting down to 4');
this.p1.pokemon = this.p1.pokemon.slice(0, 4);
this.p1.pokemonLeft = this.p1.pokemon.length;
this.p2.pokemon = this.p2.pokemon.slice(0, 4);
this.p2.pokemonLeft = this.p2.pokemon.length;
},
maxForcedLevel: 50,
ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
requirePentagon: true,
banlist: [], // The neccessary bans are in Standard GBU
validateTeam: function (team, format) {
if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
}
},
{
name: "Doubles Challenge Cup",
section: 'XY Doubles',

gameType: 'doubles',
team: 'randomCC',
searchShow: false,
ruleset: ['Pokemon', 'HP Percentage Mod']
},
{
name: "Doubles Custom Game",
section: "XY Doubles",

gameType: 'doubles',
searchShow: false,
canUseRandomTeam: true,
maxLevel: 9999,
defaultLevel: 100,
debug: true,
ruleset: ['Team Preview']
},

// Monotype
///////////////////////////////////////////////////////////////////
{
name: "Random Monotype",
section: "Monotype",
column: 2,

team: 'randommonotype',
ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
},
{
name: "OU Monotype",
section: "Monotype",
ruleset: ['OU', 'Same Type Clause'],
banlist: ['Talonflame']
},
{
name: "Ubers Monotype",
section: "Monotype",

ruleset: ['Pokemon', 'Standard Ubers', 'Same Type Clause'],
banlist: []
},
{
name: "UU Monotype",
section: "Monotype",

ruleset: ['OU', 'Same Type Clause'],
banlist: ['OU', 'BL', 'Heracronite', 'Medichamite', 'Gardevoirite', 'Drizzle', 'Drought']
},
{
name: "RU Monotype",
section: "Monotype",

ruleset: ['UU', 'Same Type Clause'],
banlist: ['UU', 'BL2']
},
{
name: "NU Monotype",
section: "Monotype",

ruleset: ['RU (beta)', 'Same Type Clause'],
banlist: ['RU', 'BL3']
},
{
name: "LC Monotype",
section: "Monotype",

maxLevel: 5,
ruleset: ['Pokemon', 'Standard', 'Little Cup', 'Same Type Clause'],
banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Gligar']
},


// Other Metagames
///////////////////////////////////////////////////////////////////

{
name: "STABmons",
section: "OM of the Month",

ruleset: ['OU'],
banlist: ['Porygon-Z', 'Sylveon']
},
{
name: "OU Theorymon",
section: "OM of the Month",

mod: 'theorymon',
ruleset: ['OU']
},
{
name: "Stat Reversal",
section: "Other Metagames",

mod: 'statreversal',
ruleset: ['OU'],
},
{
name: "CAP",
section: "Other Metagames",

ruleset: ['CAP Pokemon', 'Standard', 'Team Preview'],
banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Swagger']
},
{
name: "Challenge Cup",
section: "Other Metagames",

team: 'randomCC',
ruleset: ['Pokemon', 'HP Percentage Mod']
},
{
name: "Challenge Cup 1-vs-1",
section: "Other Metagames",

team: 'randomCC',
ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
onBegin: function () {
this.debug('Cutting down to 1');
this.p1.pokemon = this.p1.pokemon.slice(0, 1);
this.p1.pokemonLeft = this.p1.pokemon.length;
this.p2.pokemon = this.p2.pokemon.slice(0, 1);
this.p2.pokemonLeft = this.p2.pokemon.length;
}
},
{
name: "1v1",
section: 'Other Metagames',

onBegin: function () {
this.p1.pokemon = this.p1.pokemon.slice(0, 1);
this.p1.pokemonLeft = this.p1.pokemon.length;
this.p2.pokemon = this.p2.pokemon.slice(0, 1);
this.p2.pokemonLeft = this.p2.pokemon.length;
},
ruleset: ['Pokemon', 'Standard'],
banlist: ['Unreleased', 'Illegal', 'Focus Sash', 'Kangaskhanite', 'Soul Dew',
'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
]
},
{
name: "Hackmons",
section: "Other Metagames",

ruleset: ['Pokemon', 'HP Percentage Mod']
},
{
name: "Balanced Hackmons",
section: "Other Metagames",

ruleset: ['Pokemon', 'OHKO Clause', 'HP Percentage Mod', 'Ability Clause'],
banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power', 'Parental Bond']
},
{
name: "Sky Battles",
section: "Other Metagames",

validateSet: function (set) {
var template = this.getTemplate(set.species || set.name);
if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
return [set.species + " is not a Flying type and does not have the ability Levitate."];
}
},
ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
banlist: ['Uber', 'Iron Ball', 'Pinsirite', 'Soul Dew',
'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure', 'Flying Press',
'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heat Crash', 'Heavy Slam', 'Ingrain', "Land's Wrath",
'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller', 'Seismic Toss', 'Slam', 'Smack Down', 'Spikes',
'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport',
'Archen', 'Chatot', 'Delibird', 'Dodrio', 'Doduo', 'Ducklett', "Farfetch'd", 'Fletchling', 'Gastly', 'Gengar',
'Hawlucha', 'Hoothoot', 'Murkrow', 'Natu', 'Pidgey', 'Pidove', 'Rufflet', 'Shaymin-Sky', 'Spearow', 'Starly',
'Taillow', 'Vullaby'
]
},
{
name: "Inverse Battle",
section: "Other Metagames",

mod: 'inverse',
ruleset: ['Pokemon', 'Standard', 'Team Preview'],
banlist: ['Gengarite', 'Kangaskhanite', 'Soul Dew',
'Arceus', 'Darkrai', 'Deoxys-Attack', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Lugia',
'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Kyurem-White', 'Xerneas', 'Yveltal', 'Zekrom'
]
},
{
name: "OU Monotype",
section: "Other Metagames",

ruleset: ['OU', 'Same Type Clause'],
banlist: ['Talonflame']
},
{
name: "Tier Shift",
section: "Other Metagames",

mod: 'tiershift',
ruleset: ['OU']
},
{
name: "Ability Exchange",
section: "Other Metagames",

searchShow: false,
ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Swagger', 'Slaking', 'Regigigas']
},
{
name: "Ability Shift",
section: "Other Metagames",

mod: 'abilityshift',
searchShow: false,
ruleset: ['Pokemon', 'Standard', 'Team Preview'],
banlist: ['Ampharosite', 'Gyaradosite',
'Arceus', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyurem-White',
'Lugia', 'Meloetta', 'Mewtwo', 'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram', 'Slaking', 'Xerneas', 'Zekrom'
]
},
{
name: "Almost Any Ability",
section: "Other Metagames",

searchShow: false,
ruleset: ['Pokemon', 'Team Preview', 'Standard'],
banlist: ['Ignore Illegal Abilities', 'Uber', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Soul Dew', 'Swagger',
'Archeops', 'Kyurem-Black', 'Regigigas', 'Slaking', 'Shedinja + Sturdy', 'Smeargle + Prankster'
],
validateSet: function(set) {
var bannedAbilities = {'Aerilate': 1, 'Arena Trap': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Imposter': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Simple':1, 'Speed Boost': 1, 'Wonder Guard': 1};
if (set.ability in bannedAbilities) {
var template = this.getTemplate(set.species || set.name);
var legalAbility = false;
for (var i in template.abilities) {
if (set.ability === template.abilities[i]) legalAbility = true;
}
if (!legalAbility) return ['The ability "' + set.ability + '" is banned on Pokémon that do not naturally have it.'];
}
}
},
{
name: "Alphabet Cup",
section: "Other Metagames",

searchShow: false,
ruleset: ['OU'],
banlist: ['Swoobat'],
validateTeam: function (team, format) {
var letters = {};
var letter = '';
for (var i = 0; i < team.length; i++) {
letter = Tools.getTemplate(team[i]).species.slice(0, 1).toUpperCase();
if (letter in letters) return ['Your team cannot have more that one Pokémon starting with the letter "' + letter + '".'];
letters[letter] = 1;
}
}
},
{
name: "Averagemons",
section: "Other Metagames",

mod: 'averagemons',
searchShow: false,
ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
banlist: ['DeepSeaScale', 'DeepSeaTooth', 'Eviolite', 'Light Ball', 'Mawilite', 'Medichamite', 'Soul Dew', 'Thick Club', 'Huge Power', 'Pure Power', 'Shedinja', 'Smeargle']
},
{
name: "Gen-NEXT OU",
section: "Other Metagames",

mod: 'gennext',
searchShow: false,
ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
banlist: ['Uber']
},
{
name: "Middle Cup",
section: "Other Metagames",

searchShow: false,
maxLevel: 50,
defaultLevel: 50,
validateSet: function (set) {
var template = this.getTemplate(set.species || set.name);
if (!template.evos || template.evos.length === 0 || !template.prevo) {
return [set.species + " is not the middle Pokémon in an evolution chain."];
}
},
ruleset: ['Pokemon', 'Standard', 'Team Preview'],
banlist: ['Eviolite']
},
{
name: "[Gen 5] Glitchmons",
section: "Other Metagames",

mod: 'gen5',
searchShow: false,
mimicGlitch: true,
ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
banlist: ['Illegal', 'Unreleased']
},

// BW2 Singles
///////////////////////////////////////////////////////////////////

{
name: "[Gen 5] OU",
section: "BW2 Singles",
column: 2,

mod: 'gen5',
ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
},
{
name: "[Gen 5] Ubers",
section: "BW2 Singles",

mod: 'gen5',
ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
banlist: []
},
{
name: "[Gen 5] UU",
section: "BW2 Singles",

mod: 'gen5',
ruleset: ['[Gen 5] OU'],
banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
},
{
name: "[Gen 5] RU",
section: "BW2 Singles",

mod: 'gen5',
ruleset: ['[Gen 5] UU'],
banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
},
{
name: "[Gen 5] NU",
section: "BW2 Singles",

mod: 'gen5',
ruleset: ['[Gen 5] RU'],
banlist: ['RU', 'BL3', 'Prankster + Assist']
},
{
name: "[Gen 5] LC",
section: "BW2 Singles",

mod: 'gen5',
maxLevel: 5,
ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Scyther', 'Sneasel', 'Tangela']
},
{
name: "[Gen 5] GBU Singles",
section: "BW2 Singles",

mod: 'gen5',
validateSet: function (set) {
if (!set.level || set.level >= 50) set.forcedLevel = 50;
return [];
},
onBegin: function () {
this.debug('cutting down to 3');
this.p1.pokemon = this.p1.pokemon.slice(0, 3);
this.p1.pokemonLeft = this.p1.pokemon.length;
this.p2.pokemon = this.p2.pokemon.slice(0, 3);
this.p2.pokemonLeft = this.p2.pokemon.length;
},
ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
banlist: ['Sky Drop', 'Dark Void']
},
{
name: "[Gen 5] Custom Game",
section: "BW2 Singles",

mod: 'gen5',
searchShow: false,
canUseRandomTeam: true,
debug: true,
maxLevel: 9999,
defaultLevel: 100,
// no restrictions, for serious (other than team preview)
ruleset: ['Team Preview']
},

// BW2 Doubles
///////////////////////////////////////////////////////////////////

{
name: "[Gen 5] Smogon Doubles",
section: 'BW2 Doubles',
column: 2,

mod: 'gen5',
gameType: 'doubles',
ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
'Mewtwo',
'Lugia',
'Ho-Oh',
'Kyogre',
'Groudon',
'Rayquaza',
'Dialga',
'Palkia',
'Giratina', 'Giratina-Origin',
'Arceus',
'Reshiram',
'Zekrom',
'Kyurem-White'
]
},
{
name: "[Gen 5] GBU Doubles",
section: 'BW2 Doubles',

mod: 'gen5',
gameType: 'doubles',
onBegin: function () {
this.debug('cutting down to 4');
this.p1.pokemon = this.p1.pokemon.slice(0, 4);
this.p1.pokemonLeft = this.p1.pokemon.length;
this.p2.pokemon = this.p2.pokemon.slice(0, 4);
this.p2.pokemonLeft = this.p2.pokemon.length;
},
maxForcedLevel: 50,
ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
banlist: ['Sky Drop', 'Dark Void']
},
{
name: "[Gen 5] Doubles Custom Game",
section: 'BW2 Doubles',

mod: 'gen5',
gameType: 'doubles',
searchShow: false,
canUseRandomTeam: true,
debug: true,
maxLevel: 9999,
defaultLevel: 100,
// no restrictions, for serious (other than team preview)
ruleset: ['Team Preview']
},

// Past Generations
///////////////////////////////////////////////////////////////////

{
name: "[Gen 4] OU",
section: "Past Generations",
column: 2,

mod: 'gen4',
ruleset: ['Pokemon', 'Standard'],
banlist: ['Uber']
},
{
name: "[Gen 4] Ubers",
section: "Past Generations",

mod: 'gen4',
ruleset: ['Pokemon', 'Standard'],
banlist: ['Arceus']
},
{
name: "[Gen 4] UU",
section: "Past Generations",

mod: 'gen4',
ruleset: ['Pokemon', 'Standard'],
banlist: ['Uber', 'OU', 'BL']
},
{
name: "[Gen 4] LC",
section: "Past Generations",

mod: 'gen4',
maxLevel: 5,
ruleset: ['Pokemon', 'Standard', 'Little Cup'],
banlist: ['Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma']
},
{
name: "[Gen 4] Custom Game",
section: "Past Generations",

mod: 'gen4',
searchShow: false,
debug: true,
ruleset: ['Pokemon', 'HP Percentage Mod']
},
{
name: "[Gen 3] OU (beta)",
section: "Past Generations",

mod: 'gen3',
ruleset: ['Pokemon', 'Standard'],
banlist: ['Uber', 'Smeargle + Ingrain']
},
{
name: "[Gen 3] Custom Game",
section: "Past Generations",

mod: 'gen3',
searchShow: false,
debug: true,
ruleset: ['Pokemon', 'HP Percentage Mod']
},
{
name: "[Gen 2] OU (beta)",
section: "Past Generations",

mod: 'gen2',
debug: true,
ruleset: ['Pokemon', 'Standard'],
banlist: ['Uber', 'Mean Look + Hypnosis + Perish Song']
},
{
name: "[Gen 2] Custom Game",
section: "Past Generations",

mod: 'gen2',
searchShow: false,
debug: true,
ruleset: ['Pokemon', 'HP Percentage Mod']
},
{
name: "[Gen 1] OU (beta)",
section: "Past Generations",

mod: 'gen1',
ruleset: ['Pokemon', 'Standard'],
banlist: ['Uber',
'Kakuna + Poison Sting + Harden', 'Kakuna + String Shot + Harden',
'Beedrill + Poison Sting + Harden', 'Beedrill + String Shot + Harden',
'Nidoking + Fury Attack + Thrash',
'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp', 'Exeggutor + Stun Spore + Stomp',
'Eevee + Tackle + Growl',
'Vaporeon + Tackle + Growl',
'Jolteon + Tackle + Growl', 'Jolteon + Focus Energy + Thunder Shock',
'Flareon + Tackle + Growl', 'Flareon + Focus Energy + Ember'
]
},
{
name: "[Gen 1] Custom Game",
section: "Past Generations",

mod: 'gen1',
searchShow: false,
debug: true,
ruleset: ['Pokemon', 'HP Percentage Mod']
}

];
