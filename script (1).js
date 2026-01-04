let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function validateForm() {
  let email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function greetingMessage() {
  let hour = new Date().getHours();
  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  document.getElementById("greeting").innerText =
    greeting + " 👋 Today is " + new Date().toDateString();
}

greetingMessage();

