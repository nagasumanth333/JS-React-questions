let search = document.querySelector(".search");
let items = document.querySelector(".items");
let selected;
let value;

let data =[
    {
        id: 1,
        value: "abc"
    },
    {
        id: 2,
        value: "ab"
    },
    {
        id: 3,
        value: "a"
    },
    {
        id: 4,
        value: "abcd"
    },
];

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
    // ++debouncedCount;
    
        items.innerHTML = "";
        
        console.log(value);
        // fetch("");

        data.forEach((val) => {
            if(val.value.toLowerCase().includes(value)){
                let item = document.createElement("li");
                item.innerText = `${val.value}`;
                item.classList.add("item");
                items.append(item);
            }
        });

        if(!value)
        items.innerHTML = "";
}, 2000);

search.addEventListener("input", (e) =>{
    value = e.target.value;

    debounced();
});

items.addEventListener("click", (e) => {
    if(e.target.classList.contains("item")){
        // fetch();
     
       
        selected = e.target.innerText;
        console.log(e, selected);
        items.innerHTML = "";
        let item = document.createElement("li");
        item.innerText = `${selected}`;
        item.classList.add("item");
        items.append(item);

    }
});