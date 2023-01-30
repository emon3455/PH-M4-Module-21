function inchToFitConverter(inch){
    // 1 fit == 12 inch
    let feet = inch/12;
    return feet;
}

let inch = 71;
let fit = inchToFitConverter(inch);
console.log(inch,"inch = ",fit,"Feet");
