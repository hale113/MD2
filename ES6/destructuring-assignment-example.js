let names = ["alpha","beta","gamma","delta"];
let [fistName, secondName]=names;
//let [fistName, secondName]=["alpha","beta","gamma","delta"];
console.log(fistName);
console.log(secondName);
//dung dau , bo qua phan tu mang
let [firstName,,thirdName]=["alpha","beta","gamma","delta"];
console.log(fistName);
console.log(thirdName);
//gan phan tu mang cho bien phan con lai cho mot bien duy nhat
var [firstName,,...lastName]=["alpha","beta","gamma","delta"];
console.log(fistName);
console.log(lastName);
//hoan doi gia tri
let [firstName, secondName]=["alpha","beta","gamma","delta"];
console.log(fistName);
console.log(lastName);
[firstName, secondName]=[secondName,firstName];
console.log(fistName);
console.log(lastName);
//trich xuat tu mang tra ve tu ham
function NameList(){
    return ["alpha","beta","gamma","delta"]
}
let [firstName, secondName]=NameList;
console.log(fistName);
console.log(secondName);
//gan cac bien tu cac doi tuong
let marks={x:21,y:-34,z:47};
const {x,y,z}=marks;
console.log(x);
console.log(y);
console.log(z);
//trich xuat cac doi tuong long nhau
const marks={
    section1:{alpha:15,beta:16},
    section2:{alpha:-31,beta:19}
};
const {section1 :{alpha:alpha1, beta:beta1}}=marks;
console.log(alpha1,beta1);