console.log("es6 cooment")
















//not possible range
//const a =15;
//a =20;
//console.log(a);

//possible range
//let a =25;
// a =30;
//console.log(a);

//var a =25;
//a =30;
//console.log(a);

//regardking hoisitng 
console.log(a);
var a =15;
//is let and const are hoisitng or not?

//pername // 1000 /// debug
//pername //1500

//let pername = "name" // 2000

//block scope

function blockfunction(){
    let value = 25

}


/* if(true){
    let outblock = 30;
    //console.log(inblock);
    if(true){
        let inblock = 40;
        console.log(outblock)
    }
}
*/
function scopingFun(){
   let funcVar = 20;
    if (true){
       // let funcVar = 20;
        console.log(funcVar);
    }
    console.log(funcVar);
}
scopingFun();

//shadowing property
if(true){
    const shadow = "sx";
    if(true){
        const shadow = "Xy";
        console.log("XY blox :",shadow);
    }
    console.log("SX block",shadow);
}
//template literals

const name = "tharun";
const position = "mentor";
console.log("my name is",name,"and I'm a Mentor");
console.log(`my name is ${name} and Im a ${position}`);

//spread operator
let shoppingBasket = ["fruits","vegetable"]
console.log(shoppingBasket);
console.log(...shoppingBasket);

let fruitsItems = ["mango","papaya","orange"];
let vegItems = ["Potato","onion","brinjal"];
let dairyItems = ["milk","chcolate","icecreams"];

let FridgeTray = ["carrot","cucumber",...fruitsItems,...vegItems,...dairyItems];
console.log(FridgeTray);

//rest operator
//const [...rest]=FridgeTray;
//console.log(rest);

const[value1,value2,value3,...rest]=FridgeTray;
console.log(value1);
console.log(value2);
console.log(value3);
console.log(rest)








//Destructuring  array and object
const studentArray = ["abdulla","Arun","Balaji","meenatchi"];
console.log("Before destructuring..................................")
//before destructuring
console.log(studentArray[0]);
console.log(studentArray[1]);
console.log(studentArray[2]);
console.log(studentArray[3]);

const [stud1,stud2,stud3,stud4]=studentArray;
console.log("After destructuring..................................")
console.log(stud1);
console.log(stud2);
console.log(stud3);
console.log(stud4);

//skipping values
console.log("Skipping values----------------------------");
const [studval1, ,studval2]=studentArray;
console.log(studval1);
console.log(studval2);

//rest operator in destructuring
const weeks = [1,2,3,4];
const[firstweek,secondweek,...restweeks]=weeks;
console.log(firstweek);
console.log(secondweek);
console.log(restweeks);

//nested destrucutruing
const [restparam1,restparam2]=restweeks;
console.log(restparam1);

//task

const testArray = [1,2,5,7,["sanjay",25],6];
//const [t1, , ,t3,...restest]=testArray;
const[, , , ,[mentorname , mentorage]]=testArray
//console.log(t1);
//console.log(t3);
//console.log(restest);
console.log(mentorname);
console.log(mentorage);

//object destructuring

const personObj = {
    firstname : "sanjay",
    lastname:"guvi",
    pos:"mentor",
    location1:"Chennai",
    address:{
        state :"TamilNadu",
        country:"India",

    }
};

console.log("Before object destructuring....................");
console.log(personObj.firstname);
console.log(personObj.lastname);
console.log(personObj.pos);

console.log("After object destructuring....................");
const{firstname,pos,lastname} = personObj;
console.log(firstname);
console.log(pos);

console.log("Rename object destructuring....................");
const{location1 : city} =personObj;
console.log(city);

//nested Object
const {
    address:{state,country},
} = personObj;

console.log(state);
console.log(country);
