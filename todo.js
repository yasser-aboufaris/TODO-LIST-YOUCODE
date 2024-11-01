//////////////////////////////////////////////////////
document.getElementById("add-button").addEventListener("click",function () {
    document.getElementById("add-form").style.display="block";
});

document.getElementById("add-close").addEventListener("click",function () {
    document.getElementById("add-form").style.display="none";
});
////////////////////////////////////////////////////

document.getElementById("create-task").addEventListener("click",function(){
    let title = document.getElementById("taskName").value;
    let description = document.getElementById("taskDescription").value;
    let priority = document.getElementById("priority").value;
    let taskTime = document.getElementById("taskTime").value;
    let Statue = document.getElementById("Statue").value;

    
    document.getElementById(Statue).innerHTML += `<div class="max-w-xs mx-auto mb-2 mt-1">
                                                            <div class="bg-white p-3 rounded shadow">
                                                                <h2 class="text-lg font-bold">${title}</h2>
                                                                <p class="text-sm">Description:${description} </p>
                                                                <p class="text-sm">Time: ${taskTime}</p>
                                                                <p class="text-sm">Status:
                                                                <select class="border border-gray-300 rounded">
                                                                    <option>To Do</option>
                                                                    <option>Doing</option>
                                                                    <option>Done</option>
                                                                </select>
                                                                </p>
                                                                <button class="bg-blue-500 text-white py-1 px-3 rounded mt-2 text-sm">
                                                                Mark as Complete
                                                                </button>
                                                            </div>
                                                    </div>`

})
