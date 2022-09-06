function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
var sum = 0;
var num = 5;
for (var i = 0; i < num; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log(sum);
