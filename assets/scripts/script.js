
function celciusToFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
  }

//   document.querySelector('#celcius')

fahrenheitResult.textContent = celciusToFahrenheit(150)

  
function celciusToReamur(celcius) {
    return (4/5 * celcius);
  }

reamurResult.textContent = celciusToReamur(150)

function celciusToKelvin(celcius) {
    return (celcius + 273);
  }

kelvinResult.textContent = celciusToKelvin(150)