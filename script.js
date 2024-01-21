const header = document.querySelectorAll("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky",window.scrolly > 120);
});