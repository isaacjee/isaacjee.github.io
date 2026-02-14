const input = document.getElementById("textInput");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const output = document.getElementById("output");

btn1.addEventListener("click", () => {
    output.textContent = input.value;
});

btn2.addEventListener("click", () => {
    input.value = "";
    output.textContent = "";
});
