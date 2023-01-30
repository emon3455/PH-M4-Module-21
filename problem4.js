function checkLeapyear(years){

    let x =0, year;
    let newYears = [];

    for(let i=0; i<=years.length; i++){

        year = years[i];

        if((year % 4 === 0 && year % 100 !=0) || year % 400 ===0){
            newYears[x] = year;
            x++;
        }

    }

    return newYears;
}

let years = [2023, 2024, 2025, 2028, 2030];
let newYear = checkLeapyear(years);
console.log(newYear);