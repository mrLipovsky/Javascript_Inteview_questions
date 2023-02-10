// <!-- farenheit to celsius -->

var pismena = xxx

function toCelsius() {
    let number = document.getElementById('celsiusNumber').value;
    
    let result = (number * 9/5) + 32;

    document.getElementById("result").innerText = number +" celsius is " + result + " farenheits";
}

