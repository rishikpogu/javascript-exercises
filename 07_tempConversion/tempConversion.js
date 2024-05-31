const convertToCelsius = function(temp) {
  let Cel = 0
  Cel = (temp-32)*(5/9)
  return round(Cel, 1)
};

const convertToFahrenheit = function(temp) {
  let Fah = 0
  Fah = (temp*(9/5)+32)
  return round(Fah, 1)
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
