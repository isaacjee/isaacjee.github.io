let currentScenarioIndex = parseInt(sessionStorage.getItem("currentScenarioIndex")) || 0;;
let goodChoices = parseInt(sessionStorage.getItem("goodChoices")) || 0;
let harmfulChoices = parseInt(sessionStorage.getItem("harmfulChoices")) || 0;


function loadScenario(index) {
    const scenario = scenarios[index];
    const imageElement = document.getElementById("scenario-image");

    document.getElementById("scenario-title").textContent = scenario.title;
    document.getElementById("scenario-description").textContent = scenario.description;

    if (scenario.image) {
        imageElement.src = scenario.image;
        imageElement.classList.remove("hidden");
    } else {
        imageElement.classList.add("hidden");
    }
    if (currentScenarioIndex == 0) {
        document.getElementById("start").classList.remove("hidden");
        document.getElementById("scenario-title").classList.add("hidden");
        document.getElementById("scenario-description").classList.add("hidden")
        document.getElementById("restart").classList.add("hidden");
        document.getElementById("choice-1").classList.add("hidden");
        const btn = document.getElementById(`choice-0`);
        btn.textContent = "Start";
        btn.onclick = () => start();
    }
    else if (currentScenarioIndex <= scenarios.length - 3) {
        
        scenario.choices.forEach((choice, i) => {
            const btn = document.getElementById(`choice-${i}`);
            btn.textContent = choice.text;
            btn.onclick = () => showOutcome(choice.outcome, choice.type);
        });

        document.getElementById("choice-0").disabled = false;
        document.getElementById("choice-1").disabled = false;

    }
    else if (currentScenarioIndex == scenarios.length - 2) {
        document.getElementById("choice-1").classList.add("hidden");

        const btn = document.getElementById(`choice-0`);
        btn.textContent = scenario.text;
        btn.onclick = () => showResults();
    }
    else {
        document.getElementById("choice-0").classList.add("hidden");
        document.getElementById("choice-1").classList.add("hidden");
        rating();
    }

    document.getElementById("outcome").classList.add("hidden");
    document.getElementById("next-scenario").classList.add("hidden");
}

function showOutcome(outcomeText, choiceType) {
    document.getElementById("outcome").textContent = outcomeText;
    document.getElementById("outcome").classList.remove("hidden");
    if (currentScenarioIndex != scenarios.length - 3) {
        document.getElementById("next-scenario").classList.remove("hidden");
    }
    else {
        document.getElementById("finish").classList.remove("hidden");
    }
    document.getElementById("choice-0").disabled = true;
    document.getElementById("choice-1").disabled = true;

    if (choiceType === "good") {
        goodChoices++;
    }
    else if (choiceType === "harmful") {
        harmfulChoices++;
    }
    sessionStorage.setItem("goodChoices", goodChoices);
    sessionStorage.setItem("harmfulChoices", harmfulChoices);

    if (currentScenarioIndex != scenarios.length - 1) {
        currentScenarioIndex = (currentScenarioIndex + 1);
    }
    sessionStorage.setItem("currentScenarioIndex", currentScenarioIndex);
}

function showResults() {
    if (currentScenarioIndex != scenarios.length - 1) {
        currentScenarioIndex = (currentScenarioIndex + 1);
    }

    sessionStorage.setItem("currentScenarioIndex", currentScenarioIndex);

    loadScenario(currentScenarioIndex);
}

function rating() {
    rate = "";

    if (goodChoices == 8) {
        rate = `Congrats! You made all the right choices to conserve the whales. Score: ${goodChoices}/${goodChoices + harmfulChoices}`;
    }
    else if (goodChoices > 4) {
        rate = `You did pretty good! You made most of the right choices for the whales. Score: ${goodChoices}/${goodChoices + harmfulChoices}`;
    }
    else if (goodChoices > 1) {
        rate = `Your decision making could use some work! You only made some of the right choices for the whales. Score: ${goodChoices}/${goodChoices + harmfulChoices}`;
    }
    else if (goodChoices == 1) {
        rate = `You only made one right choice for the whales! Do you even care about them? Score: ${goodChoices}/${goodChoices + harmfulChoices}`;
    }
    else {
        rate = "You made 0 right choices. I think you hate whales...";
    }

    document.getElementById("scenario-description").textContent = rate;
}

function start() {
    document.getElementById("scenario-title").classList.remove("hidden");
    document.getElementById("scenario-description").classList.remove("hidden")
    document.getElementById("restart").classList.remove("hidden");
    document.getElementById("choice-0").classList.remove("hidden");
    document.getElementById("choice-1").classList.remove("hidden");

    document.getElementById("start").classList.add("hidden");

    currentScenarioIndex = (currentScenarioIndex + 1);
    sessionStorage.setItem("currentScenarioIndex", currentScenarioIndex);
    loadScenario(currentScenarioIndex);
}

document.getElementById("next-scenario").onclick = () => {
    //if (currentScenarioIndex != scenarios.length - 1) {
    //    currentScenarioIndex = (currentScenarioIndex + 1);
    //}
    //sessionStorage.setItem("currentScenarioIndex", currentScenarioIndex);

    loadScenario(currentScenarioIndex);
    document.getElementById("choice-0").disabled = false;
    document.getElementById("choice-1").disabled = false;
};

document.getElementById("finish").onclick = () => {
    loadScenario(currentScenarioIndex);
    document.getElementById("finish").classList.add("hidden");
    document.getElementById("choice-0").disabled = false;
}

function resetProgress() {
    sessionStorage.removeItem("currentScenarioIndex");
    sessionStorage.removeItem("goodChoices");
    sessionStorage.removeItem("harmfulChoices");
    document.getElementById("choice-0").classList.remove("hidden");
    document.getElementById("choice-1").classList.remove("hidden");
    currentScenarioIndex = 0;
    goodChoices = 0;
    harmfulChoices = 0;
    loadScenario(currentScenarioIndex);
}  

window.onload = () => {
    const savedIndex = sessionStorage.getItem("currentScenarioIndex");
    currentScenarioIndex = savedIndex ? parseInt(savedIndex) : 0;
    loadScenario(currentScenarioIndex);
}