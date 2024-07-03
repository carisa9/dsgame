
let playerChoices = {
  activity: null,
  honesty: null,
};

option1.addEventListener('click', function() {
  playerChoices.activity = 'clean';
  saveChoices();
  document.getElementById('start').style.display = 'none';
  document.getElementById('askUncle').style.display = 'block';
  startDialogue([
    { speed: speeds.fast, string: "You decided to play on your phone." }
  ]);
});

option2.addEventListener('click', function() {
  playerChoices.activity = 'phone';
  saveChoices();
  document.getElementById('start').style.display = 'none';
  document.getElementById('askUncle').style.display = 'block';
  startDialogue([
    { speed: speeds.fast, string: "You decided to look for cleaning supplies." }
  ]);
});

document.getElementById('tellTruth').addEventListener('click', function() {
  playerChoices.honesty = 'truth';
  saveChoices();
  handleUncleResponse();
});

document.getElementById('tellHalfTruth').addEventListener('click', function() {
  playerChoices.honesty = 'half-truth';
  saveChoices();
  handleUncleResponse();
});

function handleUncleResponse() {
  document.getElementById('askUncle').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  
  let resultText = [];
  if (playerChoices.activity === 'phone') {
    if (playerChoices.honesty === 'truth') {
      resultText = [
        { speed: speeds.normal, string: "Your uncle is harder to convince because you played on your phone." }
      ];
    } else {
      resultText = [
        { speed: speeds.normal, string: "Your uncle is harder to convince and later finds out you didn't tell the whole truth." }
      ];
    }
  } else if (playerChoices.activity === 'clean') {
    if (playerChoices.honesty === 'truth') {
      resultText = [
        { speed: speeds.normal, string: "Your uncle appreciates your hard work and lets you leave." }
      ];
    } else {
      resultText = [
        { speed: speeds.normal, string: "Your uncle appreciates your hard work but later finds out you didn't tell the whole truth." }
      ];
    }
  }

  startDialogue(resultText);
}
