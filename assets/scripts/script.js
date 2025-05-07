const celcius = parseFloat(document.getElementById('celcius').textContent);

function celciusToFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}

fahrenheitResult.textContent = celciusToFahrenheit(celcius);

function celciusToReamur(celcius) {
    return (4 / 5 * celcius);
}

reamurResult.textContent = celciusToReamur(celcius);

function celciusToKelvin(celcius) {
    return celcius + 273;
}

kelvinResult.textContent = celciusToKelvin(celcius);
