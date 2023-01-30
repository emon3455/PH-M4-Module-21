function isLeapYear(year){

    if((year % 4 === 0 && year % 100 !=0) || year % 400 ===0){
        return true;
    }
    else{
        return false;
    }

}

let year1 = 2024
let res1 = isLeapYear(year1);
console.log(year1,"is Leap year:",res1);