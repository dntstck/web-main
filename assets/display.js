document.addEventListener("DOMContentLoaded", function () {
  const navElement = document.getElementById("nav");
  const shieldElement = document.getElementById('shield');

  if (navElement) {
    console.log("nav found");

    navElement.addEventListener("mouseover", function () {
      navElement.style.opacity = "0.8";
      navElement.style.transition = "opacity 0.3s ease";
    });

    navElement.addEventListener("mouseout", function () {
      navElement.style.opacity = "1";
    });
  } else {
    console.log("nav not found");
  }

  if (shieldElement) {
    console.log("shield element found, scripting...")
    shieldElement.addEventListener("mouseover", function () {
      shieldElement.style.opacity = "0.6";
      shieldElement.style.transition = "opacity 0.3s ease";
    });

    shieldElement.addEventListener("mouseout", function () {
      shieldElement.style.opacity = "1";
    });
  }
});
