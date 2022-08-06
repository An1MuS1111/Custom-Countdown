const inputContainer = document.getElementById('inputContainer')
const countdownForm = document.getElementById('countdownForm')
const dateEl = document.getElementById('date-picker')

//set the date input min with today's date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);


//take values from form input
function updateCountdown(e) {
    e.preventDefault();
    console.log(e);
}

// event listener
countdownForm.addEventListener('submit', updateCountdown);

