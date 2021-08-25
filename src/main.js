// #region Game loop
module.exports.loop = () => {
  Object.values(Game.spawns).forEach(spawn => {
    spawn.spawnCreep([MOVE],"creep");
  });

  Object.values(Game.creeps).forEach(creep => {
    creep.moveTo(creep.room.controller);
    creep.say("Hi",true);
  });

};
// #endregion
