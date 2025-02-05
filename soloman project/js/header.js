// Handle Search Bar functionality
document.getElementById("search-btn").addEventListener("click", function() {
    const query = document.getElementById("search-bar").value;
    if (query.trim() === "") {
      document.getElementById("search-results").style.display = "none";
      return;
    }
  
    // Simulate search logic (You can replace it with actual API calls)
    const results = [
      "Product 1 - " + query,
      "Product 2 - " + query,
      "Product 3 - " + query,
    ];
  
    const searchResultsDiv = document.getElementById("search-results");
    searchResultsDiv.innerHTML = results.map(result => `<p>${result}</p>`).join('');
    searchResultsDiv.style.display = "block";
  });
  
  // Handle Cart Logic (for demonstration)
  let cartCount = 0;
  document.getElementById("cart").addEventListener("click", function() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
  });
  
  // Close search results if clicking outside
  document.addEventListener("click", function(event) {
    const searchResults = document.getElementById("search-results");
    if (!searchResults.contains(event.target) && event.target !== document.getElementById("search-bar")) {
      searchResults.style.display = "none";
    }
  });
  
  // Hamburger menu toggle for mobile devices
  const hamburger = document.getElementById("hamburger");
  const navbarLinks = document.querySelector('.navbar-links');
  
  // Add event listener for window resizing to handle navbar visibility dynamically
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navbarLinks.classList.remove('active'); // Remove active class for large screens
    }
  });
  
  // Toggle menu visibility when hamburger icon is clicked
  hamburger.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
  });

  document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault();  
    
    
    window.scrollTo({
        top: 0,          
        behavior: 'smooth'   
    });
});


  document.getElementById("shop").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Scroll to the hero section with smooth scroll
    document.getElementById("products").scrollIntoView({
        behavior: 'smooth'  // Enables smooth scrolling
    });
});

document.getElementById("contact").addEventListener("click", function (event) {
  event.preventDefault();
  
  document.getElementById("contacts").scrollIntoView({
    behaviour: 'smooth'
  })
})