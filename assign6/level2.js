// 1
function RandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*characters.length);
        randomId = randomId + characters.charAt(randomIndex);
    }

    return randomId;
}

const numberOfCharacters = 8; 
const randomId = RandomId(numberOfCharacters);
console.log(`Random ID (${numberOfCharacters} characters):`, randomId);

// 2
function RandomHexColor() {
    const characters = '0123456789abcdef';
    let Color = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        Color = Color +  characters.charAt(randomIndex);
    }
    return Color;
}

const randomHexColor = RandomHexColor();
console.log(randomHexColor);

// 3
function RandomRgbColor() {
    const randomValue = () => Math.floor(Math.random() * 256);
    const red = randomValue();
    const green = randomValue();
    const blue = randomValue();

    return `rgb(${red},${green},${blue})`;
}

const RgbColor = RandomRgbColor();
console.log(RgbColor);

// 4

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const capitalCountries = countries.map(country => country.toUpperCase());

console.log(capitalCountries);

// 5

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const capitalCountries = countries.map(country => country.length);

console.log(capitalCountries);

// 6
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
const countriesNewarray = countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length]);
console.log(countriesNewarray);

// 7
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
const countriesWithLand = countries1.filter(country => country.toLowerCase().includes('land'));
if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log("All these countries are without land");
}

// 8
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
const countriesEndsWithIA = countries.filter(country => country.endsWith('ia'));
if (countriesEndsWithIA.length > 0) {
    console.log(countriesEndsWithIA);
} else {
    console.log("These are countries that do not end with 'ia'");
}

// 9
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
const longestlength = countries.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
console.log(longestlength);


// 10
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
const countries5letter = countries.filter(country => country.length === 5);

console.log(countries5letter);

// 11

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
const longestWord = webTechs.reduce((longest, current) => (current.length > longest.length ? current : longest), '');

console.log("Longest word in webTechs array:", longestWord);

// 12
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
const webArray = webTechs.map(web => [web, web.length]);

console.log(webArray);

// 13
const mernStack = ["MongoDB", "Express", "React", "Node"];

const mernAcronym = mernStack.join(', ');

console.log(mernAcronym);

// 14
const tech =  ["HTML", "CSS", "JS", "React", "Redux", "Node",
"Express", "MongoDB"]
for (let i = 0; i<tech.length;i++){
    console.log(tech[i]);
}

// 15
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedarray = [];
for(let i = fruits.length-1; i >= 0; i--){
    reversedarray.push(fruits[i]);
}
console.log(reversedarray);

// 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
for (let i = 0; i < fullStack.length; i++) {
    const printarray = fullStack[i];
    for (let j = 0; j < printarray.length; j++) {
        console.log(printarray[j].toUpperCase());
    }
}

