function factorial(number){
    let result = 1;
    for(let i = number; i >=1 ; i--){
        result = result * i;
    }

    return result;
}

let number = 7;
let fact = factorial(number);
console.log(number,"Factorial is:",fact);