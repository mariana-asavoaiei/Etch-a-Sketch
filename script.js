let container = document.querySelector(".container");
// Create the divs dynamically
for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", () => {
        div.classList.add("active");
    })
    container.appendChild(div);
    console.log(div)
}
