const convertToCelsius = function(farValue) {
  let celValue=(farValue-32)*(5/9);
  return Math.round(celValue*10)/10;
};

const convertToFahrenheit = function(celValue) {
  let farValue= (celValue*(9/5))+32;
  return Math.round(farValue*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
