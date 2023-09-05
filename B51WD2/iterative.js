const log = (param) => console.log(param);

log("working good --------------------------");

//loops or iterations 

//basic for loops
 for(let i=1;i<=5;i++){
    log(i);
 }

 const countryArr = ["IND","CHN","US","UK","EUR","GER"];
 //for loop for array

 for(let i=0;i<countryArr.length;i++){
    log(countryArr[i]);
 }

 //object
 const countryObj = {
    India : "IND",
    china : "CHN",
    UnitedStated : "US",
    UnitedKingdom : "UK",
    Europe: "EUR",
    Germany: "GER",
 };

 log("Looping object values....................");
 const objectValues = Object.values(countryObj);
 log(objectValues);
 for(let i =0 ;i < objectValues.length;i++){
    log(objectValues[i]);
 }
 log("Looping object keys.......................");
 const objectKeys = Object.keys(countryObj);
 log(objectKeys);
 for(let i=0;i<objectKeys.length;i++){
    log(objectKeys[i]);
 }

 //types of loop
 //forin , forof,foreach
 //for each -> best use case in Array

 log("------------------------------------------");

 //the parameter should be in order (value , index ,actualArray)
 countryArr.forEach((value, index, actualArray)=>{
    log(`value : ${value}
         Index : ${index}
         actualArray: ${actualArray}
         `);

 });

 objectKeys.forEach((value)=>{
    log(`
    objectKeys : ${value}
    object value : ${countryObj ["china"]}
    `)
 })



 ////// For In loop /////
 // best used for object
 log("-------------------Forin loop------------------");
 //for(name in objectName){

 //}

 for(key in countryObj){
    log(
        `
        kyes : ${key}
        values : ${countryObj[key]}
        `
    );
 }

   log("------------------for in array--------------")

 for(k in countryArr){
     //for array i'll get index
     log(`
        Index of array : ${k}
        value of array : ${countryArr[k]}`)
 }


 log("....................for of...................");
 //best used for string
 const countryString = "AllCountryData"
 //log(countryString.split(''));
 for(str of countryString){
    log(str);
 }

 function factorial(num){
   var fact =1;
   for(var i=num ;i>=1; i--)
   {
      fact = fact * i   
   }
       console.log(fact)
 }

 factorial(6);




 const animal=["dog","cat","elephant","tiger","lion"];
 animal.forEach((value, index, actualarray)=>{
    log(`
    name : ${value}
    index : ${index}
    acutalarray : ${actualarray}
    `)

 })


 //TASK
 const Animals=
   {
      Dog : "DOBERMAN",
      wildAnimal : "LION",
      Cat : "MEOWMEOW",
      Cow : "BIGBULL",
      Pig : "whitty", 
      Elephant : "GAINT",     
   };

//ANIMALS KEY [FOR LOOP]
  
const AnimalsKeys = Object.keys(Animals)
  console.log(AnimalsKeys);
   for(let i=0 ; i< AnimalsKeys.length ;i++){
      console.log(AnimalsKeys[i]);
   }
//ANIMALS VALUE [FOR LOOP]

const AnimalsValue = Object.values(Animals)
console.log(AnimalsValue);
for(let i=0 ; i<AnimalsValue.length ;i++){
   console.log(AnimalsValue[i]);
}

//ANIMALS KEY [FOR EACH]

AnimalsKeys.forEach((Value)=>
 {
    console.log(
      ` 
        KEY: ${Value},
        PARTICULAR : ${Animals["Pig"]} 
      `)
 });

 //ANIMALS VALUE [FOR EACH]

 AnimalsValue.forEach((value)=>{
   console.log(`
      VALUE : ${value}
      PARTICULAR : ${Animals["wildAnimal"]}
      `)
 });

 //ANIMALS [FOR IN]

 for (const key in Animals) {
      console.log(
         ` 
         KEY : ${key},
         VALUE : ${Animals[key]},
         `)
      
   };

//ANIMALS [FOR OF]

for (KEY of AnimalsKeys) {
   console.log( `
      KEYS : ${KEY}
      `
      )
};

for (VALUE of AnimalsValue){
   console.log
    (`
       VALUE : ${VALUE}
    `)
}
 