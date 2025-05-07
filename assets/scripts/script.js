const celcius = (document.getElementById('celcius').textContent);
const fahrenheitResult = document.getElementById('fahrenheitResult');
const reamurResult = document.getElementById('reamurResult');
const kelvinResult = document.getElementById('kelvinResult');


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