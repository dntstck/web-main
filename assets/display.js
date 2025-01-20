document.addEventListener("DOMContentLoaded", function () {
  const navElement = document.getElementById("nav");

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
});
