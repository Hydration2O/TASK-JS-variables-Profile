/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
 let fullName = "[name placeholder]";
 let yearOfBirth = 1989;
 let hobby = "coding";
 let funFact = "sleeping has a direct corralation to your productivity";
 const image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fabrazoreadingglasses.com%2Fwp-content%2Fuploads%2F2017%2F02%2Fcryastal-blue.jpg&f=1&nofb=1&ipt=768006ca4be0475d78f51d19fbc9fdfcaa85543ebe47463f1a38138ed4fcac15&ipo=images";







/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

let currentYear = new Date().getFullYear(); 
const fullNameString = `My name is ${"Bob Bobson"}`;
const yearOfBirthString = `I am ${currentYear-yearOfBirth} years old`;
const hobbyString = `My hobby is ${hobby}`;





/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  if (stars != 5) {
  stars++;
  }
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  if (stars != 0) {
  stars--;
  }
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  if (stars != 4) {
  stars=stars+2;
  }
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  if (stars != 1){
  stars=stars-2;
}
}
