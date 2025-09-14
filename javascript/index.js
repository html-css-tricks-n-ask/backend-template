function checkVariable() {
    var bharat = "string";
    console.log(bharat)
}
checkVariable();



// checking flattend array
// const arr = [23,34,454,[3434,3434]]
// const flattendArray = arr.flat()
// console.log(flattendArray)



// using with useReducer()+ recursion


// function flattend(){
// return arr.reduce((acc,val)=>{
//     Array.isArray(val ? acc.concat(flattendArray(val)) : )
// })}



// using while some

// let array =  [2323,343,5454,[343,34,54,545]];


// while(array.some(Array.isArray)){
// array = [].concat(...array)
// }
// console.log(finalArray);



let arrrray = [1, [2, [3, [4]]]];

while (arrrray.some(Array.isArray)) {
  arrrray = [].concat(...arrrray);
}

console.log(arrrray); // [1, 2, 3, 4]
