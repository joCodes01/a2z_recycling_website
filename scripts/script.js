// set the cards to yellow when mouse moves over them
const cards = document.querySelectorAll(".card-home");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("card-active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("card-active");
  });
});

// Get the elements from the nav menu

const navInfo = document.querySelectorAll(".nav-info");
const howTo = document.getElementById("howTo");
const learnMore = document.getElementById("learnMore");
const navDropDown = document.getElementById("dd");

const hamburger = document.getElementById("hamburger");
const hbDropdown = document.getElementById("hamburger-dropdown");
//togggle the dropdown menu

navInfo.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentDropDown = nav.nextElementSibling;

    // Close all other dropdowns
    navInfo.forEach((otherNav) => {
      const otherDropDown = otherNav.nextElementSibling;

      if (otherDropDown !== currentDropDown) {
        otherDropDown.classList.add("hidden");
      }
    });

    // toggle the dropdown
    currentDropDown.classList.toggle("hidden");
  });
});

// click away to close the dropdown
document.addEventListener("click", (e) => {
  navInfo.forEach((nav) => {
    const dropDown = nav.nextElementSibling;

    if (!nav.contains(e.target) && !dropDown.contains(e.target)) {
      dropDown.classList.add("hidden");
    }
  });
});

hamburger.addEventListener("click", () => {
  hbDropdown.classList.toggle("hidden");
});
