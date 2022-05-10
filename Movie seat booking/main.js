const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

let ticketPrice = +movieSelect.value;


// Update total and count
const updateSelectCount = (() => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice;
});


// Movie select event
movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value;
    updateSelectCount();
})


// Seat click event
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('seat') && 
    !event.target.classList.contains('occupied')
    ) {
        event.target.classList.toggle('selected');
        updateSelectCount();
    }
});