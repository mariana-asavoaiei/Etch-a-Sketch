let container = document.querySelector(".container");
let button = document.querySelector("button");
createGrid(16);
// Create the divs dynamically
function createGrid(sides) {
    for (let i = 0; i < sides ** 2; i++) {
        let div = document.createElement("div");
        let squareSize = 960 / sides;
        div.classList.add("square");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.addEventListener("mouseover", () => {
            // div.classList.add("active");
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);
            let randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            div.style.backgroundColor = randomColor;
        })
        container.appendChild(div);
    }
}

// Add event listener to the button element
button.addEventListener("click", () => {
    let sides =
        Number(prompt("How many squares per/side should the new grid have?"));
    if (sides < 1 || sides > 100) {
        return alert(`Please select a number inbetween 1-100! `);
    }
    container.innerHTML = "";
    createGrid(sides);

})
