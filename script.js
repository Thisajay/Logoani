var logo = document.getElementById('myImg');
var imgModel = document.getElementById('imgModel');
var close = document.getElementById('close');
var image = document.getElementById('img');
var dis = document.getElementById('discription');

logo.addEventListener('click', () => {
    imgModel.style.display = 'block';
    dis.innerHTML = 'Our Services';
    image.src = 'image1.jpg';
});

close.addEventListener('click', () => {
    imgModel.style.display = 'none';
});