const clickSound = document.getElementById("click-sound");
const myinput = document.getElementById("myinput");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => {
        console.warn("Audio play failed:", e);

    });
    if (tofahrenheit.checked) {
        temp = Number(myinput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }

    else if (tocelsius.checked) {
        temp = Number(myinput.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a Unit";
    }

}