//Fahrenheit to Celsius conversion

function fahrenheittocelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) / 1.8).toFixed(1);
    return celsius;
}

function convertFC() {
    let usersFahrenheit = inputFahrenheit.value;
    printFahrenheit.textContent = usersFahrenheit;
    if (usersFahrenheit==="") {
        FahrenheitMarkIs.textContent = ""
        CelsiusMark.textContent = ""
        printCelsius.textContent = "Submit Fahrenheit degrees!"
        printCelsius.style.color = "#FF0000"
        
    } else {
        FahrenheitMarkIs.textContent = "°F is"
        CelsiusMark.textContent = "°C"
        printCelsius.textContent = fahrenheittocelsius(usersFahrenheit);
        printCelsius.style.color = ""
    }
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
    if (usersCelsius==="") {
        FahrenheitMark.textContent = ""
        CelsiusMarkIs.textContent = ""
        printFahrenheit2.textContent = "Submit Celsius degrees!"
        printFahrenheit2.style.color = "#FF0000"
    } else {
        FahrenheitMark.textContent = "°F"
        CelsiusMarkIs.textContent = "°C is"
        printFahrenheit2.textContent = celsiustofahrenheit(usersCelsius);
        printFahrenheit2.style.color = ""
    }
}

// Input type radio button function

function inputType(value) {
    var fahrenheitdiv = document.getElementById("fdiv");
    var celsiusdiv = document.getElementById("cdiv");
    if (value === "CelsiusToFahrenheit") {
        celsiusdiv.style.display = "block"
    } else {
        celsiusdiv.style.display = "none"
    }

    if (value === "FahrenheitToCelsius") {
        fahrenheitdiv.style.display = "block"
    } else {
        fahrenheitdiv.style.display = "none"
    }
}


const inputCelsius = document.getElementById("inputCF");

const printCelsius2 = document.getElementById("celsius2");

const printFahrenheit2 = document.getElementById("fahrenheit2");

const CelsiusMark = document.getElementById("CelsiusC");

const FahrenheitMarkIs = document.getElementById("FahrenheitF=");

const FahrenheitMark = document.getElementById("FahrenheitF");

const CelsiusMarkIs = document.getElementById("CelsiusC=");

const convertbutton2 = document.getElementById("buttonCF");

convertbutton2.addEventListener("click", convertCF);