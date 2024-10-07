// 1. Write a program that swaps the values of two variables.

        let a = 5;
        let b = 10;

        console.log(a, b);

        let num = a;
        a = b;
        b = num ;
        console.log( a, b);




// 3. Write a program to convert a string to a number using JavaScript.

        let str ="444"
        let (num) = Number(str)
        console.log(num)
        console.log(typeof num)



// 4. Write a program to check if a number is even or odd.

        let (num) = 8;
        if ((num % 2) == 0) {
            console.log(num + " is even.");
        } 
        else {
            console.log(num + " is odd.");
        }


// 5. Create a program that checks if a number is positive, negative, or zero.
        let (num)=-1;
        if (num>0)
        console.log("Number is possitive")
        else if(num<0)
        console.log("Number is Nagative")
        else
        console.log("Ita a zero")



// 6. Write a program that checks if a year is a leap year.
        let year=2024
        if (year%4==0)
        console.log(year+"Its a leap year")
        else
        console.log(year+"Its not a leap year")


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






// 8. Write a program that compares two numbers and prints the larger one.
        let num1=2;
        let num2=4;
        if (num1>num2)
        console.log(num1+"is large number")
        else if (num2>num1)
        console.log(num2+"is large number")
        else 
        console.log("These are equal")