// 8. Write a function that converts Celsius to Fahrenheit.

function convert(celsius) {
    return (celsius * 9/5) + 32; 
}
const celsius =  55;
const fahrenheit = convert(celsius);
console.log(fahrenheit);
