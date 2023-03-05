let mainContainer = document.querySelector('.container');
let thanksContainer = document.querySelector('.container1');

let submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', () =>{
    thanksContainer.classList.remove('hidden');
    mainContainer.style.display = 'none';
})

let numberElement = document.querySelectorAll(".number");
let rating = document.querySelector('#rates')
// console.log(numberElement);
numberElement.forEach( (rate) =>{
    rate.addEventListener('click', () =>{
        console.log(rate.innerHTML);
        rating.innerHTML = rate.innerHTML;
    });
})