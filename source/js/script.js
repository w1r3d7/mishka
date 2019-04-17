var nav = document.querySelector(".page-header__nav");
var navButton = document.querySelector(".page-header__toggle");

nav.classList.remove("page-header__nav--no-js");

navButton.addEventListener ("click", function(){
  if (nav.classList.contains("page-header__nav--close")){
    nav.classList.remove("page-header__nav--close")
  } else {
    nav.classList.add("page-header__nav--close");
  }
})
