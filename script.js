const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', 'blue', 'purple', 'pink', 'black', 'grey', 'orange', 'white', 'brown'];


colorBtn.addEventListener('click', changeColor);

//função que seleciona uma cor aleatoriamente da array 'colors'
function changeColor(){
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}