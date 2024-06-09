const contactForm = document.getElementById("contact-form");
const loader = document.querySelector(".loader");

loader.style.display = "none";

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loader.style.display = "block";
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      loader.style.display = "none";
      if (response.ok) {
        window.location.href = "/thankyou.html";
      } else {
        return response.json().then(data => {
          if (data.errors) {
            alert(data.errors.map(error => error.message).join(", "));
          } else {
            alert("There was an error submitting the form. Please try again.");
          }
        });
      }
    })
    .catch(error => {
      loader.style.display = "none";
      alert("An error occurred. Please try again.");
      console.error("Error details:", error);
    });
});
