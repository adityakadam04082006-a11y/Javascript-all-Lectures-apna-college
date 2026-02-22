// LOOPS in JS

// loops are used to execute a piece of code again & again 
// inside loops we write 3 conditions -(initilize , stoping condition , updation) this is 
// condition 
/* working -1) initilization see first condition works for one time
2) Then the stoping condition works works like if True then checks isit true and goes
further to check updation condition and goes back to check stoping condition and 
works till the condition is satisfied or true ,see through example
*/

for (let count = 1 ; count <= 5 ; count ++) {
    console.log("Aditya kadam")
}

// example -- calculate sum fro 1 to 15

let sum = 0;
let n = prompt("enter number:")  //can either write let n = 5;
for (let i = 1; i <= n; i++){
  sum = sum + i;
}
console.log("sum =", sum);
console.log("loop ended")


// Infinite loops in js :loops that never ends

// ---------------While Loops-------------------

/* while(condition){
    your work in this
}

*/
// print 1 to 5
let j = 1;
while (j <= 5){
console.log("j =",j)
j ++
}

/*-------------- do-while loop--------------------------
see in this kind of loop we have a garuanty that the loop will run atleast once
means see this */
let k = 20;
do {
   console.log("adi kadam")
   k++
} while (k <= 10);

/* see here the loop is partially not correct when you see the condition and the starting
,now see this is ex to print from 1 to 10*/ 

let h = 1;
do {
  console.log("h =",h)
  h++
} while (h <= 10);


/*---------------for-of Loop----------------------------------
this type of loop helps us to apply loop on string and arrays 
see its working --

let str = "zeal college"

foe(let val of strVar){
// do some work
}

see this is the way to write for-of loop*/

let string ="Zeal college"

for(let a of string){
console.log("a =",a);
}
