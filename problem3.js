// 1 hour is = 60 minute

function hourToMinute(hour){
    let min = hour * 60;
    return min;
}

let hour =2;
let minute = hourToMinute(hour);
console.log(hour,"Hour = ",minute,"Minute");