function findItemMiss(data) {
    var i = 1;
    var arr = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
findItemMiss([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
