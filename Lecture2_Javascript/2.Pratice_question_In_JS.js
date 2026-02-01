/* Q2. Write a code which can gives grades to students accordingto their scores:
80-100 A
70-79 B
60-69 C
50-59 D
0-49 F
*/  





let marks = Number(prompt("Enter marks:"));
let grade;

if (marks >= 80 && marks <= 100) {
    grade = "A";
} else if (marks >= 70 && marks <= 79) {
    grade = "B";
} else if (marks >= 60 && marks <= 69) {
    grade = "C";
} else if (marks >= 50 && marks <= 59) {
    grade = "D";
} else if (marks >= 0 && marks <= 49) {
    grade = "F";
} else {
    grade = "Invalid marks";
}

console.log("Your grade is:", grade);