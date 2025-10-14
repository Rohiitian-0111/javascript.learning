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

function addTwonums(num1, num2){
    let result =num1+num2;
    return result;
}
const result = addTwonums(3,4); 
console.log("Result:",result);

function loginusermessage(username){
    if(username==undefined){
        console.log("please enter a username");
        return ;

    }
    return `${username} just logged in`
}
console.log(loginusermessage());
