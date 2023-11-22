let items = document.querySelector(".inputs");

items.addEventListener("input", (event) => {
    let ele = event.target;
    let nextEle = ele.nextElementSibling;

    if(isNaN(ele.value)){
        ele.value = "";
        return;
    }

    if(ele.value != ""){
        nextEle.focus();
    }

});

items.addEventListener("keyup", (event) => {
    let ele = event.target;
    console.log(event);

    if(ele.value && !isNaN(ele.value) && event.key.toLowerCase() == "enter"){
        let next = ele.nextElementSibling;
        if(next){
            next.focus();
        }
    }
});


items.addEventListener("keyup", (event) => {
    let ele = event.target;
    let key = event.key.toLowerCase();

    if(key == "backspace" || key == "delete"){
        ele.value = "";
        let prev = ele.previousElementSibling.focus();
        if(prev)
            prev.focus();
    }
});