function square(c) {
    console.log(c + c + c + c + c);
    console.log(c + " " + c);
    console.log(c + c + c + c + c);
}
square("*");
console.log();
square("@");
console.log();
square("A");

// sqaure("A");

function sum(num1, num2) {
    let result = num1 + num2;
    
    return result;
}
let total = sum (3,5);
console.log(total);

//console.log(total);

function add(num1, num2, num3, num4, num5) {
    let answer = num1 + num2 + num3 + num4 + num5;
    return answer;
}
// get the sum of the 
let total = add(1, -4, 3, 8, -5);

//calculate average
let average = total /5;
console.log("Total:", total);
console.log("Average:", average);
