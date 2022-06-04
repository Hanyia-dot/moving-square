const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

div.addEventListener('mousedown' , () => {
    div.style.backgroundColor = "#747d8c"
})

div.addEventListener('mousemove' , () => {
    console.log("ruch");
})

div.addEventListener('mouseup' , () => {
    div.style.backgroundColor = "#000"
})