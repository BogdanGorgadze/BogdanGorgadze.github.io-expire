let chevrolet = document.querySelector('.chevrolet');
let honda = document.querySelector('.honda');
let bmw = document.querySelector('.bmw');
let mazda = document.querySelector('.mazda');
let hyndai = document.querySelector('.hyndai');
let mers = document.querySelector('.mers');
let photo = document.querySelector('#photo')
let title = document.querySelector('.title')
chevrolet.addEventListener('click',function(event){
    photo.src = 'img/Chev.png'
    title.innerText = 'Chevrolet Series'
})
honda.addEventListener('click',function(event){
    photo.src = 'img/honda.jpg'
    title.innerText = 'Honda Series'
})
bmw.addEventListener('click',function(event){
    photo.src = 'img/2.png'
    title.innerText = 'BMW Series'
})
mazda.addEventListener('click',function(event){
    photo.src = 'img/mazd.png'
    title.innerText = 'Mazda Series'
})
hyndai.addEventListener('click',function(event){
    photo.src = 'img/hynd.png'
    title.innerText = 'Hyndai Series'
})
mers.addEventListener('click',function(event){
    photo.src = 'img/mers.jpg'
    title.innerText = 'Mercedes Series'
})
