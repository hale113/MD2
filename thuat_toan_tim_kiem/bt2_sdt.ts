function Classify(numbers: string[]){
    let Viettel = [];
    let Mobifone = [];
    let Vinaphone = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i].substring(0,3) == "039"){
            Viettel.push(numbers[i]);
        }else if(numbers[i].substring(0,3) =="098"){
            Mobifone.push(numbers[i]);
        }else if (numbers[i].substring(0,3) == "088"){
            Vinaphone.push(numbers[i]);
        }
    }
    return `
    viettel ${Viettel}
    mobifone ${Mobifone}
    vinafonr ${Vinaphone}
    `
}

let num = ["09823445", "0233444","0888888","03900000"];
console.log(Classify(num))