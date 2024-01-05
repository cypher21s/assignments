// 2if(!shoppingcart.includes('sugar')){
    shoppingcart.push('sugar');
}
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g,'').split(" "); 
console.log(words);
console.log(words.length);
// 3
const shoppingcart = ['milk', 'coffee', 'tea', 'honey'];
if(!shoppingcart.includes('meat')){
    shoppingcart.unshift('meat');
}//added meat if it was not in shopping cart 
//added sugar if it was not on cart
if(shoppingcart.includes('honey')){
    shoppingcart.splice(shoppingcart.indexOf('honey'),1);
}//removed honey as i am allergic
if(shoppingcart.includes('tea')){
    let indexoftea = shoppingcart.indexOf('tea');
    shoppingcart[indexoftea] = 'Green tea';
}//modified tea to Green Tea
console.log(shoppingcart);
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
if(countries.includes('Ethiopia')){
    console.log("Ethiopia");
}else{
    countries.push('Ethiopia');
}
// 5
const webTechs = ['HTML','CSS','Javascript','React','Redux','Node','MongoDB']
if(webTechs.includes('Sass')){
    console.log("Sass is a CSS preprocess.");
}else{
    webTechs.push('Sass');
    console.log(webTechs);
}
// 6
const Frontend = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const FullStack = Frontend.concat(backEnd);
console.log(FullStack);