function clicked() {
    console.log("Button clicked");
}

window.onload = function () {
    console.log("Document was loaded");

    let previousHtml=document.querySelectorAll('.container')[0].innerHTML;

    const firstcontainer = document.getElementById("firstcontainer");

    firstcontainer.addEventListener("click", function () {
        document.querySelectorAll('.container')[0].innerHTML ="<b>Button was clicked</b>";
        console.log("Clicked on container");
    });

    firstcontainer.addEventListener("mouseover", function () {
        document.querySelectorAll('.container')[0].innerHTML ="<b>Button was clicked</b>";
        console.log("Mouse was moved over the container");
    });

    firstcontainer.addEventListener("mouseout", function () {
        document.querySelectorAll('.container')[0].innerHTML = previousHtml;
        console.log("Mouse was moved out of the container");
    });

    firstcontainer.addEventListener("mouseup", function () {
        console.log("Mouse button was released");
    });

    firstcontainer.addEventListener("mousedown", function () {
        document.querySelectorAll('.container')[0].innerHTML ="<b>Button was clicked</b>";
        console.log("Mouse button was pressed");
    });
};