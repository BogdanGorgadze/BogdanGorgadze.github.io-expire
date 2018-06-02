let car = document.querySelector('#car');
let run = 400;
function move(){
    if(window.pageYOffset > 1500){
        car.style.position = 'absolute';
        car.style.right = run + 'px';
        run = run + 3;
    }
    if(run >= 1500){
        car.style.right = '400px';
        clearInterval(int);
    }
}
let int = setInterval(move,4);
window.addEventListener('scroll',move);
