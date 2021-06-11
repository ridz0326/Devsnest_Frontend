var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var dict = {};

for(i in arr1){
    var temp = 0
    for(j in arr1){
        if(arr1[i]===arr1[j]){
        temp += 1
        }
    }
    dict[temp] = arr1[i];
}

var max = 0;
for(var key in dict) {
    if (key > max){
        max = key
    }
}
console.log(dict[max] + "(" + max + "times)")
