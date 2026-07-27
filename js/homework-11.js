const subscribeForm = document.querySelector(".stock");
const emailInput = document.querySelector("#sub-input");

function formToObject(subscribeForm) {
  return Object.fromEntries(new FormData(subscribeForm));
};

subscribeForm.addEventListener("submit", handleSubmit);

function handleSubmit(page) {
    page.preventDefault();

    const formData = {
        email: emailInput.value
    };

    console.log(formData);
};

const openBtn = document.querySelector("#register-bttn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", () => {
  overlay.classList.add("open");
  modal.classList.add("showed");
})

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
  modal.classList.remove("showed");
})



const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");
const registerForm = document.querySelector(".register-form");
const message = document.getElementById("message");

registerForm.addEventListener("submit", (event) => {
  if (!registerForm.checkValidity()) {
    event.preventDefault();
    message.textContent = "Регистрация не пройдена";
    registerForm.reportValidity();
    return;
  }

  if (password.value !== confirmPassword.value) {
    event.preventDefault();
    message.textContent = "Пароли не совпадают";
    return;
  }

  event.preventDefault();

  const data = formToObject(registerForm);
  const user = { ...data, createdOn: new Date () };
  console.log(user);
  
  modal.classList.remove("showed");
  overlay.classList.remove("open");
});