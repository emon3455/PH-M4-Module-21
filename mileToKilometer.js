// we know 1 mile = 1.609344 km

function mileToKilometer(mile){

    let km = mile * 1.609344;

    return km;

}

let miles = 10;
let km = mileToKilometer(miles);
console.log(miles,"Miles = ",km,"Kilometer");