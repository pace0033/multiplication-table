// Your code challenge is to make a MULTIPLICATION TABLE
// Multiplication tables are also known as a "times table"
// Here's a good example: https://www.mathkidsandchaos.com/wp-content/uploads/2020/01/MULTIPLICATION-CHART-3.png

// --- MAIN GOAL ---
// Store the values used to create a times table for the values 1-10 in timesTable
// The timesTable object will store 10 objects that contain the products of each row & column value
// It's easier to visualize by seeing the output of console.log(timesTable)
// https://gist.github.com/pace0033/fb2908efd705060b6e3edfeadb6de937
// See psuedocode for implementation suggestions and guidance

const timesTable = {};

/* --- YOUR CODE HERE --- */

// outer for loop (row index)
// inside outer loop, make an empty row object {} to store products from inner loop
// inner for loop (column index)
// calculate the product of the row index multiplied by the column index
// store the resulting value in a new property in the row object
// the new property should be named with the current column index
// after the end of the inner loop, store the row object into the timesTable object
// the column object should be stored in a property named with the current row index

/* --- TESTS --- */
console.log(timesTable);
// Expected output: https://gist.github.com/pace0033/fb2908efd705060b6e3edfeadb6de937
