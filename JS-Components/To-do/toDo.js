let add = document.getElementById("add");
let input = document.getElementById("input");
let items = document.querySelector(".items");

add.addEventListener("click", () => {
    addItem(input.value);
});

function addItem(value){
    let item = document.createElement("div");
    items.append(item);

    let span = document.createElement("span");
    span.innerText = value;
    item.append(span);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = "✅";
    checkBtn.classList.add("mark-btn");
    item.append(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");
    item.append(deleteBtn);

    input.value = "";
}

items.addEventListener("click", (event) => {

    let ele = event.target;
    console.log(event);

    if(ele.classList.contains("mark-btn")){
        // console.log(ele.parentElement.children[0].classList.toggle("marked"));
        ele.parentElement.firstElementChild.classList.toggle("marked");
    }else if(ele.classList.contains("delete-btn")){
        ele.parentElement.remove();
    }
})