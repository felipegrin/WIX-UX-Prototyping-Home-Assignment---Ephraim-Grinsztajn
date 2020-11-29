//Drag & Drop element to the stage funcion
data = "";

function preventDefaultBehaviour(event) {
    event.preventDefault();
}

function drag(event) {
    data = event.target.src;
    setTimeout(function () {
        closePanel();
    }, 150);
}

function drop(event) {
    event.preventDefault();
    var newElement = document.createElement("img");
    newElement.src = data;
    stageElement = document.getElementById("stage");
    stageElement.appendChild(newElement);
}