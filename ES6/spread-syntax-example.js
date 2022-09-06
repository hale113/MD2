/*function sum(x,y,z){
    return x+y+z;
}
const numbers = [1,2,3];
console.log(sum.apply(null,numbers));
 */
//after use spread operator
function sum(x,y,z){
    return x+y+z;
}
const numbers =[1,2,3];
console.log(sum(...numbers));
//day cac phan tu vao trong mang
let a = [1,2];
let b = [1,2,3];
a.push(...b);
console.log(a);
//sao chep mang
let a = [1,2];
let b = [1,2,3];
a = [...b];
console.log(a);
//sao chep doi tuong
let obj1 ={a:1,  b:2};
let obj2 ={...obj1};
console.log(obj2);
//noi 2 mang
let a = [1,2];
let b = [3,4,5];
let c = [...a,...b];
console.log(c);
