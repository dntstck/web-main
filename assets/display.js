const navElement = document.getElementById('nav');

navElement.addEventListener('mouseover', function() { 
  navElement.style.opacity = '0.8';
  navElement.style.transition = 'opacity 0.3s ease'
});

navElement.addEventListener('mouseout', function() {
   navElement.style.opacity = '1'; 
});