function targetSection(sectionId) {
    // Select all sections with class 'section'
    const sections = document.querySelectorAll(".section");
  
    // Loop through all sections and hide them
    sections.forEach(function(section) {
      section.classList.add("hidden");
    });
  
    // Show the section with the given sectionId
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.remove("hidden");
    }
  }
  
  
// validation
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Form submitted successfully!");
  });
});
