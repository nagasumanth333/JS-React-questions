let open = document.getElementById("open-modal");
let modal = document.querySelector(".modal");
let close = document.getElementById("close");


open.addEventListener("click", (event)=>{
    toggleModal(true);
});

close.addEventListener("click", (event)=>{
    toggleModal(false);
});

modal.addEventListener("click", (event) =>{
    if(event.target.className === "modal")
        toggleModal(false);

});

function toggleModal(toggle){
    modal.style.display = toggle ? "block" : "none";
    console.log(modal.classList);
}

