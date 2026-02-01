/* Conditional Statements

define : To implement some conditions in the code
*/
//____________________________________________________________________________________________
//____________________________________________________________________________________________
// IF Statements --

// see in if it means when the conditons are true in if then only it will run 
// otherwise it will go further to verify that condition in case if, (if) is false

// ex of if --

let age = 25

if (age >= 18){

console.log("can vote")

}
if (age < 18){

console.log("can not vote")

}

// _________________________________________________________________________________________________
// _________________________________________________________________________________________________
// If Else Statements --

// in ths else won't work continous it requires the condition if and decleration
// ex.1 using if-else 

let age1 = 17

if (age1 >= 18){

console.log("can vote")

} else{
    console.log("can't vote")
}
 
// ex.2 for odd and even by if-else

let num = 25

if (num %2 == 0){
    console.log(num,"is even");
}
else{
    console.log(num,"is odd");
}

// __________________________________________________________________________________________________
// __________________________________________________________________________________________________
// Else IF statements --
// we use else if for multiple conditions to check and declear 
// ex --

let mode ="silver"
let colour;

if( colour === " dark"){
    colour = "black"
}else if(colour ===" blue "){
    colour= "blue"
}else if(colour === "pink"){
    colour = "pink"
}else{
        colour = "white"
    }

console.log(colour)    

// _____________________________________________________________________________________________________
// _____________________________________________________________________________________________________
// Ternary operator --

// its a 3 operands operator means previously we have seen
// 2 and 1 opeands operator like ,a +b or a++ 
// so it works like a condition with question then a true or false
// means ex -- age > 18 ?"adult":"not adult";


let age2 = 25
let result = age2 >= 18?"adult": "not adult";
console.log(result)

// or

let age3 = 16
age3 >= 18? console.log("adult"): console.log( "not adult");
// its asimpler or compact if-else


//__________________________________________________________________________________________________________
//__________________________________________________________________________________________________________ 
// MDN Docs -- is a kind of website developed by programmer so here we can get the info
// about everything related to coding

// Switch Statements (search on this website to expolre more)

