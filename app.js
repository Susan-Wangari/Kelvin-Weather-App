//this is the weather forecast in kelvin
const kelvin = 273;
//converting kelvin to celcius
const celcius = kelvin - 273;
//converting degrees to farenheit
let farenheit = celcius * (9/5) + 32
//rounding off farenheit value to the nearest whole number
farenheit = Math.floor(farenheit);
//logging the farenheit temperature
console.log(`The temperature is ${farenheit} degrees farenheit.`);

let Newton = celcius * (33/ 100);
 Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees newton.`);