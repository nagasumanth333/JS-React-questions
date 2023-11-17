
// 1. Debouncing

let btn = document.querySelector(".btn");
let count = document.querySelector(".count");
let dCount = document.querySelector(".d-count");

let pressedCount1 = 0;
let debouncedCount1 = 0;

function myDebounce(cb, delay){
    let timer;

    return function(...args){
        if(timer)
            clearTimeout(timer);
        let context = this;
        timer = setTimeout(() => {
            cb.call(context, ...args);
        }, delay);
    }
}

let debounced = myDebounce(() => {
    ++debouncedCount;
}, 500);


btn.addEventListener("click", () => {

    ++pressedCount;
    count.innerHTML = pressedCount1;
    debounced();

    dCount.innerHTML = debouncedCount1;

});


// 2. Throttling


// let btn = document.querySelector(".btn");
// let count = document.querySelector(".count");
// let dCount = document.querySelector(".d-count");

let pressedCount = 0;
let debouncedCount = 0;

function myThrottle(cb, delay){
    let last = new Date().getTime();

    return function(...args){
        let now = new Date().getTime();
        if(now - last < delay)
            return;
        last = now;
        cb(...args);
    }
}


let throttle = myThrottle(() => {
        ++debouncedCount;
    }, 500);


btn.addEventListener("click", () => {

        ++pressedCount;
        count.innerHTML = pressedCount;
        throttle();
    
        dCount.innerHTML = debouncedCount;
    
    });
