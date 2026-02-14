const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const output = document.getElementById("output");
const heading = document.querySelector("h1");
const buttonGroup = document.querySelector(".button-group");

let scaleAmount = 1;

btn1.addEventListener("click", () => {
    heading.style.display = "none";
    buttonGroup.style.display = "none";
    output.textContent = "WOOOOOO!!! \n Be ready after worship practice for a fun date at the Legion of Honor! \n - Potato";

    // Spawn hearts continuously
    setInterval(createHeart, 300);
});

btn2.addEventListener("click", () => {
    scaleAmount += 0.2;
    btn1.style.transform = `scale(${scaleAmount})`;
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "😗";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random fall duration
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

