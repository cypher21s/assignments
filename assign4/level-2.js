// 1
let marks = parseInt(prompt("Enter the marks to get grade : "));
if(marks >=80 && marks<=100){
    console.log("Grade : A");
}else if (marks >=70 && marks< 80){
    console.log("Grade : B");
}else if(marks>=60 && marks < 70){
    console.log ("Grade: C");
}else if(marks>=50 && marks<60){
    console.log("Grade : D");
}else if(marks >=0 && marks<50){
    console.log("Grade : F");
}

// 2
let season = prompt("Enter the month : ") .toLowerCase();
if (season === "september" || season === "october"|| season === "november"){
    console.log("The season is Autmn.");
}else if (season === "december" || season === "january" || season === "february"){
    console.log("the season is Winter.");
}else if (season === "march" || season === "april" || season === "may"){
    console.log("The season is Spring");
}else if(season === "june" || season === "july" || season === "august"){
    console.log("The season is Summer.");
}else{
    console.log("please enter a valid input.")
}

// 3
let Day = prompt("Enter the Day: ") .toLowerCase();
if (Day ==="saturday" || Day === "sunday"){
    console.log(`${Day} is a weekend. `);
}else if (Day === "monday" || Day === "tuesday" || Day === "wednesday" || Day === "thursday" || Day === "friday" ){
    console.log(`${Day} is a working day.`);
}else{
    console.log("please enter a valid input.")
}
