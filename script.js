console.log("JavaScript loaded correctly");

const image = document.getElementById("special-image");
const buttons = document.querySelectorAll(".boxx");

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const newImageSrc = button.getAttribute("data-image");
        console.log("New Image Source:", newImageSrc);
        image.src = newImageSrc;
    });
});
