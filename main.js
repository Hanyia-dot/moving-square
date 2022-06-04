const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drowActive = false ;

div.addEventListener('mousedown' , () => {
    div.style.backgroundColor = "#747d8c"
    drowActive = true ;
})

div.addEventListener('mousemove' , (e) => {
    if (drowActive) {

        divX = e.clientX ;
        divY = e.clientY ;

        div.style.left = `${divX-100}px`;
        div.style.top = `${divY-100}px`;
    }

})

div.addEventListener('mouseup' , () => {
    drowActive = false ;
    div.style.backgroundColor = "#000"
})