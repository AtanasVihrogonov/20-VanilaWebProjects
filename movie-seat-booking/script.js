const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

// Update total and count
function updateSelectedCount() {
  // 1.Get selected seats
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // 2.Get the length of selected seats
  const selectedSeatsCount = selectedSeats.length;

  // 3.Update count of selected seats
  count.innerText = selectedSeatsCount;

  // 3.Update price of selected seats
  total.innerText = selectedSeatsCount * ticketPrice;
};

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  // event working on available seats
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    // Add selected class
    e.target.classList.toggle('selected');
    
    updateSelectedCount();
  }
});
