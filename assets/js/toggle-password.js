
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        //reCaptcha not verified
        alert("please verify you are humann!");
        evt.preventDefault();
        return false;
    }
    //captcha verified
    //do the rest of your validations here
});