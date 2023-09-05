console.log("working good");
const object1={
    age:5,
    name:"person1"
};

const object2={
    age:5,
    name:"person1"
};

console.log(JSON.stringify(object1));
console.log(JSON.stringify(object2));
console.log(JSON.stringify(object1)===console.log(JSON.stringify(object2)));

// functions 

function funame(){
    console.log("Statement1");
    console.log("Statement2");
    console.log("Statement3");
    console.log("Statement4");
    console.log("Statement5");
}

funame();

//function declaration
b();
function b(){
    console.log(c);
    var c = 9;
}
b();

//javascript function first citizen
a()
function a(){
    var a = "Universe";
    console.log(a);
};


function tharun(){
    console.log("THARUN");
};
tharun();

//first class function

function Name(name){ //parameter
    console.log(`HI ${name},nice knowing you....`)
};
Name("Tharun"); //arguments


function Name(name1,name2){ //parameter
    console.log(`HI ${name1} and ${name2},nice knowing you....`)
};
Name("Tharun","Raj"); //arguments

const greetings = function(){
    console.log("Hi there how are you");
};

greetings();

const age = function(){
    return 23;
};

console.log(age());


function myfun(fun){
    return fun();
};

console.log(myfun(age));


function returnmyname(nam){
    return nam;
}

const myname = returnmyname("Tharun");
console.log(myname);


function executefun(fun,argu){
    console.log(fun(argu));
}

executefun(returnmyname,"RAJ");

// I Want a function which return a message "hey {name} welcome to guvi"
// greetme(name)
// executefunc(func,arguments) // console.log()

function greetme(na){
    console.log(`hey ${na} welcome to guvi`);
}
greetme("Tharun");

function execufun(funct,arg){
    return funct(arg)
}

console.log(execufun(greetme,"RAJ"));

// pure function
// any function that returns same out for same input

function add(num1 , num2){
    console.log("Value is ",num1 + num2);
};

add(5,10);
add(5,10);
add(5,10);

//higher order functions

function mainfunc(fu){
    return fu
}

function secondlayerfunction(){
    return 15;
}

console.log(mainfunc(secondlayerfunction));


function multipleby(factor){
    return function(number){
        return number * factor;
    };
}

const double = multipleby(2);
console.log(double(15));

const demoObject = {
    name:"person1",
    age: 5,
}

console.log(Object.keys(demoObject));
console.log(Object.values(demoObject));
console.log(Object.entries(demoObject));


//Print odd number in an array

function Oddnumber(array){
    for(let i=0;i<=array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
};

Oddnumber([1,2,3,4,5,6,7,8,9,10]);

//convert all the strings to title caps in a string array

(function strarray(AR){
      AR = AR.toLowerCase().split(' ');
      for(let i=0; i<AR.length;i++){
        AR[i] = AR[i].charAt(0).toUpperCase();
      }
      console.log(AR.join(' '));
})("THARUN MANI AS PER AADHAR NAME");


//sum of all numbers in an array

function sum(numb){
    var sum =0;
    for(let i=0;i<numb.length;i++){
        sum += numb[i];
    }
    console.log(sum);
}

sum([1,2,3,4,5]);

//palindrome 

function palindrome(letter){
    var reverse = letter.split("").reverse().join("");
    if(reverse == letter){
        console.log(`${letter} is Palindrome`);
    }else{
        console.log(`${letter} is not a Palindrome`)
    }
       
}

palindrome("malayalam");
palindrome("Universe");


//arrow function  oddnumber

Oddnumber = (numbers) =>{
    for(let i=0 ; i < numbers.length ;i++ ){
        if(array[i]%2!=0){
            console.log(array[i]);
        }
    }
}


// arrow function  strings to tilte caps in a stirng

titlecase = (str) =>{
    str = str.toLowerCase().split(' ');
    for(let i =0;i< str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase+str[i].slice(1);
    }
    console.log(str.join(' '));
}

// arrow function Sum of all number in array

sum = (array) =>{
    var sum = 0;
    for(let i = 0;i<array.length;i++){
        sum = sum + array[i]
    }
    console.log(sum);
}


// arrow prime number

 primeNumber = (nummm) =>{
    nummm = nummm.filter((number)=>{
        for(let i=0;i<=Math.sqrt(number);i++){
          if(number % i ===0)return false;
        }
        return true;
    });
    console.log(nummm);
 }

 // arrow palindrome 

 palindrome = (arr , n) =>
 {
    for(let i =0 ;i< n;i++){
        let a = isPalindrome(arr[i]);
        if(a == false){
        console.log("Not palindrome")
    }else{
        console.log("Palindrome")
    }
    }
 }