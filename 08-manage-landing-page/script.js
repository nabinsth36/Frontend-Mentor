const ctaForm = document.getElementById("cta-form");
const ctaInput = document.getElementById("cta-input");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ctaErrorMsg = document.getElementById("cta-error-msg");

ctaForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (ctaInput.value.match(validRegex))
    // console.log("valid email address");
    alert("You're in! Thanks for joining Manage.");
  //   console.log("invalid email address");
  else ctaErrorMsg.textContent = "Please insert a valid email";
});
