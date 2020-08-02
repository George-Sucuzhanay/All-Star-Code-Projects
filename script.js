// get references
let colorDiv = document.getElementById("color_div");
let body = document.querySelector("body");

// make a changeColor function
function changeColor() {

    // generate 3 random numbers between 0 and 255
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);

    // change background color of colorDiv
    colorDiv.style.backgroundColor = "rbg(" + num1 + "," + num2 + "," +num3 + ")";

    // setTimer
    setTimer(changeColor, 1000);
}
// call the change color function
changeColor();