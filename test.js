function Pen(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

const pen1 = new Pen("Marker", "Blue", "$3");
console.log(this.name);