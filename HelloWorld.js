const prompt = require("prompt-sync")();

let name = prompt("What is your name ? ");

let age = prompt("What is your age ? ");

let color = prompt("What is your color ? ");

let school = prompt("What is your school ? ");;

console.log(name)
console.log(age)
console.log(color)
console.log(school)

if(age >= 40){

console.log('my name is ${name}, my school is ${school}, my age is ${age}, my color is ${color}, my age is ${school}')


}else {

console.log("aww cute child! go and read your book, while you still can")

}




//console.log(name);
