let Year=prompt("input year :")
let modYear=Year%4
if (modYear==0){
    Year="Leap Year"
}else{
    Year="Non Leap Year"
}
console.log(Year)