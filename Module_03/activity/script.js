function appendLine(el, text) {
  const div = document.createElement("div");
  div.textContent = text;
  el.appendChild(div);
}

// ========== 1) For loop: 0..10 and odd/even ==========
(function showOddEven() {
  const out = document.getElementById("oddEven");
  for (let i = 0; i <= 10; i++) {
    const parity = (i % 2 === 0) ? "even" : "odd";
    appendLine(out, `Count ${i} is ${parity}`);
  }
})();

// ========== 2) Do…While using user input (5..20) ==========
(function doWhileToMyNum() {
  let myNum;

  // Keep asking until valid (or user cancels → default to 10)
  while (true) {
    const raw = prompt("Enter a whole number between 5 and 20:");
    if (raw === null) { // Cancel clicked
      myNum = 10;       // sensible default
      break;
    }
    const n = Number(raw);
    if (Number.isInteger(n) && n >= 5 && n <= 20) {
      myNum = n;
      break;
    } else {
      alert("Please enter an integer from 5 to 20.");
    }
  }

  // Show target in the UI
  document.getElementById("myNumTarget").textContent = String(myNum);

  const out = document.getElementById("doWhileOut");
  let counter = 1;

  // Display the counter until it equals myNum
  do {
    appendLine(out, `Counter: ${counter}`);
    counter++;
  } while (counter <= myNum);
})();

// ========== 3) Arrays with forEach() and join() ==========
(function subjectsDemo() {
  const subjects = [
    "Accounting",
    "Algebra",
    "Programming",
    "Art",
    "Data Analytics"
  ];

  // Readable format using forEach()
  const ul = document.getElementById("subjectsList");
  subjects.forEach((subject, idx) => {
    const li = document.createElement("li");
    li.textContent = `${idx + 1}. ${subject}`;
    ul.appendChild(li);
  });

  // One statement, comma-separated
  document.getElementById("subjectsCsv").textContent = subjects.join(", ");
})();
