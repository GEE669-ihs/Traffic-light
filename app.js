// Get variable
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const switchBtn = document.getElementById("switchBtn");

//reset lights
function resetLight() {
        redLight.style.background = "#444";
        yellowLight.style.background = "#444";
        greenLight.style.background = "#444";
}

// initial value
let current = "red";
redLight.style.background = "red";




// switch lights
function switchLight() {
    switchBtn.disabled = true;
    resetLight();

    yellowLight.style.background = "yellow";

console.log(current);
    setTimeout(() => {
        resetLight();
    if (current == "red") {
        current = "green";
        greenLight.style.background = "green";
    } else {
        current ="red";
        redLight.style.background = "red";
    }
switchBtn.disabled = false;
}, 1500);




}

switchBtn.addEventListener("click", switchLight);