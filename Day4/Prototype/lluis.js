var Lluis = function (lluisada) {
  this.height = "1.93";
  this.skin = "Brown";
  this.lluisada = lluisada;
}

Lluis.prototype.sayLluisada = function () {
  console.log(this.lluisada);
};

var lluis1 = new Lluis("visca manacor, mes que un club, un puticlub!!");
lluis1.sayLluisada();
