// Simple alert when form is submitted
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual submit
  alert("Thank you! Your details have been submitted.");
});