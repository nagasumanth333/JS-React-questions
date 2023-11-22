let container = document.querySelector(".container");
let tabs = document.querySelectorAll(".details > div");


container.addEventListener("click", (e) => {
    let selected = e.target.dataset.tab;
    // console.log(selected);

    tabs.forEach(element => {
        element.classList.add("hidden");
    });

    let detailsTab = document.querySelector("." + selected);
    console.log(detailsTab);
    detailsTab.classList.remove("hidden");
});