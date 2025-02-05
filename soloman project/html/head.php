<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shopping Website</title>
  <link rel="stylesheet" href="../css/header.css">
  <link rel="stylesheet" href="../css/body.css">
  <link rel="stylesheet" href="../css/footer.css">

  
</head>
<body>
  <header>
    <nav class="navbar">
      <div class="logo">
        <a href="#">ShopEase</a>
      </div>
      <div class="navbar-links">
        <ul>
          <li id="home" class="nav">Home</li>
          <li class="nav" id="shop">Shop</li>
          <li class="nav"><a href="about.php">About</a></li>
          <li class="nav" id="contact">Contact</li>
        </ul>
      </div>

      <div class="navbar-actions">
        <input type="text" placeholder="Search..." id="search-bar">
        <button id="search-btn">Search</button>
        <div class="cart" id="cart">
          <span class="cart-count" id="cart-count">0</span>
          <img src="cart-icon.png" alt="Cart">
        </div>
      </div>

      <!-- Hamburger icon -->
      <div class="hamburger" id="hamburger">&#9776;</div>
    </nav>
  </header>

  <div id="search-results" class="search-results"></div>
   <!-- Hero Section -->
   <section id="hero" class="hero">
    <div class="hero-content">
      <h1 >Welcome to ShopNow</h1>
      <p >Explore our wide range of products and grab the best deals.</p>
      <a href class="shop-now-btn" id="shop-now">Shop Now</a>
    </div>
  </section>
  <script defer src="../js/header.js"></script>
  <script src="../js/body.js"></script>
</body>
</html>
