var numbers = [1, 2, 3, 5, 6, 7, 9, 10];
var array = [];
for (var i = 0; i < 11; i++) {
    if (numbers.indexOf(i) == -1) {
        array.push(i);
    }
}
console.log(array);
