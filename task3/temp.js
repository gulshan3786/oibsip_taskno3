const convertButton = document.getElementById("convertButton");
const temperatureInput = document.getElementById("temperatureInput");
const celsiusRadio = document.getElementById("celsiusRadio");
const fahrenheitRadio = document.getElementById("fahrenheitRadio");
const output = document.getElementById("output");

convertButton.addEventListener("click", function() {
        if (!temperatureInput.value) {
          alert("Please enter a temperature");
          return;
        }
        if (isNaN(temperatureInput.value)){
            alert("Please enter an integer value")
            return;
        }
        if (!celsiusRadio.checked && !fahrenheitRadio.checked) {
          alert("Please select a unit");
          return;
        }
        const temperature = parseFloat(temperatureInput.value);
        let convertedTemperature;
        let unit;
        if (celsiusRadio.checked) {
          convertedTemperature = (temperature * 9) / 5 + 32;
          unit = "Fahrenheit";
        } else {
          convertedTemperature = ((temperature - 32) * 5) / 9;
          unit = "Celsius";
        }
        output.innerHTML = `${convertedTemperature.toFixed(2)} &deg ${unit};`;
     });