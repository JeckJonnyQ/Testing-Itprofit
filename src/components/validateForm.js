export const validateForm = (form) => {
  let isValid = true;

  // Сброс ошибок
  const errorElements = form.querySelectorAll(".error");
  errorElements.forEach((error) => {
    error.classList.add("hidden");
    error.textContent = "";
  });

  // Проверка имени
  const nameInput = form.querySelector(".form__name");
  if (!nameInput.value.trim()) {
    showError(nameInput, "Имя обязательно для заполнения");
    isValid = false;
  }

  // Проверка email
  const emailInput = form.querySelector(".form__email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim()) {
    showError(emailInput, "E-mail обязателен для заполнения");
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Введите корректный адрес электронной почты");
    isValid = false;
  }

  // Проверка телефона
  const phoneInput = form.querySelector(".form__phone");
  if (phoneInput && !phoneInput.value.trim()) {
    showError(phoneInput, "Телефон обязателен для заполнения");
    isValid = false;
  }

  // Проверка сообщения
  const messageInput = form.querySelector(".form__textarea");
  if (!messageInput.value.trim()) {
    showError(messageInput, "Сообщение обязательно для заполнения");
    isValid = false;
  }

  return isValid;
};

const showError = (input, message) => {
  const errorElement = document.getElementById(`${input.name}Error`);
  errorElement.textContent = message;
  errorElement.classList.remove("hidden");
  input.classList.add("error");
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  if (form) {
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const errorElement = document.getElementById(`${input.name}Error`);
        if (errorElement) {
          errorElement.classList.add("hidden");
          errorElement.textContent = "";
          input.classList.remove("error");
        }
      });
    });
  }
});
