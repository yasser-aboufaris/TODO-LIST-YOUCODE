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
    console.log(description)
    console.log(priority)
    console.log(taskTime)
    console.log(Statue)
})