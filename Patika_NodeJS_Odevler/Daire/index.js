const { circleArea, circleCircumference } = require('./circle');

const radius = 5;
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${circleArea(radius).toFixed(2)}`);
console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circleCircumference(radius).toFixed(2)}`);
