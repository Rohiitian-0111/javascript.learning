///object by constructer (singleton)

const tinderuser = new Object(); ///singleton object
const tinderuser2 ={}; /// non singleton object 

tinderuser2.id = "123roh";
tinderuser2.name= "sammy";
tinderuser2.isLoggedIn= false;


// console.log(tinderuser2);

const regularUser ={
    email: "rohitchaudhari@gamil.com",
    fullname: {
        userfullname:{
            firstname: "rohit",
            lastname: "chaudhari"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={
    1:"a", 2:"b"
}
const obj2 ={
    3:"m", 4:"b"
}

//const obj3={ obj1, obj2} //problem

// const obj3=Object.assign({}, obj1,obj2)
// console.log(obj3);  ///less use 

const obj3= {...obj1,...obj2}
console.log(obj3);

const users = [ {
        id1:"123",
        email:"r@gmail.com"
    }
]

console.log(users[0].email);

console.log(tinderuser2);
console.log(Object.keys(tinderuser2));
console.log(Object.values(tinderuser2));
console.log(Object.entries(tinderuser2));

console.log(tinderuser2.hasOwnProperty('isLogged'));
