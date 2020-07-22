let sportsArray = ['soccer', 'baseball', 'tennis', 'volleybal', 'football'];
let mixArray =['America', 7.4, 'true'];
mixArray[2] = 'Replacement String';



let firstElement = sportsArray[0];
let secondElement = sportsArray[1];
let thirdElement = sportsArray[2];
let fourthElement = sportsArray[3];
let fifthElement = sportsArray[4];

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
console.log(fourthElement);
console.log(fifthElement);

console.log(mixArray);
console.log('Length of mixArray:', mixArray.length);

let myArray = [50, 'abc', false, -3.5];
console.log('Before:', myArray);



 
myArray.pop();
console.log('After: ', myArray);

myArray.reverse();
console.log('After: ', myArray);


myArray.splice(2, 1);
console.log('After: ', myArray);


myArray.sort();
console.log('After: ', myArray);
