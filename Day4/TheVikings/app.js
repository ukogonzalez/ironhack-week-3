function Viking(name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.attack;
};

function Pit(vikings) {
  this.vikings = vikings;
  vikings.split[","];
};

Viking.prototype.attack = function () {
  return Math.floor((Math.random() * this.strength)+ 5);
};

Pit.prototype.fight = function () {
  vikings[1].health -= vikings[0].attack;
};

var vikings = ["viking1", "viking2", "viking3", "viking4"];
viking1 = new Viking("Emgonzs", 100, 5);
viking2 = new Viking("AlfEnrch", 90, 5);
viking3 = new Viking("AlejLun", 90, 5);
viking4 = new Viking("Ironhck", 80, 5);

pit1 = new Pit(vikings.attack);
pit1.fight;
// console.log(pit1);
console.log (vikings[1].health);
