exports.BattleStatuses = {
slp: {
effectType: 'Status',
onStart: function (target) {
this.add('-status', target, 'slp');
// 1-4 turns
this.effectData.time = this.random(2, 6);
},
onBeforeMovePriority: 2,
onBeforeMove: function (pokemon, target, move) {
if (pokemon.getAbility().isHalfSleep) {
pokemon.statusData.time--;
}
pokemon.statusData.time--;
if (pokemon.statusData.time <= 0) {
pokemon.cureStatus();
return;
}
this.add('cant', pokemon, 'slp');
if (move.sleepUsable) {
return;
}
return false;
}
},
partiallytrapped: {
inherit: true,
durationCallback: function (target, source) {
if (source.item === 'gripclaw') return 6;
return this.random(3, 7);
}
},
sandstorm: {
inherit: true,
onModifySpD: function () { }
},
stall: {
// In gen 3, the chance of protect succeeding does not fall below 1/8.
// See http://upokecenter.dreamhosters.com/dex/?lang=en&move=182
inherit: true,
counterMax: 8
}
};
