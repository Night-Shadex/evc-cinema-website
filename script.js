document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});


// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission (example)

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  let valid = true;
  let message = '';
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    valid = false;
    message += 'Please enter a valid email.\n';
  }
  if (!password || password.length < 6) {
    valid = false;
    message += 'Password must be at least 6 characters.\n';
  }
  if (!valid) {
    alert(message);
    return;
  }
  alert('Login successful!');
});

// Signup form validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const role = document.querySelector('input[name="role"]:checked').value;
  let valid = true;
  let message = '';
  if (!username || username.length < 3) {
    valid = false;
    message += 'Username must be at least 3 characters.\n';
  }
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    valid = false;
    message += 'Please enter a valid email.\n';
  }
  if (!password || password.length < 6) {
    valid = false;
    message += 'Password must be at least 6 characters.\n';
  }
  if (role === 'producer') {
    const studioName = document.getElementById('studioName').value.trim();
    const portfolioLink = document.getElementById('portfolioLink').value.trim();
    if (!studioName) {
      valid = false;
      message += 'Studio Name is required for producers.\n';
    }
    if (portfolioLink && !/^https?:\/\//.test(portfolioLink)) {
      valid = false;
      message += 'Portfolio Link must be a valid URL.\n';
    }
  }
  if (!valid) {
    alert(message);
    return;
  }
  alert('Signup successful!');
});

