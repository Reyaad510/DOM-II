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


// Blur and Focus on entire window page
// Must click off out of page first then click back on the page

function pause() {
    document.body.classList.add('paused');
    log.textContent = 'Focus Lost!';
    
}

function play() {
    document.body.classList.remove('paused');
    log.textContent = 'This document has focus.';
}

const log = document.getElementById('log');
window.addEventListener('blur', pause);
window.addEventListener('focus', play);


// Using Click and using stopPropagation() to stop two alerts from happening when clicking the button in the destination container.

const destinations = document.querySelectorAll('.destination');
destinations.forEach(destination => {
    destination.addEventListener('click', e => {
        alert('I clicked the destination container and not the button!');
    });
})

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        alert('I have been clicked in the button!');
        e.stopPropagation();
    });
})




// Below makes the page from reloading when clicking submit on a form

const formSubmit = document.querySelector('.form-submit');
formSubmit.addEventListener('click', e => {
    e.preventDefault();
})


// Stop Home anchor tag from going off to website using preventDefault();
const anchor = document.querySelector('a');
anchor.addEventListener('click', e => {
    e.preventDefault();
})


