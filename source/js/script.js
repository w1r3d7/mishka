var nav = document.querySelector(".page-header__nav-wrap");
var navButton = document.querySelector(".page-header__toggle");

nav.classList.remove("page-header__nav-wrap--no-js");

navButton.addEventListener ("click", function(){
  if (nav.classList.contains("page-header__nav-wrap--close")){
    nav.classList.remove("page-header__nav-wrap--close")
  } else {
    nav.classList.add("page-header__nav-wrap--close");
  }
})
