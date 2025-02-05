

// Get the button
let backToTopBtn = document.getElementById("backToTop");

// When the user scrolls down 200px from the top, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// When the user clicks the button, scroll to the top of the document
backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
