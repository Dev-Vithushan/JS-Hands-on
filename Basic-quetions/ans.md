1. Write a program that prints numbers from 1 to 10 using a for loop.

    

2. Create a while loop that prints even numbers between 0 and 20.




3. Write a program to calculate the factorial of a number using a for loop.

4. Write a program to sum the first n numbers where n is input by the user.
5. Write a program that reverses a given string.

# Functions
6. Write a function to calculate the area of a circle given its radius.
7. Write a function that takes a number and returns whether it’s prime or not.
8. Write a function that converts Celsius to Fahrenheit.
9. Write a function that returns the nth Fibonacci number.
10. Write a function that checks if a string is a palindrome.


# Arrays
11. Write a program to find the maximum number in an array.

12. Write a program to find the sum of all elements in an array.

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("Total", sum); 


13. Write a program that sorts an array of numbers.

let numbers = [42, 10, 7, 19, 5, 25, 3];
numbers.sort((a, b) => a - b);
console.log(" array", numbers);

14. Write a function to remove duplicate values from an array.
15. Write a function that finds the second largest number in an array.


# Objects
16. Create an object representing a car and include properties like make, model, and year.

let car = {
    make: 'BMW',
    model: 'X5',
    year: 2021,
    color: 'Blue'
};

console.log("Make:", car.make);       
console.log("Model:", car.model);    
console.log("Year:", car.year);      
console.log("Color:", car.color);     



17. Write a program that adds a new property to an existing object.
let car = {
    make: 'BMW',
    model: 'X5',
    year: 2021,
    color: 'Blue'
};

console.log("Original ", car);

car.owner = 'John Doe';

car.mileage = 15000;

console.log("Updated ", car);

18. Write a function that prints all the keys of an object.
19. Write a function that merges two objects.
20. Write a program that converts an array of key-value pairs into an object.


# Strings
21. Write a program that counts the number of vowels in a given string.
22. Write a function to reverse a string.
23. Write a function that capitalizes the first letter of each word in a string.
24. Write a program that checks if a string contains a specific substring.
25. Write a function to remove spaces from a string.


# Date and Time
26. Write a program that prints the current date and time.
27. Write a function that calculates the number of days between two dates.
28. Write a program that adds 5 days to the current date.
29. Write a program that formats a date as dd/mm/yyyy.
30. Write a function that prints the day of the week for a given date.