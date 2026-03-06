// console.log("hello")

// Feature 1: toggle b/w filter buttons
let filterButtons = document.querySelectorAll("#filter-button .btn");
console.log(filterButtons);


// remove active from all button
const remoteActive = () => {
    filterButtons.forEach(btn => {
        btn.classList.remove("active");
    })
}

// active button 
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn);
        remoteActive();
        btn.classList.add("active");

    })
})

