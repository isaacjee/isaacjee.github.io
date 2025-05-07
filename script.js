let currentScenarioIndex = parseInt(localStorage.getItem("currentScenarioIndex")) || 0;;
let goodChoices = parseInt(localStorage.getItem("goodChoices")) || 0;
let harmfulChoices = parseInt(localStorage.getItem("harmfulChoices")) || 0;


function loadScenario(index) {
    const scenario = scenarios[index];
    document.getElementById("scenario-title").textContent = scenario.title;
    document.getElementById("scenario-description").textContent = scenario.description;

    scenario.choices.forEach((choice, i) => {
        const btn = document.getElementById(`choice-${i}`);
        btn.textContent = choice.text;
        btn.onclick = () => showOutcome(choice.outcome, choice.type);
    });

    document.getElementById("choice-0").disabled = false;
    document.getElementById("choice-1").disabled = false;

    document.getElementById("outcome").classList.add("hidden");
    document.getElementById("next-scenario").classList.add("hidden");

    updateScoreDisplay();
}

function showOutcome(outcomeText, choiceType) {
    document.getElementById("outcome").textContent = outcomeText;
    document.getElementById("outcome").classList.remove("hidden");
    document.getElementById("next-scenario").classList.remove("hidden");
    document.getElementById("choice-0").disabled = true;
    document.getElementById("choice-1").disabled = true;

    document.getElementById("score-display").textContent =
  `Conservation Score: ${goodChoices} Good, ${harmfulChoices} Harmful`;


    if (choiceType === "good") goodChoices++;
    else if (choiceType === "harmful") harmfulChoices++;

    localStorage.setItem("goodChoices", goodChoices);
    localStorage.setItem("harmfulChoices", harmfulChoices);

    updateScoreDisplay();

    currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;

    localStorage.setItem("currentScenarioIndex", currentScenarioIndex);
}

document.getElementById("next-scenario").onclick = () => {
    loadScenario(currentScenarioIndex);
    document.getElementById("choice-0").disabled = false;
    document.getElementById("choice-1").disabled = false;
};

function updateScoreDisplay() {
    document.getElementById("score-display").textContent =
      `Conservation Score: ${goodChoices} Good, ${harmfulChoices} Harmful`;
}
  
function resetProgress() {
    localStorage.removeItem("currentScenarioIndex");
    localStorage.removeItem("goodChoices");
    localStorage.removeItem("harmfulChoices");
    currentScenarioIndex = 0;
    goodChoices = 0;
    harmfulChoices = 0;
    loadScenario(currentScenarioIndex);
    updateScoreDisplay();
  }  

window.onload = () => {
    const savedIndex = localStorage.getItem("currentScenarioIndex");
    currentScenarioIndex = savedIndex ? parseInt(savedIndex) : 0;
    loadScenario(currentScenarioIndex);
    updateScoreDisplay();
};
