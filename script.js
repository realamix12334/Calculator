let display = document.getElementById("display");


function Add (value) {
    display.value += value
}


function Clear () {
    display.value = ""
}

function Backspace () {
    display.value = display.value.slice(0, -1);
}

function Calculator () {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}