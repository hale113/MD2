let numbers: number[] = [1,2,3,5,6,7,9,10];
let array: number[]=[]
for (let i=0; i<11;i++){
    if (numbers.indexOf(i)==-1){
        array.push(i)
    }
}
console.log(array)