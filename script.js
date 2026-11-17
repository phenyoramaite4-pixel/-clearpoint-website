// Replace with the company's real business email before sharing the site.
var CONTACT_EMAIL = "hello@your-domain.com";
document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  var f = e.target, s = document.getElementById("s");
  if (!f.name.value.trim() || !f.email.value || !f.email.validity.valid || !f.msg.value.trim()) {
    s.textContent = "Please fill in your name, a valid email and a short description.";
    return;
  }
  var body = "Name: " + f.name.value + "\nEmail: " + f.email.value + "\nNeed: " + f.need.value + "\n\n" + f.msg.value;
  window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Quote request: " + f.need.value) + "&body=" + encodeURIComponent(body);
  s.textContent = "Your email app should open with your request ready to send.";
});
