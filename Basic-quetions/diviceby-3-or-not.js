// 7. Write a program to check if a number is divisible by 3 or 5.
        let (num) =3
        if (num % 3 == 0& num % 5 == 0) 
            console.log(num + " divisible by both 3 and 5.");
        else if (num % 3 == 0) 
            console.log(num + " divisible by 3.");
        else if (num % 5 == 0) 
            console.log(num + " divisible by 5.");
        else 
            console.log(num + " not divisible by 3 or 5.");
