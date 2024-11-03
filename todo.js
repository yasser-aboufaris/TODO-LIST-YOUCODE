document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("add-form").style.display = "block";
});

document.getElementById("add-close").addEventListener("click", function () {
    document.getElementById("add-form").style.display = "none";
});

document.getElementById("create-task").addEventListener("click", function () {
    let title = document.getElementById("taskName").value;
    let description = document.getElementById("taskDescription").value;
    let priority = document.getElementById("priority").value.toLowerCase(); // Updated to match priority check
    let taskTime = document.getElementById("taskTime").value;
    let Statue = document.getElementById("Statue").value;

    let taskId = Date.now();

    // Task HTML without specific border color
    let taskHTML = `<div id="${taskId}" class="max-w-xs mx-auto mb-2 mt-1">
                        <div class="bg-white p-3 rounded shadow">
                            <h2 class="text-lg font-bold">${title}</h2>
                            <p class="text-sm">Description: ${description}</p>
                            <p class="text-sm">Time: ${taskTime}</p>
                            <p class="text-sm">Priority: ${priority}</p>
                            <p class="text-sm">Status: ${Statue}</p>
                            <button class="bg-blue-500 text-white py-1 px-3 rounded mt-2 text-sm change">Change</button>
                            <button class="bg-blue-500 text-white py-1 px-3 rounded mt-2 text-sm delete">Delete</button>
                        </div>
                    </div>`;

    
    document.getElementById(Statue).insertAdjacentHTML("afterbegin", taskHTML);

  
    const taskElement = document.getElementById(taskId);

    if (priority === "p1") {
        taskElement.querySelector(".bg-white").style.border = "4px solid red"; 
    } else if (priority === "p2") {
        taskElement.querySelector(".bg-white").style.border = "4px solid orange"; 
    } else if (priority === "p3") {
        taskElement.querySelector(".bg-white").style.border = "4px solid green"; 
    }
function modifyTask(event) {
        const taskId = event.target.closest(".max-w-xs").id;
        const taskContainer = document.getElementById(taskId);
    
        taskContainer.innerHTML += `<div>
            <div class="mb-3">
                <label class="text-sm text-gray-700">Status</label>
                <select id="Statue-2" name="Statue"
                    class="mt-1 w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200">
                    <option value="To-do">TO-DO</option>
                    <option value="Doing">DOING</option>
                    <option value="Done">DONE</option>
                </select>
            </div>
        </div>`;
        let Statue2 = document.getElementById("Statue-2").value;
        let taskHTML = `<div id="${taskId}" class="max-w-xs mx-auto mb-2 mt-1">
        <div class="bg-white p-3 rounded shadow">
            <h2 class="text-lg font-bold">${title}</h2>
            <p class="text-sm">Description: ${description}</p>
            <p class="text-sm">Time: ${taskTime}</p>
            <p class="text-sm">Priority: ${priority}</p>
            <p class="text-sm">Status: ${Statue2}</p>
            <button class="bg-blue-500 text-white py-1 px-3 rounded mt-2 text-sm change">Change</button>
            <button class="bg-blue-500 text-white py-1 px-3 rounded mt-2 text-sm delete">Delete</button>
        </div>
    </div>`;


document.getElementById(Statue).insertAdjacentHTML("afterbegin", taskHTML);


const taskElement = document.getElementById(taskId);


if (priority === "p1") {
taskElement.querySelector(".bg-white").style.border = "4px solid red"; 
} 
else if (priority === "p2") {
taskElement.querySelector(".bg-white").style.border = "4px solid orange";
} 
else if (priority === "p3") {
taskElement.querySelector(".bg-white").style.border = "4px solid green"; 
}
        event.target.closest(".max-w-xs").remove();
    }
    
    
    taskElement.querySelector(".delete").addEventListener("click", deleteTask);
    taskElement.querySelector(".change").addEventListener("click", modifyTask);
});


function deleteTask(event) {
    const taskElement = event.target.closest(".max-w-xs");
    if (taskElement) {
        taskElement.remove();
    }
}

