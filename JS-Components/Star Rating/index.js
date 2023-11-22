
let container = document.getElementById("container");
let starContainer = document.getElementById("star-container");
let stars = document.querySelectorAll(".star");
let ratingEle = document.getElementById("rating");
let rating = 0;


starContainer.addEventListener("click", (event) =>{
    let clickedValue = event.target.dataset.id;
    console.log(clickedValue);

    if(event.target.matches('span')){

        for(let i = 0; i < rating; i++){
            stars[i].classList.remove("star-active")
        }

        for(let i = 0; i < clickedValue; i++){
            stars[i].classList.add("star-active");
        }

        rating = clickedValue;
        ratingEle.innerText = "Rating : " + clickedValue;
    }

    
});

starContainer.addEventListener("mouseover", (event) =>{

    let hoverValue = event.target.dataset.id;
    if(event.target.matches('span')){

        for(let i = 0; i < 5; i++){
            stars[i].classList.remove("star-active");
        }

        for(let i = 0; i < hoverValue; i++){
            stars[i].classList.add("star-active");
        }
    }

});

starContainer.addEventListener("mouseleave", (event) =>{

        for(let i = 0; i < 5; i++){
            stars[i].classList.remove("star-active");
        }

        for(let i = 0; i < rating; i++){
            stars[i].classList.add("star-active");
        }

});