//////////////////////////////////////////////////////
document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("add-form").style.display = "block";
});

document.getElementById("add-close").addEventListener("click", function () {
    document.getElementById("add-form").style.display = "none";
});
////////////////////////////////////////////////////
let counter = 0;
document.getElementById("create-task").addEventListener("click", function () {
    let title = document.getElementById("taskName").value;
    let description = document.getElementById("taskDescription").value;
    let priority = document.getElementById("priority").value;
    let taskTime = document.getElementById("taskTime").value;
    let Statue = document.getElementById("Statue").value;

    let taskId = Date.now();

    document.getElementById(Statue).innerHTML += `<div id="${taskId}" class="max-w-xs mx-auto mb-2 mt-1">
                                                            <div class="bg-white p-3 rounded shadow">
                                                                <h2 class="text-lg font-bold">${title}</h2>
                                                                <p class="text-sm">Description:${description} </p>
                                                                <p class="text-sm">Time: ${taskTime}</p>
                                                                <p class="text-sm">priority: ${priority}</p>
                                                                <p class="text-sm">Status:${Statue} </p>
                                                                <button class="bg-blue-500 text-white py-1 px-3 rounded mt-2 text-sm change">
                                                                change
                                                                </button>
                                                                <button class="bg-blue-500 text-white py-1 px-3 rounded mt-2 text-sm delete">
                                                                delete
                                                                </button>
                                                            </div>
                                                    </div>`

    document.getElementById(taskId).querySelector(".delete").addEventListener("click", deleteTask);
    document.getElementById(taskId).querySelector(".change").addEventListener("click", modifyTask);


})
///////////////////////////////////////////////////////////////////:



function deleteTask(event) {
    event.target.parentElement.parentElement.remove();
}
////////////////////////////////////////////////////////////////////////
function modifyTask(event) {
    
    document.getElementById(taskId).parentElement.innerHTML += ` <div>
    <div class="mb-3">
    <label class="block text-sm font-medium text-gray-700">Statue</label>
    <select id="Statue" name="Statue"
    class="mt-1 w-full border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200">
    <option value="To-do">TO-DO</option>
    <option value="Doing">DOING</option>
    <option value="Done">DONE</option>
    </select>
    </div>
    </div>`


        event.target.parentElement.parentElement.remove();
}
