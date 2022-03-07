let user = {
email: document.querySelector(".input-email"),
button: document.querySelector(".button").addEventListener("click", validEmail)
} 

// regEx for email verification
const regEx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const submitBtn = document.querySelector(".background__arrow");
  const email = document.querySelector(".email__box");

  submitBtn.addEventListener("click", errorPop);

  function errorPop(e) {
      if (email.value === "" || !regEx.test(email.value)) {
        //  let errorIcon = document.querySelector("")
      }
  }
// input onClick border: 1px solid var(--soft-red);