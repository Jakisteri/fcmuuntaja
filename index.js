function fahrenheittocelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) / 1.8).toFixed(1);
    return celsius;
}


function muunnaFC() {
    let syötetty = syötettyfahrenheit.value;
    tulostefahrenheit.textContent = syötetty;

    tulostecelsius.textContent = fahrenheittocelsius(syötetty);
}

const syötettyfahrenheit = document.querySelector("input");

const tulostefahrenheit = document.querySelector("#fahrenheit");

const tulostecelsius = document.querySelector("#celsius");

const muuntonappi = document.querySelector("button");
muuntonappi.addEventListener("click", muunnaFC);