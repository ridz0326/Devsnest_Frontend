function array_Clone(entry){
    let a1 = [...entry]
    return a1
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
