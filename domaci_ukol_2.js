// Priklad spusteni scriptu
// node domaci_ukol_2.js {cislo_pro_prevedeni}
// node domaci_ukol_2.js 23
// node domaci_ukol_2.js 999
// node domaci_ukol_2.js 128

let input = process.argv[2];

if(Number.isNaN(Number(input)) || Number(input) < 0) { // Checking if user input is a positive number
  console.error('Not a positive number... Try again :)'); 
  return;
}


const convertDecimalToBinary = (value) => {
  let binary = ''; // Defining variable where we store our result
  while (value > 0) { // While user input is bigger than zero -> meaning our conversion was completed.
      if (value % 2 == 1) { // Modulo operation to check for remainder
          binary = '1' + binary; // Adding bit with state of 1 to the start of our result
      } else {
          binary = '0' + binary; // Adding bit with state of 0 to the start of our result
      }
      value = Math.floor(value / 2); // Divide input value by 2 to move to another binary position
  }
  
  return `Result of your input in binary is: ${binary}`; // Returning result to the user
}

console.log(convertDecimalToBinary(input)); // Printing converted value to the console
