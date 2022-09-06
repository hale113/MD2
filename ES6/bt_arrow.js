const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}

]
let typeMachine = inventory.filter(item=> item.type=="machine");
console.log(typeMachine);
let valueOfMachine = typeMachine.map((key,value)=>key.value);
console.log(valueOfMachine)
let totalMachineValue = valueOfMachine.reduce((previousValue,currentValue)=>previousValue+currentValue,0);
console.log(totalMachineValue)