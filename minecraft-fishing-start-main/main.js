// Functionize Minecraft Fishing Start Code

let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Fish with Steve 
    let randNum = Math.random();
    if (randNum < 0.7) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum < 0.9) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    }  else if (randNum < 0.95) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    }  else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Fish with Alex
    let randNum = Math.random();
    if (randNum < 0.1) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum < 0.2) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    }  else if (randNum < 0.5) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    }  else {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    // Fish with Alex
    let randNum = Math.random();
    if (randNum <= 0.25) {
      document.getElementById("result-img").src = "img/Raw-Cod.png";
      numCod++;
      document.getElementById("num-cod").innerHTML = numCod;
    } else if (randNum <= 0.35) {
      document.getElementById("result-img").src = "img/Raw-Salmon.png";
      numSalmon++;
      document.getElementById("num-salmon").innerHTML = numSalmon;
    }  else if (randNum <= 0.45) {
      document.getElementById("result-img").src = "img/Tropical-Fish.png";
      numTropical++;
      document.getElementById("num-tropical").innerHTML = numTropical;
    }  else if (randNum <= 0.55) {
      document.getElementById("result-img").src = "img/Pufferfish.png";
      numPuffer++;
      document.getElementById("num-puffer").innerHTML = numPuffer;
    }
  } document.getElementById("fish-btn").style.background = `rgba(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255}, 0.7)`;
}
