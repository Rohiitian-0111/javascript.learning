// function myName() {
//     console.log("r");
//     console.log("o");
//     console.log("h");
//     console.log("i");
//     console.log("t");
// }
// myName();

// function addTwonums(num1, num2){
//     console.log(num1+num2);
// }


// function addTwonums(num1, num2){
//     let result =num1+num2;
//     return result;
// }
// const result = addTwonums(3,4); 
// console.log("Result:",result);

// function loginusermessage(username){
//     if(username==undefined){
//         console.log("please enter a username");
//         return ;

//     }
//     return `${username} just logged in`
// }
// console.log(loginusermessage("Rohit"));

function calculatecarPrice(...num1){ //// ... is the rest operator give the array of the number 
    return num1
}


// console.log(calculatecarPrice(200,400, 500))

const user= {
    username: "rohit",
    age: 20
}

function handleObject(anyobject){
    console.log(`Useranme is ${anyobject.username} and age is ${anyobject.age}`);
}

// handleObject(user)
handleObject({
    username: "sai",
    age: 20,

}) /// another way to call the fuction object 

const myNewArray =[200,400,100,600];
 
function returnSecondValue (getarray){
   return getarray[1]; 
}
console.log(returnSecondValue(myNewArray));