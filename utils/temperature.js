const UNITS = {
	celcius: "°C",
	fahrenheit: "°F",
};

function convertTemperatureTo(temperature, unitTo) {
	if (unitTo === UNITS.celcius) {
		return (temperature - 32) / 1.8;
	} else if (unitTo === UNITS.fahrenheit) {
		return temperature * 1.8 + 32;
	} else {
		throw new Error("Invalid unit");
	}
}

function getOppositeUnit(unit) {
	if (unit === UNITS.celcius) {
		return UNITS.fahrenheit;
	} else if (unit === UNITS.fahrenheit) {
		return UNITS.celcius;
	} else {
		throw new Error("Issue with units");
	}
}

export { UNITS, convertTemperatureTo, getOppositeUnit };
