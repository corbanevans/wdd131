var temperatureCelsiusValue = 17;
var temperatureCelsiusElement = document.getElementById("temperature-info");
temperatureCelsiusElement.textContent = temperatureCelsiusValue + "°C";
var windSpeedKmhValue = 13;
var windSpeedKmhElement = document.getElementById("wind-speed");
windSpeedKmhElement.textContent = windSpeedKmhValue + " km/h";


// Function to calculate windchill factor
function calculateWindchill(temperatureCelsius, windSpeedKmh) {
    return 13.12 + (0.6215 * temperatureCelsius) - (11.37 * Math.pow(windSpeedKmh, 0.16)) + (0.3965 * temperatureCelsius * Math.pow(windSpeedKmh, 0.16));
}

// return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

// Static values for temperature and wind speed
var temperatureCelsius = 17;
var windSpeedKmh = 13;

// Calculate windchill factor
var windchillFactor = calculateWindchill(temperatureCelsius, windSpeedKmh);

var windchillElement = document.getElementById("windchill-factor");
windchillElement.textContent = windchillFactor.toFixed(1) + "°C";


// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set the last modified date
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;