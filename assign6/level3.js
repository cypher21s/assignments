// 1
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
const copyarray = countries.slice();
console.log(copyarray);

// 2
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
const copyarray = countries.slice();
const sortedarray = copyarray.sort();
console.log(sortedarray);

// 3
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
mernStack.sort();
webTechs.sort();
console.log(webTechs);
console.log(mernStack);

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
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
console.log(countriesWithLand);

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
const longestlength = countries.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
console.log(longestlength);

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
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'));
console.log(countriesWithLand);

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
const countries5letter = countries.filter(country => country.length === 4);

console.log(countries5letter);

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
 const countriesWithTwoOrMoreWords = countries.filter(country => country.split(' ').length >= 2);
  
  console.log(countriesWithTwoOrMoreWords);
  
//   9
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
const reversedarray = [];
for(let i = countries.length-1 ; i>=0; i--){
    reversedarray.push(countries[i]);
}console.log(reversedarray);    