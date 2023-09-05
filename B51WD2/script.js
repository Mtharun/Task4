console.log("universe with papa");
// Basic of language 
// ; line breaker

// commount out line 

console.log("First line of code");
//console.log("second line of code");
console.log("third line of code");

//creation of variable
//syntax -> variable keyword ,variable name = value
var a = 15;
console.log(a);

//declare a varibale
var b;
b = 20;
console.log(b);

//different type of variable declaration
//var let const

var xyz =35;
xyz = 45; //reassign
var xyz =50 //redeclaration
console.log(xyz);

//let 

let abc = 123;
abc = 456; // reassign
console.log(abc);
//let abc =345; //no redeclaration

//const 
//camelcase personName
//elephantname PERSONNAME
const name="Tharun";
//name="raj";//we cannot reassign
//const name="raj" we cannot redeclare
console.log(name);


//datatype
//Primtive
String
let ab ="Raj";
console.log(ab);

const abcd="Tharun";
const bcda="Raji";
console.log(abcd,bcda);

Number
let num = 23;
console.log(num);

Boolean
let boo = true;
console.log(boo);

null
const val=null;
console.log(val);

undefined
let l;
console.log(l);

//non Prmtive
Array
let arr=[5,"tharun","raji",11,true];
console.log(arr);

Object
const person={
      Name:"Meeee",
      Degree:"dental",
      home:"Madurai"      
}

console.log(person.Name,person.home);

console.log("****************************************************");
console.log("------------------operator--------------------------");
//two different values compare and give result

//arithmetic operator
// + - * / %
var val1 = 90;
var val2 = 99;

console.log("ADD ",val1 + val2);
console.log("SUB ",val1 - val2);
console.log("MUL ",val1 * val2);
console.log("DIV ",val1 / val2);
console.log("MOD ",val1 % val2);
console.log("BEFORE INCREMENT VAL1 ",val1);
val1++;
console.log(val1);
console.log("BEFORE DECREMENT VAL1 ",val1);
val1--;
console.log(val1);

console.log("*************************************************");
console.log("---------------assignment operator---------------");
console.log(val1);
val1+=50; //val1=val1 + 50 /-= ,*=,/=,%=
console.log(val1);

console.log("*************************************************");
console.log("-------------comparison operator-----------------");
const comval1 = 10;
const comval2 = "10";
console.log("non strict comparison",comval1 == comval2);
console.log("strict comparison",comval1 === comval2); //data type
console.log("NOT equal",comval1 != comval2);
console.log("NOT EQUAl comparison",comval1 !== comval2);
console.log("greater than",val1 > val2);
console.log("lesser than",val1 < val2);
const eqlval =10;
const eqlval2 = 10;
console.log("greater than equal",eqlval >= eqlval2);
console.log("lesser than equal",eqlval <= eqlval2);

//logical operator
console.log("********************************************");
console.log("----------------logical operator------------");
//&& || !   
const task = 80;
const attendnece =75;
const score = 77;

console.log(score > task && score > attendnece);
console.log(score > task || score > attendnece);
console.log(!(score > task || score > attendnece));


//loops 
console.log("*******************************************");
console.log("-----------for loop-----------------");
//let i(variable) 0 1 2 3 4
//condition i<=5
//value update
for(let day=0;day<5;day++){
      console.log("Buyed milk for a DAY" ,day);
}

console.log("*****************");
for(let day=5;day>=0;day--){
      console.log("Buyed milk for a DAY" ,day);
}

//condition
let average = 35;
let good = 60;
let excellent= 90;
let yourmark = 75;

if(yourmark >= excellent){
      console.log("You are Excellent");
}else if(yourmark >=good){
      console.log("You r good");
}else if(yourmark >=average){
      console.log("You r average")
}else{
      console.log("You r fail")
}

//switch case (result)
const day=5;
switch(day){
      case 0:
      console.log("Sunday");
      break;
      
      case 1:
      console.log("Monday");
      break;

      case 2:
      console.log("Tuesday");
      break;

      case 3:
      console.log("Wednesday");
      break;

      case 4:
      console.log("Thursday");
      break;

      case 5:
      console.log("Friday");
      break;

      case 6:
      console.log("Saturday");
      break;

      default:
            console.log("Invalid")
}

//funciton with return
function add(num1 ,num2){
       console.log("ADD: ",num1 + num2);
}
add();
add(2,4);

function sub(num1 ,num2){
      console.log("SUB: ",num1 - num2);
}
sub(5,4);

function mul(num1 ,num2){
      console.log("mul: ",num1 * num2);
}
mul(2,3);

function calculator(type ,num1,num2){
      switch (type) {
            case "ADD":
                  console.log("ADDITION: ",num1 + num2);
                  break;
            case "SUB":
                  console.log("SUBTRACTION: ",num1 - num2);
                  break;
            case "MUL":
                  console.log("MULTIPLICATION: ",num1 * num2);
                  break;      
            default:
                  console.log("INVALID TYPE");
                  break;
      }
}

calculator("ADD",5,6);
calculator("SUB",100,98);
calculator("MUL",23,2);