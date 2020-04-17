const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

populateUI();

// Save selected index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

// Update total and count
function updateSelectedCountAndTotal() {
  // 1.Get selected seats
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  // Copy selected seats into an array & Map through that array & Return a new array of indexes
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  //console.log(seatsIndex);

  // Set to LS
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
 
  // 2.Get the length of selected seats
  const selectedSeatsCount = selectedSeats.length;

  // 3.Update count of selected seats
  count.innerText = selectedSeatsCount;

  // 3.Update price of selected seats
  total.innerText = selectedSeatsCount * ticketPrice;
};

// Get data from localstorage and populateUI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  //console.log(selectedSeats);
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
};

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCountAndTotal();
});

// Seat click event
container.addEventListener('click', e => {
  // event working on available seats
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    // Add selected class
    e.target.classList.toggle('selected');
    
    updateSelectedCountAndTotal();
  }
});

// Initial count and total set
updateSelectedCountAndTotal();

