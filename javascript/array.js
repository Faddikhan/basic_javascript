// console.log("Hello world");
//arrays revise

const myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray[3]);

// const newArray = new Array(0, 1, 2)
// console.log(newArray);

//Array Method

// myArray.push(6)
// myArray.push(7)
// myArray.pop()
// myArray.unshift(8)
// myArray.shift()
// console.log(myArray.includes(8));
// console.log(myArray);


// slice, splice 

console.log("A", myArray);

const mynarray = myArray.slice ( 1, 4 )
console.log( mynarray);

let mynarray2 = myArray.splice (1, 4)
console.log("A", myArray);
console.log("B", mynarray2);

// slice ma range ma end ka ak km hota ha 
// splice ma jo range hogi vo print nhi hoti haqiqat ma 