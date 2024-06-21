let hiddenElements = document.getElementsByClassName("hidden");
let viewDiv = document.getElementById("read_more");

viewDiv.addEventListener('click', () => {
    let allHidden = true;
    for (let i = 0; i < hiddenElements.length; i++) {
        if (hiddenElements[i].style.display === "none" || hiddenElements[i].style.display === "") {
            hiddenElements[i].style.display = "block";
            viewDiv.innerText = "View Less";
            viewDiv.style.color = "white";
            allHidden = false;
        } else {
            hiddenElements[i].style.display = "none";
            viewDiv.innerText = "View More";
            viewDiv.style.color = "white";
        }
    }
});


