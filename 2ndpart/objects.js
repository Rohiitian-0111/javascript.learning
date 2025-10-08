/// constructor se singleton banega ///
///literal se singleton nhi banega //


//OJECT LITERAL

const mySym =Symbol("key1");//how to declare the symbol
const JsUser={name: "rohit",
    "full name": "Rohit Ishwar Chaudhari",
    [mySym]: "mykey1", ///how to use symble in object
    age: 18,
    location: "Jalgaon",
    email: "rohitchaudhari@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);// only way to access it 
// console.log(JsUser[mySym]); 

JsUser.email ="rohit@chatbot.com";
//Object.freeze(JsUser); ///to freeze the object no further changes 
JsUser.email ="rohitchaudhari@gmail.com";
console.log(JsUser);

JsUser.greeting= function(){
    console.log("helloworld");
}
JsUser.greetingTwo = function(){
    console.log(`Helloworld, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());