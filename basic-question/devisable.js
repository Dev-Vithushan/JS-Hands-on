let number=prompt("input number:")
let mod3=number%3
let mod5=number%5
if (mod3==0 || mod5==0){
    number="devisible number"
}else {
    number="non devisible number"
}
console.log(number)