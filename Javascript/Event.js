function clicked() {
    console.log("Button clicked");
}

window.onload = function () {
    console.log("Document was loaded");

    const firstcontainer = document.getElementById("firstcontainer");

    firstcontainer.addEventListener("click", function () {
        console.log("Clicked on container");
    });

    firstcontainer.addEventListener("mouseover", function () {
        console.log("Mouse was moved over the container");
    });

    firstcontainer.addEventListener("mouseout", function () {
        console.log("Mouse was moved out of the container");
    });

    firstcontainer.addEventListener("mouseup", function () {
        console.log("Mouse button was released");
    });

    firstcontainer.addEventListener("mousedown", function () {
        console.log("Mouse button was pressed");
    });
};