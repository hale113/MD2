function fibonacci(num){
    if (num<=1){
        return 1;
    }else {
        return fibonacci(num-1)+fibonacci(num-2)
    }
}
let sum =0;
let num =5;
for (let i=0;i<num;i++){
    console.log(fibonacci(i));
    sum+=fibonacci(i);
}
console.log(sum);

