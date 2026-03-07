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


// Feature 2: handle card tracker section
const allTrack = document.getElementById("allTrack");
console.log(allTrack.innerText);

allTrackCount = 0;


// Function for labels 
let createLabels = (labels) =>{
    console.log(labels);
    if(labels.length == 0){
        return;
    }

    const labelStyle = labels.map(label => {
        let badgeClass = "";
        let badgeIcon = "";

        switch(label.toLowerCase()){
            case "bug":
                badgeIcon = "<i class='fa-solid fa-bug'></i>"
                badgeClass = "badge-error text-red-500 border-2 border-red-400"
                break;
            case "help wanted":
                badgeIcon = "<i class='fa-solid fa-circle'></i>"
                badgeClass = "badge-warning text-yellow-700 border-2 border-yellow-400"
                break;
            case "enhancement":
                badgeIcon = "<i class='fa-solid fa-circle'></i>"
                badgeClass = "badge-success text-green-600 border-2 border-green-400"
                break;
            case "documentation":
                badgeIcon = "<i class='fa-solid fa-file'></i>"
                badgeClass = "badge-accent text-blue-600 border-2 border-blue-400"
                break;
            case "good first issue":
                badgeClass = "badge-primary border-2 border-[#422AD5]"
                break;
            default:
                badgeClass = "badge-neutral"   
        }

        return `<div class="badge badge-soft ${badgeClass} font-semibold">${badgeIcon}${label.toUpperCase()}</div>`;
    })

    return labelStyle.join(" ")
}






// Feature 3: create Card dynamically

const loadCard = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(response => response.json())
        .then(data => displayCard(data.data))
}

loadCard();

const displayCard = (data) => {
    // console.log(data);
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    data.forEach(data => {
        // console.log(data)
        allTrackCount++;
        console.log(allTrackCount)

        // 1. create element/ div
        const div = document.createElement("div");

        // 2. add innnerHTML inside div

        // 2-1. handle border top color on status
        const borderTopColor = data.status == "open" ?  "border-t-green-500" : "border-t-purple-500"

        // 2-2 handle priority badge color 
        let priorityClass = "";
        let priorityTextColor = "";

        if(data.priority.toLowerCase() == "high"){
            priorityClass = "badge-error";
            priorityTextColor = "text-red-500";
        }
        else if(data.priority.toLowerCase() == "medium"){
            priorityClass = "badge-warning"
            priorityTextColor = "text-yellow-700"
        }
        else if(data.priority.toLowerCase() == "low"){
            priorityClass = "badge-neutral"
            priorityTextColor = "text-gray-500"
        }

        // 2-3 handle image icon for open and closed card
        const statusImg = data.status == "open" ? "Open-Status.png" : "Closed-Status.png";


        div.innerHTML = `
        <div class="p-5">
                    <div class="card h-80 w-75 bg-base-100 shadow-lg border-t-4 ${borderTopColor}">
                        <div class="card-body">
                            <div class="flex justify-between items-center">
                                <img src="./assets/${statusImg}" alt="" class="w-6" id="open">
                                <div class="badge badge-soft ${priorityClass} ${priorityTextColor} font-semibold text-sm">${data.priority.toUpperCase()}</div>
                            </div>

                            <div>
                                <h2 class="font-bold text-lg">${data.title}</h2>
                                <p class="text-gray-500 text-sm line-clamp-2">${data.description}</p>
                            </div>

                            <div class="flex flex-wrap gap-2">
                                ${createLabels(data.labels)}
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
    
        allTrack.innerText = allTrackCount;
    })

}



