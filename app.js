function reverseArrayInPlace(array) {
    for (let i = 0; i <= array.length%2; i++) {
        [array[i], array[array.length-1-i]] = [array[array.length-1-i], array[i]]
    }
    return(array)
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]