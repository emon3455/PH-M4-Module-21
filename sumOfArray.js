function sumOfAllElement(ar){
    let sum =0;
    console.log("Index "+" Value"+"     Sum");

    for(let i=0; i < ar.length; i++){
        sum = sum + ar[i];
        console.log(i,"\t",ar[i],"\t",sum);
    }

    return sum;
}

let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = sumOfAllElement(ar);
console.log("Sum:",sum);