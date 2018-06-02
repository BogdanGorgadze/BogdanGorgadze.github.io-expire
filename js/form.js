let Top = document.querySelector('.top');
let wr = document.querySelector('.wr');
let input = wr.getElementsByTagName('input');
for(let i = 0; i < input.length; i++){
input[i].addEventListener('click',function(event){
input[i].id = 'inputActive';
});
 window.addEventListener('click',function(event){
if(event.target !== input[i]){
input[i].id = 'input';
}
});
}





