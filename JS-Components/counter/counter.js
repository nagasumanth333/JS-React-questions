let addBtn = document.getElementById("add-btn");
let subBtn = document.getElementById("sub-btn");
let resetBtn = document.getElementById("reset");
let counterValue = document.getElementById("counter-value");
let input = document.getElementById("input");

addBtn.addEventListener("click", (event) => {
    console.log(event);
    counterValue.innerText = +counterValue.innerText + +input.value;
});

subBtn.addEventListener("click", (event) => {
    let newValue = +counterValue.innerText - +input.value;
    if(newValue < 0)
        counterValue.innerText = 0;
    else
        counterValue.innerText = newValue;
});

resetBtn.addEventListener("click", () => {
    counterValue.innerText = 0;
})