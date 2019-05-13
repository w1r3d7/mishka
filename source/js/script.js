var nav = document.querySelector(".page-header__nav-wrap");
var navButton = document.querySelector(".page-header__toggle");
var map = document.querySelector(".contacts__map");

nav.classList.remove("page-header__nav-wrap--no-js");
map.classList.remove("contacts__map--no-js");

navButton.addEventListener ("click", function(){
  if (nav.classList.contains("page-header__nav-wrap--close")){
    nav.classList.remove("page-header__nav-wrap--close")
  } else {
    nav.classList.add("page-header__nav-wrap--close");
  }
})
