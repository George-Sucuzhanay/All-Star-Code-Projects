// have a pop-up message show up
let name = "Pikachu";
// alert("Hello " + name + " Welcome!");
​
// getting references
let heading = document.querySelector("h1");
console.log(heading);
console.dir(heading);
​
// change the background-color of heading
heading.style["background-color"] = "yellow";
heading.style["font-size"] = "60px";
heading.style["padding"] = "20px";
​
// get reference to the second h1
let heading2 = document.querySelector("#two");
​
// change the background-color of heading2
heading2.style["background-color"] = "orange";
​
// get reference to the third h1
let heading3 = document.getElementById("three");
​
// change the background-color of heading3
heading3.style["background-color"] = "aqua";
​
​
​
// get all h1 reference (all at once)
let allHeadings = document.querySelectorAll("h1");
console.log(allHeadings);
​
// allHeadings[0].style["background-color"] = "green";
// allHeadings[1].style["background-color"] = "green";
// allHeadings[2].style["background-color"] = "green";
// allHeadings[3].style["background-color"] = "green";
// allHeadings[4].style["background-color"] = "green";
​
// change background-color of all the elements in allHeadings
for (let i = 0; i < allHeadings.length; i++) {
    allHeadings[i].style["background-color"] = "green";
}
​
// get references to the title class
let allHeadings2 = document.getElementsByClassName("title");
console.log(allHeadings2);
​
// use a for loop to iterate over allHeadings2 (array)
for (let i = 0; i < allHeadings2.length; i++) {
    allHeadings2[i].style["background-color"] = "pink";
}
​
let a = document.querySelector(".title");
a.style["font-family"] = "helvetica";
​
​
// get reference to h2
​
// Method #1 (Justin)
// let h2Ref = document.querySelector("h2");
// h2Ref.style["color"] = "blue";
​
// Method #2 (Steve)
// let h2Ref = document.getElementById("hello");
// h2Ref.style["color"] = "blue";
​
// Method #3 (Thomas)
// let h2Ref = document.getElementsByClassName("blah");
// h2Ref[0].style["color"] = "blue";
​
// Method #4
// let h2Ref = document.querySelector("#hello");
// h2Ref.style["color"] = "blue";
​
// Method #5 
// let h2Ref = document.querySelector(".blah");
// h2Ref.style["color"] = "blue";
​
// Method #6
// let h2Ref = document.querySelectorAll("h2");
// h2Ref[0].style["color"] = "blue";