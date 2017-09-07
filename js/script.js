var buttonWriteUs = document.querySelector(".btn-write-us");
var popUp = document.querySelector(".modal-write-us");
var btnClose = document.querySelector(".modal-close");

var form = popUp.querySelector("form");
var username = popUp.querySelector("[name=username]");
var email = popUp.querySelector("[name=email]");

var allNojs = document.querySelectorAll(".no-js");

for (var i = 0; i < allNojs.length; i++) {
  allNojs[i].classList.remove("no-js");
}

buttonWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUp.classList.add("modal-show");
});

btnClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popUp.classList.remove("modal-show");
  popUp.classList.remove("modal-error");
});
form.addEventListener("submit", function(evt) {
  if (!username.value || !email.value) {
    evt.preventDefault();
    popUp.classList.add("modal-error");
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popUp.classList.contains("modal-show")) {
      popUp.classList.remove("modal-show");
      popUp.classList.remove("modal-error");
    }
  }
});
