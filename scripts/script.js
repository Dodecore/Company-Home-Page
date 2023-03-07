window.onscroll = function () {
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

//rende le icone nere quando si passa sopra il mouse e le rende di nuovo bianche quando si toglie il mouse 
//le icone sono in un div con id icon-container
const icon_container = document.getElementById('icon-container');
const icon = container.querySelector('i');

container.addEventListener('mouseenter', () => {
  icon.style.color = 'black';
});

container.addEventListener('mouseleave', () => {
  icon.style.color = '';
});

