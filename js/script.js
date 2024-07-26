
document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 100)
      navbar.classList.add('navbar-dark');
    else
      navbar.classList.remove('navbar-dark');
  });
}



document.querySelector('.navTrigger').addEventListener('click', function() {
  this.classList.toggle('activenav');
  console.log("Clicked menu");
  document.getElementById('mainListDiv').classList.toggle('show_list');
  document.getElementById('mainListDiv').style.display = 'block';
});


