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



// Feature 2: create Card dynamically

const loadCard = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(response => response.json())
        .then(data => displayCard(data.data))
}

loadCard();

const displayCard = (data) => {
    console.log(data);
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    data.forEach(data => {
        console.log(data)
        // 1. create element/ div
        const div = document.createElement("div");

        // 2. add innnerHTML inside div
        div.innerHTML = `
        <div class="p-5">
                    <div class="card w-[280px] bg-base-100 shadow-lg border-t-4 border-t-green-500 h-full">
                        <div class="card-body space-y-4">
                            <div class="flex justify-between">
                                <img src="./assets/${data.status}-Status.png" alt="" class="w-6">
                                <div class="badge badge-soft badge-error text-red-500 font-semibold">${data.priority}</div>
                            </div>

                            <div>
                                <h2 class="font-bold text-lg">${data.title}</h2>
                                <p class="text-gray-500">${data.description}</p>
                            </div>

                            <div>
                                <div
                                    class="badge badge-soft badge-error text-red-500 border-2 border-red-400 font-semibold">
                                    ${data.labels[0]}</div>
                                <div
                                    class="badge badge-soft badge-warning border-2 border-yellow-400 text-yellow-700 font-semibold">
                                    ${data.labels[1]}</div>
                            </div>

                            <div class="border-t border-gray-300 p-4">
                                <p class="text-gray-500">#${data.id}
                                    by ${data.author}</p>
                                <p class="text-gray-500">${new Date(data.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
        
        
        `

        cardContainer.append(div);
    })

}

displayCard()