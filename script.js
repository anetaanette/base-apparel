const submitBtn = document.querySelector(".background__arrow");
const email = document.querySelector(".email__box");
const emailBorder = document.querySelector(".input-email");

// regEx for email verification
const regEx =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
  submitBtn.addEventListener("click", errorPop);

  function errorPop() {
      emailBorder.style.border = "1.8px solid var(--soft-red)";
      if (email.value === "" || !regEx.test(email.value)) {
          let errorIcon = document.querySelector(".error");
          let errorMsg = document.querySelector(".error_message");

          // display the message when email is invalid
          errorIcon.style.display = "block";
          errorMsg.style.display = "block";
      }
  }

emailBorder.addEventListener("click", deleteValue);

  function deleteValue() {
      emailBorder.value = "";
  }



 /* email.addEventListener("keydown", errorFade);

function errorFade(){
    let errorIcon = document.querySelector(".error");
    let errorMsg = document.querySelector(".error-message");

    //show the error message on the screen if the email is invalid
    errorIcon.style.display = "none";
    errorMsg.style.display = "none";

}
*/