obj = {
    name: 'baryan',
    weigh: 90,
    height: 174,
 age : function (birthday) {
    2022 - birthday;                        
 }
}
console.log(`${obj.name} is a boy the weight is ${obj.weigh} and the height is ${obj['height']}`);
let arr = [11, 55, 66, 22];
console.log(arr);

arr.forEach(name1) 
function name1(element,index,array) {
    
    array[index] = element * 2;
} 
console.log(arr);

let arr2 = arr.forEach(doubleit);
function doubleit(value,indexm,array) { 
    return array[indexm] = 2*value;
    
}
console.log(arr2);
console.log("      -------------");
console.log(arr);
console.log("============");
let arr3=[1000,100,10,1]
let res = arr3.reduce(doit)

function doit(ttotal,balue,index,array) {
    console.log(ttotal);
    return ttotal / balue;
}
console.log(arr3);
console.log(res);


// for (let i = 0; i < arr.length-1; i++) {
//     let min=i;
//     for (let j = 1+i; j < arr.length; j++) {
//        if (arr[i]>arr[j]) {
//            min = j;
//        }
        
//     }
//     let tep = arr[i];
//     arr[i] = arr[min];
//     arr[min] = tep;
//     console.log(arr);
// }
