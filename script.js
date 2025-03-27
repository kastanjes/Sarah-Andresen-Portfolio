function toggleContact() {
    const contact = document.getElementById("contact-info");
    const arrow = document.getElementById("arrow");
  
    contact.classList.toggle("show");
    arrow.classList.toggle("rotate");
  }
  