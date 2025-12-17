// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month =3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("default case match");
        break;
}

// falsy value : false, 0, -0, BigInt 0n, "" , null, undefined, NaN;

/// truthy value : "0", 'false'," ",[],{}, function(){}

//nullish coalescing operator (??): null undefined 
// let val1;
// val1= 5 ?? 10;
// val2=null??10??20;// it returns first defined value;

// console.log(val1);
// console.log(val2);

//ternary operator
//condition ? true: false;
const iceprice =100;
iceprice >=80 ? console.log("less than 80") : console.log("more than 80");