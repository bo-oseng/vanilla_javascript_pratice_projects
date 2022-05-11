const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');


// Get data from localstorage and populate UI
const populateUI = (() => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length !== 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            } 
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex  !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

});
populateUI();

let ticketPrice = +movieSelect.value;


// Save selected movie index and price
const setMovieData = ((movieIndex) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
})


// Update total and count
const updateSelectCount = (() => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice;
});





// Movie select event
movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value;
    setMovieData(event.target.selectedIndex);
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


// Initial count and total
const initialCountAndTotal = (() => updateSelectCount());
initialCountAndTotal();
