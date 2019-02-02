// Your code goes here


// Double Click On Header

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', e => {
    logoHeading.textContent = 'Horror Bus! >:)';
    logoHeading.style.color = 'red';
    logoHeading.style.fontSize = '50px';
})



// Mouseover Image Swap 

const imgSwap = document.querySelector('img');
imgSwap.addEventListener('mouseover', e => {
    imgSwap.setAttribute('src',"https://www.speednik.com/files/2016/10/2016-10-26_07-03-24.jpg");   
    imgSwap.style.height = '300px';
    imgSwap.style.width = '100%';
})


// Mouseleave Image Swap Back With Original Image

imgSwap.addEventListener('mouseleave', e => {
    imgSwap.setAttribute('src', "img/fun-bus.jpg");
})


// Keydown

const body = document.querySelector('body');
body.addEventListener('keydown', e => {
    body.style.backgroundColor = 'darkgray';
})


// Keyup

body.addEventListener('keyup', e => {
    body.style.backgroundColor = 'white';
})




