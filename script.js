const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

colorBtn.addEventListener('click', changeColor);

colors = ['red','white','blue'];

function changeColor() {
  let random = Math.floor(Math.random()*colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}