const meal = {  name: 'pizza',  type: 'marinara',  price: 6.25};

console.log(meal.name, meal.type, meal.price);

const {name, type, price} = meal

console.log(name,type, price)

const iceCreamFlavors = ['hazelnut', 'pistachio', 'tiramisu'];
const [flavor1, flavor2, flavor3] = iceCreamFlavors;
console.log(flavor1, flavor2, flavor3)
console.log(flavor1, flavor2, flavor3)

function Dog (breed, bark) {
  this.breed = breed;
  this.bark = function() {
    console.log('woff')
  return "Woof";
}
}

var snoopy = new Dog("Beagle");
snoopy.bark()

var scoobydoo = new Dog("Great Dane");
scoobydoo.bark()