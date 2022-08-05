function add(number1, number2) {
    // console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}
// add(45, 15);
var total = add(80, 20);
// console.log('total', total);

function bringSingra(money) {
    var singraPrice = 10;
    var quantity = money / singraPrice;
    return quantity;
}
var myTaka = 150;
var singras = bringSingra(myTaka);
console.log(singras);
// check