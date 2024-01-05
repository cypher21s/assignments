// 1
// for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//while loop
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
// do while loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);


// 2
// for loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
// while loop
let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}
// do while loop
let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);


// 3
let n = 10; 

for (let i = 0; i <= n; i++) {
    console.log(i);
}


// 4
for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '#';
    }
    console.log(line);
}


// 5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}


// 6
console.log("i  i^2  i^3");

for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i*i}   ${i*i*i}`);
}


// 7
for (let i = 0; i <= 100; i=i+2) {
    console.log(i);
}


// 8
for (let i = 1; i <= 100; i= i+2) {
    console.log(i);
}


// 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log("The sum  from 0 to 100 is:", sum);

// 11
let Evensum = 0;
let Oddsum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        Evensum = Evensum + i;
    } else {
        Oddsum = Oddsum + i;
    }
}
console.log("Sum of all evens from 0 to 100 is :", Evensum);
console.log(" And the sum of all odds from 0 to 100 is :", Oddsum);


// 12
let Evensum = 0;
let Oddsum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        Evensum = Evensum + i;
    } else {
        Oddsum = Oddsum + i;
    }
}
 const Arryasum = [Evensum , Oddsum];
 console.log(Arryasum);


//  13
function RandomArray(Size) {
    const randomArray = [];
    for (let i = 0; i < Size; i++) {
        const Number = Math.floor(Math.random() * 100); 
        randomArray.push(Number);
    }
    return randomArray;
}
const arrayOfRandomNumbers = RandomArray(5);
console.log(arrayOfRandomNumbers);


// 14
function RandomArray(Size) {
    const randomArray = [];
    while(randomArray.length<Size) {
        const Number = Math.floor(Math.random() * 100); 
        if(!randomArray.includes(Number)){
        randomArray.push(Number);}
    }
    return randomArray;
}
const arrayOfRandomNumbers = RandomArray(5);
console.log(arrayOfRandomNumbers);


// 15
function generateRandomId(length) {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }
    return randomId;
}
const CharacterRandomId = generateRandomId(6);
console.log(CharacterRandomId);
