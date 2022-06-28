var elModalOpenButton = document.querySelector(".js-modal-open-button");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal-show");
})


var elModalCloseButton = document.querySelector(".js-close-modal-icon");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal-show");
})