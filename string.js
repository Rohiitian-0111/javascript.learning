const name ="rohit"
const repoCnt =50

// console.log(name + repoCnt+"value");  bad syntax

console.log(`hello my name is ${name} and my repo count is ${repoCnt}`);

const gameName= new String('chaudhari rohit')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('d'));

const newString= gameName.substring(0,4)
console.log(newString); // last index excluded

const anotherstring= gameName.slice(-8,4)
console.log(anotherstring);

const newstring2= "  rohit   "
console.log(newstring2);
console.log(newstring2.trim()); ///remove the extra space

const url="rohit&20chaudhari"
console.log(url.replace('&20', '_'))


console.log(url.includes('sai'));
console.log(gameName.split('-'));