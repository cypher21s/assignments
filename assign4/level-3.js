// 1
let month = prompt("Enter the month : ") .toLowerCase();
switch (month){
    case "january":
    case "march":
    case "may":
    case "july":  
    case "august":
    case "october":  
    case "december":
        console.log(`${month} has 31 days.`);
    break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days.`);
        break;
    case "february":
        console.log(`${month} has 28 days.`);
        break;
    default:
        console.log("invalid input.");
}

// 2
let month = prompt("Enter the month : ") .toLowerCase();
switch (month){
    case "january":
    case "march":
    case "may":
    case "july":  
    case "august":
    case "october":  
    case "december":
        console.log(`${month} has 31 days.`);
    break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days.`);
        break;
    case "february":
        console.log(`${month} has 29 days.`);
        break;
    default:
        console.log("invalid input.");
}