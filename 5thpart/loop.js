// for(let i=0;i<=10;i++){
//     let cn=i;
//     console.log(i);
// }
// const greeting="Hellow world";
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`)
// }


const map= new Map()
map.set('IN', "india");
map.set('USA',"united state of america");
map.set('Fr', "France");
map.set('IN',"india");

//console.log(map);

///loop on map
for(const [key, value] of  map){
    console.log(key,':-',value);

}

// const myObject ={
//     game1:'NFS',
//     game2:'Spiderman'
// }

// for(const [key, value] of myObject){
//     console.log(key, ':-',value);   
// } cant iterate like this 


const myObject={
js:'javascript',
cpp:'c++',
rb:'ruby',
swift: 'swift by apple'
}

for(const key in myObject){
    console.log(myObject[key]);
}