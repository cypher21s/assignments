// 1
const ages = [19,22,19,24,20,25,26,24,25,24];
const sortage = ages.sort();
const Minage = sortage[0];
const Maxage=  sortage[sortage.length-1];
const middle = Math.floor(sortage.length/2);
const median = sortage.length%2===0? (sortage[middle-1]+ sortage[middle])/2 : sortage[middle];
const avg = sortage.reduce((sum,ages) => sum+ages,0)/sortage.length;
const range = Maxage-Minage;
const minDiff = Math.abs(Minage-avg);
const maxDiff = Math.abs(Maxage-avg);

console.log(sortage);
console.log(Maxage);
console.log(Minage);
console.log(median);
console.log(avg);
console.log(range);
console.log(minDiff);
console.log(maxDiff);

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
]
let firstten = countries.slice(0,10);
console.log(firstten);

// 3
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
]
 
let middle = Math.floor(countries.length/2);
let middleCountry = countries.length%2===0?countries.slice(middle-1,middle+1):[countries[middle]];
console.log (middleCountry);

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
]
 let middle = Math.floor(countries.length/2);
 let Firsthalf = countries.slice(0,middle+(countries.length%2));
 let Secondhalf = countries.slice(middle+(countries.length%2));
 console.log(Firsthalf);
 console.log(Secondhalf);