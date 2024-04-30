/* 
    Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.
*/

let numbers = [1, 2, 3];
let sum = 0;

// Using forEach to iterate over each element of the array
numbers.forEach(number => {
    // Multiply each number by 2 and print it
    console.log(number * 2);

    // Add each number to the sum
    sum += number;
});

// Print the total sum
console.log("Total sum:", sum);
