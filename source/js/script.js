'use strict';

var nav = document.querySelector(".page-header__nav-wrap");
var navButton = document.querySelector(".page-header__toggle");
var map = document.querySelector(".contacts__map");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".popular-items__button");


nav.classList.remove("page-header__nav-wrap--no-js");
map.classList.remove("contacts__map--no-js");

modalButton.addEventListener ("click", function(evt){
  evt.preventDefault()
  modal.classList.add("modal--active");
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--active')) {
      modal.classList.remove('modal--active');
    }
  }
});

navButton.addEventListener ("click", function(){
  if (nav.classList.contains("page-header__nav-wrap--close")){
    nav.classList.remove("page-header__nav-wrap--close")
  } else {
    nav.classList.add("page-header__nav-wrap--close");
  }
})
