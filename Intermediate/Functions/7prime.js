let prime = true
function isPrime(number) {
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number%i === 0) {
                prime = false;
            }
            else {
                break;
            }
        }
        if (prime) {
            console.log(prime);
        }
        else{
            console.log(prime);
        }
    }
}
isPrime(10);