"use strict";

let result;
const btnWlc = document.querySelector(".dir-btn");
const directionInput = document.querySelector(".dir-input");
const northAns = document.querySelector(".north");
const southAns = document.querySelector(".south");
const westAns = document.querySelector(".west");
const eastAns = document.querySelector(".east");
const btnOK = document.querySelector(".btn");

btnOK.addEventListener("click", function () {
  result = prompt("what direction do you want to go again !");
  if (result === "north") {
    document.write(
      "Good choice , that is the door that promises freedom ,take a deep breath and push the door open and step inside. welcoming light. The air is fresh and crisp. As you walk forward they notice a serene landscape through a window Its a breathtaking view of a vast valley, bathed in the hues of a beautiful sunset you continue down the path, a sense of hope and relief filling the air"
    );
  } else if (result === "south" || result === "west" || result === "east") {
    document.write(
      "Sorry, you reach a dead end, surrounded by walls closing in. Waster hahaha "
    );
  } else {
    document.write(
      "sorry! Did not understand what u meant, Please give a valid direction"
    );
  }
});
