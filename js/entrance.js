let buttonEntrance = document.querySelector('#but');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');


function entrance(){
    modal.style.display = 'flex';
}
close.addEventListener('click',function(event){
    modal.style.display = 'none';
});
window.addEventListener('click',function(event){
   if(event.target == modal){
       modal.style.display = 'none';
   } 
});
buttonEntrance.addEventListener('click',entrance);

let buttonAccount = document.querySelector('#account');
buttonAccount.addEventListener('click',function(event){
let login = document.querySelector('#login').value;
let password = document.querySelector('#password').value;
let error = document.querySelector('.error');
    if(login == '1' && password == '1'){
        document.location.href = 'profile.html'
    }
    else{
        error.style.color = 'red';
    }
})

