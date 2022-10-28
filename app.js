const navBtn = document.getElementById("navButton");
const navLinks = document.getElementById("navLinks");
const navSocials = document.getElementById("navSocials");
const navContent = document.getElementById("navbarSupportedContent");
let initWindow = window.innerWidth

const firstName = document.getElementById("firstNameInput");
const lastName = document.getElementById("lastNameInput");
const email = document.getElementById("emailInput");
const subject = document.getElementById("subjectInput");
const content = document.getElementById("formContent");
const button = document.getElementById("submitBtn");
const form = document.getElementById("contactForm");
const initFunc = () => {
  emailjs.init("rMq5QqZkeaKQKkDrm");
};

const showNav = () => {
  navLinks.classList.remove("d-none");
  navLinks.classList.add("d-flex");
  navSocials.classList.remove("d-none");
  navSocials.classList.add("d-flex");
  navContent.classList.remove("d-none");
  navContent.classList.add("d-flex");
};

const hideNav = () => {
  navLinks.classList.remove("d-flex");
  navLinks.classList.add("d-none");
  navSocials.classList.remove("d-flex");
  navSocials.classList.add("d-none");
  navContent.classList.remove("d-flex");
  navContent.classList.add("d-none");
};

if (window.innerWidth > 991) {
  showNav();
}

// const onFormSubmit = form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const enteredFirstName = firstName.value;
//   const enteredLastName = lastName.value;
//   const enteredEmail = email.value;
//   const enteredSubject = subject.value;
//   const enteredContent = content.value;
//   emailjs.sendForm("contact_service", "contact_form", this);
// });

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((allLinks) => {
      if (allLinks.href !== window.location.href) {
        link.setAttribute("aria-current", "page");
      } else if (allLinks.getAttribute("aria-current") === "page") {
        allLinks.removeAttribute("aria-current");
      }
    });
  });
});

navBtn.addEventListener("click", () => {
  if (navBtn.className === "navbar-toggler collapsed") {
    hideNav();
  } else {
    showNav();
  }
});

addEventListener("resize", (event) => {
  console.log(window.innerWidth)
  if (window.innerWidth > 991) {
    showNav()
  } else if (window.innerWidth <= 991 && initWindow >=991) {
    hideNav()
  }
  initWindow = window.innerWidth
});
