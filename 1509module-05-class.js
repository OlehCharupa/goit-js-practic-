class Bouquet {
  constructor(
    flowers = "",
    bottles = 0,
    octopus = 0,
    fruits = "",
    sweets = "",
    vegatables = "",
    sausages = 0
  ) {
    this.flowers = flowers;
    this.bottles = bottles;
    this.octopus = octopus;
    this.fruits = fruits;
    this.sweets = sweets;
    this.vegatables = vegatables;
    this.sausages = sausages;
    this.isDelivery = false;
  }
  changeFlowers(value) {
    if (!this.isDelivery) {
      return (this.flowers = value);
    }
    return "Заказ отправлен!!!";
  }

  toggleProp() {
    if (this.isDelivery) return (this.isDelivery = false);
    if (!this.isDelivery) return (this.isDelivery = true);
  }
}
const myBouquet = new Bouquet(
  "roses",
  undefined,
  undefined,
  undefined,
  "sugar"
);
console.log(myBouquet.changeFlowers("pion"));
console.log(myBouquet);
// myBouquet.isDelivery = true;
console.log(myBouquet);
console.log(myBouquet.changeFlowers("cactus"));
myBouquet.toggleProp();
console.log(myBouquet);
console.log(myBouquet.changeFlowers("cactus"));
console.log(myBouquet);
myBouquet.toggleProp();
console.log(myBouquet);
