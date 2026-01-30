// we can write comments by slash 
/* By this we can write a multile comment and when we want to stop at that time
use this * and / , like this */

// ___________________________________________________________________________________
// ___________________________________________________________________________________
/* Operators in JS
--used to perform some operations on data
--Arithmetic operators like -(*,-,+,/)
--modulus - % , Exponentiation - , Increments, Decrement.*/

// Arithmetic operators
let a = 5;
let b = 6;
let c = 2;
let d = 8;

c++; // this is called increment which is mostly used in loops
d--; // this is called Decrement

console.log("a =",a ,"b =",b);
console.log("a + b =",a + b);
console.log("a - b =",a - b);
console.log("a * b =",a * b);
console.log("a / b =",a / b);
console.log("a % b =",a % b);  //Its Modulus symbol means we demand for remainder
console.log("a ** b =",a ** b); //its raise to symbol

// Unary operators are of two types
// 1.Increment ,ex -- (a++)
// 2. Decrement, ex -- (a--)

console.log("d = ",d);
console.log("c = ",c);

// ex - take a = 5 and we print a++ so in that case it will print a as 5 first 
// then in other line it will print 6 by adding one
// and if we do ++a so it will first add 1 in 5 by making it 6 
// so this is difference in a++ & ++a .

// ________________________________________________________________________________
// ________________________________________________________________________________
// Assignment operators -- (=, += , *= , %= ,-=)

// -- Is's work is to assign values
// 1. (=) -- is equal sign
// 2. (+=) -- it means like a = 5 so we want to add in it so we can do a += 4;
// see ex--
let e = 5;
e += 4;
console.log("e =",e)

// 3. (-=) -- it's same as += but now only subtraction used
let f = 5;
f -= 4;
console.log("f =",f)

// 4. (/=) -- its used for division 
let g = 5;
g /= 4;
console.log("g =",g)

// 5. (*=) -- its used for multiplication purpose
let h = 5;
h *= 4;
console.log("h =",h)

// 6. (**=) -- its exponensational ,means raise to 
let i = 5;
i **= 4;
console.log("i =",i)

// ___________________________________________________________________________________
// ___________________________________________________________________________________
// Comparision Operators 

/*
Equal to ==
Equal to & type ===
Not equal to !=
Not equal to & type !== 
*/

// see ex --
// 1. ==
let aa = 5;
let bb = 4;

console.log( "aa == bb =",aa == bb); // its will always give boolean value True or False

// 2. !=
let aaa = 5;
let bbb = 4;

console.log( "5 != 4 =", aaa != bbb); // it means not equal to

// 3. === 
let ac = 5;
let bc = 4;

// console.log( "5 === 4",ac === bc); triple equal, it checks is it same also checks 
// its data type 

// 4. !==
let ad = 5;
let bd = 4;

console.log( "5 !== 4", ad !== bd); 

// ___________________________________________________________________________________________
// ___________________________________________________________________________________________
// Now for greater then and less to signs
// 1.<
console.log( "5 < 4", ad < bd); 

// 2. >
console.log( "5 > 4", ad > bd);

// 3.>=
console.log( "5 >= 4", ad >= bd);

// 4.<=
console.log( "5 <= 4", ad <= bd); 

// _______________________________________________________________________________________
// _______________________________________________________________________________________
// Logical operators -- ( AND , OR , NOT):


//Condition 1 AND -- in AND both should be true otherwise everything is false
//Condition 2 OR  -- Atleast one should be true to become true otherwise it would be false
//Condition 3 NOT -- its in between true or false only

/* AND -- &&
   OR  -- ||
   NOT -- !
*/

let x = 4;
let y = 5;

let cond1 = x < y //true
let cond2 = x === 4 // true
let cond3 = x > y //false

console.log("con1 && cond2 ", cond1 && cond2 );//ex - of AND

console.log("con1 || cond3 ", cond1 || cond3 ); // ex - of OR

console.log("!(x < y) = ", !(x < y)); // ex - of NOT

/* NOTE : we know that in not the answer is true but it will print false means opposite as
the logic works in opposite way for not in logical operators. */

