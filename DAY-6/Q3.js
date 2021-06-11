function first(ar1, n){
    if (n==null){
        return ar1[0]
    } else{
        return ar1.slice(0,n)
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));