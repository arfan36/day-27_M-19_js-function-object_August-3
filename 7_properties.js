var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
};
// when you know the specific property name, use dot notation to get the value
var penCount = shoppingCart.pen;
// alternative System
// when you know the specific property name, use dot notation to get the value
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';
var propertiesValue = shoppingCart[propertyName];
// console.log(propertiesName, propertiesValue);

var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertiesValue);
console.log(shoppingCart);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);