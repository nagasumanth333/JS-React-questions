let box = document.querySelector(".box-container");
let boxes = document.querySelectorAll(".box");
let q = [], count = 0;

box.addEventListener("click", (event) => {
    let ele = event.target;
    let id = event.target.dataset.id;


    if(q.includes(id))
        return;

        count++;

    q.push(id);
    ele.classList.add("green-box");

    if(count == 7){
        for(let i = 0; i < 7; i++){
            let id = q.shift();
            setTimeout(() => {
                boxes[id - 1].classList.remove("green-box");
                console.log(id);
            }, i*500);
        }
        
    }

    
    
});