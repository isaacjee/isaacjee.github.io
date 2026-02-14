const container = document.getElementById("container");

let scaleAmount = 1;

// --------------------
// PAGE 1
// --------------------
function showPage1() {
    container.innerHTML = `
        <h1>Hey you!</h1>
        <button id="next1">Yeah</button>
    `;

    document.getElementById("next1")
        .addEventListener("click", showPage2);
}

// --------------------
// PAGE 2
// --------------------
function showPage2() {
    container.innerHTML = `
        <h1>I have a question...</h1>
        <button id="next2">Continue</button>
    `;

    document.getElementById("next2")
        .addEventListener("click", showPage3);
}

// --------------------
// PAGE 3 (Valentine)
// --------------------
function showPage3() {
    container.innerHTML = `
        <h1>Angle, Will You Be My Valentine?</h1>
        <div class="button-group">
            <button id="btn1">Yes</button>
            <button id="btn2">No</button>
        </div>
        <p id="output"></p>
    `;

    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const output = document.getElementById("output");
    const heading = document.querySelector("h1");
    const buttonGroup = document.querySelector(".button-group");

    btn1.addEventListener("click", () => {
        heading.style.display = "none";
        buttonGroup.style.display = "none";
        output.innerHTML = `
            WOOOOOO!!! <br>
            Be ready after worship practice for a fun date at the Legion of Honor! <br>
            - Potato
        `;

        setInterval(createHeart, 300);
    });

    btn2.addEventListener("click", () => {
        scaleAmount += 0.2;
        btn1.style.transform = `scale(${scaleAmount})`;
    });
}

// --------------------
// HEARTS
// --------------------
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "😗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start on page 1
showPage1();
