const card = document.getElementById('card');

function flipCard(flip = false) {
  if (flip) {
    card.classList.add('flipped');
  } else {
    card.classList.remove('flipped');
  }
}

// Update card number in real-time
document.getElementById('cardNumber').addEventListener('input', function() {
  const cardNumber = this.value || '#### #### #### ####';
  document.getElementById('displayCardNumber').textContent = cardNumber.replace(/(.{4})/g, '$1 ');
});

// Update card holder name in real-time
document.getElementById('cardHolder').addEventListener('input', function() {
  const cardHolder = this.value || 'FULL NAME';
  document.getElementById('displayCardHolder').textContent = cardHolder.toUpperCase();
});

// Update expiration date in real-time
document.getElementById('expMonth').addEventListener('change', function() {
  const year = document.getElementById('expYear').value || 'YY';
  document.getElementById('displayExpiration').textContent = this.value + '/' + year;
});

document.getElementById('expYear').addEventListener('change', function() {
  const month = document.getElementById('expMonth').value || 'MM';
  document.getElementById('displayExpiration').textContent = month + '/' + this.value;
});

// Update CVV in real-time
document.getElementById('cvv').addEventListener('input', function() {
  const cvv = this.value || '###';
  document.getElementById('displayCvv').textContent = cvv;
});
function flipCard(isFlipping = false) {
    const card = document.getElementById("card");
    if (isFlipping) {
      card.classList.add("-flipped");
    } else {
      card.classList.remove("-flipped");
    }
  }
  