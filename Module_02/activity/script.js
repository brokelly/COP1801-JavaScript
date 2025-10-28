let Fname = prompt("Please enter your first name");

// 2. Display a welcome message that includes the name entered
alert("Welcome, " + Fname + "!");

// 3. Create a constant to store the value of Pi (7 significant digits)
const piValue = 3.1415926;

// 4. Ask the user to input their favorite number and store it in myFavNum
let myFavNum = prompt("Enter your favorite number:");

// Convert the input from string to number
myFavNum = Number(myFavNum);

// 5. Calculate the area of a circle using the users favorite numbeer as the radius
// Formula: A = πr²
let myArea = piValue * myFavNum * myFavNum;

// 6. Display all variable contents on the webpage
let message = `
  Hello ${Fname}, you entered ${myFavNum} as your favorite number.<br>
  If that was the radius of a circle, the circles area would be ${myArea.toFixed(6)}.<br><br>
  <strong>Details:</strong><br>
  Fname = ${Fname}<br>
  piValue = ${piValue}<br>
  myFavNum = ${myFavNum}<br>
  myArea = ${myArea.toFixed(6)}
  `;

// Display message on the page
document.getElementById("output").innerHTML = message;
