//1
let age = parseInt(prompt("enter your age: "));
if(age>=18){
    console.log("you are old enough to drive.");
}else{
    let leftyear = 18-age;
    console.log(`you are left with ${leftyear} years to drive.`)
}

// 2
let myAge = 33;
let yourAge = parseInt(prompt("Enter your age : "));
if(yourAge>myAge){
    console.log(`You are ${yourAge-myAge} years older than me .`);
}else if(myAge>yourAge){
    console.log(`I am ${myAge-yourAge} years older than you.`);
}else{
    console.log("we are of same age.");
}

// 3
// using if else
let a = 5;
let b = 4;
if(a>b){
    console.log("a is greater than b");
}else{
    console.log("a is less than b");
}
// using ternary
let a = 5;
let b = 4;
console.log(a>b? `a is greater than b`: `a is smaller than b`);

// 4
let num = parseInt(prompt("Enter your number :"));
if(num%2==0){
    console.log(`${num} is divisible by 2.`);
}else{
    console.log(`${num} is not divisble by 2.`);
}