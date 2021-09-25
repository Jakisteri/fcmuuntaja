//Fahrenheit to Celsius conversion
function fahrenheittocelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) / 1.8).toFixed(1);
    return celsius;
}

function convertFC() {
    let usersFahrenheit = inputFahrenheit.value;
    printFahrenheit.textContent = usersFahrenheit;

    printCelsius.textContent = fahrenheittocelsius(usersFahrenheit);
}

const inputFahrenheit = document.getElementById("inputFC");

const printFahrenheit = document.getElementById("fahrenheit1");

const printCelsius = document.getElementById("celsius1");

const convertbutton = document.getElementById("buttonFC");
convertbutton.addEventListener("click", convertFC);

//Celsius to Fahrenheit conversion
function celsiustofahrenheit(celsius) {
    let fahrenheit = ((celsius * 1.8) + 32).toFixed(1);
    return fahrenheit;
}

function convertCF() {
    let usersCelsius = inputCelsius.value;
    printCelsius2.textContent = usersCelsius;

    printFahrenheit2.textContent = celsiustofahrenheit(usersCelsius);
}

const inputCelsius = document.getElementById("inputCF");

const printCelsius2 = document.getElementById("celsius2");

const printFahrenheit2 = document.getElementById("fahrenheit2");

const convertbutton2 = document.getElementById("buttonCF");
convertbutton2.addEventListener("click", convertCF);