// ------------------------------------------------------------
// File: script.js
// Author: Brooke Kelly
// ------------------------------------------------------------

// ====================[ Object Literal ]========================
const myDog = {
  name: "Scooby-Doo",
  breed: "Great Dane",
  show: "Scooby-Doo, Where Are You?",
  notes: "Lifelong companion of Shaggy Rogers; about a big dog and several teenage humans solving mysteries.",
  mySound: "When I bark, I’m not scary just goofy and lovable!"
};

const literalMsg =
  `Meet ${myDog.name}!\n` +
  `Breed: ${myDog.breed}\n` +
  `Show: ${myDog.show}\n` +
  `About: ${myDog.notes}\n` +
  `Sound: ${myDog.mySound}`;

document.getElementById("literalOut").textContent = literalMsg;

// ====================[ Constructor Function ]=================
function Dog(name, breed, show, notes, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.show = show;
  this.notes = notes;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function () {

    return `Hello, my name is ${this.name}, ${this.mySound} ` +
           `I starred in the TV show ${this.show}. ` +
           `My character was a ${this.breed}. ` +
           `${this.notes} ` +
           `${this.canTalk ? "(Yes, I can talk!)" : "(I don’t talk much.)"}`;
  };
}

const myDogConst = new Dog(
  "Scooby-Doo",
  "Great Dane",
  "Scooby-Doo Where Are You?",
  "Lifelong companion of Shaggy Rogers; about a big dog and several teenage humans solving mysteries.",
  "when I bark I am not scary.",
  true
);

const greetMsg = myDogConst.myGreeting();
document.getElementById("constructorOut").textContent = greetMsg;

console.log("Literal Object:", myDog);
console.log("Constructor Object:", myDogConst);
console.log("Greeting:", greetMsg);
