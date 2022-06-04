const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

div.addEventListener('mousedown' , () => {
    console.log("wciśnięte");
})

div.addEventListener('mousemove' , () => {
    console.log("ruch");
})

div.addEventListener('mouseup' , () => {
    console.log("puszczone");
})