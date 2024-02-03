const textareaEl = document.getElementById("textarea");
const totalCharacterEl = document.getElementById("total-counter");
const remainingCharacterEl = document.getElementById("remaining-counter");


textareaEl.addEventListener("keyup", ()=>{
  updateCounter();
});

updateCounter();

function updateCounter(){
  totalCharacterEl.innerText = textareaEl.value.length;
  remainingCharacterEl.innerText = textareaEl.getAttribute("maxLength")- textareaEl.value.length;
}

