// Create Choices
const clickRound = document.getElementById("clickRound");

const rounds = [3, 6, 8, 10];
const roundsId = ["one", "two", "three", "four"];

for (let i = 0; i < rounds.length; i++) {
  clickRound.innerHTML += `<div class="inputTimes">
    <input
    class="choice"
    type="radio"
    name="roundz"
    id="${roundsId[i]}"
    value="${rounds[i]}"
    checked
  />
    <label for="${roundsId[i]}">${rounds[i]}</label>
    </div>`;
}

// count rounds
let playedRounds = 0;
// form prevDef Value
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  playedRounds++;
  clickRound.innerHTML = `<div class="roundsPlayed"><h2>Round ${playedRounds}</h2><h2>of ${startChoice}</h2></div>`;
  playedRounds == startChoice &&
    document.querySelector(".bgDiv").classList.add("display");

  if (playedRounds == startChoice && player_score > comp_score) {
    document.querySelector(
      ".resultContent"
    ).innerHTML = ` <h1>Congratulations! You won!</h1>
        <button type="button" class="restart" onclick="rldPage()">Restart</button>`;
  } else if (playedRounds == startChoice && player_score < comp_score) {
    document.querySelector(
      ".resultContent"
    ).innerHTML = ` <h1>Congratulations Mother Fucker! You LOST!</h1>
          <button type="button" class="restart" onclick="rldPage()">Restart</button>`;
  } else if (playedRounds == startChoice && player_score == comp_score) {
    document.querySelector(
      ".resultContent"
    ).innerHTML = ` <h1>Mother Fucker! Its a Draw!</h1>
            <button type="button" class="restart" onclick="rldPage()">Restart</button>`;
  }

  console.log(startChoice);
});

// Take choice Value

const choicesInput = document.querySelectorAll(".choice");
let startChoice = 10;

choicesInput.forEach((choice) => {
  choice.addEventListener("input", () => {
    startChoice = +choice.value;
    console.log(startChoice);
  });
});

// Rock Scissors Paper
const choices = ["Rock", "Scissors", "Paper"];
let choice, computer_choice;
let player_score = 0;
let comp_score = 0;

// ====Selection sections =====
const score = document.querySelector(".divForScore");
const selections = document.querySelector(".divForSelect");
// ====Selection sections =====

const imagesChoice = document.querySelectorAll(".inImg");
imagesChoice.forEach((image, idx) => {
  image.addEventListener("click", () => {
    choice = idx;

    game(choice);
  });
});

function game(choice) {
  computer_choice = Math.floor(Math.random() * 3);

  selections.innerHTML = ` <section id="selections"><h1>Your choice: <span >${choices[choice]}</span> Computer's choice: <span >${choices[computer_choice]}</span></h1></section>`;

  if (choice === computer_choice) {
    score.innerHTML = `<section id="score"> <h1>Your Score: <span >${player_score}</span> Computer's Score: <span >${comp_score}</span></h1> </section>`;
    return;
  }
  if (choice - computer_choice == -1 || choice - computer_choice == 2) {
    player_score++;
  } else {
    comp_score++;
  }

  score.innerHTML = `<section id="score"> <h1>Your Score: <span >${player_score}</span> Computer's Score: <span >${comp_score}</span></h1> </section>`;
}

// buttons
function rldPage() {
  document.location.reload();
}
