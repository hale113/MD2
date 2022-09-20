function countOfOccurrences(numbers: number[],value: number){
    let count = 0;
    for (let i = 0; i < numbers.length -1 ; i++) {
        if (value==count){
            count++;
        }
    }
}
