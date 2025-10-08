//arrays

const myarray= [0,1,2,3,4,5];
//
//shallo copy - share same reference point 
//deep copy - do not share same reference poitn 
const myHeors =["shaktiman", "naagsur"]
const arr2 =new Array(1,2,3,8)
console.log(myarray[1]); 

/// array method 
// myarray.push(6);
// myarray.push(7);
// myarray.pop();

// myarray.unshift(9);
// myarray.shift();
// console.log(myarray.includes(9));
// console.log(myarray.indexOf(3));

// const newArr= myarray.join();
// console.log(myarray)

// console.log(newArr);

/// slice , splice
console.log("A", myarray);
const myn1 = myarray.slice(1,3);
console.log(myn1);
console.log("B", myarray);

const myn2= myarray.splice(1,3);  
console.log("C", myarray); 
console.log(myn2);
