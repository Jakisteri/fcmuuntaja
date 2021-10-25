//Kilowatt to Horsepower conversion script

const userinputkw = document.getElementById("inputKw");
const printinputkw = document.getElementById("inputkilowatt");
const kilowattis = document.getElementById("kilowatt=");
const printoutputhp = document.getElementById("outputhorsepower");
const horsepowerhp = document.getElementById("horsepowerhp");

const buttonkw = document.getElementById("buttonKw");
buttonkw.addEventListener("click", convertKW);

//Calculation function
function kilowatthorsepower(kilowatt) {
    let horsepower = (kilowatt / 0.7457).toFixed(1);
    return horsepower;
}

function convertKW() {
    let userkilowatt = userinputkw.value;
    printinputkw.textContent = userkilowatt;
    if (userkilowatt === "") {
        kilowattis.textContent = ""
        printoutputhp.textContent = ""
        horsepowerhp.textContent = ""
        printinputkw.textContent = "Submit Kilowatts!"
        printinputkw.style.color = "#FF0000"

    } else if (userkilowatt < 0) {
        kilowattis.textContent = ""
        printoutputhp.textContent = ""
        horsepowerhp.textContent = ""
        printinputkw.textContent = "No negative values allowed!"
        printinputkw.style.color = "#FF0000"

    } else {
        printoutputhp.textContent = kilowatthorsepower(userkilowatt)
        horsepowerhp.textContent = "HP"
        kilowattis.textContent = "kW is"
        printinputkw.style.color = ""
    }
}

//Horsepower to Kilowatts conversion script

const userinputhp = document.getElementById("inputHp");
const printinputhp = document.getElementById("inputhorsepower");
const horsepoweris = document.getElementById("horsepower=");
const printoutputkw = document.getElementById("outputkilowatt");
const kilowattkw = document.getElementById("kilowattkw");

const buttonhp = document.getElementById("buttonHp");
buttonhp.addEventListener("click", convertHP);

//Calculation function
function horsepowerkilowatt(horsepower) {
    let kilowatt = (horsepower * 0.7457).toFixed(1);
    return kilowatt;
}


function convertHP() {
    let userhorsepower = userinputhp.value;
    printinputhp.textContent = userhorsepower;
    if (userhorsepower === "") {
        horsepoweris.textContent = ""
        printoutputkw.textContent = ""
        kilowattkw.textContent = ""
        printinputhp.textContent = "Submit Horsepower!"
        printinputhp.style.color = "#FF0000"

    } else if (userhorsepower < 0) {
        horsepoweris.textContent = ""
        kilowattkw.textContent = ""
        printoutputkw.textContent = ""
        printinputhp.textContent = "No negative values allowed!"
        printinputhp.style.color = "#FF0000"

    } else {
        printoutputkw.textContent = horsepowerkilowatt(userhorsepower)
        kilowattkw.textContent = "kW"
        horsepoweris.textContent = "HP is"
        printinputhp.style.color = ""
    }
}

// Input type button function

function inputType(value) {
    var horsepowerdiv = document.getElementById("hpdiv");
    var kilowattdiv = document.getElementById("kwdiv");
    if (value === "KilowattToHorsepower") {
        horsepowerdiv.style.display = "block"
    } else {
        horsepowerdiv.style.display = "none"
    }

    if (value === "HorsepowerToKilowatt") {
        kilowattdiv.style.display = "block"
    } else {
        kilowattdiv.style.display = "none"
    }
}