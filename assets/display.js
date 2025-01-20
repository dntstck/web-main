const navElement = document.getElementById('nav');

navElement.addEventListener('mouseover', function() {

  navElement.style.backgroundColor = '#555'; 
});

navElement.addEventListener('mouseout', function() {

  navElement.style.backgroundColor = ''; 
});