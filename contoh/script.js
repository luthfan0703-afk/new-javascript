let humberger = document.querySelector('hamberger');
let navBar = document.getElementsByClassName('navBar');

humberger.addEventListener("click", function(){
    navBar.classlist.toggle("active");
})