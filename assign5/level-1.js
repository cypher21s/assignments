// level 1 
// 1
let Array = [];
// 2
let Array = [1,5,3,8,9,55];
// 3
let Array = [1,5,3,8,9,55];
let Arraylength = Array.length;
console.log(Arraylength);
// 4
let Array = [1,5,3,8,9,55];
let Arrayfirst = Array[0];
let Arraymiddle = Array[Math.floor(Array.length / 2)];
let Arraylast = Array[Array.length - 1];
console.log(Arrayfirst , Arraylast, Arraymiddle);
// 5
let mixedDataTypes = [5, 'satyam', true, {key: 'value'}, [2,7,8], null , undefined];
 let lengthArray = mixedDataTypes.length;
 console.log(lengthArray);
// 6
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// 7
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies);
// 8
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.length);
// 9
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log("First Company : " , itCompanies[0]);
console.log("Middle Company: ", itCompanies[Math.floor(itCompanies.length/2)]);
console.log("last Company: ", itCompanies[itCompanies.length-1]);
// 10
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
for(let i = 0 ; i<itCompanies.length;i++){
    console.log(itCompanies[i]);
}
// 11
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
for(let i = 0 ; i<itCompanies.length;i++){
    let Uppercompanies = itCompanies[i].toUpperCase();
    console.log(Uppercompanies);
}
// 12
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let line = itCompanies.slice(0 , 6).join(', ') + ', and ' + itCompanies[itCompanies.length-1] + ' are big IT companies.';
console.log(line);
// 13
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let check = "Microsoft";
if(itCompanies.includes(check)){
    console.log(check + ' exists in array.');
}else{
    console.log(check + ' doesnot exist in array.');
}
// 15
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.sort();
console.log(itCompanies);
// 16
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.reverse();
console.log(itCompanies);
// 17
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let slicedcompanies = itCompanies.slice(0,3);
console.log(slicedcompanies);
// 18
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let slicedcompanies = itCompanies.slice(-3);
console.log(slicedcompanies);
// 19
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let middle = Math.floor(itCompanies.length/2);
let companies = itCompanies.slice(middle,middle+1);
console.log(companies);
// 20
let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.shift();
console.log(itCompanies);