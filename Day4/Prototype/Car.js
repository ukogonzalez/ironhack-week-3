var Car = function(model, noise) {
  this.model = model;
  this.noise = noise;
  this.wheels = "4";
};

// Car.prototype.Model = function () {
//   console.log(this.model);
// };

// Car.prototype.makeNoise = function () {
//   console.log(this.noise, "!!!!!");
// };

// Car.prototype.Wheels = function () {
//   console.log(this.wheels);
// };

var car1 = new Car("Serie1", "Bruuum");
var car2 = new Car("Serie3", "Bruuuuuuuuuum");
//
// car1.Model();
// car1.makeNoise();
// car1.Wheels();
// car2.Model();
// car2.makeNoise();
// car2.Wheels();

console.log(car1);
