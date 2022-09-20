function Classify(numbers) {
    var Viettel = [];
    var Mobifone = [];
    var Vinaphone = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i].substring(0, 3) == "039") {
            Viettel.push(numbers[i]);
        }
        else if (numbers[i].substring(0, 3) == "098") {
            Mobifone.push(numbers[i]);
        }
        else if (numbers[i].substring(0, 3) == "088") {
            Vinaphone.push(numbers[i]);
        }
    }
    return "\n    viettel ".concat(Viettel, "\n    mobifone ").concat(Mobifone, "\n    vinafonr ").concat(Vinaphone, "\n    ");
}
var num = ["09823445", "0233444", "0888888", "03900000"];
console.log(Classify(num));
