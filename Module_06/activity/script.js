// ------------------------------------------------------------
// File: script.js
// Author: Brooke Kelly
//  1) Keep the literal object from Module 5 for reference.
//  2) Add a Dog constructor function.
//  3) Add a conditional in myGreeting() to show if a dog can talk.
//  4) Create two new Dog objects using the constructor.
//  5) Use a for...in loop to display all properties.
//  6) Let the user pick a dog by name and display full info or an error.
// ------------------------------------------------------------

// =======================[ 1. Literal Object (Module 5 reference) ]======================
const myDog = {
  name: "Scooby-Doo",
  breed: "Great Dane",
  show: "Scooby-Doo, Where Are You?",
  notes: "Lifelong companion of Shaggy Rogers; mystery-solving hijinks.",
  mySound: "Ruh-roh! I’m goofy and lovable."
};

// Output for the literal object
const literalMsg =
  `Meet ${myDog.name}!\n` +
  `Breed: ${myDog.breed}\n` +
  `Show: ${myDog.show}\n` +
  `About: ${myDog.notes}\n` +
  `Sound: ${myDog.mySound}`;

document.getElementById("literalOut").textContent = literalMsg;

// =======================[ 2. Constructor Function Added ]======================
function Dog(name, breed, show, notes, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.show = show;
  this.notes = notes;
  this.mySound = mySound;
  this.canTalk = Boolean(canTalk);

  // ===================[ 3. Modified myGreeting Method with Conditional ]===================
  this.myGreeting = function () {
    const talkPart = this.canTalk ? "I can talk!" : "I cannot talk.";
    return (
      `Hello, my name is ${this.name}. ${this.mySound} ` +
      `I starred in "${this.show}". ` +
      `I am a ${this.breed}. ${this.notes} ${talkPart}`
    );
  };
}

// =======================[ 4. Create Objects Using Constructor ]======================
const myDogConst = new Dog(
  "Scooby-Doo",
  "Great Dane",
  "Scooby-Doo, Where Are You?",
  "Lifelong companion of Shaggy Rogers; mystery-solving hijinks.",
  "Ruh-roh! When I bark, I’m not scary—just silly.",
  true
);

const brianGriffin = new Dog(
  "Brian Griffin",
  "Labrador Retriever",
  "Family Guy",
  "Brian is the talking pet dog of the Griffin family; witty and conversational.",
  "I prefer dry martinis and sarcasm.",
  true
);

const santasLittleHelper = new Dog(
  "Santa's Little Helper",
  "Greyhound",
  "The Simpsons",
  "Adopted by the Simpson family; mostly a typical (non-talking) dog.",
  "Woof! (I’m mostly quiet.)",
  false
);

// =======================[ 5. Display Constructor Greeting ]======================
document.getElementById("constructorOut").textContent = myDogConst.myGreeting();

// =======================[ 6. Store All Dogs and Build Lookup Map ]======================
const dogs = [myDogConst, brianGriffin, santasLittleHelper];
const dogByName = dogs.reduce((acc, d) => {
  acc[d.name.toLowerCase()] = d;
  return acc;
}, {});

// =======================[ 7. Use for...in Loop to Display Properties ]======================
const dogsListOut = document.getElementById("dogsListOut");

function renderAllDogs() {
  dogsListOut.innerHTML = "";

  dogs.forEach((dog) => {
    const wrapper = document.createElement("div");
    const title = document.createElement("div");
    title.innerHTML = `<strong>${dog.name}</strong>`;
    wrapper.appendChild(title);

    const list = document.createElement("ul");

    for (let prop in dog) {
      if (typeof dog[prop] === "function") continue;
      const li = document.createElement("li");
      li.textContent = `${prop}: ${dog[prop]}`;
      list.appendChild(li);
    }

    wrapper.appendChild(list);
    wrapper.style.marginBottom = "10px";
    dogsListOut.appendChild(wrapper);
  });
}

renderAllDogs();

// =======================[ 8. User Selection via Prompt ]======================
const btnChoose = document.getElementById("btn-choose");
const btnReset  = document.getElementById("btn-reset");
const selectionOut = document.getElementById("selectionOut");
const errorOut = document.getElementById("errorOut");

function chooseDog() {
  errorOut.textContent = "";
  selectionOut.textContent = "";

  const raw = prompt(
    'Type a dog name exactly as listed (e.g., "Scooby-Doo", "Brian Griffin", "Santa\'s Little Helper"):'
  );

  if (raw === null) return;

  const key = raw.trim().toLowerCase();
  const picked = dogByName[key];

  if (!picked) {
    errorOut.textContent = `Sorry, "${raw}" isn’t in the list.`;
    return;
  }

  const lines = [];
  lines.push(picked.myGreeting());
  lines.push("");
  lines.push("All known details:");

  for (let prop in picked) {
    if (typeof picked[prop] === "function") continue;
    lines.push(`- ${prop}: ${picked[prop]}`);
  }

  selectionOut.textContent = lines.join("\n");
}

function clearSelection() {
  errorOut.textContent = "";
  selectionOut.textContent = "";
}

btnChoose.addEventListener("click", chooseDog);
btnReset.addEventListener("click", clearSelection);

// =======================[ 9. Console Logging for Debugging ]======================
console.log("Literal Object:", myDog);
console.log("Constructor Object:", myDogConst);
console.log("All Dogs:", dogs.map(d => d.name));
