let user = 0, comp = 0;

const msg = document.getElementById("msg");
const us = document.getElementById("user-score");
const cs = document.getElementById("comp-score");
const choices = document.querySelectorAll(".choice");

choices.forEach(ch => {
  ch.addEventListener("click", () => {
    let userChoice = ch.id;
    let options = ["snake", "water", "gun"];
    let compChoice = options[Math.floor(Math.random() * 3)];

    if (userChoice === compChoice) {
      msg.innerText = "Draw ";
      msg.style.background = "#fffdfdff";
      msg.style.color = "black";
      msg.style.fontSize = "2rem";
    } else {
      let userWin =
        (userChoice === "snake" && compChoice === "water") ||
        (userChoice === "water" && compChoice === "gun") ||
        (userChoice === "gun" && compChoice === "snake");

      if (userWin) {
        user++;
        msg.innerText = `You Win  ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
        msg.style.color = "white";
        msg.style.fontSize = "2rem";
      } else {
        comp++;
        msg.innerText = `You Lose  ${compChoice} beats ${userChoice}`;
        msg.style.background = "red";
        msg.style.color = "white";
        msg.style.fontSize = "2rem";
      }
    }

    us.innerText = user;
    cs.innerText = comp;
  });
});
